'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (!loading) {
      // If not authenticated, redirect to login
      if (!user) {
        router.push('/login');
      } else {
        // If authenticated, hide the loader
        setShowLoader(false);
      }
    }
  }, [user, loading, router]);

  if (loading || showLoader) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.5 }
          }}
          className="flex flex-col items-center"
        >
          <motion.div
            animate={{ 
              rotate: 360,
              transition: { 
                repeat: Infinity, 
                duration: 4, 
                ease: "linear" 
              }
            }}
            className="relative mb-4 h-12 w-12 rounded-full"
          >
            <Leaf className="h-12 w-12 text-primary" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.5, 1, 0.5],
              transition: {
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }
            }}
            className="text-sm font-medium text-muted-foreground"
          >
            Loading your knowledge base...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute; 