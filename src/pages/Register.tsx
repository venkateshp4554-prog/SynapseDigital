import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useShop();
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    login({ name: form.name, email: form.email, address: '123 Market St', city: 'Austin', country: 'USA', zip: '78701' });
    navigate('/profile');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 py-20 dark:bg-slate-950 sm:px-6">
      <div className="w-full max-w-xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl dark:border-zinc-800 dark:bg-zinc-950">
        <h1 className="text-3xl font-bold text-slate-950 dark:text-white">Create your account</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">Join now to save favorites and checkout faster.</p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
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
            Create account
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
          Already have an account? <Link to="/login" className="font-semibold text-violet-600 dark:text-cyan-400">Sign in</Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
