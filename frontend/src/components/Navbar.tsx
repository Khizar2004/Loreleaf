'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-emerald-700 text-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-xl font-bold">
          🍃 Loreleaf
        </Link>

        <div className="flex space-x-4 items-center">
          {user ? (
            <>
              <Link href="/dashboard" className="hover:text-emerald-200">
                Dashboard
              </Link>
              <Link href="/graph" className="hover:text-emerald-200">
                Knowledge Graph
              </Link>
              <button
                onClick={logout}
                className="bg-white text-emerald-700 px-4 py-2 rounded-md font-medium hover:bg-emerald-100"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="hover:text-emerald-200">
                Login
              </Link>
              <Link
                href="/register"
                className="bg-white text-emerald-700 px-4 py-2 rounded-md font-medium hover:bg-emerald-100"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 