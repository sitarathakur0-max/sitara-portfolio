'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Globe, Sparkles, RefreshCw } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 800);
  };

  return (
    <section
      id="about"
      className="relative px-4 md:px-8 lg:px-16 py-16 md:py-24 overflow-hidden"
    >
      {/* Background Light Animation */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isAnimating ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#38bdf8]/20 blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-[#38bdf8]/10 blur-2xl" />
        <div className="absolute bottom-1/4 right-1/4 w-36 h-96 rounded-full bg-[#38bdf8]/15 blur-2xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#ffffff]">
            About <span className="text-[#38bdf8]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-[#38bdf8] mx-auto mb-12 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - DP and Click Animation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            {/* Click Animation Container */}
            <motion.div
              className="relative cursor-pointer group"
              onClick={handleClick}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: isAnimating
                  ? ['0 0 0 0 rgba(56,189,248,0)', '0 0 0 20px rgba(56,189,248,0.3)', '0 0 0 0 rgba(56,189,248,0)']
                  : 'none'
              }}
              transition={{ duration: 0.8, repeat: isAnimating ? 1 : 0 }}
            >
              {/* Animated Ring on Click */}
              <AnimatePresence>
                {isAnimating && (
                  <motion.div
                    initial={{ scale: 1, opacity: 0.8 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 rounded-full border-4 border-[#38bdf8]"
                  />
                )}
              </AnimatePresence>

              {/* Profile Image - SIZE BADA KIYA ✅ */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#38bdf8] shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-[#38bdf8]/30">
                <Image
                  src="/images/star.jpg"
                  alt="Profile"
                  fill
                  sizes="(max-width: 768px) 256px, 320px"
                  className="object-cover"
                />
              </div>

              {/* Refresh Icon on Hover */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="absolute -bottom-2 -right-2 bg-[#38bdf8] rounded-full p-2 shadow-lg"
              >
                <RefreshCw size={20} className="text-[#ffffff]" />
              </motion.div>
            </motion.div>

            {/* Click Instruction */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              className="text-[#94a3b8] text-sm mt-4"
            >
            </motion.p>
          </motion.div>

          {/* Right Side - Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-[#94a3b8] text-lg leading-relaxed mb-6">
              I'm a passionate Developer with over 2 years of experience
              building web applications. I love creating elegant solutions to complex
              problems and staying up-to-date with the latest technologies.
            </p>
            <p className="text-[#94a3b8] text-lg leading-relaxed mb-6">
              When I'm not coding, you can find me contributing to open-source projects,
              writing technical articles, or exploring new tech trends. I believe in
              continuous learning and sharing knowledge with the developer community.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { value: '2+', label: 'Years Exp', color: 'text-[#38bdf8]' },
                { value: '8+', label: 'Projects', color: 'text-[#4ade80]' },
                { value: '5+', label: 'Clients', color: 'text-[#c084fc]' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                  className="bg-[#1e293b] rounded-xl p-4 text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                  <p className="text-[#94a3b8] text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 3 Cards Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12"
        >
          {[
            { icon: Code2, label: 'Clean Code', color: 'text-[#38bdf8]', desc: 'Write maintainable code' },
            { icon: Globe, label: 'Web Standards', color: 'text-[#4ade80]', desc: 'Modern best practices' },
            { icon: Sparkles, label: 'Innovation', color: 'text-[#c084fc]', desc: 'Creative solutions' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-[#1e293b] rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <item.icon className={`w-10 h-10 ${item.color} mx-auto mb-3`} />
              <p className="text-[#ffffff] font-medium text-lg">{item.label}</p>
              <p className="text-[#94a3b8] text-sm mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}