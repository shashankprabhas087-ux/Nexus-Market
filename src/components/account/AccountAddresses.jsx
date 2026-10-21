import React, { useState } from 'react';

const INITIAL_ADDRESSES = [
  {
    id: 1,
    name: 'Marcus Vance (Home)',
    street: '725 5th Ave, Suite 400',
    city: 'New York',
    state: 'NY',
    zip: '10022',
    phone: '+1 (555) 234-5678',
    isDefault: true,
  },
  {
    id: 2,
    name: 'Marcus Vance (Studio)',
    street: '140 Franklin St, Studio 4B',
    city: 'New York',
    state: 'NY',
    zip: '10013',
    phone: '+1 (555) 876-5432',
    isDefault: false,
  },
];

export default function AccountAddresses() {
  const [addresses, setAddresses] = useState(INITIAL_ADDRESSES);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newAddr, setNewAddr] = useState({ name: '', street: '', city: '', state: 'NY', zip: '', phone: '' });

  const handleAdd = (e) => {
    e.preventDefault();
    setAddresses([...addresses, { ...newAddr, id: Date.now(), isDefault: false }]);
    setShowAddForm(false);
    setNewAddr({ name: '', street: '', city: '', state: 'NY', zip: '', phone: '' });
  };

  const handleSetDefault = (id) => {
    setAddresses(addresses.map((a) => ({ ...a, isDefault: a.id === id })));
  };

  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm space-y-6">
      <div className="border-b border-outline-variant pb-4 flex items-center justify-between">
        <div>
          <h1 className="text-headline-md font-headline-md font-bold text-brand-navy">Saved Addresses</h1>
          <p className="text-body-sm text-outline">Manage your primary shipping destinations and contact details.</p>
        </div>
        <button
          type="button"
          onClick={() => setShowAddForm(!showAddForm)}
          className="px-4 py-2 bg-brand-navy text-white rounded font-label-md font-bold hover:bg-slate-800 transition-colors"
        >
          {showAddForm ? 'Cancel' : '+ Add Address'}
        </button>
      </div>

      {showAddForm && (
        <form onSubmit={handleAdd} className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-3">
          <h3 className="font-headline-sm font-bold text-brand-navy">Add New Address</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              type="text"
              required
              placeholder="Label / Name (e.g. Office)"
              value={newAddr.name}
              onChange={(e) => setNewAddr({ ...newAddr, name: e.target.value })}
              className="px-3 py-2 border rounded bg-white"
            />
            <input
              type="text"
              required
              placeholder="Street Address"
              value={newAddr.street}
              onChange={(e) => setNewAddr({ ...newAddr, street: e.target.value })}
              className="px-3 py-2 border rounded bg-white"
            />
            <input
              type="text"
              required
              placeholder="City"
              value={newAddr.city}
              onChange={(e) => setNewAddr({ ...newAddr, city: e.target.value })}
              className="px-3 py-2 border rounded bg-white"
            />
            <input
              type="text"
              required
              placeholder="ZIP Code"
              value={newAddr.zip}
              onChange={(e) => setNewAddr({ ...newAddr, zip: e.target.value })}
              className="px-3 py-2 border rounded bg-white"
            />
          </div>
          <button type="submit" className="px-5 py-2 bg-brand-coral text-white rounded font-label-md font-bold">
            Save Address
          </button>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {addresses.map((addr) => (
          <div key={addr.id} className="border border-outline-variant rounded-lg p-5 flex flex-col justify-between hover:border-slate-400 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-brand-navy">{addr.name}</span>
                {addr.isDefault && (
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                    Default
                  </span>
                )}
              </div>
              <p className="text-body-sm text-on-surface-variant leading-relaxed">
                {addr.street}<br />
                {addr.city}, {addr.state} {addr.zip}
              </p>
              <p className="text-body-sm text-outline mt-2">{addr.phone}</p>
            </div>
            {!addr.isDefault && (
              <button
                type="button"
                onClick={() => handleSetDefault(addr.id)}
                className="mt-4 text-label-sm font-semibold text-brand-coral hover:underline self-start"
              >
                Set as Default Address
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
