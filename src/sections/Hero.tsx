import React from 'react';
import { ArrowRight, Activity, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

export const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="Home" className="relative min-h-screen flex items-center justify-center pt-20 sm:pt-28 pb-10 sm:pb-16 overflow-hidden bg-radial-glow bg-grid-pattern transition-colors duration-300">
      {/* Background Orbs simulating GitHub glowing nebulas */}
      <div className="absolute top-1/4 left-1/4 w-48 sm:w-80 h-48 sm:h-80 rounded-full bg-violet-600/10 blur-[130px] dark:bg-violet-600/15 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-56 sm:w-96 h-56 sm:h-96 rounded-full bg-cyan-500/10 blur-[130px] dark:bg-cyan-500/10 animate-pulse-slow delay-2000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Left Column: Headline and Copy (GitHub style text column with timeline line) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-left space-y-4 sm:space-y-6 pl-0 sm:pl-8 relative"
          >
            {/* Vertical timeline connector line */}
            <div className="absolute left-0 top-3 bottom-0 w-[2px] bg-gradient-to-b from-[#2ea44f] via-violet-500 to-transparent hidden sm:block">
              {/* Glowing top green anchor beacon */}
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#2ea44f] border-2 border-white dark:border-dark-bg shadow-[0_0_10px_#2ea44f]" />
            </div>

            {/* Pill Feature Tag */}
            {/* <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-dark-border bg-white/50 dark:bg-[#161b22]/50 text-slate-800 dark:text-[#c9d1d9] text-xs font-semibold shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
              <span className="text-[11px] tracking-wide">SeVenDor Solutions v2.4 Platform Live</span>
            </motion.div> */}

            {/* GitHub-style bold headline */}
            <motion.h1
              variants={itemVariants}
              className="font-outfit font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-slate-900 dark:text-white hero-title"
            >
              Building Smart <br />
              <span className="text-gradient-purple-cyan animate-gradient-x bg-gradient-to-r from-violet-500 via-indigo-400 to-cyan-400">
                Digital Solutions
              </span> <br />
              for Modern Businesses
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-slate-500 dark:text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed hero-subtitle"
            >
              The premium engineering agency for software, cloud, and mobile products. We build modern, robust applications with speed, security, and precision.
            </motion.p>

            {/* Buttons Row with GitHub Green style */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 pt-2"
            >
              <a href="#contact" className="btn-primary flex items-center gap-2 hero-cta">
                Get Started <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#services" className="btn-secondary flex items-center justify-center hero-cta">
                Explore Services
              </a>
            </motion.div>

            {/* Trust Metrics */}
            <motion.div
              variants={itemVariants}
              className="pt-8 border-t border-slate-200 dark:border-dark-border flex gap-8 text-slate-500 dark:text-zinc-500 text-xs sm:text-sm"
            >
              <div className="flex items-center gap-2">
                <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-md shadow-emerald-500/30 flex items-center justify-center ring-1 ring-white/20">
                  <ShieldCheck className="w-4 h-4" strokeWidth={2.5} />
                </div>
                <span>Enterprise Grade Security</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-md shadow-cyan-500/30 flex items-center justify-center ring-1 ring-white/20">
                  <Activity className="w-4 h-4" strokeWidth={2.5} />
                </div>
                <span>99.9% Project Uptime SLA</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: GitHub Homepage Rotating Globe Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative w-full flex justify-center items-center"
          >
            {/* Spinning Wireframe Globe */}
            <div className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[420px] aspect-square flex items-center justify-center select-none">
              {/* Large ambient glowing nebula behind globe */}
              <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-violet-600/10 to-cyan-500/10 dark:from-violet-600/20 dark:to-cyan-500/20 blur-3xl" />
              
              {/* Rotating main globe chassis */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full border border-slate-200 dark:border-zinc-800 flex items-center justify-center"
              >
                {/* Dashed outer atmospheric layer */}
                <div className="absolute inset-0 rounded-full border border-dashed border-violet-500/25 dark:border-cyan-500/15 scale-[1.08] animate-spin-slow" />
                
                {/* Latitudinal and longitudinal axis segments */}
                <div className="absolute inset-0 rounded-full border border-violet-500/15 dark:border-cyan-500/10 transform rotate-45" />
                <div className="absolute inset-0 rounded-full border border-violet-500/15 dark:border-cyan-500/10 transform -rotate-45" />
                <div className="absolute inset-x-0 h-0.5 border-t border-violet-500/20 dark:border-cyan-500/10 top-1/2 -translate-y-1/2" />
                <div className="absolute inset-y-0 w-0.5 border-l border-violet-500/20 dark:border-cyan-500/10 left-1/2 -translate-x-1/2" />
                
                {/* Horizontal latitude lines */}
                <div className="absolute inset-y-0 w-[70%] rounded-full border border-violet-500/15 dark:border-cyan-500/10 left-[15%]" />
                <div className="absolute inset-y-0 w-[40%] rounded-full border border-violet-500/15 dark:border-cyan-500/10 left-[30%]" />
                
                {/* Vertical longitude lines */}
                <div className="absolute inset-x-0 h-[70%] rounded-full border border-violet-500/15 dark:border-cyan-500/10 top-[15%]" />
                <div className="absolute inset-x-0 h-[40%] rounded-full border border-violet-500/15 dark:border-cyan-500/10 top-[30%]" />

                {/* SVG Connecting arcs */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="arcGlow" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                  {/* Arc paths */}
                  <path d="M 25 35 Q 50 10 75 35" fill="none" stroke="url(#arcGlow)" strokeWidth="0.6" strokeDasharray="1.5 1.5" />
                  <path d="M 15 50 Q 50 90 85 50" fill="none" stroke="url(#arcGlow)" strokeWidth="0.5" />
                  <path d="M 30 70 Q 50 30 70 70" fill="none" stroke="url(#arcGlow)" strokeWidth="0.8" strokeDasharray="2 1" />
                </svg>

                {/* Pulsing server coordinates/beacons */}
                <div className="absolute top-1/4 left-1/3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                  </span>
                </div>
                <div className="absolute bottom-1/3 right-1/4">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-500"></span>
                  </span>
                </div>
                <div className="absolute top-1/2 right-1/3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                </div>
                <div className="absolute bottom-1/4 left-1/4">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
