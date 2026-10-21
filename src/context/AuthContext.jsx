import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

const DEFAULT_USER = {
  name: 'Marcus Vance',
  email: 'marcus.vance@nexuscorp.io',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80',
  tier: 'Nexus Prime VIP',
  memberSince: 'Oct 2024',
  phone: '+1 (555) 234-5678',
  defaultAddress: {
    fullName: 'Marcus Vance',
    street: '725 5th Ave',
    apt: 'Suite 400',
    city: 'New York',
    state: 'NY',
    zip: '10022',
  },
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const local = window.localStorage.getItem('nexus_auth_user');
      return local ? JSON.parse(local) : DEFAULT_USER;
    } catch {
      return DEFAULT_USER;
    }
  });

  useEffect(() => {
    try {
      if (user) {
        window.localStorage.setItem('nexus_auth_user', JSON.stringify(user));
      } else {
        window.localStorage.removeItem('nexus_auth_user');
      }
    } catch (e) {
      console.warn('Failed to sync auth user to localStorage', e);
    }
  }, [user]);

  const login = (email, password) => {
    const loggedUser = {
      ...DEFAULT_USER,
      email: email || DEFAULT_USER.email,
      name: email ? email.split('@')[0].replace('.', ' ').toUpperCase() : DEFAULT_USER.name,
    };
    setUser(loggedUser);
    return true;
  };

  const register = (name, email, password) => {
    const newUser = {
      ...DEFAULT_USER,
      name: name || 'Valued Member',
      email: email || 'user@example.com',
    };
    setUser(newUser);
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfile = (updates) => {
    setUser((prev) => (prev ? { ...prev, ...updates } : updates));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export default AuthContext;
