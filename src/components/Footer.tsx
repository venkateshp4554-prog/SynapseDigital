import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => (
  <footer className="border-t border-slate-200/50 bg-slate-50 py-12 text-slate-700 dark:border-zinc-800 dark:bg-slate-950 dark:text-slate-300">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <Link to="/" className="inline-flex items-center gap-3 text-xl font-semibold text-slate-900 dark:text-white">
            <img src="/logo.png" alt="SeVenDor Solutions" className="h-12 w-12 rounded-3xl object-cover logo-3d" onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/placeholder.svg'; }} />
            SeVenDor
          </Link>
          <p className="max-w-xs text-sm text-slate-600 dark:text-slate-400">SeVenDor delivers premium e-commerce UI crafted with React, TailwindCSS, and reusable state patterns for modern storefront experiences.</p>
          <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
            <a href="#" className="rounded-full bg-slate-100 p-3 text-slate-600 transition hover:bg-violet-50 dark:bg-zinc-900 dark:text-slate-300 dark:hover:bg-zinc-800">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" className="rounded-full bg-slate-100 p-3 text-slate-600 transition hover:bg-violet-50 dark:bg-zinc-900 dark:text-slate-300 dark:hover:bg-zinc-800">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" className="rounded-full bg-slate-100 p-3 text-slate-600 transition hover:bg-violet-50 dark:bg-zinc-900 dark:text-slate-300 dark:hover:bg-zinc-800">
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Shop</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/products" className="hover:text-violet-600 dark:hover:text-cyan-400">All products</Link>
            </li>
            <li>
              <Link to="/wishlist" className="hover:text-violet-600 dark:hover:text-cyan-400">Wishlist</Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-violet-600 dark:hover:text-cyan-400">Cart</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Company</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/about" className="hover:text-violet-600 dark:hover:text-cyan-400">About</Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-violet-600 dark:hover:text-cyan-400">FAQ</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-violet-600 dark:hover:text-cyan-400">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Support</h3>
          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-violet-600 dark:text-cyan-400" />
              support@sevendor.com
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-violet-600 dark:text-cyan-400" />
              Secure checkout
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-zinc-800 dark:text-slate-400">
        <p>&copy; {new Date().getFullYear()} SeVenDor Solutions. Made with React and TailwindCSS.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
