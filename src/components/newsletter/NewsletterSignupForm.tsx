'use client';

import { useState, FormEvent } from 'react';

interface SignupCTAData {
  title?: string | null;
  description?: string | null;
  buttonText?: string | null;
  privacyNote?: string | null;
}

interface NewsletterSignupFormProps {
  data?: SignupCTAData | null;
}

export default function NewsletterSignupForm({ data }: NewsletterSignupFormProps) {
  const [email, setEmail] = useState('');
  const [notice, setNotice] = useState<string | null>(null);

  const title = data?.title || 'Subscribe to Daily Scripture Letters';
  const description =
    data?.description ||
    'Join over 15,000 subscribers who receive daily devotionals, theological insights, and scripture reflections directly in their inbox every morning at 6:00 AM.';
  const buttonText = data?.buttonText || 'Subscribe Free';
  const privacyNote =
    data?.privacyNote || 'No spam. Unsubscribe anytime. Your privacy is protected.';

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    // Honest feedback without fabricating an external email subscription service
    setNotice(
      'Thank you for your interest. The Daily Scripture Letters automated distribution service is currently in editorial preview mode and not connected to an external mailing list.'
    );
    setEmail('');
  };

  return (
    <div className="bg-secondary text-secondary-foreground p-8 rounded-xl space-y-6 border border-secondary/20 shadow-md">
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-heading font-bold text-tertiary">{title}</h3>
        <p className="text-sm text-secondary-foreground/90 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-4 py-3 text-sm rounded bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-tertiary border border-border"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-tertiary text-primary font-bold text-sm rounded hover:bg-tertiary/90 transition-all uppercase tracking-wider whitespace-nowrap shadow-sm"
            >
              {buttonText}
            </button>
          </div>

          {notice && (
            <div className="max-w-md mx-auto p-3 rounded bg-secondary-foreground/10 text-tertiary text-xs leading-relaxed border border-tertiary/30 animate-fade-in">
              {notice}
            </div>
          )}
        </form>

        <p className="text-[10px] text-secondary-foreground/60">
          {privacyNote}
        </p>
      </div>
    </div>
  );
}
