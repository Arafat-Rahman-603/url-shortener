'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'navbar-blur shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg btn-gradient flex items-center justify-center">
            <span className="text-white font-bold text-sm">T</span>
          </div>
          <span className="text-xl font-bold text-white">
            Trim<span className="gradient-text">URL</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200">Home</Link>
          <Link href="/features" className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200">Features</Link>
          <Link href="/pricing" className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200">Pricing</Link>
          <Link href="/blog" className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200">Blog</Link>
          <Link href="/dashboard" className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200">Dashboard</Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            id="nav-login-btn"
            className="px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white border border-white/10 hover:border-white/20 rounded-xl transition-all duration-200 hover:bg-white/5"
          >
            Login
          </Link>
          <Link
            href="/register"
            id="nav-register-btn"
            className="btn-gradient px-5 py-2 text-sm rounded-xl"
          >
            <span>Get Started</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-80' : 'max-h-0'}`}>
        <div className="navbar-blur border-t border-white/5 px-5 py-4 flex flex-col gap-3">
          <Link href="/" className="text-slate-300 hover:text-white py-2 text-sm font-medium transition-colors" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/features" className="text-slate-300 hover:text-white py-2 text-sm font-medium transition-colors" onClick={() => setMenuOpen(false)}>Features</Link>
          <Link href="/pricing" className="text-slate-300 hover:text-white py-2 text-sm font-medium transition-colors" onClick={() => setMenuOpen(false)}>Pricing</Link>
          <Link href="/blog" className="text-slate-300 hover:text-white py-2 text-sm font-medium transition-colors" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="/dashboard" className="text-slate-300 hover:text-white py-2 text-sm font-medium transition-colors" onClick={() => setMenuOpen(false)}>Dashboard</Link>
          <div className="flex gap-3 pt-2 border-t border-white/5">
            <Link href="/login" className="flex-1 text-center py-2.5 text-sm font-semibold border border-white/10 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all" onClick={() => setMenuOpen(false)}>Login</Link>
            <Link href="/register" className="flex-1 text-center btn-gradient py-2.5 text-sm rounded-xl" onClick={() => setMenuOpen(false)}><span>Get Started</span></Link>
          </div>
        </div>
      </div>
    </header>
  );
}