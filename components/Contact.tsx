
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  User, 
  MessageSquare,
  Github,
  Linkedin,
  Facebook,
  Sparkles
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = {
    email: 'sitarathakur0@gmail.com',
    phone: '+92 3177720927',
    location: 'Okara, Punjab, Pakistan',
    responseTime: 'Within 24 hours'
  };
  const socialLinks = [
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/sitara-thakur-3bb71738b/', icon: Linkedin },
    { platform: 'Facebook', url: 'https://www.facebook.com/share/1DosenEGJX/', icon: Facebook },
    { platform: 'GitHub', url: 'https://github.com', icon: Github },
  ];

  return (
    <section id="contact" className="relative px-4 md:px-8 lg:px-16 py-16 md:py-24 overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 rounded-full bg-[#38bdf8]/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[-25px] h-[-25px] rounded-full bg-[#38bdf8]/8 blur-3xl"
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/20 mb-6"
          >
            <Sparkles size={16} className="text-[#38bdf8]" />
            <span className="text-[#38bdf8] text-sm font-medium">Get in Touch</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#ffffff]">
            Let's Work <span className="text-[#38bdf8]">Together</span>
          </h2>
          <div className="w-20 h-1 bg-[#38bdf8] mx-auto mb-6 rounded-full" />
          <p className="text-[#94a3b8] max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-[#1e293b] rounded-2xl p-8 shadow-xl border border-[#334155]">
              <h3 className="text-2xl font-bold mb-6 text-[#ffffff] flex items-center gap-2">
                <Mail className="w-6 h-6 text-[#38bdf8]" />
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-[#94a3b8] mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94a3b8] w-4 h-4" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-[#0f172a] border border-[#334155] rounded-xl text-[#ffffff] placeholder-[#94a3b8] focus:outline-none focus:border-[#38bdf8] transition-colors"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#94a3b8] mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94a3b8] w-4 h-4" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-[#0f172a] border border-[#334155] rounded-xl text-[#ffffff] placeholder-[#94a3b8] focus:outline-none focus:border-[#38bdf8] transition-colors"
                      placeholder="hello@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#94a3b8] mb-2">
                    Your Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 text-[#94a3b8] w-4 h-4" />
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-[#0f172a] border border-[#334155] rounded-xl text-[#ffffff] placeholder-[#94a3b8] focus:outline-none focus:border-[#38bdf8] transition-colors resize-none"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#ffffff] font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </motion.button>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-[#4ade80] font-medium"
                  >
                    ✨ Message sent successfully!
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-linear-to-br from-[#38bdf8]/10 to-[#38bdf8]/5 rounded-2xl p-8 shadow-xl border border-[#38bdf8]/20">
              <h3 className="text-2xl font-bold mb-6 text-[#ffffff]">Contact Information</h3>
              
              <div className="space-y-5 mb-8">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-[#38bdf8]/20 rounded-full flex items-center justify-center group-hover:bg-[#38bdf8]/30 transition-colors">
                    <Mail className="w-5 h-5 text-[#38bdf8]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#94a3b8]">Email</p>
                    <p className="font-semibold text-[#ffffff]">{contactInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-[#38bdf8]/20 rounded-full flex items-center justify-center group-hover:bg-[#38bdf8]/30 transition-colors">
                    <Phone className="w-5 h-5 text-[#38bdf8]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#94a3b8]">Phone</p>
                    <p className="font-semibold text-[#ffffff]">{contactInfo.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-[#38bdf8]/20 rounded-full flex items-center justify-center group-hover:bg-[#38bdf8]/30 transition-colors">
                    <MapPin className="w-5 h-5 text-[#38bdf8]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#94a3b8]">Location</p>
                    <p className="font-semibold text-[#ffffff]">{contactInfo.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-[#38bdf8]/20 rounded-full flex items-center justify-center group-hover:bg-[#38bdf8]/30 transition-colors">
                    <Clock className="w-5 h-5 text-[#38bdf8]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#94a3b8]">Response Time</p>
                    <p className="font-semibold text-[#ffffff]">{contactInfo.responseTime}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-[#ffffff]">Follow Me</h4>
                <div className="flex gap-3">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <motion.a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -3, scale: 1.1 }}
                        className="w-11 h-11 bg-[#1e293b] rounded-full flex items-center justify-center hover:bg-[#38bdf8] transition-all duration-300 border border-[#334155] hover:border-[#38bdf8]"
                      >
                        <Icon size={20} className="text-[#94a3b8] hover:text-[#ffffff] transition-colors" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Extra Info */}
              <div className="mt-8 pt-6 border-t border-[#334155]">
                <p className="text-[#94a3b8] text-sm text-center">
                   Available for freelance work and collaborations
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}