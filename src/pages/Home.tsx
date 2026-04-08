import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, CheckCircle2, Star, Globe, Search, 
  Zap, ShieldCheck, Rocket, Send, Phone, Mail,
  MessageSquare, Smartphone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Website Design',
    description: 'Bespoke, high-performance websites tailored to your brand identity and goals.',
    icon: Globe,
    color: 'bg-blue-500',
  },
  {
    title: 'SEO Optimization',
    description: 'Rank higher on search engines and attract more organic traffic to your business.',
    icon: Search,
    color: 'bg-purple-500',
  },
  {
    title: 'Business Automation',
    description: 'Streamline your workflows and save time with custom automation solutions.',
    icon: Zap,
    color: 'bg-amber-500',
  },
  {
    title: 'Hosting & Maintenance',
    description: 'Secure, lightning-fast hosting and ongoing support to keep your site running smooth.',
    icon: ShieldCheck,
    color: 'bg-emerald-500',
  },
];

const provenFacts = [
  {
    title: 'Customer Interaction',
    content: 'Having a modern website can lead to above a 20% increase in customer interaction and engagement.',
    icon: MessageSquare,
  },
  {
    title: 'Brand Credibility',
    content: '75% of consumers admit to making judgements on a company\'s credibility based on their website design.',
    icon: ShieldCheck,
  },
  {
    title: 'Mobile Accessibility',
    content: 'Over 55% of all worldwide website traffic comes from mobile devices, making responsive design essential.',
    icon: Smartphone,
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 md:pt-32 md:pb-48">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-[120px] animate-pulse delay-700" />
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block py-1 px-4 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-bold mb-6 tracking-wider uppercase">
                  Elevate Your Digital Presence
                </span>
                <h1 className="text-5xl md:text-7xl font-extrabold font-display leading-[1.1] mb-6">
                  Build a Website That <span className="gradient-text">Actually Converts.</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
                  We combine premium design with cutting-edge technology to create digital experiences that turn visitors into loyal customers.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                  <Button asChild size="lg" className="rounded-full px-8 h-14 text-lg bg-brand-primary hover:bg-brand-primary/90 shadow-xl shadow-brand-primary/20 group">
                    <Link to="/contact">
                      Get Started <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg border-slate-200 hover:bg-slate-50">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="flex-1 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border-8 border-white">
                <img 
                  src="https://picsum.photos/seed/tech/800/600" 
                  alt="Modern Web Design" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 glass p-4 rounded-2xl shadow-xl z-20 hidden lg:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Conversion Rate</p>
                    <p className="text-xl font-bold">+124%</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-10 glass p-4 rounded-2xl shadow-xl z-20 hidden lg:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Page Speed</p>
                    <p className="text-xl font-bold">99/100</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facts Section */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Proven Digital Facts</p>
            <h2 className="text-3xl md:text-4xl font-bold">Why Your Digital Presence <span className="gradient-text">Matters.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {provenFacts.map((fact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg shadow-slate-100 bg-slate-50/50 hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary mb-6">
                      <fact.icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-xl text-slate-900 mb-4">{fact.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{fact.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive Solutions for <span className="gradient-text">Modern Business.</span></h2>
            <p className="text-lg text-slate-600">We don't just build websites; we build growth engines. Everything you need to succeed online, all in one place.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full group hover:-translate-y-2 transition-all duration-300 border-none shadow-xl shadow-slate-200/50 overflow-hidden">
                  <div className={`h-2 w-full ${s.color}`} />
                  <CardContent className="p-8">
                    <div className={`w-14 h-14 rounded-2xl ${s.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <s.icon className={`w-7 h-7 ${s.color.replace('bg-', 'text-')}`} />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{s.description}</p>
                    <Link to="/services" className="text-brand-primary text-sm font-bold flex items-center gap-2 group/link">
                      Learn More <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1">
              <img 
                src="https://picsum.photos/seed/office/800/800" 
                alt="Our Process" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Why Businesses <span className="gradient-text">Choose PagePortal.</span></h2>
              <p className="text-lg text-slate-600 mb-10">We bridge the gap between aesthetics and functionality. Our process is designed for speed, quality, and most importantly, results.</p>
              
              <div className="space-y-6">
                {[
                  { title: 'Lightning Fast Performance', desc: 'We optimize every line of code for maximum speed and SEO benefit.' },
                  { title: 'Conversion-First Design', desc: 'Every element is placed with the goal of guiding users toward action.' },
                  { title: 'Modern Tech Stack', desc: 'We use the latest technologies to ensure your site is future-proof.' },
                  { title: 'Dedicated Support', desc: 'Our team is always here to help you grow and adapt to new challenges.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative bg-slate-900 rounded-[3rem] p-12 md:p-24 overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary rounded-full blur-[120px]" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-secondary rounded-full blur-[120px]" />
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Start Your Project <span className="gradient-text">Today.</span></h2>
              <p className="text-xl text-slate-400 mb-12">Ready to take your business to the next level? Let's build something extraordinary together.</p>
              <Button asChild size="lg" className="rounded-full px-10 h-16 text-xl bg-brand-primary hover:bg-brand-primary/90 shadow-2xl shadow-brand-primary/40">
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-bold mb-6">Let's <span className="gradient-text">Talk.</span></h2>
                <p className="text-lg text-slate-600 mb-12">Have a question or ready to start? Fill out the form and we'll get back to you within 24 hours.</p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-brand-primary">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Call Us</p>
                      <p className="text-xl font-bold text-slate-900">(669) 208-4000</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-brand-primary">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email Us</p>
                      <p className="text-xl font-bold text-slate-900">andre.william.hary@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="border-none shadow-2xl shadow-slate-200 p-8 rounded-3xl">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Full Name</label>
                      <Input placeholder="John Doe" className="rounded-xl bg-slate-50 border-slate-200" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Email Address</label>
                      <Input type="email" placeholder="john@example.com" className="rounded-xl bg-slate-50 border-slate-200" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Service Interested In</label>
                    <Input placeholder="e.g. Website Design" className="rounded-xl bg-slate-50 border-slate-200" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Your Message</label>
                    <Textarea placeholder="Tell us about your project..." className="rounded-xl bg-slate-50 border-slate-200 min-h-[150px]" />
                  </div>
                  <Button className="w-full rounded-xl h-14 text-lg bg-brand-primary hover:bg-brand-primary/90 shadow-lg shadow-brand-primary/20">
                    Send Message <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
