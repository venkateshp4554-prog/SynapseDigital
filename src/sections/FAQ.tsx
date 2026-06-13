import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'What technologies do you specialize in?',
      a: 'We specialize in modern frontend stacks (React, TypeScript, Tailwind CSS), powerful enterprise backend environments (.NET, Node.js), robust relational database systems (SQL Server), and secure cloud deployment architectures (Azure, AWS, Docker).',
    },
    {
      q: 'How long does a typical software project take?',
      a: 'Small MVP applications usually take 4-8 weeks. Larger SaaS products, enterprise resource planning dashboards, and complex cloud integrations take 3-6 months. We design in agile sprints to deploy usable code segments continuously.',
    },
    {
      q: 'Do we own the source code of our project?',
      a: 'Yes, absolutely. Once payment milestones are completed, you retain 100% ownership of the repository, assets, and intellectual property. We configure the servers and hand over git keys cleanly.',
    },
    {
      q: 'How do you handle post-launch maintenance and support?',
      a: 'We provide dedicated support contracts (SLA-based), offering active monitoring, security patches, library upgrades, database optimization, and quick troubleshooting cycles to keep systems operational.',
    },
    {
      q: 'Can we change the size of our development squad on demand?',
      a: 'Yes. Our plans are highly agile. You can request to scale up from a single developer to a complete squad (PM, UI/UX, Devs, QA) or scale back as your product milestones change.',
    },
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-violet-600 dark:text-cyan-400 uppercase tracking-widest"
          >
            Faq
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-outfit font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-zinc-400 leading-relaxed text-sm sm:text-base"
          >
            Get clear, quick answers about how we build products, scale developer teams, and transfer project keys.
          </motion.p>
        </div>

        {/* Collapsible Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-2xl border border-slate-200/50 dark:border-white/5 bg-slate-50/50 dark:bg-zinc-900/20 backdrop-blur-md overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-800 dark:text-white font-outfit text-sm sm:text-base hover:bg-slate-100/50 dark:hover:bg-zinc-900/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-md shadow-violet-500/30 flex items-center justify-center ring-1 ring-white/20">
                      <HelpCircle className="w-4 h-4" strokeWidth={2.5} />
                    </div>
                    <span>{faq.q}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-slate-400 dark:text-zinc-500"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="p-5 pt-0 text-slate-500 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed border-t border-slate-200/30 dark:border-zinc-800/40 mt-1">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default FAQ;
