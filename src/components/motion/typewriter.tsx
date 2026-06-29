'use client';

import * as React from 'react';

/**
 * Accessible role-cycling typewriter. The full list is rendered in a visually
 * hidden node for screen readers / SEO; the animation is purely visual.
 */
export function Typewriter({ words, className }: { words: string[]; className?: string }) {
  const [index, setIndex] = React.useState(0);
  const [text, setText] = React.useState('');
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const current = words[index % words.length] ?? '';
    const done = !deleting && text === current;
    const cleared = deleting && text === '';

    const delay = done ? 1500 : deleting ? 45 : 90;
    const t = setTimeout(() => {
      if (done) return setDeleting(true);
      if (cleared) {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
        return;
      }
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
      );
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  return (
    <span className={className}>
      <span className="sr-only">{words.join(', ')}</span>
      <span aria-hidden className="text-gradient">
        {text}
      </span>
      <span aria-hidden className="ml-0.5 inline-block w-0.5 animate-pulse bg-primary align-middle">
        &nbsp;
      </span>
    </span>
  );
}
