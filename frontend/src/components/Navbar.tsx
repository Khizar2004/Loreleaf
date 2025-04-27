'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { motion } from 'framer-motion';
import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';
import { LogOut, Leaf, Home, PieChart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const logoVariants = {
    hover: {
      rotate: [0, -10, 10, -10, 10, 0],
      transition: { duration: 0.5 }
    }
  };

  const navItems = user ? [
    { href: '/dashboard', label: 'Dashboard', icon: Home },
    { href: '/graph', label: 'Knowledge Graph', icon: PieChart },
  ] : [];

  return (
    <nav className="border-b backdrop-blur-md bg-background/80 sticky top-0 z-40 w-full">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              variants={logoVariants}
              whileHover="hover"
              className="relative h-8 w-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
                className="absolute inset-0"
              >
                <Leaf className="h-8 w-8 text-primary" />
              </motion.div>
            </motion.div>
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl font-bold hidden sm:inline-block gradient-text"
            >
              Loreleaf
            </motion.span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          
          {user ? (
            <div className="hidden md:flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={logout}
                className="gap-1"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm" variant="gradient" className="shadow-sm">
                  Register
                </Button>
              </Link>
            </div>
          )}

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className={cn(
          "overflow-hidden md:hidden border-t",
          isOpen ? "block" : "hidden"
        )}
      >
        <div className="container py-4 space-y-3">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className="flex items-center gap-2 py-2 text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
          
          {user ? (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                logout();
                setIsOpen(false);
              }}
              className="w-full justify-start gap-2"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          ) : (
            <div className="flex flex-col gap-2 pt-2">
              <Link href="/login" className="w-full" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" size="sm" className="w-full">
                  Login
                </Button>
              </Link>
              <Link href="/register" className="w-full" onClick={() => setIsOpen(false)}>
                <Button size="sm" variant="gradient" className="w-full shadow-sm">
                  Register
                </Button>
              </Link>
            </div>
          )}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar; 