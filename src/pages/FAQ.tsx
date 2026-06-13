const FAQ: React.FC = () => (
  <main className="px-4 pt-28 pb-16 sm:px-6 lg:px-8">
    <div className="glass-card rounded-[2rem] border p-8 shadow-xl">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">FAQ</p>
      <h1 className="mt-3 text-4xl font-bold text-slate-950 dark:text-white">Frequently asked questions</h1>
      <div className="mt-10 space-y-5">
        {[
          {
            question: 'How do I track my order?',
            answer: 'After checkout, visit your order history page to track the status of your purchase and delivery updates.'
          },
          {
            question: 'Can I save products for later?',
            answer: 'Yes, add items to your wishlist and revisit them anytime from the wishlist page.'
          },
          {
            question: 'Is payment information stored?',
            answer: 'This storefront uses mock checkout flows only. No payment data is stored on the frontend.'
          },
          {
            question: 'Do you offer shipping worldwide?',
            answer: 'Shipping information is presented in the checkout summary. This mock UI can be updated for real shipping options later.'
          }
        ].map((item) => (
          <div key={item.question} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="text-lg font-semibold text-slate-950 dark:text-white">{item.question}</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  </main>
);

export default FAQ;
