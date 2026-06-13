export interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  rating: number;
  reviews: number;
  stock: number;
  description: string;
  shortDescription: string;
  images: string[];
  specs: Record<string, string>;
  features: string[];
  badges: string[];
  popularity: number;
  createdAt: string;
}

export interface CartItem {
  productId: number;
  quantity: number;
}

export interface WishlistItem {
  productId: number;
}

export interface User {
  name: string;
  email: string;
  address: string;
  city: string;
  country: string;
  zip: string;
}

export interface OrderItem {
  productId: number;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  date: string;
  total: number;
  status: 'Delivered' | 'Processing' | 'Shipped' | 'Canceled';
  items: OrderItem[];
}

export interface ToastMessage {
  id: string;
  title: string;
  message: string;
  variant: 'success' | 'error' | 'info';
}
