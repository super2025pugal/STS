import React, { useState } from 'react';
import { database, ref, push } from '../firebase';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  status: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', phone: '', company: '', message: '', status: 'incomplete',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      await push(ref(database, 'enquiries'), {
        ...formData,
        timestamp: new Date().toISOString(),
      });
      setFormData({ name: '', email: '', phone: '', company: '', message: '', status: 'incomplete' });
      setSubmitStatus('success');
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fields = [
    { id: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe', required: true, col: 1 },
    { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@company.com', required: true, col: 1 },
    { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 99999 00000', required: true, col: 1 },
    { id: 'company', label: 'Company Name', type: 'text', placeholder: 'Your Company Ltd.', required: false, col: 1 },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {fields.map(({ id, label, type, placeholder, required }) => (
          <div key={id}>
            <label htmlFor={id} className="form-label">{label}{required && <span className="text-amber ml-1">*</span>}</label>
            <input
              type={type}
              id={id}
              name={id}
              required={required}
              value={(formData as any)[id]}
              onChange={handleChange}
              className="form-input"
              placeholder={placeholder}
            />
          </div>
        ))}
      </div>

      <div>
        <label htmlFor="message" className="form-label">
          Message <span className="text-amber">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="form-input resize-none"
          placeholder="Describe your requirements in detail…"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary justify-center py-4 text-sm font-bold disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader className="w-4 h-4 animate-spin" />
            Sending your message…
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Enquiry
          </>
        )}
      </button>

      {submitStatus && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className={`flex items-center gap-3 p-4 rounded-xl text-sm font-medium ${
            submitStatus === 'success'
              ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          {submitStatus === 'success'
            ? <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            : <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
          }
          {submitStatus === 'success'
            ? 'Your message was sent successfully. We will get back to you shortly.'
            : 'Something went wrong. Please try again or call us directly.'}
        </motion.div>
      )}
    </form>
  );
};

export default ContactForm;
