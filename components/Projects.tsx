'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import React from 'react';

const projects = [
  
  {
    title: 'Laundry Service Website',
    description: 'Professional laundry service platform with booking system and responsive design',
    image: '/images/laundary.jpg', // ✅ local image
    tech: ['React', 'React.js', 'Tailwind CSS'],
    liveUrl: 'https://launderremedy.vercel.app/',
    githubUrl: null,
  },
  {
    title: 'PMS Portfolio Website',
    description: 'Clean and modern portfolio design for showcasing creative work and services',
    image: '/images/pms.png', // ✅ local image
    tech: ['Next.js', 'Tailwind', 'Framer Motion'],
    liveUrl: 'https://pms-graphix-portfolio.vercel.app/',
    githubUrl: null,
  },
 {
    title: 'Hamme.com.pk',
    description: 'E-commer ce platform for local products with shopping cart and payment integration.',
    image: '/images/hamme.png', // ✅ local image
    tech: ['E-commerce', 'Shopping', 'Responsive'],
    liveUrl: 'https://www.hamme.com.pk/collections/facewash',
    githubUrl: null,
 },
 {
    title: 'Researchcollab.ai',
    description: 'AI-powered research collaboration platform for academics and researchers.',
    image: '/images/research.png', // ✅ local image
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://researchcollab.ai/pricing/',
    githubUrl: null,
  },
 {
    title: 'Car Shop Website',
    description: 'Modern car dealership website with sleek UI, product showcase and comparison features',
    image: '/images/car showroom.jpg', // ✅ local image
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://your-car-shop-link.com',
    githubUrl: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-4 md:px-8 lg:px-16 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#ffffff]">
            Featured <span className="text-[#38bdf8]">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-[#38bdf8] mx-auto mb-12 rounded-full" />
          <p className="text-[#94a3b8] text-center max-w-2xl mx-auto mb-12">
            A selection of my real-world projects demonstrating practical skills and UI expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}