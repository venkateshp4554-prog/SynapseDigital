import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Heart, ShoppingCart, User, Search } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { CartDropdown } from './CartDropdown';
import { useShop } from '../context/ShopContext';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount, wishlistCount, user } = useShop();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${isScrolled ? 'glass-nav shadow-xl' : 'bg-transparent'} `}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-lg font-semibold text-slate-900 dark:text-white">
          <img src="/logo.png" alt="SeVenDor Solutions" className="h-12 w-12 rounded-3xl object-cover logo-3d" onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/placeholder.svg'; }} />
          <div className="space-y-0.5">
            <p className="text-base font-semibold">SeVenDor</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Solutions</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {[
            { label: 'Home', path: '/' },
            { label: 'Products', path: '/products' },
            { label: 'About', path: '/about' },
            { label: 'FAQ', path: '/faq' },
            { label: 'Contact', path: '/contact' }
          ].map((item) => (
            <Link key={item.label} to={item.path} className="text-sm font-medium text-slate-600 transition hover:text-violet-600 dark:text-slate-300 dark:hover:text-cyan-400">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 md:flex">
            <button onClick={() => navigate('/products')} className="relative inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm transition hover:border-violet-500 hover:text-violet-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-300">
              <Search className="mr-2 h-4 w-4" />
              Search
            </button>
            <ThemeToggle />
          </div>

          <div className="relative hidden md:block">
            <button
              onClick={() => setDropdownVisible((current) => !current)}
              className="relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-violet-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-slate-200"
              aria-label="Open cart preview"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-500 px-1.5 text-[10px] text-white">{cartCount}</span>}
            </button>
            <AnimatePresence>
              {dropdownVisible ? (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-3"
                >
                  <CartDropdown />
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={() => navigate('/login')}
            className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-violet-500 hover:text-violet-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-300 md:flex"
          >
            <User className="h-4 w-4" />
            {user ? 'Profile' : 'Sign in'}
          </button>
          <Link to="/wishlist" className="relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-violet-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-slate-200">
            <Heart className="h-5 w-5" />
            {wishlistCount > 0 && <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-500 px-1.5 text-[10px] text-white">{wishlistCount}</span>}
          </Link>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-3 text-slate-700 transition hover:border-violet-500 hover:text-violet-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-slate-200 md:hidden"
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden border-t border-slate-200 bg-white/95 dark:border-zinc-800 dark:bg-zinc-950/95"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="space-y-2 px-4 pb-4 pt-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'Products', path: '/products' },
                { label: 'About', path: '/about' },
                { label: 'FAQ', path: '/faq' },
                { label: 'Contact', path: '/contact' }
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-3xl px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-zinc-900"
                >
                  {item.label}
                </Link>
              ))}
              <button onClick={() => { setIsOpen(false); navigate('/login'); }} className="btn-primary w-full py-3">
                {user ? 'Profile' : 'Sign in'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
