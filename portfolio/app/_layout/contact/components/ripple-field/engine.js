// app/_layout/contact/components/ripple-field/engine.js
//
// A small 2D wave simulation. Heights live on a low-resolution grid
// (one cell ≈ `cell` CSS px) and are rendered straight into a canvas of the
// same size; the browser's bilinear upscaling keeps the result soft.
//
// The simulation only runs while there is energy on the surface, so an idle
// footer costs nothing.

const DAMPING = 0.985;
const GAIN = 0.07;
const MAX_LIGHT_ALPHA = 0.22;
const MAX_TINT_ALPHA = 0.3;
const QUIET_FRAMES = 40;
const QUIET_LEVEL = 0.03;

const pack = ([r, g, b]) => (b << 16) | (g << 8) | r;

export class RippleField {
  /**
   * @param {HTMLCanvasElement} canvas
   * @param {{ cell?: number, light: number[], tint: number[] }} options
   */
  constructor(canvas, { cell = 6, light, tint }) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.cell = cell;
    this.light = pack(light);
    this.tint = pack(tint);

    this.w = 0;
    this.h = 0;
    this.running = false;
    this.raf = 0;
    this.quiet = 0;
    this.last = null;

    this.tick = this.tick.bind(this);
  }

  /** Rebuild the grid for a new size in CSS pixels. */
  resize(width, height) {
    const w = Math.max(8, Math.ceil(width / this.cell));
    const h = Math.max(8, Math.ceil(height / this.cell));
    if (w === this.w && h === this.h) return;

    this.w = w;
    this.h = h;
    this.canvas.width = w;
    this.canvas.height = h;
    this.cur = new Float32Array(w * h);
    this.prev = new Float32Array(w * h);
    this.image = this.ctx.createImageData(w, h);
    this.pixels = new Uint32Array(this.image.data.buffer);
  }

  /** Push the surface down around a point (CSS px). */
  disturb(px, py, strength) {
    if (!this.cur) return;
    const { w, h, cur } = this;
    const gx = px / this.cell;
    const gy = py / this.cell;
    const r = 3;

    for (let y = Math.floor(gy - r); y <= Math.ceil(gy + r); y += 1) {
      if (y < 1 || y >= h - 1) continue;
      for (let x = Math.floor(gx - r); x <= Math.ceil(gx + r); x += 1) {
        if (x < 1 || x >= w - 1) continue;
        const d = Math.hypot(x - gx, y - gy);
        if (d >= r) continue;
        const falloff = 1 - d / r;
        cur[y * w + x] -= strength * falloff * falloff;
      }
    }
    this.wake();
  }

  /**
   * Follow the pointer. The stroke is filled in cell by cell so fast movement
   * leaves a continuous wake, and its strength follows the pointer's speed.
   */
  move(px, py) {
    if (!this.last) {
      this.last = { x: px, y: py };
      return;
    }
    const dx = px - this.last.x;
    const dy = py - this.last.y;
    const dist = Math.hypot(dx, dy);
    if (dist < 1) return;

    const steps = Math.max(1, Math.ceil(dist / this.cell));
    const strength = Math.min(Math.max(dist * 0.12, 2), 10);
    for (let i = 1; i <= steps; i += 1) {
      const t = i / steps;
      this.disturb(this.last.x + dx * t, this.last.y + dy * t, strength);
    }
    this.last = { x: px, y: py };
  }

  /** Forget the pointer so re-entering does not draw a long line. */
  release() {
    this.last = null;
  }

  wake() {
    this.quiet = 0;
    if (this.running) return;
    this.running = true;
    this.raf = requestAnimationFrame(this.tick);
  }

  tick() {
    this.step();
    const peak = this.draw();

    this.quiet = peak < QUIET_LEVEL ? this.quiet + 1 : 0;
    if (this.quiet > QUIET_FRAMES) {
      this.running = false;
      this.cur.fill(0);
      this.prev.fill(0);
      this.ctx.clearRect(0, 0, this.w, this.h);
      return;
    }
    this.raf = requestAnimationFrame(this.tick);
  }

  step() {
    const { w, h, cur, prev } = this;
    for (let y = 1; y < h - 1; y += 1) {
      let i = y * w + 1;
      for (let x = 1; x < w - 1; x += 1, i += 1) {
        prev[i] =
          ((cur[i - 1] + cur[i + 1] + cur[i - w] + cur[i + w]) * 0.5 -
            prev[i]) *
          DAMPING;
      }
    }
    this.cur = prev;
    this.prev = cur;
  }

  /** Light the slopes: crests catch the light, troughs take the accent. */
  draw() {
    const { w, h, cur, pixels, light, tint } = this;
    let peak = 0;

    for (let y = 1; y < h - 1; y += 1) {
      let i = y * w + 1;
      for (let x = 1; x < w - 1; x += 1, i += 1) {
        const height = cur[i];
        const abs = height < 0 ? -height : height;
        if (abs > peak) peak = abs;

        const slope = (cur[i + 1] - cur[i - 1] + cur[i + w] - cur[i - w]) * 0.5;
        let alpha;
        let rgb;
        if (slope > 0) {
          alpha = Math.min(1, slope * GAIN) * MAX_LIGHT_ALPHA;
          rgb = light;
        } else {
          alpha = Math.min(1, -slope * GAIN) * MAX_TINT_ALPHA;
          rgb = tint;
        }

        const a = (alpha * 255) | 0;
        pixels[i] = a === 0 ? 0 : (a << 24) | rgb;
      }
    }

    this.ctx.putImageData(this.image, 0, 0);
    return peak;
  }

  destroy() {
    cancelAnimationFrame(this.raf);
    this.running = false;
  }
}
