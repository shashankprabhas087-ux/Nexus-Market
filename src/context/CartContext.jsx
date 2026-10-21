import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext(null);

const INITIAL_CART = [
  {
    id: 'prod-sony-wh1000xm5',
    title: 'WH-1000XM5 Wireless Industry Leading Noise Canceling Headphones',
    brand: 'Sony',
    price: 249.99,
    originalPrice: 349.99,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDv96qAEgZKswAujbRmMwmaQxuO__xXeAGPih7dsJbzJhcp3z7hsX7S0L61hxIYArwiJcSH-g7V1xkt1ntBkeabO4jYUea5RwwJEbQbOYJ-LTUs7JfDYvSbzeqCvO0Ft9-Z7mCsYHcbmDGWuRQfxm0P318ww5Ak3rrsoQ6xIK2I1J91X0rVNMLqrfXJRxYbY9bkNKD9pVR8ff5xfiXPiWpf06KwNTJyjoIFxob8VSiWeDIAbj7HG9LyDg',
    quantity: 1,
  },
  {
    id: 'prod-kronos-keyboard',
    title: 'Pro TKL Wireless Mechanical Keyboard - Tactile Brown Switches',
    brand: 'KRONOS TECH',
    price: 89.00,
    originalPrice: 155.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAo2Bjmr1vr1MnK3cW6liuWjQwcWQ02YFYyFFlF7q4QPxDx4bM5aIx0OdIstIyQizyUK74LKwG5T3vTX7yu-XTXAfKyBHIhoRQpRKBU8489bnbc6oi0c-P7wfHFBHd4eb4ocJ4x-Z3-7Le-nmEWxgcuwKe7YhaZtubvcxbXBwt3rN48Tnvh8wYPK-ahL16C07CJV9WObX8igK2nsJfmbC7053sclTF1sC2eCCLDd_z7Y4PItd7iiEwuQw',
    quantity: 1,
  },
  {
    id: 'prod-sunglasses-jet',
    title: 'Square Beveled Acetate Frame UV400 Sunglasses in Jet',
    brand: 'ASOS LUXE',
    price: 38.50,
    originalPrice: 59.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoxwrCpW5qiFFGUa5iWAK3ZGQE1UAN1jkBBmKJmJXnpz48JKr9IUrhtOLaj3IsaiM704c9HUKHz5IlAhIV8iIvzZhhIERV32QPtvW_vkLMqlyCJ4L2NRxIqbVZ5V8I7eQE3IGNWMTB3nVtTRi77Cx1bQkd55abyBoWlFF_NentaHGMQtyZMped9T0-uTimWJoHq11U51OkFXAtfV_XrEeNOEtGG8i3C1EWMY0GTQW98FGsoTLg69ZGcQ',
    quantity: 1,
  },
];

function cartReducer(state, action) {
  switch (action.type) {
    case 'INIT_CART':
      return action.payload;
    case 'ADD_ITEM': {
      const existingIndex = state.findIndex((item) => item.id === action.payload.id);
      if (existingIndex > -1) {
        return state.map((item, idx) =>
          idx === existingIndex
            ? { ...item, quantity: item.quantity + (action.payload.quantity || 1) }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: action.payload.quantity || 1 }];
    }
    case 'REMOVE_ITEM':
      return state.filter((item) => item.id !== action.payload);
    case 'UPDATE_QUANTITY':
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: Math.max(1, action.payload.quantity) }
          : item
      );
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    try {
      const local = window.localStorage.getItem('nexus_cart');
      return local ? JSON.parse(local) : INITIAL_CART;
    } catch {
      return INITIAL_CART;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem('nexus_cart', JSON.stringify(cart));
    } catch (e) {
      console.warn('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  const addItem = (product, quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { ...product, quantity } });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        itemCount,
        subtotal,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export default CartContext;
