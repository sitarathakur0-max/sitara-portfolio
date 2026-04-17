'use client';

import { motion } from 'framer-motion';
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiGit,
  SiGithub,
  SiVercel,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const skills = [
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26', delay: 0 },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', delay: 0.2 },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', delay: 0.25 },
  { name: 'React', icon: SiReact, color: '#61DAFB', delay: 0.3 },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff', delay: 0.35 },
  { name: 'Redux', icon: SiRedux, color: '#764ABC', delay: 0.4 },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', delay: 0.45 },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933', delay: 0.5 },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', delay: 0.55 },
  { name: 'REST APIs', icon: TbApi, color: '#38bdf8', delay: 0.6 },
  { name: 'GitHub', icon: SiGithub, color: '#ffffff', delay: 0.7 },
  { name: 'Vercel', icon: SiVercel, color: '#ffffff', delay: 0.75 },
];

export default function Skills() {
  return (
    <section id="skills" className="relative px-4 md:px-8 lg:px-16 py-16 md:py-24 overflow-hidden">
      
      {/* Animated Background like Hero Section */}
      <div className="absolute inset-0 -z-10">
        {/* Main gradient orb */}
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
        
        {/* Second floating orb */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#38bdf8]/8 blur-3xl"
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
        
        {/* Third orb */}
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-[#38bdf8]/6 blur-3xl"
          animate={{
            y: [0, 40, 0],
            x: [0, -20, 0],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#ffffff]">
            My <span className="text-[#38bdf8]">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-[#38bdf8] mx-auto mb-12 rounded-full" />
          <p className="text-[#94a3b8] text-center max-w-2xl mx-auto mb-12">
            Technologies, frameworks, and tools I work with daily
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 md:gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.03 }}
              whileHover={{ 
                scale: 1.08, 
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="group relative bg-[#1e293b] rounded-xl p-5 text-center transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Neon Glow Effect on Hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, ${skill.color}20 0%, transparent 80%)`,
                }}
              />
              
              {/* Border Neon Effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div 
                  className="absolute inset-0 rounded-xl"
                  style={{
                    boxShadow: `0 0 20px ${skill.color}, 0 0 40px ${skill.color}40`,
                  }}
                />
              </div>

              {/* Icon */}
              <div className="relative z-10">
                <skill.icon 
                  className="w-12 h-12 mx-auto mb-3 transition-all duration-300 group-hover:scale-110" 
                  style={{ color: skill.color }}
                />
                <h3 className="text-[#ffffff] font-semibold text-sm md:text-base group-hover:text-[#38bdf8] transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#1e293b]/50 backdrop-blur-sm border border-[#38bdf8]/20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              
            </motion.div>
            <span className="text-[#94a3b8] text-sm">
              Constantly learning and exploring new technologies
            </span>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}