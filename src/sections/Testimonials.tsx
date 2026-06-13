import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Sarah Jenkins',
      role: 'CTO, TechFlow Inc.',
      content: 'SeVenDor Solutions completely revitalized our cloud architecture. Their engineers migrated our legacy systems to a serverless AWS setup with zero downtime. Simply outstanding technical execution.',
      rating: 5,
    },
    {
      name: 'Michael Chang',
      role: 'Product Director, Velo Mobile',
      content: 'The UI/UX design team at SeVenDor Solutions is outstanding. They delivered a highly interactive, responsive mobile interface. User engagement metrics rose by 35% in our first month after release.',
      rating: 5,
    },
    {
      name: 'David Miller',
      role: 'Founder, Nexa Retail',
      content: 'Their headless e-commerce implementation boosted our page load speeds by 40% and checkout conversions by 18%. Excellent communication, neat repositories, and expert oversight.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-violet-600 dark:text-cyan-400 uppercase tracking-widest"
          >
            Client Reviews
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white"
          >
            What Our Partners Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-zinc-400 leading-relaxed text-base"
          >
            We partner with ambitious startups and modern enterprises to build software that scales. Hear from our clients.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: 'spring' }}
              className="group relative rounded-2xl glass-card glass-card-hover p-6 border border-slate-200/50 dark:border-white/5 flex flex-col justify-between"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-slate-200/80 dark:text-zinc-800/80 group-hover:text-violet-500/20 dark:group-hover:text-cyan-400/10 transition-colors pointer-events-none">
                <Quote className="w-10 h-10 transform scale-x-[-1]" />
              </div>

              <div className="space-y-4">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-600 dark:text-zinc-300 text-sm leading-relaxed relative z-10 italic">
                  "{review.content}"
                </p>
              </div>

              {/* Author details */}
              <div className="pt-6 border-t border-slate-200/50 dark:border-zinc-850 mt-6 flex items-center gap-3">
                {/* Mock avatar with initials */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-violet-600/10 to-cyan-500/10 border border-violet-500/20 flex items-center justify-center font-outfit text-sm font-bold text-violet-600 dark:text-cyan-400">
                  {review.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-outfit font-bold text-sm text-slate-800 dark:text-white">
                    {review.name}
                  </h4>
                  <p className="text-slate-400 dark:text-zinc-500 text-xs">
                    {review.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
