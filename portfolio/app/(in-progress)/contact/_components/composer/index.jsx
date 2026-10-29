'use client';
// app/(in-progress)/contact/_components/composer/index.jsx

import { useId, useRef, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { Check, Copy, Mail } from 'lucide-react';

import { cn } from '@/utils';

const EMAIL = 'gautamprabhumit@gmail.com';
const MIN_LENGTH = 10;

const topics = [
  'Internship',
  'Software role',
  'Project or collaboration',
  'Just saying hi',
];

const easing = [0.33, 1, 0.68, 1];

/** Build the draft that the mail app will open with. */
function buildDraft({ topic, name, message }) {
  const subject = `${topic}${name.trim() ? `: ${name.trim()}` : ''}`;
  const body = `Hi Gautam,\n\n${message.trim()}\n\n${name.trim() || ''}`.trimEnd();
  return { subject, body };
}

export function ContactComposer() {
  const id = useId();
  const [topic, setTopic] = useState(topics[0]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [touched, setTouched] = useState(false);
  const [note, setNote] = useState(null); // 'opened' | 'copied' | 'failed'
  const timer = useRef(0);

  const valid = message.trim().length >= MIN_LENGTH;
  const showError = touched && !valid;
  const { subject, body } = buildDraft({ topic, name, message });
  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const flash = (next) => {
    setNote(next);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setNote(null), 6000);
  };

  const handleCopy = async () => {
    setTouched(true);
    if (!valid) return;
    try {
      await navigator.clipboard.writeText(
        `To: ${EMAIL}\nSubject: ${subject}\n\n${body}`,
      );
      flash('copied');
    } catch {
      flash('failed');
    }
  };

  const fieldClass =
    'w-full border-b border-background/30 bg-transparent py-3 text-lg text-background outline-none transition-colors duration-300 placeholder:text-background/40 focus:border-primary';

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setTouched(true);
      }}
      noValidate
      aria-label='Write a message'
      className='rounded-lg border border-background/20 bg-background/[0.03] p-6 lg:p-8'
    >
      <p className='mb-2 text-xs uppercase tracking-wider text-background/60'>
        Or write it here
      </p>
      <h2 className='mb-8 text-[clamp(1.5rem,2.2vw,2.25rem)] font-normal leading-tight tracking-tight'>
        Draft a message
      </h2>

      <fieldset className='mb-8'>
        <legend className='mb-3 text-sm text-background/70'>
          What is it about?
        </legend>
        <div role='radiogroup' className='flex flex-wrap gap-2'>
          {topics.map((item) => {
            const active = topic === item;
            return (
              <button
                key={item}
                type='button'
                role='radio'
                aria-checked={active}
                onClick={() => setTopic(item)}
                data-cursor
                data-cursor-label='Select'
                className={cn(
                  'rounded-full border px-4 py-2.5 text-sm outline-none max-sm:py-3 transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-primary',
                  active
                    ? 'border-primary bg-primary text-background'
                    : 'border-background/30 text-background hover:border-background',
                )}
              >
                {item}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className='mb-6'>
        <label htmlFor={`${id}-name`} className='text-sm text-background/70'>
          Your name <span className='text-background/40'>(optional)</span>
        </label>
        <input
          id={`${id}-name`}
          type='text'
          autoComplete='name'
          value={name}
          onChange={(event) => setName(event.target.value)}
          data-cursor
          data-cursor-label='Type'
          className={fieldClass}
          placeholder='So I know who to reply to'
        />
      </div>

      <div className='mb-6'>
        <label htmlFor={`${id}-message`} className='text-sm text-background/70'>
          Message
        </label>
        <textarea
          id={`${id}-message`}
          rows={4}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onBlur={() => message && setTouched(true)}
          aria-invalid={showError}
          aria-describedby={showError ? `${id}-error` : undefined}
          data-cursor
          data-cursor-label='Type'
          className={cn(fieldClass, 'resize-none', showError && 'border-destructive')}
          placeholder='A few lines is plenty'
        />
        <AnimatePresence initial={false}>
          {showError && (
            <motion.p
              id={`${id}-error`}
              role='alert'
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.3, ease: easing } }}
              exit={{ opacity: 0 }}
              className='mt-2 text-sm text-destructive'
            >
              Add a few words (at least {MIN_LENGTH} characters) so there is
              something to send.
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <dl className='mb-8 grid gap-1 border-l border-background/20 ps-4 text-sm text-background/60'>
        <div className='flex flex-wrap gap-x-2'>
          <dt className='text-background/40'>To</dt>
          <dd>{EMAIL}</dd>
        </div>
        <div className='flex flex-wrap gap-x-2'>
          <dt className='text-background/40'>Subject</dt>
          <dd>{subject}</dd>
        </div>
      </dl>

      <div className='flex flex-wrap items-center gap-3'>
        {valid ? (
          <a
            href={mailto}
            onClick={() => flash('opened')}
            data-cursor
            data-cursor-label='Open draft'
            className='inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-medium text-background outline-none transition-colors duration-300 hover:bg-primary-foreground focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-foreground'
          >
            <Mail className='size-4' aria-hidden='true' />
            Open email draft
          </a>
        ) : (
          <button
            type='submit'
            data-cursor
            data-cursor-label='Open draft'
            className='inline-flex items-center gap-2 rounded-full bg-primary/70 px-7 py-3.5 text-base font-medium text-background outline-none transition-colors duration-300 hover:bg-primary focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-foreground'
          >
            <Mail className='size-4' aria-hidden='true' />
            Open email draft
          </button>
        )}

        <button
          type='button'
          onClick={handleCopy}
          data-cursor
          data-cursor-label='Copy message'
          className='inline-flex items-center gap-2 rounded-full border border-background/30 px-6 py-3.5 text-base outline-none transition-colors duration-300 hover:border-background focus-visible:ring-2 focus-visible:ring-primary'
        >
          {note === 'copied' ? (
            <Check className='size-4' aria-hidden='true' />
          ) : (
            <Copy className='size-4' aria-hidden='true' />
          )}
          {note === 'copied' ? 'Copied' : 'Copy message'}
        </button>
      </div>

      <p
        role='status'
        aria-live='polite'
        className='mt-4 min-h-10 text-sm leading-relaxed text-background/60'
      >
        {note === 'opened' &&
          'If your email app opened with the draft, just hit send. If nothing happened, use Copy message and paste it into any email.'}
        {note === 'copied' && 'Copied. Paste it into an email to the address above.'}
        {note === 'failed' &&
          'Copying was blocked by the browser. Select the text and copy it, or email the address above directly.'}
        {!note &&
          'This opens your email app with the message filled in. Nothing is sent from this page.'}
      </p>
    </form>
  );
}
