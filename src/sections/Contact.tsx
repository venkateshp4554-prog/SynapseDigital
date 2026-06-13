import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  const contactDetails = [
    {
      icon: MessageCircle,
      label: 'Chat on WhatsApp',
      value: '+91 7995888660',
      link: 'https://wa.me/917995888660',
      gradient: 'from-green-400 to-emerald-500',
      shadow: 'shadow-green-500/40',
    },
    {
      icon: Phone,
      label: 'Call Us',
      value: '+91 7995888660',
      link: 'tel:+917995888660',
      gradient: 'from-cyan-400 to-blue-500',
      shadow: 'shadow-cyan-500/40',
    },
    {
      icon: Mail,
      label: 'Email Us',
      value: 'sevendorsolutions@gmail.com',
      link: 'mailto:sevendorsolutions@gmail.com',
      gradient: 'from-violet-500 to-fuchsia-500',
      shadow: 'shadow-violet-500/40',
    },
    {
      icon: MapPin,
      label: 'Our Locations',
      value: 'Kakinada,Rajahmundry, Hyderabad, Vijayawada, Vishakapatnam',
      link: 'https://maps.google.com/?q=Kakinada,Hyderabad,Vijayawada,Vishakapatnam',
      gradient: 'from-orange-400 to-rose-500',
      shadow: 'shadow-orange-500/40',
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden bg-slate-50 dark:bg-zinc-950 transition-colors duration-300">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-violet-600/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mx-auto mb-12 sm:mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-violet-600 dark:text-cyan-400 uppercase tracking-widest"
          >
            Contact Us
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-outfit font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white"
          >
            We're Here to Help
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-zinc-400 leading-relaxed text-base sm:text-lg max-w-2xl mx-auto"
          >
            Have a project in mind or need assistance? Reach out to us through your preferred method below, and our team will get back to you promptly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {contactDetails.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target={item.link.startsWith('http') ? '_blank' : undefined}
              rel={item.link.startsWith('http') ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
              className="group relative p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900/50 border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-xl dark:hover:shadow-black/50 transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 overflow-hidden"
            >
              {/* Hover highlight background */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100/50 dark:from-white/0 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className={`relative z-10 flex-shrink-0 p-4 rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-lg ${item.shadow} ring-1 ring-white/20 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300`}>
                <item.icon className="w-8 h-8" strokeWidth={2} />
              </div>
              
              <div className="relative z-10 flex-1">
                <h3 className="font-outfit font-bold text-xl text-slate-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-cyan-400 transition-colors">
                  {item.label}
                </h3>
                <p className="text-slate-600 dark:text-zinc-400 text-base font-medium break-words leading-relaxed">
                  {item.value}
                </p>
              </div>

              {/* Decorative accent edge */}
              <div className="absolute top-0 right-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Contact;

