import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { formatCurrency } from '../utils/formatCurrency';

const Wishlist: React.FC = () => {
  const { wishlist, products, toggleWishlist, addToCart } = useShop();
  const wishlistProducts = products.filter((product) => wishlist.includes(product.id));

  return (
    <main className="px-4 pt-28 pb-16 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Wishlist</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-950 dark:text-white">Saved products</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Keep your favorite items in one place and move them to cart when you are ready.</p>
        </div>
        <Link to="/products" className="btn-secondary">
          Continue shopping
        </Link>
      </div>

      {wishlistProducts.length === 0 ? (
        <div className="glass-card mt-10 rounded-[2rem] border p-10 text-center">
          <p className="text-lg font-semibold text-slate-900 dark:text-white">Your wishlist is empty</p>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Explore products and save the ones you love.</p>
          <Link to="/products" className="btn-primary mt-6 inline-block">
            Browse products
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {wishlistProducts.map((product) => (
            <div key={product.id} className="glass-card rounded-[2rem] border p-6 shadow-xl">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <img src={product.images[0]} alt={product.name} className="h-28 w-28 rounded-3xl object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/placeholder.svg'; }} />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-slate-950 dark:text-white">{product.name}</h2>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{product.shortDescription}</p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xl font-semibold text-slate-900 dark:text-white">{formatCurrency(product.price)}</span>
                <div className="flex flex-wrap gap-3">
                  <button onClick={() => addToCart(product.id)} className="btn-primary rounded-full px-5 py-3">
                    Add to cart
                  </button>
                  <button onClick={() => toggleWishlist(product.id)} className="rounded-full border border-slate-200 px-5 py-3 text-sm text-slate-600 dark:border-zinc-800 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-zinc-900 transition">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default Wishlist;
