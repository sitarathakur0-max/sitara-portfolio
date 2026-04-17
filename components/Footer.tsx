
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Facebook, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { platform } from 'os';
import { url } from 'inspector';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/sitara-thakur-3bb71738b/', icon: Linkedin },
    {platform: 'Facebook', url: 'https://www.facebook.com/share/1DosenEGJX/', icon:Facebook},
    { platform: 'GitHub', url: 'https://github.com', icon: Github },
    { platform: 'Email', url: 'mailto:sitarathakur@example.com', icon: Mail },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Web Development',
    'Frontend Development',
    'UI/UX Design',
    'Responsive Design',
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0f172a] border-t border-[#1e293b] py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4 text-[#ffffff]">
              Sitara <span className="text-[#38bdf8]">Thakur</span>
            </h3>
            <p className="text-[#94a3b8] text-sm leading-relaxed">
              Creating amazing web experiences with modern technologies.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-[#ffffff]">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-[#94a3b8] hover:text-[#38bdf8] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-[#ffffff]">Services</h4>
            <ul className="space-y-2">
              {services.map((service, idx) => (
                <li key={idx} className="text-[#94a3b8] text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-[#ffffff]">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    className="w-10 h-10 bg-[#1e293b] rounded-full flex items-center justify-center hover:bg-[#38bdf8] transition-all duration-300 border border-[#334155] hover:border-[#38bdf8]"
                  >
                    <Icon size={18} className="text-[#94a3b8] hover:text-[#ffffff] transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-[#1e293b] mt-8 pt-8 text-center"
        >
          <p className="text-[#94a3b8] text-sm">
            © {currentYear} Sitara Thakur. All rights reserved.
          </p>
          <p className="text-[#94a3b8] text-xs mt-2">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </motion.div>

      </div>
    </footer>
  );
}