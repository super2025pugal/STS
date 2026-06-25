import React, { useState } from 'react';
import { database, ref, push } from '../firebase';
import { motion } from 'framer-motion';
import { MessageSquare, CheckCircle, Send } from 'lucide-react';

const FeedbackForm: React.FC = () => {
  const [quote, setQuote] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!quote || !name || !company) return;
    setSubmitting(true);
    try {
      await push(ref(database, 'feedbacks'), {
        quote, name, company, status: 'Not Publish',
      });
      setSuccess(true);
      setQuote(''); setName(''); setCompany('');
    } catch (err) {
      console.error('Error submitting feedback:', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto"
    >
      <div
        className="rounded-2xl p-8 border"
        style={{ background: 'var(--off-white)', borderColor: 'var(--border)' }}
      >
        <div className="flex items-center gap-3 mb-2">
          <MessageSquare className="w-5 h-5" style={{ color: 'var(--amber)' }} />
          <h3 className="font-serif text-2xl" style={{ color: 'var(--navy)' }}>
            Share Your Experience
          </h3>
        </div>
        <p className="text-sm mb-7" style={{ color: 'var(--text-light)' }}>
          Your feedback helps us serve our clients better.
        </p>

        {success ? (
          <div className="flex flex-col items-center gap-3 py-8 text-center">
            <CheckCircle className="w-12 h-12 text-emerald-500" />
            <p className="font-semibold text-emerald-700">Thank you for your feedback!</p>
            <p className="text-sm" style={{ color: 'var(--text-light)' }}>We appreciate you taking the time.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="form-label">Your Feedback <span className="text-amber">*</span></label>
              <textarea
                rows={4}
                placeholder="Share your thoughts about our services…"
                className="form-input resize-none"
                value={quote}
                onChange={e => setQuote(e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="form-label">Your Name <span className="text-amber">*</span></label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="form-input"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="form-label">Company <span className="text-amber">*</span></label>
                <input
                  type="text"
                  placeholder="Your Company"
                  className="form-input"
                  value={company}
                  onChange={e => setCompany(e.target.value)}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full btn-primary justify-center py-3.5 disabled:opacity-60"
            >
              <Send className="w-4 h-4" />
              {submitting ? 'Submitting…' : 'Submit Feedback'}
            </button>
          </form>
        )}
      </div>
    </motion.div>
  );
};

export default FeedbackForm;
