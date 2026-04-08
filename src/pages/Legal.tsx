import React from 'react';
import { motion } from 'motion/react';

const LegalLayout = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="pb-20">
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold"
        >
          {title}
        </motion.h1>
      </div>
    </section>
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="prose prose-slate max-w-none">
          {children}
        </div>
      </div>
    </section>
  </div>
);

export const PrivacyPolicy = () => (
  <LegalLayout title="Privacy Policy">
    <div className="space-y-8 text-slate-600">
      <p>Last updated: April 8, 2026</p>
      
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
        <p>Welcome to PagePortal. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at andre.william.hary@gmail.com.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
        <p>We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, when participating in activities on our website or otherwise contacting us.</p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li><strong>Personal Data:</strong> Name, email address, phone number, and any other information you provide via our contact forms.</li>
          <li><strong>Usage Data:</strong> We may also collect information how the Service is accessed and used. This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
        <p>We use personal information collected via our website for a variety of business purposes described below:</p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>To provide and maintain our Service</li>
          <li>To notify you about changes to our Service</li>
          <li>To provide customer support</li>
          <li>To gather analysis or valuable information so that we can improve our Service</li>
          <li>To monitor the usage of our Service</li>
          <li>To detect, prevent and address technical issues</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Cookies</h2>
        <p>We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Your Rights</h2>
        <p>You have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please submit a request form by contacting us.</p>
      </section>
    </div>
  </LegalLayout>
);

export const TermsOfService = () => (
  <LegalLayout title="Terms of Service">
    <div className="space-y-8 text-slate-600">
      <p>Last updated: April 8, 2026</p>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Agreement to Terms</h2>
        <p>These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and PagePortal ("we," "us" or "our"), concerning your access to and use of our website.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Intellectual Property Rights</h2>
        <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">3. User Representations</h2>
        <p>By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Service.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Prohibited Activities</h2>
        <p>You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Limitation of Liability</h2>
        <p>In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site.</p>
      </section>
    </div>
  </LegalLayout>
);
