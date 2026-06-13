import React from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Product } from '../types';
import { useRef } from 'react';
import useTilt from '../hooks/useTilt';
import { formatCurrency } from '../utils/formatCurrency';
import { useShop } from '../context/ShopContext';

interface ProductCardProps {
  product: Product;
  tiltIntensity?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, tiltIntensity = 8 }) => {
  const { addToCart, toggleWishlist, wishlist } = useShop();
  const inWishlist = wishlist.includes(product.id);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  useTilt(wrapRef, { intensity: tiltIntensity, enableGyro: true });

  return (
    <article className="glass-card card-3d tilt-3d overflow-hidden rounded-3xl border border-slate-200 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-shadow duration-300 group">
      <Link to={`/products/${product.slug}`} className="block overflow-hidden">
        <div ref={wrapRef} className="product-image-wrap tilt-3d-inner" data-tilt>
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/placeholder.svg'; }}
          />
          <div className="product-image-gradient" />
          <div className="price-ribbon">{formatCurrency(product.price)}</div>
        </div>
      </Link>
      <div className="p-5 space-y-4">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-slate-100 dark:bg-zinc-900 px-3 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
            {product.category}
          </span>
          <button
            type="button"
            onClick={() => toggleWishlist(product.id)}
            className={`rounded-full p-2 transition-colors ${inWishlist ? 'bg-rose-500 text-white' : 'bg-slate-100 text-slate-600 dark:bg-zinc-900 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-zinc-800'}`}
            aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <Heart className="h-4 w-4" />
          </button>
        </div>

        <Link to={`/products/${product.slug}`} className="space-y-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{product.name}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">{product.shortDescription}</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <Star className="h-4 w-4 text-amber-400" />
            <span className="font-medium text-slate-900 dark:text-white">{product.rating.toFixed(1)}</span>
            <span>({product.reviews})</span>
          </div>
        </Link>

        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xl font-semibold text-slate-900 dark:text-white">{formatCurrency(product.price)}</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">{product.stock > 0 ? 'In stock' : 'Sold out'}</p>
          </div>
          <button
            type="button"
            onClick={() => addToCart(product.id)}
            className="btn-primary flex items-center gap-2"
            disabled={product.stock === 0}
          >
            <ShoppingCart className="h-4 w-4" />
            Add
          </button>
        </div>
      </div>
    </article>
  );
};
export default ProductCard;
