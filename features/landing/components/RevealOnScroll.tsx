'use client';

import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  className?: string;
  delay?: number;
}

export const RevealOnScroll: React.FC<RevealProps> = ({
  children,
  direction = 'right',
  className = '',
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const offsetClass = direction === 'left' ? '-translate-x-12' : 'translate-x-12';

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out transform will-change-transform ${
        isVisible
          ? 'opacity-100 translate-x-0'
          : `opacity-0 ${offsetClass}`
      } ${className}`}
    >
      {children}
    </div>
  );
};
