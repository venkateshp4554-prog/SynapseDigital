import React from 'react';
import { ShoppingCart, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { formatCurrency } from '../utils/formatCurrency';

export const CartDropdown: React.FC = () => {
  const { cartItems, cartTotal, removeFromCart } = useShop();

  if (!cartItems.length) {
    return (
      <div className="glass-card w-72 rounded-3xl border p-5 shadow-lg">
        <div className="flex flex-col items-center justify-center gap-3 py-12 text-center text-slate-500 dark:text-slate-400">
          <ShoppingCart className="h-8 w-8" />
          <p>Your cart is empty.</p>
          <Link to="/products" className="btn-secondary text-sm">
            Browse products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card w-80 rounded-3xl border p-4 shadow-lg">
      <div className="space-y-4">
        {cartItems.slice(0, 3).map((item) => (
          <div key={item.product.id} className="flex items-center gap-3 border-b border-slate-200/70 pb-3 dark:border-zinc-800/70">
            <img src={item.product.images[0]} alt={item.product.name} className="h-14 w-14 rounded-2xl object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/placeholder.svg'; }} />
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.product.name}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{item.quantity} × {formatCurrency(item.product.price)}</p>
            </div>
            <button type="button" onClick={() => removeFromCart(item.product.id)} className="rounded-full p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-zinc-800 transition">
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ))}
        <div className="flex items-center justify-between pt-3 text-sm font-semibold text-slate-900 dark:text-white">
          <span>Subtotal</span>
          <span>{formatCurrency(cartTotal)}</span>
        </div>
        <Link to="/cart" className="btn-primary w-full text-center py-3">
          View cart
        </Link>
      </div>
    </div>
  );
};
export default CartDropdown;
