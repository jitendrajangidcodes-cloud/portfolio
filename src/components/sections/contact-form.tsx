'use client';

import * as React from 'react';
import { Send } from 'lucide-react';
import { profile } from '@/content/profile';
import { Button } from '@/components/ui/button';

/**
 * Static-hosting-friendly contact form.
 *
 * GitHub Pages has no server, so by default this composes a mailto: link with the
 * user's message prefilled — zero backend, zero data leaves the browser. To use a
 * real form backend instead, set NEXT_PUBLIC_FORM_ENDPOINT (e.g. a Formspree URL)
 * and the form will POST to it.
 */
const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

const field =
  'w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring';

export function ContactForm() {
  const [sent, setSent] = React.useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (endpoint) return; // let the native POST proceed to the endpoint
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '');
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(
      `${data.get('message')}\n\n— ${name} (${data.get('email')})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      action={endpoint}
      method={endpoint ? 'POST' : undefined}
      className="space-y-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium">Name</span>
          <input name="name" required autoComplete="name" className={field} placeholder="Your name" />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium">Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className={field}
            placeholder="you@example.com"
          />
        </label>
      </div>
      <label className="block text-sm">
        <span className="mb-1.5 block font-medium">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          className={`${field} resize-y`}
          placeholder="Tell me about your project or idea…"
        />
      </label>
      <Button type="submit" size="lg">
        <Send /> {endpoint ? 'Send message' : 'Compose email'}
      </Button>
      {sent && !endpoint && (
        <p className="text-sm text-muted-foreground" role="status">
          Your email app should have opened. If not, write to{' '}
          <a className="text-primary hover:underline" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
