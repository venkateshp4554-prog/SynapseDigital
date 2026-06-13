import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal } from './Modal';
import { useShop } from '../context/ShopContext';

export const AuthModal: React.FC = () => {
  const { authModalOpen, closeAuthModal, login } = useShop();
  const navigate = useNavigate();
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    login({
      name: mode === 'login' ? 'Taylor Reed' : form.name || 'New customer',
      email: form.email,
      address: '101 Commerce Ave',
      city: 'Denver',
      country: 'USA',
      zip: '80204',
    });
    closeAuthModal();
    navigate('/profile');
  };

  return (
    <Modal open={authModalOpen} title={mode === 'login' ? 'Sign in' : 'Create account'} onClose={closeAuthModal}>
      <form onSubmit={handleSubmit} className="space-y-5">
        {mode === 'register' && (
          <label className="block text-sm text-slate-700 dark:text-slate-200">
            Full name
            <input
              type="text"
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
              required
              className="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-slate-100 dark:focus:border-cyan-400 dark:focus:ring-cyan-500/20"
            />
          </label>
        )}
        <label className="block text-sm text-slate-700 dark:text-slate-200">
          Email address
          <input
            type="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            required
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-slate-100 dark:focus:border-cyan-400 dark:focus:ring-cyan-500/20"
          />
        </label>
        <label className="block text-sm text-slate-700 dark:text-slate-200">
          Password
          <input
            type="password"
            value={form.password}
            onChange={(event) => setForm({ ...form, password: event.target.value })}
            required
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-slate-100 dark:focus:border-cyan-400 dark:focus:ring-cyan-500/20"
          />
        </label>
        <button type="submit" className="btn-primary w-full py-4 text-lg">
          {mode === 'login' ? 'Sign in' : 'Create account'}
        </button>
        <button type="button" onClick={() => setMode(mode === 'login' ? 'register' : 'login')} className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-slate-200">
          {mode === 'login' ? 'Create a new account' : 'Already have an account? Sign in'}
        </button>
      </form>
    </Modal>
  );
};

export default AuthModal;
