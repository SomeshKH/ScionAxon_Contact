import { motion } from 'motion/react';
import { Mail, Lock, User, Building, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useState } from 'react';

export function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock signup - in real app, this would create account
    console.log('Signup attempt:', formData);
    navigate('/');
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-0 -left-40 w-96 h-96 bg-purple-500 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute bottom-0 -right-40 w-96 h-96 bg-cyan-500 rounded-full blur-[120px]"
      />

      {/* Signup Card */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass-card rounded-3xl p-8 md:p-12 w-full max-w-md relative z-10"
      >
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        {/* Logo */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 flex items-center justify-center">
            <span className="font-bold text-white text-xl">GT</span>
          </div>
          <span className="font-bold text-2xl gradient-text">GlobalTrade</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Create Account</h1>
          <p className="text-gray-400">Join the global trade community</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">Full Name</label>
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 
                             group-focus-within:text-purple-400 transition-colors" />
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="John Doe"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white 
                         placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 
                         focus:ring-purple-500/20 focus:shadow-[0_0_20px_rgba(127,90,240,0.3)] 
                         transition-all duration-300"
              />
            </div>
          </div>

          {/* Company */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">Company Name</label>
            <div className="relative group">
              <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 
                                 group-focus-within:text-purple-400 transition-colors" />
              <input
                type="text"
                value={formData.company}
                onChange={(e) => handleChange('company', e.target.value)}
                placeholder="Your Company Ltd."
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white 
                         placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 
                         focus:ring-purple-500/20 focus:shadow-[0_0_20px_rgba(127,90,240,0.3)] 
                         transition-all duration-300"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 
                             group-focus-within:text-purple-400 transition-colors" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white 
                         placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 
                         focus:ring-purple-500/20 focus:shadow-[0_0_20px_rgba(127,90,240,0.3)] 
                         transition-all duration-300"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">Password</label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 
                            group-focus-within:text-purple-400 transition-colors" />
              <input
                type="password"
                value={formData.password}
                onChange={(e) => handleChange('password', e.target.value)}
                placeholder="••••••••"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white 
                         placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 
                         focus:ring-purple-500/20 focus:shadow-[0_0_20px_rgba(127,90,240,0.3)] 
                         transition-all duration-300"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">Confirm Password</label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 
                            group-focus-within:text-purple-400 transition-colors" />
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => handleChange('confirmPassword', e.target.value)}
                placeholder="••••••••"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white 
                         placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 
                         focus:ring-purple-500/20 focus:shadow-[0_0_20px_rgba(127,90,240,0.3)] 
                         transition-all duration-300"
              />
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="terms"
              required
              className="mt-1 w-4 h-4 rounded border-white/30 bg-white/5 accent-purple-500"
            />
            <label htmlFor="terms" className="text-sm text-gray-400">
              I agree to the{' '}
              <button type="button" className="text-purple-400 hover:text-purple-300 transition-colors">
                Terms of Service
              </button>{' '}
              and{' '}
              <button type="button" className="text-purple-400 hover:text-purple-300 transition-colors">
                Privacy Policy
              </button>
            </label>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 
                     hover:shadow-[0_0_40px_rgba(127,90,240,0.6)] transition-all duration-300 
                     font-semibold text-lg relative overflow-hidden group"
          >
            <span className="relative z-10">Create Account</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </form>

        {/* Login Link */}
        <div className="mt-8 text-center">
          <p className="text-gray-400">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/login')}
              className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
            >
              Sign in
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
