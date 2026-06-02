'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, Check, AlertCircle, Building, Globe, MessageSquare, Inbox, ExternalLink, RefreshCw, Smartphone, MapPin, Sparkles } from 'lucide-react';

export function ContactAuditor() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brandName: '',
    website: '',
    goal: 'Marketing Videos',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const emailTo = "gihanjoebert@gmail.com";
  const emailSubject = formData.brandName 
    ? `Campaign Consultation Inquiry - ${formData.brandName}`
    : "Campaign Consultation Inquiry";

  const emailBody = `Hello Gihan,

I am reaching out to request a custom campaign consultation from RenovaGrow. Here are our campaign parameters:

• Client Name: ${formData.name || '[Your Name]'}
• Contact Email: ${formData.email || '[Your Email]'}
• Brand / Company Name: ${formData.brandName || '[Your Company Name]'}
• Web Domain / URL: ${formData.website || 'Not provided'}
• Chosen Goal: ${formData.goal}

Business Details / Campaign Notes:
"${formData.message || '[Enter your message details in the form]'}"

I would love to coordinate a kickoff call or receive a tailored campaign proposal. Please let me know your availability.

Best regards,
${formData.name || '[Your Name]'}`;

  const getGmailComposeLink = () => {
    const base = "https://mail.google.com/mail/?view=cm&fs=1";
    return `${base}&to=${encodeURIComponent(emailTo)}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  };

  const getMailtoLink = () => {
    return `mailto:${emailTo}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  };

  const executeSubmission = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.brandName || !formData.message) {
      setError("Please fill out all required fields before sending.");
      return;
    }

    setError(null);
    setLoading(true);

    try {
      // 1. Persist submission on custom server backend database file
      const response = await fetch('/api/contact/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Failed to store submission on the server database.");
      }

      // Briefly wait to show progress feedback
      await new Promise(resolve => setTimeout(resolve, 1200));

      setSubmitted(true);
      setLoading(false);

      // 2. Directly trigger email client transition
      const gmailUrl = getGmailComposeLink();
      const mailtoUrl = getMailtoLink();

      // Attempt to open Gmail client composer in new window dynamically
      const newTab = window.open(gmailUrl, '_blank');
      
      // Fallback: If browser blocked direct popups, switch window reference directly to mailto protocol
      if (!newTab || newTab.closed || typeof newTab.closed === 'undefined') {
        window.location.href = mailtoUrl;
      }

    } catch (err: any) {
      console.error(err);
      setError(err?.message || "Something went wrong saving your request. Please try again.");
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 w-full relative z-10 scroll-mt-20">
      <div className="mx-auto w-full max-w-5xl px-6">
        
        {/* Dynamic Headers */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200/50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Mail className="size-3 text-emerald-600" />
            Contact & Inbox
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-emerald-950">
            Contact Us & <br />
            <span className="font-serif italic font-normal text-emerald-700">Grow Your Reach</span>
          </h2>
          <p className="text-emerald-900/75 mt-4 text-base md:text-lg font-medium">
            Have questions or ready to launch? Complete the form below. 
            We will store your specifications and directly redirect your browser to your email client to inbox <strong className="text-emerald-800 font-bold">gihanjoebert@gmail.com</strong>.
          </p>
        </div>

        {/* Premium Layout Split Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Modern Agency Coordinates Info block */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-panel bg-white/50 p-8 rounded-3xl border border-emerald-150/40 shadow-xl space-y-6">
              <span className="font-serif italic font-normal text-emerald-800/80 block text-lg">
                &ldquo;Renovate your business, Grow your Reach.&rdquo;
              </span>
              
              <p className="text-emerald-950/70 text-sm font-semibold leading-relaxed">
                Connect with RenovaGrow. Drop your project inquiries, creative design specs, alignment goals, or general business ideas. We build strategic, high-production campaign plans to help you scale your operations.
              </p>
            </div>
          </div>

          {/* Right Block: Pure High-Fidelity Form Layout / Success Status card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success-state"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="glass-panel w-full bg-gradient-to-br from-emerald-900 to-green-950 p-8 md:p-10 rounded-3xl text-white border-none shadow-2xl flex flex-col justify-between min-h-[460px]"
                >
                  <div className="space-y-6">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shadow-lg">
                      <Check className="size-7 text-emerald-300" strokeWidth={3} />
                    </div>
                    
                    <div>
                      <h4 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-2">
                        Inquiry Received!
                      </h4>
                      <p className="text-emerald-100/80 text-sm md:text-base font-semibold leading-relaxed">
                        Your parameters have been logged into our database. We have triggered your email client so you can send your direct campaign draft to <strong className="text-emerald-200">gihanjoebert@gmail.com</strong>.
                      </p>
                    </div>

                    <div className="bg-black/30 border border-white/5 p-5 rounded-2xl text-emerald-100 text-xs md:text-sm font-mono leading-relaxed whitespace-pre-line max-h-[160px] overflow-y-auto">
                      {emailBody}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-emerald-800/60 space-y-4">
                    <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
                      <div className="text-center sm:text-left">
                        <span className="text-xs text-emerald-300/80 font-bold block">Not redirected automatically?</span>
                        <span className="text-[11px] text-emerald-100/60 font-semibold">Click a manual link to inbox your request.</span>
                      </div>
                      <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                        <a
                          href={getGmailComposeLink()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-none text-center inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-white text-emerald-900 hover:bg-emerald-50 text-xs font-extrabold transition-all hover:scale-[1.02] cursor-pointer"
                        >
                          <ExternalLink className="size-3.5" />
                          Open in Gmail
                        </a>
                        <a
                          href={getMailtoLink()}
                          className="flex-1 sm:flex-none text-center inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-emerald-800 border border-emerald-700 text-white hover:bg-emerald-850 text-xs font-extrabold transition-all hover:scale-[1.02] cursor-pointer"
                        >
                          Send Mail Direct
                        </a>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-emerald-300 hover:text-white text-xs font-bold block pt-2 underline cursor-pointer"
                    >
                      ← Back to form editor
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="form-editor"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="glass-panel bg-white/70 p-6 md:p-8 rounded-3xl border border-emerald-100 shadow-xl"
                >
                  <form onSubmit={executeSubmission} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-emerald-900/60 uppercase tracking-wider mb-1.5">Your Name *</label>
                        <input
                          type="text"
                          required
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          disabled={loading}
                          className="w-full px-4 py-3 rounded-2xl bg-white border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-emerald-950 text-sm font-semibold transition-all disabled:opacity-60"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-emerald-900/60 uppercase tracking-wider mb-1.5">Your Email *</label>
                        <input
                          type="email"
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="name@company.com"
                          disabled={loading}
                          className="w-full px-4 py-3 rounded-2xl bg-white border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-emerald-950 text-sm font-semibold transition-all disabled:opacity-60"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-emerald-900/60 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                          <Building className="size-3 text-emerald-600" /> Brand Name *
                        </label>
                        <input
                          type="text"
                          required
                          name="brandName"
                          value={formData.brandName}
                          onChange={handleInputChange}
                          placeholder="My Company"
                          disabled={loading}
                          className="w-full px-4 py-3 rounded-2xl bg-white border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-emerald-950 text-sm font-semibold transition-all disabled:opacity-60"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-emerald-900/60 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                          <Globe className="size-3 text-emerald-600" /> Website URL
                        </label>
                        <input
                          type="text"
                          name="website"
                          value={formData.website}
                          onChange={handleInputChange}
                          placeholder="https://..."
                          disabled={loading}
                          className="w-full px-4 py-3 rounded-2xl bg-white border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-emerald-950 text-sm font-semibold transition-all disabled:opacity-60"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-emerald-900/60 uppercase tracking-wider mb-1.5">Service Goal / Inquiry Type</label>
                      <select
                        name="goal"
                        value={formData.goal}
                        onChange={handleInputChange}
                        disabled={loading}
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-emerald-950 text-sm font-semibold transition-all disabled:opacity-60"
                      >
                        <option>Marketing Videos</option>
                        <option>Marketing Photo Designs</option>
                        <option>Ad Run Campaigns</option>
                        <option>Search Engine Optimization (SEO)</option>
                        <option>Business Workflow Automations</option>
                        <option>Business Web Development</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-emerald-900/60 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                        <MessageSquare className="size-3 text-emerald-600" /> Tell Us About Your Project *
                      </label>
                      <textarea
                        required
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        placeholder="Please describe your key business goals, project timeline, design expectations, or operational challenges..."
                        disabled={loading}
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-emerald-950 text-sm font-semibold transition-all resize-none disabled:opacity-60"
                      />
                    </div>

                    {error && (
                      <div className="flex items-start gap-2 p-3 bg-rose-50 border border-rose-100 rounded-xl text-rose-800 text-xs font-semibold leading-relaxed">
                        <AlertCircle className="size-4 shrink-0 mt-0.5 text-rose-600" />
                        <span>{error}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 px-6 rounded-2xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 mt-4 hover:scale-[1.01] shadow-lg shadow-emerald-900/10 cursor-pointer disabled:opacity-70 disabled:pointer-events-none"
                    >
                      {loading ? (
                        <>
                          <RefreshCw className="size-4 animate-spin" />
                          Submitting parameters & routing inbox...
                        </>
                      ) : (
                        <>
                          <Send className="size-4" />
                          Send Inquiry
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
