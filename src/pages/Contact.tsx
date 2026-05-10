import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Send, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { cn } from '../utils/helpers';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setFeedback('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || 'Failed to send message');

      setStatus('success');
      setFeedback(data.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
      setFeedback(err instanceof Error ? err.message : 'An unexpected error occurred');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <header className="mb-20 text-center lg:text-left lg:max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Let's build something <span className="text-secondary">extraordinary</span> together.</h1>
        <p className="text-xl text-on-surface-variant">
          Have a project in mind or just want to discuss architectural patterns? Reach out through the form or my social ecosystem.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 space-y-8">
          <Card className="hover:border-primary/20 transition-all flex items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <Mail size={28} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">Email Inquiry</p>
              <p className="text-lg font-bold">Perumalsevuga44@gmail.com</p>
            </div>
          </Card>
          
          <Card className="hover:border-secondary/20 transition-all flex items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
              <MapPin size={28} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">Location</p>
              <p className="text-lg font-bold">Madurai,Tamilnadu,India</p>
            </div>
          </Card>

          <Card className="hover:border-tertiary/20 transition-all flex items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-tertiary/10 flex items-center justify-center text-tertiary">
              <MessageSquare size={28} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">Social Ecosystem</p>
              <p className="text-lg font-bold">LinkedIn / X / GitHub</p>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-7">
          <Card padding="lg" className="shadow-2xl">
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-on-surface-variant ml-1">Your Name</label>
                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Your Name"
                    disabled={status === 'loading'}
                    className="w-full bg-surface-dim border border-white/5 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none disabled:opacity-50"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-on-surface-variant ml-1">Email Address</label>
                  <input
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Your@example.com"
                    disabled={status === 'loading'}
                    className="w-full bg-surface-dim border border-white/5 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-bold text-on-surface-variant ml-1">Project Details</label>
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your architectural needs and vision..."
                  rows={5}
                  disabled={status === 'loading'}
                  className="w-full bg-surface-dim border border-white/5 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none disabled:opacity-50"
                />
              </div>

              <AnimatePresence mode="wait">
                {feedback && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className={cn(
                      'flex items-center gap-3 p-4 rounded-xl text-sm font-medium',
                      status === 'success' ? 'bg-secondary/10 text-secondary' : 'bg-red-500/10 text-red-400'
                    )}
                  >
                    {status === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                    {feedback}
                  </motion.div>
                )}
              </AnimatePresence>

              <Button 
                size="lg" 
                className="w-full h-16 text-lg font-bold"
                isLoading={status === 'loading'}
                disabled={status === 'loading'}
                type="submit"
              >
                {status === 'loading' ? 'Processing...' : 'Deploy Message'} <Send size={20} className="ml-2" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
