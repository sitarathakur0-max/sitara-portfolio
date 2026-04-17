'use client';

import { motion } from 'framer-motion';

interface SkillCardProps {
  name: string;
  icon: string;
  delay: number;
}

export default function SkillCard({ name, icon, delay }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-[#1e293b] rounded-xl p-6 text-center hover:shadow-2xl transition-all duration-300 cursor-pointer"
    >
      <div className="text-5xl mb-3">{icon}</div>
      <h3 className="text-[#ffffff] font-semibold text-lg">{name}</h3>
    </motion.div>
  );
}