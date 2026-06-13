import React from 'react';
import { CheckCircle2, Zap, Shield, Users, Clock, Rocket, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhyUs: React.FC = () => {
  const reasons = [
    {
      icon: Zap,
      title: 'Agile Product Design',
      desc: 'We deliver functional prototypes rapidly, iterating closely based on user testing and real-world feedback to ensure pixel-perfect results.',
      gradient: 'from-amber-400 to-orange-500',
      shadow: 'shadow-amber-500/40',
    },
    {
      icon: Shield,
      title: 'Robust Security Audited',
      desc: 'Enterprise-grade encryption and protocol testing baked into every system layer. Your data and applications stay protected at all times.',
      gradient: 'from-emerald-400 to-teal-500',
      shadow: 'shadow-emerald-500/40',
    },
    {
      icon: Users,
      title: 'Expert Dedicated Teams',
      desc: 'Access senior software engineers, solution architects, and professional designers who bring years of specialized experience to your project.',
      gradient: 'from-violet-500 to-fuchsia-500',
      shadow: 'shadow-violet-500/40',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      desc: 'We follow strict milestone-based timelines with transparent progress tracking. Every sprint is planned, executed, and delivered on schedule.',
      gradient: 'from-cyan-400 to-blue-500',
      shadow: 'shadow-cyan-500/40',
    },
    {
      icon: Rocket,
      title: 'Scalable Architecture',
      desc: 'Our solutions are built to grow with your business. From microservices to cloud-native deployments, we architect for the future from day one.',
      gradient: 'from-rose-500 to-red-500',
      shadow: 'shadow-rose-500/40',
    },
    {
      icon: HeartHandshake,
      title: 'Long-Term Partnership',
      desc: 'We don\'t just build and leave. Our ongoing support, maintenance, and optimization services ensure your product keeps performing at its best.',
      gradient: 'from-indigo-500 to-purple-500',
      shadow: 'shadow-indigo-500/40',
    },
  ];

  return (
    <section id="whyus" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-zinc-900/30 transition-colors duration-300">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-violet-600 dark:text-cyan-400 uppercase tracking-widest"
          >
            Why Choose Us
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white"
          >
            Why Forward-Thinking Brands Choose SeVenDor Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-zinc-400 leading-relaxed text-base"
          >
            We combine cutting-edge technology with proven methodologies to deliver exceptional digital products. Here's what sets us apart from the rest.
          </motion.p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, type: 'spring', stiffness: 100 }}
              className="group p-6 rounded-2xl glass-card glass-card-hover border border-slate-200/50 dark:border-white/5 relative overflow-hidden"
            >
              {/* Hover gradient accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 to-cyan-500/0 group-hover:from-violet-500/[0.03] group-hover:to-cyan-500/[0.03] transition-all duration-500" />

              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${reason.gradient} text-white shadow-lg ${reason.shadow} ring-1 ring-white/20 mb-4`}>
                  <reason.icon className="w-6 h-6" strokeWidth={2.5} />
                </div>
                <h3 className="font-outfit font-bold text-lg text-slate-800 dark:text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed">
                  {reason.desc}
                </p>
              </div>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden p-8 sm:p-10 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-500 opacity-[0.07] dark:opacity-[0.12]" />
          <div className="absolute inset-0 border border-violet-500/10 dark:border-cyan-500/10 rounded-2xl" />
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-md shadow-emerald-500/30 flex items-center justify-center ring-1 ring-white/20">
                <CheckCircle2 className="w-4 h-4" strokeWidth={2.5} />
              </div>
              <span className="text-sm font-semibold text-slate-600 dark:text-zinc-300">Trusted by 150+ businesses worldwide</span>
            </div>
            <h3 className="font-outfit font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-3">
              Ready to Build Something Extraordinary?
            </h3>
            <p className="text-slate-500 dark:text-zinc-400 text-sm max-w-xl mx-auto mb-6">
              Join the growing list of companies that trust SeVenDor Solutions to bring their vision to life with world-class engineering.
            </p>
            <a href="#contact" className="btn-primary inline-flex items-center gap-2 py-3 px-8">
              Let's Talk <Rocket className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default WhyUs;
