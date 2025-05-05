'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
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

        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 items-center">
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
              <div className="relative group">
                <button
                  className={`flex items-center gap-1 pb-1 transition-colors hover:text-emerald-500 ${
                    scrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
                  }`}
                >
                  Discover
                  <svg className="w-4 h-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-1">
                    <Link 
                      href="/timeline" 
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Timeline View
                    </Link>
                    <Link 
                      href="/collections" 
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Smart Collections
                    </Link>
                  </div>
                </div>
              </div>
              <Link 
                href="/about" 
                className={`relative pb-1 transition-colors hover:text-emerald-500 after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-emerald-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left ${
                  scrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
                }`}
              >
                About
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
                href="/about" 
                className={`relative pb-1 transition-colors hover:text-emerald-500 after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-emerald-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left ${
                  scrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
                }`}
              >
                About
              </Link>
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

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg rounded-b-lg py-4 z-50">
            <div className="flex flex-col space-y-3 px-6">
              {user ? (
                <>
                  <Link 
                    href="/dashboard" 
                    className="text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 font-medium"
                    onClick={() => setMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link 
                    href="/graph" 
                    className="text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 font-medium"
                    onClick={() => setMenuOpen(false)}
                  >
                    Knowledge Graph
                  </Link>
                  <Link 
                    href="/timeline" 
                    className="text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 font-medium"
                    onClick={() => setMenuOpen(false)}
                  >
                    Timeline View
                  </Link>
                  <Link 
                    href="/collections" 
                    className="text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 font-medium"
                    onClick={() => setMenuOpen(false)}
                  >
                    Smart Collections
                  </Link>
                  <Link 
                    href="/about" 
                    className="text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 font-medium"
                    onClick={() => setMenuOpen(false)}
                  >
                    About
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setMenuOpen(false);
                    }}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full font-medium w-full mt-2"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    href="/about" 
                    className="text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 font-medium"
                    onClick={() => setMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link 
                    href="/login" 
                    className="text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 font-medium"
                    onClick={() => setMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-5 py-2 rounded-full font-medium w-full text-center mt-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 