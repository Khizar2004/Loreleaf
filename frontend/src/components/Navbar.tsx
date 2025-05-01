'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg text-gray-800 dark:text-white py-3' 
          : 'bg-transparent text-white py-5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6">
        <Link href="/" className="flex items-center space-x-2 group">
          <span className="text-2xl transition-transform duration-300 group-hover:rotate-12">🍃</span>
          <span className={`text-xl font-bold transition-all ${
            scrolled ? 'text-emerald-600 dark:text-emerald-400' : 'text-white'
          }`}>
            Loreleaf
          </span>
        </Link>

        <div className="flex space-x-6 items-center">
          {user ? (
            <>
              <Link 
                href="/dashboard" 
                className={`relative pb-1 transition-colors hover:text-emerald-500 after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-emerald-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left ${
                  scrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
                }`}
              >
                Dashboard
              </Link>
              <Link 
                href="/graph" 
                className={`relative pb-1 transition-colors hover:text-emerald-500 after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-emerald-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left ${
                  scrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
                }`}
              >
                Knowledge Graph
              </Link>
              <button
                onClick={logout}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full font-medium transition-all hover:scale-105 hover:shadow-md"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link 
                href="/login" 
                className={`relative pb-1 transition-colors hover:text-emerald-500 after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-emerald-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left ${
                  scrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
                }`}
              >
                Login
              </Link>
              <Link
                href="/register"
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-5 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 