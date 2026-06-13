import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroSlide {
  title: string;
  description: string;
  cta: string;
  image: string;
  variant: 'purple' | 'cyan';
}

const slides: HeroSlide[] = [
  {
    title: 'Discover effortless shopping for your modern lifestyle.',
    description: 'Find premium products, smart tools, and curated bundles with fast checkout and seamless browsing.',
    cta: 'Shop latest gear',
    image: 'https://images.unsplash.com/photo-1512440155037-1006b1b1ec2c?auto=format&fit=crop&w=1200&q=80',
    variant: 'purple'
  },
  {
    title: 'Elevate your workspace with smart accessories.',
    description: 'Explore ergonomic keyboards, crisp monitors, and powerful laptops designed for creators.',
    cta: 'Browse workspace',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80',
    variant: 'cyan'
  },
  {
    title: 'Smart home essentials that simplify every day.',
    description: 'Control lighting, security, and comfort from one easy app-driven storefront.',
    cta: 'See home tech',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    variant: 'purple'
  }
];

export const Carousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);

  const current = slides[index];

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-400/5 pointer-events-none" />
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="relative p-8 lg:p-14 flex flex-col justify-center gap-6 z-10">
          <span className="inline-flex rounded-full bg-violet-500/10 text-violet-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] dark:bg-violet-500/15 dark:text-violet-300">
            Featured collection
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-slate-950 dark:text-white">
            {current.title}
          </h1>
          <p className="max-w-2xl text-base text-slate-600 dark:text-slate-300">{current.description}</p>
          <Link to="/products" className="btn-primary inline-flex w-full sm:w-auto items-center justify-center px-8 py-3 font-semibold">
            {current.cta}
          </Link>
        </div>
        <div className="relative h-80 lg:h-auto overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={current.image}
              src={current.image}
              alt={current.title}
              className="h-full w-full object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
              loading="lazy"
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/placeholder.svg'; }}
            />
          </AnimatePresence>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-1/2 left-4 right-4 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setIndex((prev) => (prev - 1 + slides.length) % slides.length)}
          className="pointer-events-auto rounded-full bg-white/90 p-3 text-slate-900 shadow-md transition hover:bg-white dark:bg-zinc-950 dark:text-slate-100"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => setIndex((prev) => (prev + 1) % slides.length)}
          className="pointer-events-auto rounded-full bg-white/90 p-3 text-slate-900 shadow-md transition hover:bg-white dark:bg-zinc-950 dark:text-slate-100"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
};
export default Carousel;
