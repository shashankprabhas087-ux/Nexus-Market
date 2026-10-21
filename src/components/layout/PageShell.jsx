import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';

export default function PageShell() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface">
      <Header />
      <NavBar />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
