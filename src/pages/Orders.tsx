import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { formatCurrency } from '../utils/formatCurrency';

const Orders: React.FC = () => {
  const { orders } = useShop();

  return (
    <main className="px-4 pt-28 pb-16 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Order history</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-950 dark:text-white">Your recent purchases</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Review orders, delivery status, and reorder the products you love.</p>
      </div>
      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="glass-card rounded-[2rem] border p-6 shadow-xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Order #{order.id}</p>
                <h2 className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">{order.date}</h2>
              </div>
              <div className="rounded-3xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-900 dark:bg-zinc-900 dark:text-slate-100">{order.status}</div>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl bg-slate-50 p-5 text-sm dark:bg-zinc-950">
                <p className="text-slate-500 dark:text-slate-400">Total</p>
                <p className="mt-2 text-lg font-semibold text-slate-950 dark:text-white">{formatCurrency(order.total)}</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5 text-sm dark:bg-zinc-950">
                <p className="text-slate-500 dark:text-slate-400">Items</p>
                <p className="mt-2 text-lg font-semibold text-slate-950 dark:text-white">{order.items.length}</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5 text-sm dark:bg-zinc-950">
                <p className="text-slate-500 dark:text-slate-400">Reorder</p>
                <Link to="/cart" className="mt-2 inline-block text-violet-600 dark:text-cyan-400">Start again</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Orders;
