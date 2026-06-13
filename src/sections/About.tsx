import React from 'react';
import { Target, Eye, Code, Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-violet-600 dark:text-cyan-400 uppercase tracking-widest"
          >
            About Our Company
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white"
          >
            Accelerating Digital Transformation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-zinc-400 leading-relaxed text-base"
          >
            We are a team of expert engineers, developers, and product creators committed to crafting robust digital ecosystems. We combine architectural excellence with sleek design to deliver solutions that drive real business impact.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl glass-card border border-slate-200/50 dark:border-white/5 relative group"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-violet-500/40 ring-1 ring-white/20">
                <Target className="w-6 h-6" strokeWidth={2.5} />
              </div>
              <h3 className="font-outfit font-bold text-xl text-slate-800 dark:text-white">Our Mission</h3>
            </div>
            <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed">
              To build high-performance, intelligent digital products that solve complex business hurdles, empowering startups and enterprise teams to innovate and grow at scale. We believe every business deserves world-class technology, regardless of size or industry.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="p-8 rounded-2xl glass-card border border-slate-200/50 dark:border-white/5 relative group"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-500/40 ring-1 ring-white/20">
                <Eye className="w-6 h-6" strokeWidth={2.5} />
              </div>
              <h3 className="font-outfit font-bold text-xl text-slate-800 dark:text-white">Our Vision</h3>
            </div>
            <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed">
              To become the global cornerstone of software excellence, setting design and architectural benchmarks for the web, mobile, and cloud environments of tomorrow. We strive to be the partner every forward-thinking brand turns to first.
            </p>
          </motion.div>
        </div>

        {/* Professional Core Values/Data Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-slate-50 dark:bg-zinc-900/40 rounded-3xl p-8 md:p-12 border border-slate-200/50 dark:border-white/5"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white mb-4 inline-flex shadow-lg shadow-blue-500/40 ring-1 ring-white/20">
                <Code className="w-6 h-6" strokeWidth={2.5} />
              </div>
              <h4 className="text-xl font-bold font-outfit text-slate-800 dark:text-white mb-3">Our Approach</h4>
              <p className="text-sm text-slate-500 dark:text-zinc-400 leading-relaxed">
                We blend agile methodology with deep technical expertise to deliver scalable solutions tailored to your unique business needs. We prioritize clean code and robust architecture.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 text-white mb-4 inline-flex shadow-lg shadow-emerald-500/40 ring-1 ring-white/20">
                <ShieldCheck className="w-6 h-6" strokeWidth={2.5} />
              </div>
              <h4 className="text-xl font-bold font-outfit text-slate-800 dark:text-white mb-3">Core Values</h4>
              <p className="text-sm text-slate-500 dark:text-zinc-400 leading-relaxed">
                Transparency, excellence, and continuous innovation drive every project we undertake. We believe in open communication and delivering value that consistently exceeds expectations.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white mb-4 inline-flex shadow-lg shadow-amber-500/40 ring-1 ring-white/20">
                <Zap className="w-6 h-6" strokeWidth={2.5} />
              </div>
              <h4 className="text-xl font-bold font-outfit text-slate-800 dark:text-white mb-3">Commitment</h4>
              <p className="text-sm text-slate-500 dark:text-zinc-400 leading-relaxed">
                We are committed to building long-term partnerships, providing ongoing support and strategic guidance long after the initial launch to ensure your product remains competitive.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default About;
