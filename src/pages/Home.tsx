import { Link } from 'react-router-dom';
import { Carousel } from '../components/Carousel';
import { ProductCard } from '../components/ProductCard';
import { useShop } from '../context/ShopContext';
import { getCategories } from '../utils/productUtils';

const Home: React.FC = () => {
  const { products, wishlistCount, cartCount } = useShop();
  const categories = getCategories(products);
  const featured = products.slice(0, 4);

  return (
    <main className="px-4 pt-28 pb-16 sm:px-6 lg:px-8">
      <Carousel />

      <section className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="glass-card rounded-[2rem] border p-8 shadow-xl">
          <span className="inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-200">
            Why choose SeVenDor
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">A modern shopping experience built for speed and confidence.</h2>
          <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">Browse curated collections, add favorites, and manage your cart in one polished dashboard. SeVenDor delivers a premium storefront with smooth shopping flows and refined visuals.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {['Free shipping', 'Secure checkout', 'Easy returns', '24/7 support'].map((item) => (
              <div key={item} className="rounded-3xl border border-slate-200 bg-white/80 p-4 dark:border-zinc-800 dark:bg-zinc-950">
                <p className="text-sm font-medium text-slate-900 dark:text-white">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/login" className="btn-primary inline-flex items-center justify-center">
              Sign in to save favorites
            </Link>
            <Link to="/products" className="btn-secondary inline-flex items-center justify-center">
              Browse products
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-card rounded-[2rem] border p-6 shadow-xl">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Active personalized counts</h3>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-3xl bg-slate-100 p-5 dark:bg-zinc-900">
                <p className="text-4xl font-bold text-slate-950 dark:text-white">{products.length}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Items in catalog</p>
              </div>
              <div className="rounded-3xl bg-slate-100 p-5 dark:bg-zinc-900">
                <p className="text-4xl font-bold text-slate-950 dark:text-white">{cartCount}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">In your cart</p>
              </div>
              <div className="rounded-3xl bg-slate-100 p-5 dark:bg-zinc-900">
                <p className="text-4xl font-bold text-slate-950 dark:text-white">{wishlistCount}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Wishlisted items</p>
              </div>
              <div className="rounded-3xl bg-slate-100 p-5 dark:bg-zinc-900">
                <p className="text-4xl font-bold text-slate-950 dark:text-white">{categories.length}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Product categories</p>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-[2rem] border p-6 shadow-xl">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Browse by category</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {categories.map((category) => (
                <Link
                  key={category}
                  to="/products"
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 transition hover:border-violet-500 hover:bg-violet-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-slate-200 dark:hover:bg-zinc-900"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Top picks</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950 dark:text-white">Featured products</h2>
          </div>
          <Link to="/products" className="btn-secondary">
            View all products
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
