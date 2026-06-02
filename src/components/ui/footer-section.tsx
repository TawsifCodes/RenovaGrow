'use client';
import React from 'react';
import { Logo } from '@/components/ui/logo';

interface FooterLink {
  title: string;
  href: string;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: 'Product',
    links: [
      { title: 'Features', href: '#features' },
      { title: 'Templates', href: '#templates' },
      { title: 'Integrations', href: '#integrations' },
      { title: 'Updates', href: '#updates' },
    ],
  },
  {
    label: 'Company',
    links: [
      { title: 'About', href: '/about' },
      { title: 'Careers', href: '/careers' },
      { title: 'Privacy Policy', href: '/privacy' },
      { title: 'Terms of Service', href: '/terms' },
    ],
  },
  {
    label: 'Resources',
    links: [
      { title: 'Docs', href: '/docs' },
      { title: 'Guides', href: '/guides' },
      { title: 'Support', href: '/support' },
      { title: 'Contact', href: '/contact' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative w-full bg-emerald-950 text-white overflow-hidden pt-24 pb-12 mt-20 rounded-t-[3rem] md:rounded-t-[4rem]">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[200px] bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-24">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <Logo className="text-white" showText={true} />
            </div>
            <p className="text-emerald-100 font-serif italic text-lg leading-relaxed">
              &ldquo;Renovate your business, Grow your Reach.&rdquo;
            </p>
            <p className="text-emerald-200/60 text-base max-w-sm leading-relaxed">
              We are a modern, results-focused Digital Marketing Agency. We provide strategic shortform videos, high-end content designs, targeted marketing campaign execution, authority SEO, and business workflow automations.
            </p>
          </div>

          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerLinks.map((section) => (
              <div key={section.label}>
                <h3 className="text-sm text-emerald-400 font-semibold tracking-wider uppercase mb-6">{section.label}</h3>
                <ul className="space-y-4 text-emerald-100/60">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a href={link.href} className="hover:text-emerald-400 transition-colors duration-300">
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Massive Brand Text */}
        <div className="w-full flex justify-center items-center border-t border-white/10 pt-12 pb-8">
          <h1 className="text-[17vw] font-bold tracking-tighter text-white/5 leading-none select-none">
            RENOVAGROW
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-emerald-500/60 text-sm">
          <p>© {new Date().getFullYear()} RenovaGrow Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-emerald-400 transition-colors">Twitter</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
