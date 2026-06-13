import React, { createContext, useContext, useMemo, useState } from 'react';
import productsData from '../data/products.json';
import type { CartItem, Order, Product, ToastMessage, User } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface ShopState {
  products: Product[];
  cart: CartItem[];
  wishlist: number[];
  user: User | null;
  authModalOpen: boolean;
  toasts: ToastMessage[];
  cartCount: number;
  wishlistCount: number;
  cartTotal: number;
  cartItems: Array<{
    product: Product;
    quantity: number;
  }>;
  orders: Order[];
  openAuthModal: () => void;
  closeAuthModal: () => void;
  addToCart: (productId: number, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  toggleWishlist: (productId: number) => void;
  login: (user: User) => void;
  logout: () => void;
  addToast: (title: string, message: string, variant?: ToastMessage['variant']) => void;
  removeToast: (id: string) => void;
  createOrder: (items: Order['items'], total: number) => void;
}

const ShopContext = createContext<ShopState | undefined>(undefined);

const initialOrders: Order[] = [
  {
    id: 'ORD-1202',
    date: '2026-05-28',
    total: 289.98,
    status: 'Delivered',
    items: [
      { productId: 1, quantity: 1, price: 149.99 },
      { productId: 5, quantity: 2, price: 39.99 }
    ]
  },
  {
    id: 'ORD-1208',
    date: '2026-06-05',
    total: 219.0,
    status: 'Processing',
    items: [{ productId: 2, quantity: 1, price: 219.0 }]
  }
];

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useLocalStorage<CartItem[]>('ecom_cart', []);
  const [wishlist, setWishlist] = useLocalStorage<number[]>('ecom_wishlist', []);
  const [user, setUser] = useLocalStorage<User | null>('ecom_user', null);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [orders, setOrders] = useLocalStorage<Order[]>('ecom_orders', initialOrders);

  const products = productsData as unknown as Product[];

  const cartItems = useMemo(() => {
    return cart
      .map((item) => {
        const product = products.find((product) => product.id === item.productId);
        return product ? { product, quantity: item.quantity } : null;
      })
      .filter(Boolean) as Array<{ product: Product; quantity: number }>;
  }, [cart, products]);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = wishlist.length;
  const cartTotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const openAuthModal = () => setAuthModalOpen(true);
  const closeAuthModal = () => setAuthModalOpen(false);

  const addToast = (title: string, message: string, variant: ToastMessage['variant'] = 'success') => {
    const id = `${variant}-${Date.now()}`;
    setToasts((current) => [...current, { id, title, message, variant }]);
    window.setTimeout(() => setToasts((current) => current.filter((toast) => toast.id !== id)), 4500);
  };

  const removeToast = (id: string) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  };

  const addToCart = (productId: number, quantity = 1) => {
    setCart((current) => {
      const existing = current.find((item) => item.productId === productId);
      if (existing) {
        return current.map((item) =>
          item.productId === productId
            ? { ...item, quantity: Math.min(item.quantity + quantity, 99) }
            : item
        );
      }
      return [...current, { productId, quantity }];
    });
    addToast('Added to cart', 'Your item was added to the cart successfully.');
  };

  const removeFromCart = (productId: number) => {
    setCart((current) => current.filter((item) => item.productId !== productId));
    addToast('Removed from cart', 'Item removed from cart.', 'info');
  };

  const updateQuantity = (productId: number, quantity: number) => {
    setCart((current) =>
      current.map((item) =>
        item.productId === productId
          ? { ...item, quantity: Math.max(1, Math.min(quantity, 99)) }
          : item
      )
    );
  };

  const toggleWishlist = (productId: number) => {
    setWishlist((current) => {
      const exists = current.includes(productId);
      if (exists) {
        addToast('Removed from wishlist', 'Item removed successfully.', 'info');
        return current.filter((id) => id !== productId);
      }
      addToast('Added to wishlist', 'We saved it for later.', 'success');
      return [...current, productId];
    });
  };

  const login = (profile: User) => {
    setUser(profile);
    addToast('Welcome back', `Signed in as ${profile.name}.`);
    closeAuthModal();
  };

  const logout = () => {
    setUser(null);
    addToast('Signed out', 'You have been logged out.', 'info');
  };

  const createOrder = (items: Order['items'], total: number) => {
    const order: Order = {
      id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toISOString().split('T')[0],
      status: 'Processing',
      total,
      items,
    };
    setOrders((current) => [order, ...current]);
    setCart([]);
    addToast('Order confirmed', 'Your order has been created successfully.');
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        wishlist,
        user,
        authModalOpen,
        toasts,
        cartCount,
        wishlistCount,
        cartTotal,
        cartItems,
        orders,
        openAuthModal,
        closeAuthModal,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleWishlist,
        login,
        logout,
        addToast,
        removeToast,
        createOrder,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within ShopProvider');
  }
  return context;
};
