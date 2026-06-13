import { Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { formatCurrency } from '../utils/formatCurrency';

const Cart: React.FC = () => {
  const { cartItems, cartTotal, updateQuantity, removeFromCart } = useShop();
  const navigate = useNavigate();

  return (
    <main className="px-4 pt-28 pb-16 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Cart</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-950 dark:text-white">Your shopping cart</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Review items, adjust quantities, and proceed to checkout.</p>
        </div>
        <button onClick={() => navigate('/products')} className="btn-secondary">
          Continue shopping
        </button>
      </div>

      {cartItems.length === 0 ? (
        <div className="glass-card mt-10 rounded-[2rem] border p-10 text-center">
          <p className="text-lg font-semibold text-slate-900 dark:text-white">Your cart is empty</p>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Add items to your cart from the product catalog.</p>
          <Link to="/products" className="btn-primary mt-6 inline-block">
            Shop products
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 xl:grid-cols-[1.6fr_0.8fr]">
          <section className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.product.id} className="glass-card rounded-[2rem] border p-6 shadow-xl">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-center gap-4">
                    <img src={item.product.images[0]} alt={item.product.name} className="h-28 w-28 rounded-3xl object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/placeholder.svg'; }} />
                    <div>
                      <h2 className="text-lg font-semibold text-slate-950 dark:text-white">{item.product.name}</h2>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{formatCurrency(item.product.price)}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{item.product.stock > 0 ? 'In stock' : 'Out of stock'}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center rounded-3xl border border-slate-200 bg-white p-2 dark:border-zinc-800 dark:bg-zinc-950">
                      <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="rounded-full p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-zinc-800">
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-4 text-sm font-semibold text-slate-900 dark:text-white">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="rounded-full p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-zinc-800">
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <button onClick={() => removeFromCart(item.product.id)} className="inline-flex items-center gap-2 rounded-3xl border border-slate-200 px-4 py-3 text-sm text-slate-600 dark:border-zinc-800 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-zinc-900 transition">
                      <Trash2 className="h-4 w-4" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </section>

          <aside className="glass-card rounded-[2rem] border p-6 shadow-xl">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Order summary</h2>
            <div className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center justify-between rounded-3xl bg-slate-100 px-4 py-3 dark:bg-zinc-900">
                <span>Subtotal</span>
                <span>{formatCurrency(cartTotal)}</span>
              </div>
              <div className="flex items-center justify-between rounded-3xl bg-slate-100 px-4 py-3 dark:bg-zinc-900">
                <span>Estimated shipping</span>
                <span>$12.00</span>
              </div>
              <div className="flex items-center justify-between rounded-3xl bg-slate-100 px-4 py-3 dark:bg-zinc-900">
                <span>Taxes</span>
                <span>$8.50</span>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between rounded-3xl bg-slate-950 px-4 py-4 text-white dark:bg-white dark:text-slate-950">
              <span className="font-semibold">Total</span>
              <span className="text-lg font-semibold">{formatCurrency(cartTotal + 20.5)}</span>
            </div>
            <button onClick={() => navigate('/checkout')} className="btn-primary mt-6 w-full py-3">
              Proceed to checkout
            </button>
          </aside>
        </div>
      )}
    </main>
  );
};

export default Cart;
