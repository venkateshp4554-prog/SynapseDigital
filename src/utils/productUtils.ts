import type { Product } from '../types';

export function getCategories(products: Product[]) {
  return Array.from(new Set(products.map((product) => product.category))).sort();
}

export function filterProducts(
  products: Product[],
  query: string,
  category: string,
  inStockOnly: boolean,
  minPrice?: number,
  maxPrice?: number
) {
  return products.filter((product) => {
    const matchesQuery = query
      ? [product.name, product.brand, product.category, product.description]
          .join(' ')
          .toLowerCase()
          .includes(query.toLowerCase())
      : true;
    const matchesCategory = category ? product.category === category : true;
    const matchesStock = inStockOnly ? product.stock > 0 : true;
    const matchesMinPrice = typeof minPrice === 'number' ? product.price >= minPrice : true;
    const matchesMaxPrice = typeof maxPrice === 'number' ? product.price <= maxPrice : true;
    return matchesQuery && matchesCategory && matchesStock && matchesMinPrice && matchesMaxPrice;
  });
}

export function sortProducts(products: Product[], sortKey: string) {
  if (sortKey === 'price-asc') {
    return [...products].sort((a, b) => a.price - b.price);
  }
  if (sortKey === 'price-desc') {
    return [...products].sort((a, b) => b.price - a.price);
  }
  if (sortKey === 'rating') {
    return [...products].sort((a, b) => b.rating - a.rating);
  }
  if (sortKey === 'newest') {
    return [...products].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }
  if (sortKey === 'popularity') {
    return [...products].sort((a, b) => b.popularity - a.popularity);
  }
  return products;
}
