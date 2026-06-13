import { Link } from 'react-router-dom';

const About: React.FC = () => (
  <main className="px-4 pt-28 pb-16 sm:px-6 lg:px-8">
    <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
      <section className="glass-card rounded-[2rem] border p-8 shadow-xl">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">About us</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-950 dark:text-white">We build storefront experiences that feel premium.</h1>
        <p className="mt-6 text-slate-600 dark:text-slate-300">SeVenDor showcases modern React architecture, responsive layouts, and polished UX patterns. It was designed to make backend integration seamless and mobile shopping delightful.</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {['Modern UI', 'Persistent state', 'Optimized flows', 'Mobile-first design'].map((item) => (
            <div key={item} className="rounded-3xl bg-slate-100 p-5 dark:bg-zinc-900">
              <p className="font-semibold text-slate-900 dark:text-white">{item}</p>
            </div>
          ))}
        </div>
        <Link to="/products" className="btn-primary mt-10 inline-flex px-7 py-4">Shop the collection</Link>
      </section>

      <aside className="space-y-6">
        <div className="glass-card rounded-[2rem] border p-6 shadow-xl">
          <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Mission</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">Create a frontend experience that works for every device, with reusable components, routing, theming, and real shopping state.</p>
        </div>
        <div className="glass-card rounded-[2rem] border p-6 shadow-xl">
          <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Values</h2>
          <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-300">
            <li>Accessibility first</li>
            <li>Fast interactions</li>
            <li>Responsive layout</li>
            <li>Clean code</li>
          </ul>
        </div>
      </aside>
    </div>
  </main>
);

export default About;
