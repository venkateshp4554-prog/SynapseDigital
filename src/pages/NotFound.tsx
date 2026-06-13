import { Link } from 'react-router-dom';

const NotFound: React.FC = () => (
  <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-20 dark:bg-slate-950 sm:px-6">
    <div className="glass-card w-full max-w-2xl rounded-[2rem] border p-10 text-center shadow-xl">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">404</p>
      <h1 className="mt-4 text-5xl font-bold text-slate-950 dark:text-white">Page not found</h1>
      <p className="mt-4 text-slate-600 dark:text-slate-300">The page you are looking for does not exist. Return to the storefront to continue browsing.</p>
      <Link to="/" className="btn-primary mt-8 inline-flex px-8 py-4">
        Back to home
      </Link>
    </div>
  </main>
);

export default NotFound;
