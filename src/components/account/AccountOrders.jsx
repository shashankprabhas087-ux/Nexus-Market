import React, { useState, useEffect } from 'react';
import formatPrice from '../../utils/formatPrice';
import { useCart } from '../../context/CartContext';

const DEFAULT_ORDERS = [
  {
    id: 'NXS-892410',
    date: 'Oct 20, 2026',
    total: 279.00,
    status: 'Out for Delivery',
    statusColor: 'emerald',
    items: [
      {
        id: 'prod-sony-wh1000xm5',
        title: 'WH-1000XM5 Wireless Industry Leading Noise Canceling Headphones',
        price: 249.99,
        quantity: 1,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDv96qAEgZKswAujbRmMwmaQxuO__xXeAGPih7dsJbzJhcp3z7hsX7S0L61hxIYArwiJcSH-g7V1xkt1ntBkeabO4jYUea5RwwJEbQbOYJ-LTUs7JfDYvSbzeqCvO0Ft9-Z7mCsYHcbmDGWuRQfxm0P318ww5Ak3rrsoQ6xIK2I1J91X0rVNMLqrfXJRxYbY9bkNKD9pVR8ff5xfiXPiWpf06KwNTJyjoIFxob8VSiWeDIAbj7HG9LyDg',
      },
    ],
  },
  {
    id: 'NXS-774192',
    date: 'Oct 14, 2026',
    total: 127.50,
    status: 'Delivered',
    statusColor: 'slate',
    items: [
      {
        id: 'prod-kronos-keyboard',
        title: 'Pro TKL Wireless Mechanical Keyboard - Tactile Brown Switches',
        price: 89.00,
        quantity: 1,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAo2Bjmr1vr1MnK3cW6liuWjQwcWQ02YFYyFFlF7q4QPxDx4bM5aIx0OdIstIyQizyUK74LKwG5T3vTX7yu-XTXAfKyBHIhoRQpRKBU8489bnbc6oi0c-P7wfHFBHd4eb4ocJ4x-Z3-7Le-nmEWxgcuwKe7YhaZtubvcxbXBwt3rN48Tnvh8wYPK-ahL16C07CJV9WObX8igK2nsJfmbC7053sclTF1sC2eCCLDd_z7Y4PItd7iiEwuQw',
      },
      {
        id: 'prod-sunglasses-jet',
        title: 'Square Beveled Acetate Frame UV400 Sunglasses in Jet',
        price: 38.50,
        quantity: 1,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoxwrCpW5qiFFGUa5iWAK3ZGQE1UAN1jkBBmKJmJXnpz48JKr9IUrhtOLaj3IsaiM704c9HUKHz5IlAhIV8iIvzZhhIERV32QPtvW_vkLMqlyCJ4L2NRxIqbVZ5V8I7eQE3IGNWMTB3nVtTRi77Cx1bQkd55abyBoWlFF_NentaHGMQtyZMped9T0-uTimWJoHq11U51OkFXAtfV_XrEeNOEtGG8i3C1EWMY0GTQW98FGsoTLg69ZGcQ',
      },
    ],
  },
];

export default function AccountOrders() {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState('all');
  const { addItem } = useCart();

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem('nexus_orders');
      setOrders(stored ? JSON.parse(stored) : DEFAULT_ORDERS);
    } catch {
      setOrders(DEFAULT_ORDERS);
    }
  }, []);

  const handleReorder = (item) => {
    addItem(item, 1);
  };

  const filteredOrders = orders.filter((o) => {
    if (filter === 'active') return o.status !== 'Delivered';
    if (filter === 'delivered') return o.status === 'Delivered';
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-outline-variant pb-4 mb-6">
          <div>
            <h1 className="text-headline-md font-headline-md font-bold text-brand-navy">My Orders</h1>
            <p className="text-body-sm text-outline">Track parcels, review purchases, and download invoice receipts.</p>
          </div>
          <div className="flex gap-2">
            {['all', 'active', 'delivered'].map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded font-label-sm uppercase tracking-wider font-bold text-[11px] transition-colors ${
                  filter === f
                    ? 'bg-brand-navy text-white'
                    : 'bg-slate-100 text-on-surface-variant hover:bg-slate-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {filteredOrders.length === 0 ? (
          <p className="text-center text-outline py-8">No orders found in this category.</p>
        ) : (
          <div className="space-y-4">
            {filteredOrders.map((order) => (
              <article key={order.id} className="border border-outline-variant rounded-lg p-5 hover:border-slate-400 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-outline-variant/60 text-body-sm">
                  <div>
                    <span className="font-bold text-brand-navy block">Order {order.id}</span>
                    <span className="text-outline text-[12px]">Placed on {order.date}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-2.5 py-1 rounded text-[11px] font-bold uppercase tracking-wider ${
                      order.status.includes('Delivery') || order.status.includes('Preparing')
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-slate-100 text-slate-800'
                    }`}>
                      {order.status}
                    </span>
                    <span className="font-price-card font-bold text-brand-navy">{formatPrice(order.total)}</span>
                  </div>
                </div>

                <div className="divide-y divide-outline-variant/40 mt-3">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="py-3 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <img src={item.image} alt={item.title} className="w-14 h-14 object-contain bg-slate-50 p-1 border rounded shrink-0" />
                        <div>
                          <h4 className="font-label-md font-bold text-brand-navy line-clamp-1">{item.title}</h4>
                          <span className="text-body-sm text-outline">Qty: {item.quantity || 1} &bull; {formatPrice(item.price)}</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleReorder(item)}
                        className="px-3 py-1.5 border border-outline-variant rounded text-label-sm font-semibold text-brand-navy hover:bg-slate-50 shrink-0"
                      >
                        Buy Again
                      </button>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
