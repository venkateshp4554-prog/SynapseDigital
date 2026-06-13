import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { formatCurrency } from '../utils/formatCurrency';

const Checkout: React.FC = () => {
  const { cartItems, cartTotal, user, createOrder } = useShop();
  const [information, setInformation] = useState({
    name: user?.name ?? '',
    email: user?.email ?? '',
    address: user?.address ?? '',
    city: user?.city ?? '',
    country: user?.country ?? '',
    zip: user?.zip ?? '',
  });
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

  const orderTotal = cartTotal + 20.5;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const items = cartItems.map((item) => ({
      productId: item.product.id,
      quantity: item.quantity,
      price: item.product.price,
    }));
    setProcessing(true);
    window.setTimeout(() => {
      createOrder(items, orderTotal);
      setProcessing(false);
      navigate('/orders');
    }, 900);
  };

  return (
    <main className="px-4 pt-28 pb-16 sm:px-6 lg:px-8">
      <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <section className="glass-card rounded-[2rem] border p-8 shadow-xl">
          <div className="mb-8 space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Checkout</p>
            <h1 className="text-4xl font-bold text-slate-950 dark:text-white">Secure checkout</h1>
            <p className="text-slate-600 dark:text-slate-300">Review your shipping details and place your order with confidence.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              {['name', 'email', 'address', 'city', 'country', 'zip'].map((field) => (
                <label key={field} className="block text-sm text-slate-700 dark:text-slate-200">
                  <span className="mb-2 block capitalize">{field}</span>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    value={information[field as keyof typeof information]}
                    onChange={(e) => setInformation({ ...information, [field]: e.target.value })}
                    className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-slate-100 dark:focus:border-cyan-400 dark:focus:ring-cyan-500/20"
                    required
                  />
                </label>
              ))}
            </div>
            <button type="submit" disabled={processing} className="btn-primary w-full py-4 text-lg">
              {processing ? 'Processing...' : `Pay ${formatCurrency(orderTotal)}`}
            </button>
          </form>
        </section>

        <aside className="glass-card rounded-[2rem] border p-6 shadow-xl">
          <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Order summary</h2>
          <div className="mt-5 space-y-4 text-sm text-slate-600 dark:text-slate-300">
            {cartItems.map((item) => (
              <div key={item.product.id} className="flex items-center justify-between gap-4 rounded-3xl bg-slate-100 px-4 py-4 dark:bg-zinc-900">
                <div>
                  <p className="font-semibold text-slate-950 dark:text-white">{item.product.name}</p>
                  <p>{item.quantity} × {formatCurrency(item.product.price)}</p>
                </div>
                <span className="font-semibold text-slate-900 dark:text-white">{formatCurrency(item.product.price * item.quantity)}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 space-y-3 rounded-3xl bg-slate-100 p-4 text-sm dark:bg-zinc-900">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>{formatCurrency(cartTotal)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Shipping</span>
              <span>$12.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Fees</span>
              <span>$8.50</span>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between rounded-3xl bg-slate-950 px-4 py-4 text-white dark:bg-white dark:text-slate-950">
            <span className="font-semibold">Total</span>
            <span className="text-lg font-semibold">{formatCurrency(orderTotal)}</span>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Checkout;
