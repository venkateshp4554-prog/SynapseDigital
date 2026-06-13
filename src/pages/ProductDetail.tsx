import { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { RatingStars } from '../components/RatingStars';
import useTilt from '../hooks/useTilt';
import { formatCurrency } from '../utils/formatCurrency';

const reviews = [
  { name: 'Mia Chen', rating: 5, comment: 'Super comfy and perfect for long listening sessions.' },
  { name: 'Ethan Ross', rating: 4, comment: 'Great sound quality and the battery lasts all week.' },
  { name: 'Noah Patel', rating: 5, comment: 'A beautiful design and excellent noise cancellation.' }
];

const ProductDetail: React.FC = () => {
  const { slug } = useParams();
  const { products, addToCart, wishlist, toggleWishlist } = useShop();
  const product = products.find((item) => item.slug === slug);
  const [selectedImage, setSelectedImage] = useState(product?.images?.[0] ?? '');
  const containerRef = useRef<HTMLDivElement | null>(null);
  useTilt(containerRef, { intensity: 10, enableGyro: true });

  const inWishlist = product ? wishlist.includes(product.id) : false;

  if (!product) {
    return (
      <main className="px-4 pt-28 pb-16 sm:px-6 lg:px-8">
        <div className="glass-card rounded-[2rem] border p-10 text-center">
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Product not found</h1>
          <p className="mt-3 text-slate-600 dark:text-slate-300">We could not find the selected item.</p>
          <Link to="/products" className="btn-primary mt-6 inline-block">
            Browse products
          </Link>
        </div>
      </main>
    );
  }

  const related = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 3);

  return (
    <main className="px-4 pt-28 pb-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <div className="glass-card rounded-[2rem] border p-6 shadow-xl">
            <div className="grid gap-6 lg:grid-cols-[0.85fr_0.4fr]">
              <div>
                <div ref={containerRef} className="relative overflow-hidden rounded-[2rem] border border-slate-200 dark:border-zinc-800 tilt-3d">
                  <div data-tilt className="tilt-3d-inner">
                    <img src={selectedImage} alt={product.name} className="h-96 w-full object-cover" loading="lazy" onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/placeholder.svg'; }} />
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {product.images.map((image) => (
                    <button key={image} type="button" onClick={() => setSelectedImage(image)} className={`overflow-hidden rounded-3xl border text-left ${selectedImage === image ? 'border-violet-500' : 'border-slate-200 dark:border-zinc-800'}`}>
                        <img src={image} alt={product.name} className="h-24 w-full object-cover transition-transform duration-300 hover:scale-105" loading="lazy" onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/placeholder.svg'; }} />
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  {product.badges.map((badge) => (
                    <span key={badge} className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700 dark:bg-violet-500/15 dark:text-violet-200">
                      {badge}
                    </span>
                  ))}
                </div>
                <h1 className="text-4xl font-bold text-slate-950 dark:text-white">{product.name}</h1>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">{product.brand}</p>
                <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-300">
                  <RatingStars rating={product.rating} />
                  <span>{product.reviews} reviews</span>
                </div>
                <p className="text-3xl font-semibold text-slate-900 dark:text-white">{formatCurrency(product.price)}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{product.stock > 0 ? `Only ${product.stock} left in stock` : 'Out of stock'}</p>
                <p className="text-slate-600 dark:text-slate-300">{product.description}</p>
                <div className="flex flex-wrap gap-3">
                  <button type="button" onClick={() => addToCart(product.id)} disabled={product.stock === 0} className="btn-primary rounded-full px-6 py-3">
                    Add to cart
                  </button>
                  <button type="button" onClick={() => toggleWishlist(product.id)} className={`rounded-full border px-6 py-3 transition ${inWishlist ? 'border-rose-500 bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-200' : 'border-slate-200 bg-white text-slate-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-slate-100'}`}>
                    {inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="glass-card rounded-[2rem] border p-6 shadow-xl">
              <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Product details</h2>
              <div className="mt-5 space-y-4 text-slate-600 dark:text-slate-300">
                <p>{product.description}</p>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="rounded-3xl bg-slate-100 px-4 py-3 dark:bg-zinc-900">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="glass-card rounded-[2rem] border p-6 shadow-xl">
              <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Specifications</h2>
              <div className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {Object.entries(product.specs).map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between rounded-3xl bg-slate-100 px-4 py-3 dark:bg-zinc-900">
                    <span>{label}</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-card rounded-[2rem] border p-6 shadow-xl">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Customer reviews</h2>
            <div className="mt-6 space-y-4">
              {reviews.map((review) => (
                <div key={review.name} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-zinc-800 dark:bg-zinc-950">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">{review.name}</p>
                      <RatingStars rating={review.rating} />
                    </div>
                  </div>
                  <p className="mt-3 text-slate-600 dark:text-slate-300">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="glass-card rounded-[2rem] border p-6 shadow-xl">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Related products</h2>
            <div className="mt-5 space-y-4">
              {related.map((item) => (
                <Link key={item.id} to={`/products/${item.slug}`} className="flex items-center gap-4 rounded-3xl border border-slate-200 p-4 transition hover:border-violet-500 dark:border-zinc-800 dark:hover:border-cyan-400">
                  <img src={item.images[0]} alt={item.name} className="h-20 w-20 rounded-3xl object-cover" loading="lazy" onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/placeholder.svg'; }} />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{item.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{formatCurrency(item.price)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default ProductDetail;
