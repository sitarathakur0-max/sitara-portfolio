'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl?: string | null; // ✅ optional
  delay: number;
}

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  liveUrl,
  githubUrl,
  delay,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10 }}
      className="bg-[#1e293b]/80 backdrop-blur-md border border-[#334155] rounded-2xl overflow-hidden hover:shadow-[0_20px_50px_rgba(56,189,248,0.2)] transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-[#94a3b8] text-sm mb-4">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tech.map((t, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-[#334155] text-[#38bdf8] text-xs rounded-md"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          {/* Live Button */}
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#38bdf8] hover:bg-[#0ea5e9] text-white rounded-lg transition-all duration-300 hover:scale-105 text-sm font-medium"
          >
            <ExternalLink size={16} /> View Live
          </a>

          {/* GitHub Button (only if exists) */}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#334155] hover:bg-[#475569] text-white rounded-lg transition-all duration-300 hover:scale-105 text-sm font-medium"
            >
              <Github size={16} /> Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}