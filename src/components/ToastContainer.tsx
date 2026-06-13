import React from 'react';
import { X } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useShop();

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 max-w-sm">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`glass-card flex items-start justify-between gap-4 rounded-3xl border p-4 shadow-xl transition-all duration-300 ${
            toast.variant === 'success'
              ? 'border-emerald-300/30 bg-emerald-50 text-emerald-950 dark:bg-emerald-950/30 dark:text-emerald-200'
              : toast.variant === 'error'
              ? 'border-rose-300/30 bg-rose-50 text-rose-950 dark:bg-rose-950/30 dark:text-rose-200'
              : 'border-slate-300/30 bg-slate-50 text-slate-900 dark:bg-zinc-950/70 dark:text-slate-100'
          }`}
        >
          <div className="space-y-1">
            <p className="font-semibold text-sm">{toast.title}</p>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{toast.message}</p>
          </div>
          <button onClick={() => removeToast(toast.id)} className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  );
};
export default ToastContainer;
