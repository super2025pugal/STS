// src/pages/ContactPage.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  MessageCircle,
  Building2,
  Factory,
  Send,
  Star,
} from 'lucide-react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ContactImg from './contact.jpg';

// ─── Contact data ───────────────────────────────────────────────
const contactItems = [
  {
    Icon: Building2,
    label: 'Head Office',
    content: '100/A, Athipalayam Road, Chinnavedempatti\nCoimbatore – 641006',
  },
  {
    Icon: Factory,
    label: 'Factory Address',
    content: 'S.F.No: 581/1, Athipalayam Road\nChinnavedempatti, Coimbatore – 641049',
  },
  {
    Icon: Phone,
    label: 'Phone',
    content: '+91 99429 09628',
    href: 'tel:+919942909628',
  },
  {
    Icon: Mail,
    label: 'Email',
    content: 'spares@supergroupscbe.com',
    href: 'mailto:spares@supergroupscbe.com',
  },
  {
    Icon: Clock,
    label: 'Business Hours',
    content: 'Mon – Sat: 9:00 AM – 6:00 PM\nSunday: Closed',
  },
];

// ─── Main Component ─────────────────────────────────────────────
const ContactPage: React.FC = () => {
  // ── Enquiry form state ──
  const [enquiryName, setEnquiryName] = useState('');
  const [enquiryEmail, setEnquiryEmail] = useState('');
  const [enquiryPhone, setEnquiryPhone] = useState('');
  const [enquiryMessage, setEnquiryMessage] = useState('');

  // ── Feedback form state ──
  const [feedbackName, setFeedbackName] = useState('');
  const [feedbackEmail, setFeedbackEmail] = useState('');
  const [feedbackRating, setFeedbackRating] = useState<number>(5);
  const [feedbackComment, setFeedbackComment] = useState('');

  // ── Handlers ──
  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Enquiry from Super Textile Services Website');
    const body = encodeURIComponent(
      `Name: ${enquiryName}\nEmail: ${enquiryEmail}\nPhone: ${enquiryPhone}\n\nMessage:\n${enquiryMessage}`
    );
    window.location.href = `mailto:spares@supergroupscbe.com?subject=${subject}&body=${body}`;
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Feedback from Super Textile Services Website');
    const body = encodeURIComponent(
      `Name: ${feedbackName}\nEmail: ${feedbackEmail}\nRating: ${feedbackRating} / 5\n\nComment:\n${feedbackComment}`
    );
    window.location.href = `mailto:spares@supergroupscbe.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <SEO
        title="Contact Super Textile Services | Textile Machine Spares in Coimbatore"
        description="Contact Super Textile Services for enquiries related to textile machine spares, pricing, and technical assistance. Located in Coimbatore, Tamil Nadu."
        keywords="contact Super Textile Services, textile spares enquiry, STS Coimbatore"
      />

      <Hero
        title="Get in Touch"
        subtitle="Our team of textile machinery specialists is ready to help with parts enquiries, technical support, and project consultancy."
        backgroundImages={[ContactImg]}
        hideExploreButton
        showFeatureCard={false}
        learnMoreTargetId="contact-body"
      />

      {/* ═══ Contact Section ═══ */}
      <section
        id="contact-body"
        className="section py-8 sm:py-12 lg:py-16 bg-slate-50"
      >
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12">
            {/* ── Info Sidebar ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-4"
            >
              <div className="bg-gradient-to-br from-[#0b1a33] to-[#0f2444] rounded-2xl p-6 sm:p-8 h-full shadow-xl text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,215,0,0.05),transparent_70%)] pointer-events-none" />
                <div className="relative z-10">
                  <span className="inline-block text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-amber-400 mb-3">
                    Reach Out
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-2 text-white">
                    Contact Information
                  </h2>
                  <div className="w-10 h-0.5 bg-amber-400 mb-5 rounded" />
                  <p className="text-sm sm:text-base text-slate-300/70 leading-relaxed mb-6">
                    Reach our office using the details below. All enquiries are responded to
                    within 2 business hours.
                  </p>

                  {/* Contact items */}
                  <div className="space-y-5">
                    {contactItems.map(({ Icon, label, content, href }, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon size={18} className="text-amber-400" />
                        </div>
                        <div>
                          <div className="text-[0.65rem] font-semibold tracking-[0.12em] uppercase text-amber-400 mb-0.5">
                            {label}
                          </div>
                          {href ? (
                            <a
                              href={href}
                              className="text-sm sm:text-base text-slate-200/80 hover:text-amber-400 transition-colors block"
                            >
                              {content}
                            </a>
                          ) : (
                            <p className="text-sm sm:text-base text-slate-200/80 whitespace-pre-line">
                              {content}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* WhatsApp CTA */}
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-[0.7rem] font-medium tracking-[0.1em] uppercase text-slate-400/60 mb-2">
                      Need immediate help?
                    </p>
                    <a
                      href="https://wa.me/9942909628"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] text-white font-semibold text-sm shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/40 hover:scale-105 transition-transform duration-200"
                    >
                      <MessageCircle size={18} />
                      WhatsApp Us
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── Enquiry Form ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-8"
            >
              <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm border border-slate-200/60">
                <span className="inline-block text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-amber-400 mb-2">
                  Send a Message
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-1">
                  Send Us an Enquiry
                </h2>
                <p className="text-sm sm:text-base text-slate-500 mb-6">
                  Fill in the form and click submit – your email client will open with a
                  pre‑filled message.
                </p>

                <form onSubmit={handleEnquirySubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="enquiry-name"
                        className="block text-sm font-medium text-slate-700 mb-1"
                      >
                        Full Name *
                      </label>
                      <input
                        id="enquiry-name"
                        type="text"
                        required
                        value={enquiryName}
                        onChange={(e) => setEnquiryName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="enquiry-email"
                        className="block text-sm font-medium text-slate-700 mb-1"
                      >
                        Email Address *
                      </label>
                      <input
                        id="enquiry-email"
                        type="email"
                        required
                        value={enquiryEmail}
                        onChange={(e) => setEnquiryEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all outline-none text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="enquiry-phone"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      id="enquiry-phone"
                      type="tel"
                      value={enquiryPhone}
                      onChange={(e) => setEnquiryPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="enquiry-message"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="enquiry-message"
                      required
                      rows={5}
                      value={enquiryMessage}
                      onChange={(e) => setEnquiryMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all outline-none text-sm resize-y"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-lg shadow-slate-900/25 hover:shadow-slate-900/35 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <Send size={18} />
                    Send Enquiry
                  </button>
                  <p className="text-xs text-slate-400 mt-2">
                    By submitting, your default email client will open. No data is stored on our
                    server.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ Map Section ═══ */}
      <section className="py-8 sm:py-12 bg-slate-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-6 sm:mb-8">
              <span className="inline-block text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-amber-400 mb-2">
                Find Us
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Head Office Location
              </h2>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200/60">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.089236873482!2d76.9810948!3d11.056621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85875f5da5219%3A0xf0d8694e6c43d621!2sSUPER%20MACHINE%20WORKS%20(P)%20LTD!5e0!3m2!1sen!2sin!4v1705320000000"
                width="100%"
                height="300"
                style={{ border: 0, display: 'block', minHeight: '240px' }}
                className="h-64 sm:h-80 md:h-96"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Super Textile Services office location"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ Feedback Section ═══ */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8">
              <span className="inline-block text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-amber-400 mb-2">
                Client Feedback
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
                Share Your Experience
              </h2>
              <p className="text-sm sm:text-base text-slate-500 max-w-md mx-auto">
                Your feedback helps us improve. Submit and your email client will open with a
                pre‑filled message.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-200/60">
              <form onSubmit={handleFeedbackSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="feedback-name"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Your Name *
                    </label>
                    <input
                      id="feedback-name"
                      type="text"
                      required
                      value={feedbackName}
                      onChange={(e) => setFeedbackName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="feedback-email"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Email Address *
                    </label>
                    <input
                      id="feedback-email"
                      type="email"
                      required
                      value={feedbackEmail}
                      onChange={(e) => setFeedbackEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all outline-none text-sm"
                    />
                  </div>
                </div>

                {/* Rating */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Rating *
                  </label>
                  <div className="flex items-center gap-1 sm:gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFeedbackRating(star)}
                        className="p-1 focus:outline-none transition-transform hover:scale-110"
                        aria-label={`Rate ${star} stars`}
                      >
                        <Star
                          size={28}
                          className="sm:w-8 sm:h-8"
                          fill={star <= feedbackRating ? '#f5b342' : 'none'}
                          stroke={star <= feedbackRating ? '#f5b342' : '#dce0e6'}
                          strokeWidth={1.5}
                        />
                      </button>
                    ))}
                    <span className="text-sm text-slate-500 ml-2">
                      {feedbackRating} / 5
                    </span>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="feedback-comment"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Your Feedback *
                  </label>
                  <textarea
                    id="feedback-comment"
                    required
                    rows={4}
                    value={feedbackComment}
                    onChange={(e) => setFeedbackComment(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all outline-none text-sm resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-lg shadow-slate-900/25 hover:shadow-slate-900/35 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Send size={18} />
                  Submit Feedback
                </button>
                <p className="text-xs text-slate-400 mt-2">
                  By submitting, your default email client will open. No data is stored on our
                  server.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;