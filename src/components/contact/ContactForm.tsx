'use client';

import { useState } from 'react';

interface ContactFormProps {
  formConfig?: {
    title?: string | null;
    description?: string | null;
    submitButtonText?: string | null;
  } | null;
}

export default function ContactForm({ formConfig }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'Select a topic',
    message: '',
  });

  const title = formConfig?.title || 'Send Us a Message';
  const description =
    formConfig?.description ||
    "Fill out the form below and we'll respond within 1-2 business days.";
  const buttonText = formConfig?.submitButtonText || 'Send Message';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 sm:p-8 space-y-6 shadow-sm">
      <div className="space-y-2">
        <h3 className="text-xl font-heading font-bold text-primary">{title}</h3>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>

      {submitted && (
        <div className="bg-amber-50 border border-amber-200 text-amber-900 rounded-lg p-4 text-xs space-y-2">
          <div className="flex items-center gap-2 font-semibold">
            <span>ℹ️</span>
            <span>Demo Mode Notice</span>
          </div>
          <p className="leading-relaxed">
            This contact form operates in client preview mode. No live backend email dispatch service is configured for this demo platform.
          </p>
          <p className="leading-relaxed">
            To reach our administrative team directly, please send your email to{' '}
            <a
              href="mailto:contact@scriptura.org"
              className="font-bold underline hover:text-amber-950"
            >
              contact@scriptura.org
            </a>{' '}
            or call{' '}
            <a
              href="tel:+15551234567"
              className="font-bold underline hover:text-amber-950"
            >
              +1 (555) 123-4567
            </a>.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="text-[11px] font-semibold text-amber-900 hover:underline pt-1 block"
          >
            ← Back to form
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-medium text-primary block">
              First Name
            </label>
            <input
              type="text"
              required
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              placeholder="John"
              className="w-full px-4 py-2.5 text-xs rounded border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-primary block">
              Last Name
            </label>
            <input
              type="text"
              required
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              placeholder="Doe"
              className="w-full px-4 py-2.5 text-xs rounded border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-medium text-primary block">
            Email Address
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="john@example.com"
            className="w-full px-4 py-2.5 text-xs rounded border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-medium text-primary block">
            Subject
          </label>
          <select
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
            className="w-full px-4 py-2.5 text-xs rounded border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <option value="Select a topic">Select a topic</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Theological Resources">Theological Resources</option>
            <option value="Research Partnership">Research Partnership</option>
            <option value="Donation & Support">Donation & Support</option>
            <option value="Technical Support">Technical Support</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-medium text-primary block">
            Message
          </label>
          <textarea
            rows={5}
            required
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            placeholder="How can we help you?"
            className="w-full px-4 py-2.5 text-xs rounded border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none font-sans"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground font-bold text-sm rounded hover:bg-primary/95 transition-all uppercase tracking-wider shadow-sm"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
}
