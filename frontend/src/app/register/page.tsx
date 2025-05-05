'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';

// Define validation schema
const registerSchema = z.object({
  name: z.string().optional(),
  email: z.string().email('Please enter a valid email'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters long'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const [serverError, setServerError] = useState<string | null>(null);
  const { register: registerUser, loading } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setServerError(null);
      await registerUser(data.email, data.password, data.name);
    } catch (error: any) {
      setServerError(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-emerald-500 rounded-full opacity-10 animate-blob"></div>
        <div className="absolute top-0 -right-20 w-60 h-60 bg-emerald-400 rounded-full opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-emerald-300 rounded-full opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className={`w-full max-w-md transition-all duration-700 ease-in-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
            <div className="text-emerald-500 text-2xl font-bold">🍃</div>
          </div>
        </div>

        {/* Card container with glass effect */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-white/20">
          <div className="px-8 py-10">
            <h2 className="text-3xl font-bold text-center text-white mb-1">
              Join Loreleaf
        </h2>
            <p className="text-center text-emerald-300 mb-8">Create your personal knowledge space</p>

        {serverError && (
              <div className="bg-red-500/20 backdrop-blur-sm border border-red-500/30 text-red-200 px-4 py-3 rounded-lg mb-6 text-sm">
            {serverError}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-5">
                <label htmlFor="name" className="block text-emerald-300 font-medium mb-2 text-sm">
              Name (Optional)
            </label>
                <div className="relative">
            <input
              type="text"
              id="name"
              {...register('name')}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-white placeholder-white/30 transition-all"
              placeholder="Your Name"
            />
                  <div className="absolute right-3 top-3 text-white/30">
                    👤
                  </div>
                </div>
            {errors.name && (
                  <p className="text-red-300 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

              <div className="mb-5">
                <label htmlFor="email" className="block text-emerald-300 font-medium mb-2 text-sm">
              Email
            </label>
                <div className="relative">
            <input
              type="email"
              id="email"
              {...register('email')}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-white placeholder-white/30 transition-all"
              placeholder="you@example.com"
            />
                  <div className="absolute right-3 top-3 text-white/30">
                    ✉️
                  </div>
                </div>
            {errors.email && (
                  <p className="text-red-300 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

              <div className="mb-5">
                <label htmlFor="password" className="block text-emerald-300 font-medium mb-2 text-sm">
              Password
            </label>
                <div className="relative">
            <input
              type="password"
              id="password"
              {...register('password')}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-white placeholder-white/30 transition-all"
              placeholder="••••••••"
            />
                  <div className="absolute right-3 top-3 text-white/30">
                    🔒
                  </div>
                </div>
            {errors.password && (
                  <p className="text-red-300 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <div className="mb-6">
                <label htmlFor="confirmPassword" className="block text-emerald-300 font-medium mb-2 text-sm">
              Confirm Password
            </label>
                <div className="relative">
            <input
              type="password"
              id="confirmPassword"
              {...register('confirmPassword')}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-white placeholder-white/30 transition-all"
              placeholder="••••••••"
            />
                  <div className="absolute right-3 top-3 text-white/30">
                    🔒
                  </div>
                </div>
            {errors.confirmPassword && (
                  <p className="text-red-300 text-sm mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
                className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-3 px-4 rounded-lg hover:from-emerald-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-medium shadow-lg shadow-emerald-700/20"
          >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    <span>Creating account...</span>
                  </div>
                ) : (
                  'Create Account'
                )}
          </button>
        </form>

            <div className="mt-8 text-center">
              <p className="text-white/70">
            Already have an account?{' '}
                <Link href="/login" className="text-emerald-400 hover:text-emerald-300 font-medium hover:underline transition-colors">
              Log in here
            </Link>
          </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 