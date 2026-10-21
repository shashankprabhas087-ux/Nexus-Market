import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function AccountProfile() {
  const { user, updateProfile } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile({ name, email, phone });
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm space-y-6">
      <div className="border-b border-outline-variant pb-4">
        <h1 className="text-headline-md font-headline-md font-bold text-brand-navy">Profile &amp; Security</h1>
        <p className="text-body-sm text-outline">Manage your personal credentials, contact info, and security preferences.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        {saved && (
          <div className="p-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded text-body-sm font-semibold flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">check_circle</span>
            Profile information updated successfully!
          </div>
        )}

        <div>
          <label className="block text-label-md font-semibold text-brand-navy mb-1">Full Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-outline-variant rounded bg-white text-body-md focus:border-brand-navy focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-label-md font-semibold text-brand-navy mb-1">Email Address</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-outline-variant rounded bg-white text-body-md focus:border-brand-navy focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-label-md font-semibold text-brand-navy mb-1">Phone Number</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-3 py-2 border border-outline-variant rounded bg-white text-body-md focus:border-brand-navy focus:outline-none"
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="px-6 py-2.5 bg-brand-coral hover:bg-orange-600 text-white font-label-md font-bold rounded transition-colors"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
