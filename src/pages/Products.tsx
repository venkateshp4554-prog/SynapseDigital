import { useEffect, useMemo, useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { SkeletonCard } from '../components/SkeletonCard';
import { useShop } from '../context/ShopContext';
import { filterProducts, getCategories, sortProducts } from '../utils/productUtils';
import { formatCurrency } from '../utils/formatCurrency';

const Products: React.FC = () => {
  const { products } = useShop();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [sortKey, setSortKey] = useState('popularity');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1200]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setLoading(false), 400);
    return () => window.clearTimeout(timeout);
  }, []);

  const categories = getCategories(products);

  const filtered = useMemo(() => {
    return sortProducts(
      filterProducts(products, query, category, inStockOnly, priceRange[0], priceRange[1]),
      sortKey
    );
  }, [products, query, category, inStockOnly, priceRange, sortKey]);

  const maxPrice = Math.max(...products.map((product) => product.price), 1200);

  return (
    <main className="px-4 pt-28 pb-16 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Discover</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-950 dark:text-white">Shop our full collection</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Filter, sort, and compare the latest products in one responsive storefront experience.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <p className="rounded-3xl bg-slate-100 px-4 py-3 text-sm text-slate-700 dark:bg-zinc-900 dark:text-slate-200">{filtered.length} products</p>
          <p className="rounded-3xl bg-slate-100 px-4 py-3 text-sm text-slate-700 dark:bg-zinc-900 dark:text-slate-200">Best sellers first</p>
        </div>
      </div>

      <div className="mt-10 grid gap-6 xl:grid-cols-[280px_1fr]">
        <aside className="space-y-6 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 dark:border-zinc-800 dark:bg-zinc-950">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-950 dark:text-white">Search</h2>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, category, or brand"
              className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:border-zinc-800 dark:bg-zinc-900 dark:text-slate-100 dark:focus:border-cyan-400 dark:focus:ring-cyan-500/20"
            />
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-950 dark:text-white">Category</h2>
            <div className="grid gap-2">
              <button onClick={() => setCategory('')} className={`w-full rounded-3xl px-4 py-3 text-left text-sm transition ${category === '' ? 'bg-violet-600 text-white' : 'bg-white text-slate-700 hover:bg-slate-100 dark:bg-zinc-900 dark:text-slate-200 dark:hover:bg-zinc-800'}`}>
                All categories
              </button>
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`w-full rounded-3xl px-4 py-3 text-left text-sm transition ${category === item ? 'bg-violet-600 text-white' : 'bg-white text-slate-700 hover:bg-slate-100 dark:bg-zinc-900 dark:text-slate-200 dark:hover:bg-zinc-800'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-950 dark:text-white">Price range</h2>
              <span className="text-sm text-slate-500 dark:text-slate-400">{formatCurrency(priceRange[0])} - {formatCurrency(priceRange[1])}</span>
            </div>
            <div className="space-y-3">
              <input
                type="range"
                min={0}
                max={maxPrice}
                value={priceRange[0]}
                onChange={(event) => setPriceRange([Number(event.target.value), priceRange[1]])}
                className="w-full accent-violet-500"
              />
              <input
                type="range"
                min={0}
                max={maxPrice}
                value={priceRange[1]}
                onChange={(event) => setPriceRange([priceRange[0], Number(event.target.value)])}
                className="w-full accent-violet-500"
              />
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-950 dark:text-white">Availability</h2>
            <label className="inline-flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
              <input type="checkbox" checked={inStockOnly} onChange={(e) => setInStockOnly(e.target.checked)} className="h-4 w-4 rounded border-slate-300 text-violet-600 focus:ring-violet-500" />
              In-stock only
            </label>
          </div>
        </aside>

        <section className="space-y-6">
          <div className="flex flex-col gap-4 rounded-[2rem] border border-slate-200 bg-slate-50 p-5 dark:border-zinc-800 dark:bg-zinc-950 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-sm text-slate-500 dark:text-slate-400">Sort by</span>
            <select
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value)}
              className="rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:border-zinc-800 dark:bg-zinc-900 dark:text-slate-100 dark:focus:border-cyan-400 dark:focus:ring-cyan-500/20"
            >
              <option value="popularity">Popularity</option>
              <option value="newest">Newest</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {loading
              ? Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />)
              : filtered.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Products;
