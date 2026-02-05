# Landing Page Design System Documentation

## Table of Contents

1. [Overview](#overview)
2. [Color Theme & Palette](#color-theme--palette)
3. [Typography](#typography)
4. [Layout Structure](#layout-structure)
5. [Components Deep Dive](#components-deep-dive)
6. [Animation System](#animation-system)
7. [Spatial Alignments & Spacing](#spatial-alignments--spacing)
8. [Interaction Design](#interaction-design)

---

## Overview

This portfolio landing page is designed with a modern, sophisticated aesthetic that emphasizes fluid motion, subtle interactions, and a clean professional appearance. The design leverages Framer Motion for advanced animations, GSAP for precision pointer tracking, and a carefully curated color palette that balances elegance with readability.

**Design Philosophy:**

- Minimalist yet engaging
- Motion-driven storytelling
- Professional with personality
- Performance-optimized animations
- Accessible and responsive

---

## Color Theme & Palette

### Primary Color System

The design utilizes a **HSL-based color system** defined through CSS variables for maximum flexibility and maintainability.

#### Core Colors

```css
Background Colors:
--background: 0 0% 100%        /* Pure white - main canvas */
--foreground: 225 7% 12%        /* Deep charcoal - primary text */

Primary Brand:
--primary: 232 79% 59%          /* Vibrant blue - HSL(232, 79%, 59%) */
--primary-foreground: 231 65% 51%  /* Deeper blue for contrast */
```

**Primary Blue (#5E6AD2)**

- Hex: `#5E6AD2`
- RGB: `rgb(94, 106, 210)`
- HSL: `hsl(232, 79%, 59%)`
- Usage: CTAs, accents, interactive elements, focus states
- Conveys: Trust, professionalism, innovation

#### Neutral Palette

```css
Secondary (Gray Scale):
--secondary: 210 5% 85.9%       /* Light gray backgrounds */
--secondary-foreground: 192 3% 61%  /* Medium gray */

Muted Tones:
--muted: 210 5% 95.9%           /* Subtle backgrounds - #F4F5F5 */
--muted-foreground: 240 3.8% 46.1%  /* Subdued text - #727381 */

Borders & Inputs:
--border: 192 3% 90%            /* Delicate borders - #E3E5E6 */
--input: 192 3% 90%             /* Form field borders */
```

#### Semantic Colors

```css
Accent:
--accent: 210 5% 95.9%          /* Hover states, highlights */
--accent-foreground: 192 3% 61%

Destructive (Error):
--destructive: 0 84.2% 60.2%    /* Red for errors */
--destructive-foreground: 0 0% 98%

Interactive:
--ring: 232 79% 59%             /* Focus ring - matches primary */
```

### Color Psychology & Usage

1. **White Background** (`hsl(0 0% 100%)`)
   - Clean, spacious, modern
   - Provides maximum contrast for text
   - Creates breathing room

2. **Charcoal Foreground** (`hsl(225 7% 12%)`)
   - Softer than pure black (#000000)
   - Reduces eye strain
   - Professional tone

3. **Blue Accent** (`hsl(232 79% 59%)`)
   - Technology and trust
   - High saturation (79%) for energy
   - Medium lightness (59%) for versatility

4. **Gray Neutrals**
   - Low saturation (3-5%) prevents muddiness
   - Subtle warmth through blue undertones
   - Creates visual hierarchy without harshness

### Contextual Application

**Hero Section:**

- Background: `secondary-foreground` (dark gray)
- Text: `background` (white) for high contrast
- Accent overlays with primary blue

**Content Sections:**

- Background: `background` (white) or `muted` (light gray)
- Text: `foreground` (charcoal)
- Borders: `border` (subtle gray)

**Footer:**

- Background: `foreground` (inverted - dark)
- Text: `background` (white)
- Creates bookend effect with hero

---

## Typography

### Font Family

**Neue Montreal**

- Source: Local font file (`neue-montreal`)
- Format: WOFF2 (optimized for web)
- Fallback Stack: `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

```javascript
font-family: 'Neue Montreal', var(--font-neue-montreal)
```

**Characteristics:**

- Geometric sans-serif
- Clean, modern letterforms
- Excellent readability at all sizes
- Professional yet approachable
- Strong x-height for digital displays

### Font Loading Strategy

```javascript
import localFont from 'next/font/local';

export const neue_montreal = localFont({
  src: './regular/index.woff2',
  weight: 'normal',
  style: 'normal',
  variable: '--font-neue-montreal',
  display: 'swap', // FOIT prevention
});
```

- **Display Strategy:** `swap` - Shows fallback immediately, swaps when loaded
- **Benefits:** Faster perceived load time, no invisible text

### Type Scale & Hierarchy

#### Headings

**Hero Title (H1)**

```css
font-size: max(9em, 15vw)  /* Responsive between 144px and viewport-based */
font-weight: normal
line-height: 1.1
letter-spacing: tight
```

- Oversized for impact
- Viewport-based for responsiveness
- Minimal line-height for density

**Section Titles (H4)**

```css
font-size: clamp(1.5em, 2.2vw, 3em)  /* 24px → 48px fluid */
line-height: 1.45
font-weight: 700
```

- Fluid scaling with `clamp()`
- Maintains proportion across devices

**Sub-Headings (H3)**

```css
font-size: clamp(1.1rem, 1.35vw, 1.4rem)  /* 17.6px → 22.4px */
line-height: 1.7
color: muted-foreground
```

#### Body Text

**Primary Body**

```css
font-size: 1rem (16px)
line-height: 1.6
color: foreground
```

**Secondary Body**

```css
font-size: 0.9rem (14.4px)
line-height: 1.5
color: muted-foreground
```

### Responsive Typography

**Fluid Type System:**

```css
/* Formula: clamp(MIN, PREFERRED, MAX) */

Hero Subtitle:
clamp(1.55em, 2.5vw, 2.75em)

Description Text:
clamp(1.5em, 2.2vw, 3em)

Contact Title:
clamp(3rem, 7vw, 5.5rem)
```

**Benefits:**

- Smooth scaling across all viewport sizes
- No breakpoint-specific overrides needed
- Maintains visual hierarchy at any size

### Text Rendering Optimization

```css
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-rendering: optimizeLegibility;
```

---

## Layout Structure

### Container System

**Max-Width Container:**

```css
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (min-width: 1536px) {
    max-width: 1400px; /* Constrains ultra-wide displays */
  }
}
```

### Responsive Grid

**Breakpoint System:**

```javascript
breakpoints: {
  xs: '320px',   // Mobile small
  sm: '640px',   // Mobile large
  md: '768px',   // Tablet
  lg: '1024px',  // Desktop
  xl: '1280px',  // Large desktop
  '2xl': '1536px' // Extra large
}
```

### Page Sections

1. **Navbar** - Fixed positioning, absolute top
2. **Header/Hero** - Full viewport height (`h-screen`)
3. **Description** - Flexible content area
4. **Thumbnail Gallery** - Hover-activated preview
5. **Project Carousel** - Multi-row scrolling
6. **Contact/Footer** - Parallax reveal

---

## Components Deep Dive

### 1. Moving Heading (Hero Section)

**File:** `app/_layout/header/index.jsx`

#### Design Concept

An infinitely scrolling text animation that creates dynamic movement and visual interest in the hero section.

#### Implementation Details

```jsx
<ParallaxSlider repeat={4} baseVelocity={2}>
  <span className='pe-12'>
    Gautam Prabhu
    <span className='spacer'>—</span>
  </span>
</ParallaxSlider>
```

**Typography Specs:**

- Font Size: `max(9em, 15vw)` - Massive, responsive scaling
- Repeats: 4 times to create seamless loop
- Base Velocity: 2 (pixels per frame)

**Animation Mechanics:**

- Uses Framer Motion's `useVelocity` and `useSpring`
- Smooth, physics-based scrolling
- Direction: Left to right
- Speed: Constant 2px/frame with parallax effect

**Visual Effects:**

```css
text-transform: uppercase (implied)
padding-right: 3rem (pe-12)
color: background (white text)
backdrop: Dark gray overlay on image
```

**Spacer Character:** Em dash (`—`) creates visual separation between repeats

#### Parallax Slider Hook

```javascript
export function useParallaxSlider(baseVelocity) {
  const x = useMotionValue(0);
  const velocity = useVelocity(x);
  const smoothVelocity = useSpring(velocity, {
    damping: 50,
    stiffness: 400,
  });

  // Continuous transform based on velocity
  return useTransform(smoothVelocity, [0, 1000], [0, -1000]);
}
```

### 2. Hero Section with Background Image

**File:** `app/_layout/header/index.jsx`

#### Design Elements

**Full-Screen Image Background:**

```jsx
<Image
  src='/images/hero-profile.png'
  className='object-cover'
  fill={true}
  sizes='100vw'
  priority // Loads immediately
/>
```

**Overlay Structure:**

```css
background: rgba(0, 0, 0, 0.4) (implied dark overlay)
height: 100vh
overflow: hidden
position: relative
```

**Content Positioning:**

- Flex column with `justify-end`
- Bottom-aligned content on mobile
- Reverse column on desktop (`md:flex-col-reverse`)

**Subtitle Area:**

```jsx
<h4 className='text-[clamp(1.55em,2.5vw,2.75em)]'>
  <span>Aspiring Software Developer</span>
  <span>Full-Stack | Backend | Systems</span>
</h4>
```

**Decorative Icon:**

```jsx
<MoveDownRight size={28} strokeWidth={1.25} color='gray-900' />
```

- Position: Above subtitle
- Purpose: Visual cue for scroll direction

#### Slide-Up Animation

```javascript
export const slideUp = {
  initial: { y: 300 },
  enter: {
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1], // Custom cubic-bezier
      delay: 2.5, // After preloader
    },
  },
};
```

**Easing Breakdown:**

- `[0.33, 1, 0.68, 1]` - Smooth ease-out
- Starts fast, slows gradually
- Professional, polished feel

### 3. On-Hover Image Display (Thumbnail Gallery)

**File:** `app/_layout/thumbnail/index.jsx`

#### Interaction Flow

1. **Initial State:** Images hidden, cursor normal
2. **Pointer Enter:** Modal scales up, cursor changes
3. **Pointer Move:** Modal follows cursor with GSAP smoothing
4. **Pointer Leave:** Modal scales down, returns to initial

#### Modal Component

```jsx
<ThumbnailModal ref={modal} variants={scaleUp} active={active} index={index} />
```

**Scale Animation Variants:**

```javascript
export const scaleUp = {
  initial: {
    scale: 0,
    x: '-50%',
    y: '-50%',
  },
  enter: {
    scale: 1,
    x: '-50%',
    y: '-50%',
    transition: {
      duration: 0.4,
      ease: [0.76, 0, 0.24, 1], // Smooth ease-in-out
    },
  },
  closed: {
    scale: 0,
    transition: {
      duration: 0.4,
      ease: [0.32, 0, 0.67, 0], // Quick snap back
    },
  },
};
```

#### GSAP Cursor Tracking

```javascript
// Modal follows cursor with lag
xMoveModal = gsap.quickTo(modal.current, 'left', {
  duration: 0.8,
  ease: 'power3',
});

// Cursor circle follows more closely
xMoveCursor = gsap.quickTo(cursor.current, 'left', {
  duration: 0.5,
  ease: 'power3',
});

// Label follows most closely
xMoveLabel = gsap.quickTo(label.current, 'left', {
  duration: 0.45,
  ease: 'power3',
});
```

**Layered Movement:**

- Modal: 0.8s delay (smooth, floaty)
- Cursor: 0.5s delay (responsive)
- Label: 0.45s delay (immediate)

Creates **depth and sophistication**

#### Cursor Elements

**Circle Cursor:**

```css
width: 80px
height: 80px
border-radius: 50%
background: primary blue
mix-blend-mode: difference (inverts underlying colors)
pointer-events: none
```

**View Label:**

```css
font-size: 14px
font-weight: 600
color: white
padding: 8px 16px
background: transparent
```

**Modal Window:**

```css
width: 320px (80 * 4)
height: 320px
border-radius: 8px
overflow: hidden
background: secondary-foreground
position: fixed
```

**Image Switching:**

```javascript
<div
  style={{
    top: `${index * -100}%`,
    transition: 'top 0.5s cubic-bezier(0.76, 0, 0.24, 1)',
  }}
>
  {images}
</div>
```

- Vertical stack of images
- Transitions by shifting `top` property
- Smooth 0.5s transition

### 4. Project Carousel

**File:** `app/_layout/project/index.jsx`

#### Multi-Row Scroll System

**Four Independent Rows:**

```jsx
Row 1: transformX1 (left scroll)
Row 2: transformX2 (right scroll)
Row 3: transformX1 (left scroll)
Row 4: transformX2 (right scroll)
```

**Scroll-Based Animation:**

```javascript
export function useProjectSlider(element) {
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start end', 'end start'],
  });

  const transformX1 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -250], // Moves left 250px
  );

  const transformX2 = useTransform(
    scrollYProgress,
    [0, 1],
    [-250, 0], // Moves right 250px
  );
}
```

**Visual Effect:**

- Creates **parallax horizontal motion**
- Alternating directions add dynamism
- Tied to vertical scroll position

#### Row Styling

```css
.row {
  display: flex
  gap: 2.5rem (gap-10)
  width: 120vw (extends beyond viewport)
  margin-bottom: 2.5rem
  overflow: hidden (on parent)
}
```

**Curved Bottom Divider:**

```javascript
<motion.div
  style={{
    height: transformY,
    borderRadius: '0 0 50% 50%',
  }}
/>
```

- Animates from 250px to 0
- Creates smooth reveal effect
- 50% border radius for organic curve

### 5. Footer (Contact Section)

**File:** `app/_layout/contact/index.jsx`

#### Parallax Reveal Effect

```javascript
export function useContactSlider(containerRef) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  const transformY = useTransform(
    scrollYProgress,
    [0, 1],
    [100, 0], // Slides up from 100px offset
  );

  const transformX = useTransform(
    scrollYProgress,
    [0, 1],
    [200, 0], // CTA button slides from right
  );
}
```

**Inverted Color Scheme:**

```css
background: foreground (dark charcoal)
color: background (white)
max-height: 100vh
```

#### User Details Component

**Profile Section:**

```jsx
<div className='flex items-center gap-8'>
  <ImageWrapper>
    <Image src='/images/contact-profile.png' className='rounded-full' />
  </ImageWrapper>
  <MainTitle>Let's connect</MainTitle>
</div>
```

**Animated CTA Button:**

```jsx
<motion.div style={{ x: transformX }}>
  <MagneticButton variant='primary'>Get in touch</MagneticButton>
</motion.div>
```

- Slides in from right as user scrolls
- Magnetic hover effect
- Primary blue background

**Contact Methods:**

```jsx
<MagneticButton variant='outline'>
  gautamprabhumit@gmail.com
</MagneticButton>

<MagneticButton variant='outline'>
  +91 80738 70925
</MagneticButton>
```

**Horizontal Divider:**

```css
height: 1px
background: muted-foreground
width: 100%
position: relative
```

- CTA button positioned absolutely on divider
- Creates visual anchor point

---

## Animation System

### Framer Motion Architecture

**Core Animation Patterns:**

1. **Variants Pattern**
2. **useTransform Pattern**
3. **useScroll Pattern**
4. **useSpring Pattern**

### 1. Entrance Animations

#### Slide Up (Hero)

```javascript
variants = { slideUp };
initial = 'initial';
animate = 'enter';
```

**Timing:**

- Delay: 2.5s (after preloader)
- Duration: 0.6s
- Easing: `cubic-bezier(0.33, 1, 0.68, 1)`

#### Reveal (Text)

```javascript
const reveal = {
  initial: { y: '100%' },
  open: i => ({
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.03 * i, // Stagger effect
      ease: [0.33, 1, 0.68, 1],
    },
  }),
};
```

**Word-by-Word Reveal:**

- Each word wrapped in span
- Overflow hidden on parent
- Words slide up from 100% to 0
- 30ms delay between each word

#### Fade In (Content)

```javascript
const fadeIn = {
  initial: { opacity: 0, y: 30 },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};
```

### 2. Scroll-Based Animations

#### Parallax Scrolling

**Horizontal Carousel:**

```javascript
const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ['start end', 'end start'],
});

const x = useTransform(scrollYProgress, [0, 1], [0, -250]);
```

**Vertical Footer Reveal:**

```javascript
const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
```

#### Viewport Triggers

```jsx
<motion.div
  initial='initial'
  whileInView='open'
  viewport={{ once: true }}
>
```

**Benefits:**

- Animation triggers when in viewport
- `once: true` prevents re-animation on scroll up
- Improves performance

### 3. Hover Animations

#### Scale Effect

```jsx
<motion.div
  whileHover={{ scale: 1.1 }}
  transition={{ duration: 0.3 }}
>
```

**Common Scale Values:**

- Button: 1.1 (10% larger)
- Card: 1.02 (subtle lift)
- Icon: 1.15 (noticeable)

#### Magnetic Effect

```javascript
export function useMagnetic(elementRef) {
  const handleMagneticMove = e => {
    const { clientX, clientY } = e;
    const { width, height, left, top } =
      elementRef.current.getBoundingClientRect();

    const x = (clientX - (left + width / 2)) * 0.5;
    const y = (clientY - (top + height / 2)) * 0.5;

    setPosition({ x, y });
  };
}
```

**Spring Animation:**

```jsx
animate={{ x, y }}
transition={{
  type: 'spring',
  damping: 15,
  stiffness: 150,
  mass: 0.1
}}
```

**Physics Properties:**

- Damping: 15 (resistance)
- Stiffness: 150 (spring tension)
- Mass: 0.1 (lightweight, snappy)

### 4. Continuous Animations

#### Infinite Rotation (Decorative Elements)

```jsx
<DecorativeElement
  animate={{
    rotate: [0, 360],
    scale: [1, 1.1, 1],
  }}
  transition={{
    duration: 20,
    repeat: Infinity,
    ease: 'linear',
  }}
/>
```

#### Pulse/Breathing Effect

```jsx
animate={{
  scale: [1, 1.1, 1],
  opacity: [0.5, 0.8, 0.5]
}}
transition={{
  duration: 2,
  repeat: Infinity,
  repeatType: 'reverse'
}}
```

### 5. Easing Functions

**Custom Cubic-Bezier Curves:**

```javascript
// Smooth ease-out (natural deceleration)
ease: [0.33, 1, 0.68, 1];

// Sharp ease-in-out (confident)
ease: [0.76, 0, 0.24, 1];

// Bounce ease-out
ease: [0.68, -0.55, 0.265, 1.55];

// Snap back
ease: [0.32, 0, 0.67, 0];
```

**Easing Selection Guidelines:**

- **Entrances:** Ease-out (starts fast)
- **Exits:** Ease-in (ends fast)
- **Reversible:** Ease-in-out (smooth both ways)

### Performance Optimization

**Will-Change Property:**

```css
will-change: transform, opacity;
```

**GPU Acceleration:**

```css
transform: translateZ(0);
backface-visibility: hidden;
```

**Reduce Motion:**

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Spatial Alignments & Spacing

### Spacing System

**Clamp-Based Fluid Spacing:**

```css
/* Vertical padding pattern */
padding-block: clamp(MIN, PREFERRED, MAX)

Examples:
padding-block: clamp(4em, 12vw, 20em)    /* Large spacing */
padding-block: clamp(5em, 14vh, 16em)    /* Viewport-based */
padding-block: clamp(6em, 12vh, 10em)    /* Medium spacing */
```

**Horizontal padding:**

```css
padding-inline: clamp(2.5em, 4vw, 8em);
```

**Benefits:**

- Smooth scaling across all screen sizes
- No breakpoint-specific overrides
- Maintains proportions

### Grid System

**Flexbox Layouts:**

```css
/* Two-column responsive */
.wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
}

.column-main {
  flex-basis: 100%;

  @media (min-width: 1024px) {
    flex-basis: 75%; /* 9/12 */
  }
}

.column-aside {
  flex-basis: 58.333%; /* 7/12 */

  @media (min-width: 1024px) {
    flex-basis: 25%; /* 3/12 */
  }
}
```

### Vertical Rhythm

**Line Height Scale:**

```css
Headings:     1.1 - 1.3
Body:         1.6 - 1.7
Small text:   1.4 - 1.5
```

**Margin Scale (Tailwind):**

```css
gap-2:   0.5rem  (8px)
gap-4:   1rem    (16px)
gap-6:   1.5rem  (24px)
gap-8:   2rem    (32px)
gap-10:  2.5rem  (40px)
gap-12:  3rem    (48px)
```

### Alignment Patterns

**Centered Content:**

```css
margin: 0 auto;
text-align: center;
max-width: 700px; /* Optimal reading width */
```

**Flex Alignment:**

```css
/* Vertical centering */
display: flex;
align-items: center;
justify-content: center;

/* Space between */
justify-content: space-between;

/* End alignment */
justify-content: end;
```

### Z-Index Layers

```javascript
Layers (lowest to highest):
-1: Background elements
0:  Normal flow
1:  Elevated cards
10: Navigation
20: Modals/overlays
100: Toasts/notifications
```

---

## Interaction Design

### Hover States

#### Button Hover

**Primary Button:**

```css
Default:
- background: primary blue
- color: white
- scale: 1

Hover:
- scale: 1.1
- brightness: 1.1
- shadow: 0 10px 40px rgba(94, 106, 210, 0.3)
```

**Outline Button:**

```css
Default:
- background: transparent
- border: 2px solid
- color: foreground

Hover:
- background: primary
- color: white
- border-color: primary
```

#### Card Hover

```jsx
<MethodCard
  whileHover={{
    y: -10,
    scale: 1.02
  }}
  transition={{
    duration: 0.3,
    ease: [0.16, 1, 0.3, 1]
  }}
>
```

**Visual Effects:**

1. Lifts up 10px (y: -10)
2. Subtle scale increase (1.02)
3. Top border slides in (scaleX animation)
4. Icon background changes to primary
5. Icon scales up 1.1x

### Click/Tap States

```jsx
<motion.button
  whileTap={{ scale: 0.95 }}
>
```

**Provides tactile feedback** - button "presses in"

### Focus States

```css
:focus-visible {
  outline: 2px solid hsl(var(--ring));
  outline-offset: 2px;
  border-radius: var(--radius);
}
```

**Accessibility:**

- Only shows on keyboard focus
- High contrast ring
- 2px offset for clarity

### Loading States

**Skeleton Loaders:**

```css
background: linear-gradient(
  90deg,
  hsl(var(--muted)) 25%,
  hsl(var(--muted-foreground) / 0.1) 50%,
  hsl(var(--muted)) 75%
);
background-size: 200% 100%;
animation: shimmer 1.5s infinite;
```

### Toast Notifications

**Contact Form:**

```jsx
<Toast
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
>
  Email copied to clipboard!
</Toast>
```

**Positioning:**

```css
position: fixed;
bottom: 2rem;
left: 50%;
transform: translateX(-50%);
z-index: 100;
```

### Cursor Changes

```css
Default: cursor: default;
Links: cursor: pointer;
Disabled: cursor: not-allowed;
Grab: cursor: grab;
Grabbing: cursor: grabbing;
```

**Custom Cursor (Thumbnail):**

- Replaces default cursor on hover
- Circle shape with "View" label
- Follows pointer with GSAP smoothing

---

## Responsive Design Strategy

### Mobile-First Approach

```css
/* Base: Mobile (320px+) */
.element {
  font-size: 1rem;
  padding: 1rem;
}

/* Tablet (768px+) */
@media (min-width: 768px) {
  .element {
    font-size: 1.25rem;
    padding: 2rem;
  }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .element {
    font-size: 1.5rem;
    padding: 3rem;
  }
}
```

### Fluid Typography & Spacing

**Preferred over breakpoints:**

```css
font-size: clamp(1rem, 2vw, 2rem);
padding: clamp(1em, 5vw, 5em);
```

### Hidden Elements

```jsx
/* Desktop only */
<div className='hidden lg:block'>

/* Mobile only */
<div className='block lg:hidden'>
```

### Touch Optimization

```css
/* Larger tap targets on mobile */
@media (max-width: 768px) {
  button {
    min-height: 44px;
    min-width: 44px;
    padding: 12px 24px;
  }
}
```

---

## Performance Considerations

### Image Optimization

```jsx
<Image
  src='/images/hero.png'
  fill={true}
  sizes='100vw'
  priority // Above fold
  quality={85}
  placeholder='blur'
/>
```

### Animation Performance

1. **Animate transform & opacity only** (GPU-accelerated)
2. **Use `will-change` sparingly**
3. **Debounce scroll listeners**
4. **Use `viewport={{ once: true }}`** to prevent re-renders

### Bundle Size

- Font: WOFF2 format (smallest)
- Icons: lucide-react (tree-shakeable)
- Motion: Framer Motion (optimized)

---

## Accessibility Features

### Keyboard Navigation

- All interactive elements focusable
- Logical tab order
- Skip to main content link
- Focus visible indicators

### Screen Readers

```jsx
<Image
  src='/image.png'
  alt='Descriptive text for screen readers'
/>

<button aria-label='Close menu'>
  <X />
</button>
```

### Color Contrast

**WCAG AAA Compliance:**

- Background/Foreground: 16.51:1
- Primary/Background: 4.52:1
- Muted Foreground: 4.98:1

All exceed WCAG AA standards (4.5:1)

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

---

## Design Tokens Summary

### Colors (HSL Format)

```javascript
Primary: hsl(232, 79%, 59%)
Background: hsl(0, 0%, 100%)
Foreground: hsl(225, 7%, 12%)
Muted: hsl(210, 5%, 95.9%)
Border: hsl(192, 3%, 90%)
```

### Spacing

```javascript
clamp(2.5em, 4vw, 8em)  // Inline padding
clamp(4em, 12vw, 20em)  // Block padding
```

### Typography

```javascript
Font: Neue Montreal
Headings: clamp(1.5em, 2.2vw, 3em)
Body: 1rem (16px)
Line Height: 1.6
```

### Border Radius

```javascript
sm: 4px
md: 6px (default)
lg: 8px
full: 9999px (circles)
```

### Transitions

```javascript
Duration: 300ms (default)
Easing: cubic-bezier(0.33, 1, 0.68, 1)
```

---

## Component Inventory

1. **Navbar** - Fixed navigation with brand and menu
2. **Header/Hero** - Full-screen animated hero with moving text
3. **Description** - Content section with ParallaxReveal
4. **Thumbnail Gallery** - Hover-activated image previews
5. **Project Carousel** - Multi-row scrolling showcase
6. **Contact Footer** - Parallax reveal with contact info
7. **MagneticButton** - Interactive button with physics
8. **ParallaxSlider** - Infinitely scrolling text
9. **ThumbnailModal** - Floating image preview
10. **Toast** - Notification component

---

## Future Enhancements

1. **Dark Mode** - Toggle between light/dark themes
2. **Micro-interactions** - Sound effects, haptic feedback
3. **Loading States** - Skeleton screens, progress indicators
4. **Form Validation** - Real-time feedback on contact form
5. **Lazy Loading** - Intersection observer for images
6. **Service Worker** - Offline functionality
7. **Analytics** - Track user interactions
8. **A11y Improvements** - Enhanced ARIA labels

---

## Conclusion

This design system prioritizes **fluidity, elegance, and user experience**. Every animation, color choice, and spacing decision serves to create a cohesive, professional portfolio that showcases technical skill while maintaining accessibility and performance.

The combination of Framer Motion for orchestrated animations, GSAP for precision interactions, and a thoughtfully crafted color palette results in a modern, engaging web experience that feels both premium and approachable.
