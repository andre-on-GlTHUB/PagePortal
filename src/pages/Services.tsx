import React from 'react';
import { motion } from 'motion/react';
import { 
  Globe, Search, Zap, ShieldCheck, 
  Layout, Smartphone, BarChart, Code, 
  Layers, Cpu, Cloud, Settings
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const detailedServices = [
  {
    title: 'Custom Website Design',
    description: 'We create visually stunning, user-centric websites that capture your brand essence and drive engagement. From landing pages to complex e-commerce platforms.',
    icon: Layout,
    features: ['Responsive Design', 'UI/UX Research', 'Brand Integration', 'Interactive Elements'],
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    title: 'SEO & Content Strategy',
    description: 'Boost your visibility and outrank competitors. We implement data-driven SEO strategies that improve your search rankings and attract high-quality leads.',
    icon: Search,
    features: ['Keyword Research', 'On-Page SEO', 'Technical Audit', 'Content Planning'],
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
  },
  {
    title: 'Business Process Automation',
    description: 'Eliminate repetitive tasks and human error. We build custom automation workflows that connect your favorite tools and streamline your operations.',
    icon: Zap,
    features: ['Workflow Design', 'API Integrations', 'CRM Setup', 'Custom Scripts'],
    color: 'text-amber-500',
    bgColor: 'bg-amber-50',
  },
  {
    title: 'Hosting & Security',
    description: 'Peace of mind for your digital assets. We provide high-speed hosting, SSL certificates, and regular security audits to keep your site safe and fast.',
    icon: ShieldCheck,
    features: ['99.9% Uptime', 'SSL Certificates', 'Daily Backups', 'Malware Protection'],
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50',
  },
  {
    title: 'Mobile App Development',
    description: 'Extend your reach with native or cross-platform mobile applications. We build intuitive apps that provide a seamless experience on iOS and Android.',
    icon: Smartphone,
    features: ['iOS & Android', 'Cross-Platform', 'App Store Optimization', 'Push Notifications'],
    color: 'text-rose-500',
    bgColor: 'bg-rose-50',
  },
  {
    title: 'Performance Optimization',
    description: 'Speed is a feature. We audit and optimize your existing website to ensure it loads instantly, providing a better user experience and higher SEO scores.',
    icon: Cpu,
    features: ['Core Web Vitals', 'Image Compression', 'Code Minification', 'Caching Strategies'],
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-50',
  },
];

export default function Services() {
  return (
    <div className="pb-20">
      {/* Header */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-brand-primary rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-brand-secondary rounded-full blur-[120px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Our <span className="gradient-text">Services.</span></h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              We offer a full suite of digital services designed to help your business thrive in the modern landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedServices.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border-none shadow-xl shadow-slate-100 hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden group">
                  <CardContent className="p-10">
                    <div className={`w-16 h-16 rounded-2xl ${s.bgColor} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                      <s.icon className={`w-8 h-8 ${s.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                    <p className="text-slate-600 mb-8 leading-relaxed">{s.description}</p>
                    <ul className="space-y-3">
                      {s.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-3 text-sm text-slate-500">
                          <div className={`w-1.5 h-1.5 rounded-full ${s.color.replace('text-', 'bg-')}`} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">How We <span className="gradient-text">Work.</span></h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Our streamlined process ensures your project is delivered on time, on budget, and beyond expectations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'We dive deep into your business goals and audience.' },
              { step: '02', title: 'Strategy', desc: 'We create a roadmap for success based on data.' },
              { step: '03', title: 'Execution', desc: 'Our experts build your solution with precision.' },
              { step: '04', title: 'Launch', desc: 'We deploy and optimize for maximum impact.' },
            ].map((p, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-black text-slate-200 mb-4 font-display">{p.step}</div>
                <h4 className="text-xl font-bold mb-2">{p.title}</h4>
                <p className="text-slate-500 text-sm">{p.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 right-0 w-1/2 h-[1px] bg-slate-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to transform your business?</h2>
          <Button asChild size="lg" className="rounded-full px-10 h-16 text-xl bg-brand-primary">
            <Link to="/contact">Get Started Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
