'use client';

import { useState, useEffect } from 'react';

export function useActiveSection(
  sectionIds: string[],
  offset: number = 100
): string {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: `-${offset}px 0px -${window.innerHeight - offset * 2}px 0px`,
          threshold: 0.3,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds, offset]);

  return activeSection;
}