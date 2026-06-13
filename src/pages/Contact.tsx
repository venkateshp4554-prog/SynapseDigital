const Contact: React.FC = () => (
  <main className="px-4 pt-28 pb-16 sm:px-6 lg:px-8">
    <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
      <section className="glass-card rounded-[2rem] border p-8 shadow-xl">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Contact</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-950 dark:text-white">We’d love to hear from you.</h1>
        <p className="mt-6 text-slate-600 dark:text-slate-300">For support, partnership ideas, or feedback on SeVenDor Solutions, reach out using the details below.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
            <p className="mt-2 font-semibold text-slate-950 dark:text-white">support@sevendor.com</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <p className="text-sm text-slate-500 dark:text-slate-400">Phone</p>
            <p className="mt-2 font-semibold text-slate-950 dark:text-white">+1 (555) 897-5642</p>
          </div>
        </div>
      </section>

      <aside className="glass-card rounded-[2rem] border p-6 shadow-xl">
        <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Send a message</h2>
        <form className="mt-6 space-y-4">
          <label className="block text-sm text-slate-700 dark:text-slate-200">
            Full name
            <input type="text" placeholder="Your name" className="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-slate-100 dark:focus:border-cyan-400 dark:focus:ring-cyan-500/20" />
          </label>
          <label className="block text-sm text-slate-700 dark:text-slate-200">
            Email address
            <input type="email" placeholder="you@example.com" className="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-slate-100 dark:focus:border-cyan-400 dark:focus:ring-cyan-500/20" />
          </label>
          <label className="block text-sm text-slate-700 dark:text-slate-200">
            Message
            <textarea rows={5} placeholder="How can we help?" className="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-slate-100 dark:focus:border-cyan-400 dark:focus:ring-cyan-500/20" />
          </label>
          <button type="submit" className="btn-primary w-full py-4 text-lg">Send message</button>
        </form>
      </aside>
    </div>
  </main>
);

export default Contact;
