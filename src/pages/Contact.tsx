import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, Clock, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you'd send the data here
  };

  return (
    <div className="pb-20">
      {/* Header */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Get in <span className="gradient-text">Touch.</span></h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Have a project in mind? We'd love to hear from you. Let's build something amazing together.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Call Us</p>
                        <p className="text-lg font-bold text-slate-900">(669) 208-4000</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Email Us</p>
                        <p className="text-lg font-bold text-slate-900">andre.william.hary@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Visit Us</p>
                        <p className="text-lg font-bold text-slate-900">Los Gatos, Ca, 95032</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-slate-900 rounded-3xl text-white">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-brand-primary" /> Business Hours
                  </h4>
                  <ul className="space-y-3 text-sm text-slate-400">
                    <li className="flex justify-between"><span>Monday - Friday</span> <span>9:00 AM - 6:00 PM</span></li>
                    <li className="flex justify-between"><span>Saturday</span> <span>10:00 AM - 4:00 PM</span></li>
                    <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-none shadow-2xl shadow-slate-200 p-8 md:p-12 rounded-[2rem]">
                  {submitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Send className="w-10 h-10" />
                      </div>
                      <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                      <p className="text-slate-600 mb-8">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                      <Button onClick={() => setSubmitted(false)} variant="outline" className="rounded-full">Send Another Message</Button>
                    </motion.div>
                  ) : (
                    <form className="space-y-8" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                            Full Name <span className="text-brand-accent">*</span>
                          </label>
                          <Input required placeholder="John Doe" className="rounded-xl h-12 bg-slate-50 border-slate-200 focus:ring-brand-primary" />
                        </div>
                        <div className="space-y-3">
                          <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                            Email Address <span className="text-brand-accent">*</span>
                          </label>
                          <Input required type="email" placeholder="john@example.com" className="rounded-xl h-12 bg-slate-50 border-slate-200 focus:ring-brand-primary" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-sm font-bold text-slate-700">Phone Number</label>
                          <Input placeholder="(555) 000-0000" className="rounded-xl h-12 bg-slate-50 border-slate-200 focus:ring-brand-primary" />
                        </div>
                        <div className="space-y-3">
                          <label className="text-sm font-bold text-slate-700">Subject</label>
                          <Input placeholder="Project Inquiry" className="rounded-xl h-12 bg-slate-50 border-slate-200 focus:ring-brand-primary" />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                          Your Message <span className="text-brand-accent">*</span>
                        </label>
                        <Textarea required placeholder="Tell us about your project, goals, and timeline..." className="rounded-xl bg-slate-50 border-slate-200 focus:ring-brand-primary min-h-[180px]" />
                      </div>

                      <Button type="submit" className="w-full rounded-xl h-14 text-lg bg-brand-primary hover:bg-brand-primary/90 shadow-xl shadow-brand-primary/20">
                        Send Message <Send className="ml-2 w-5 h-5" />
                      </Button>
                    </form>
                  )}
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="h-[400px] bg-slate-200 rounded-[2rem] flex items-center justify-center overflow-hidden relative grayscale">
            <img src="https://picsum.photos/seed/map/1600/800" alt="Map" className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass p-6 rounded-2xl shadow-2xl text-center">
                <MapPin className="w-10 h-10 text-brand-primary mx-auto mb-3" />
                <h4 className="font-bold text-slate-900">Our Office</h4>
                <p className="text-sm text-slate-600">Los Gatos, Ca, 95032</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
