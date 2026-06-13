const Terms: React.FC = () => (
  <main className="px-4 pt-28 pb-16 sm:px-6 lg:px-8">
    <div className="glass-card rounded-[2rem] border p-8 shadow-xl">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Terms of service</p>
      <h1 className="mt-3 text-4xl font-bold text-slate-950 dark:text-white">Terms and conditions</h1>
      <div className="mt-8 space-y-5 text-slate-600 dark:text-slate-300">
        <p>This storefront is a frontend mock built with React, TailwindCSS, and client-side state. It is designed for demonstration and future backend integration.</p>
        <p>All product data, orders, and user accounts are simulated in the browser and persisted using localStorage.</p>
        <p>No payments are processed in this UI. Checkout flows are illustrative only.</p>
        <p>By using this mock storefront, you agree that it is not a real commercial site and is intended for development or portfolio use.</p>
      </div>
    </div>
  </main>
);

export default Terms;
