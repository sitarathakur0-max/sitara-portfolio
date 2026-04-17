'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code2, Sparkles, Github, Linkedin, Facebook, ChevronDown } from 'lucide-react';

export default function Hero() {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 pt-20 pb-16 md:py-24 overflow-hidden">

      {/* Animated Background Gradient */}
      <div className="absolute inset-0 -z-10">
        {/* Main gradient orb */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[-800px] h-[-800px] rounded-full bg-[#38bdf8]/5 blur-3xl"
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

        {/* Second floating orb */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-[-400px] h-[-400px] rounded-full bg-[#38bdf8]/10 blur-3xl"
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Third orb */}
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[-400px] h-[-400px] rounded-full bg-[#38bdf8]/8 blur-3xl"
          animate={{
            y: [0, 40, 0],
            x: [0, -20, 0],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Fourth orb - bottom right */}
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-[-250px] h-[-250px] rounded-full bg-[#38bdf8]/6 blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center max-w-4xl mx-auto relative z-10"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#38bdf8]/10 text-[#38bdf8] text-sm font-medium border border-[#38bdf8]/20 backdrop-blur-sm">
            <Sparkles size={14} />
            Available for work
            <Code2 size={14} />
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-[#ffffff]"
        >
          Sitara Thakur
        </motion.h1>

        {/* Title with typing effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-6"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl">
            <span className="text-[#38bdf8]">Frontend</span>{' '}
            <span className="text-[#ffffff]">Web Developer</span>
          </h2>
          <div className="flex justify-center mt-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e293b]/50 backdrop-blur-sm border border-[#38bdf8]/20">
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-[#4ade80]"
              />
              <span className="text-[#94a3b8] text-xs">React · Next.js · Tailwind · Redux</span>
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-[#94a3b8] text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Crafting beautiful, responsive, and high-performance web applications
          with modern frontend technologies.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScrollToSection('contact')}
            className="group relative px-8 py-3 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#ffffff] font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#38bdf8]/30 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Hire Me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScrollToSection('projects')}
            className="px-8 py-3 bg-[#1e293b] hover:bg-[#334155] text-[#ffffff] font-semibold rounded-xl transition-all duration-300 border border-[#475569] backdrop-blur-sm"
          >
            View Projects
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex justify-center gap-6"
        >
          <motion.a
            whileHover={{ y: -3, scale: 1.1 }}
            href="https://www.facebook.com/share/1DosenEGJX/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#94a3b8] hover:text-[#38bdf8] transition-colors duration-300"
          >
            <Facebook size={20} />
          </motion.a>
          <motion.a
            whileHover={{ y: -3, scale: 1.1 }}
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#94a3b8] hover:text-[#38bdf8] transition-colors duration-300"
          >
            <Github size={20} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* ✅ Scroll Down Button - Hero section ke end mein */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-20"
        onClick={() => handleScrollToSection('about')}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[#94a3b8] text-xs">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-[#38bdf8]/40 flex justify-center items-start pt-2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]"
            />
          </motion.div>
        </motion.div>
      </motion.div>

    </section>
  );
}