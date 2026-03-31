import { motion } from 'motion/react';
import { Mail, Lock, User, Building, ArrowLeft, Leaf } from 'lucide-react';
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
    console.log('Signup attempt:', formData);
    navigate('/');
  };

  const handleChange = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const fieldInput: React.CSSProperties = {
    width: '100%',
    paddingLeft: 40,
    paddingRight: 14,
    paddingTop: 11,
    paddingBottom: 11,
  };

  const iconStyle: React.CSSProperties = {
    position: 'absolute',
    left: 12,
    top: '50%',
    transform: 'translateY(-50%)',
    width: 16,
    height: 16,
    color: 'var(--muted-foreground)',
    pointerEvents: 'none',
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px 24px',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--background)',
      }}
    >
      {/* Decorative blobs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.10, 0.16, 0.10] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: -100, left: -120,
          width: 380, height: 380, borderRadius: '50%',
          background: '#15803D', filter: 'blur(100px)', pointerEvents: 'none',
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        style={{
          position: 'absolute', bottom: -80, right: -100,
          width: 340, height: 340, borderRadius: '50%',
          background: '#22C55E', filter: 'blur(100px)', pointerEvents: 'none',
        }}
      />

      {/* Card */}
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
        className="glass-card"
        style={{
          borderRadius: 20,
          padding: '40px',
          width: '100%',
          maxWidth: 460,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Back */}
        <button
          onClick={() => navigate('/')}
          style={{
            display: 'flex', alignItems: 'center', gap: 6,
            fontSize: 13, fontWeight: 500, color: 'var(--muted-foreground)',
            background: 'none', border: 'none', cursor: 'pointer',
            marginBottom: 28, padding: 0, transition: 'color 0.2s',
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.color = 'var(--primary)')
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.color = 'var(--muted-foreground)')
          }
        >
          <ArrowLeft style={{ width: 15, height: 15 }} />
          Back
        </button>

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
          <div
            style={{
              width: 40, height: 40, borderRadius: 11,
              background: 'var(--primary)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <Leaf style={{ width: 20, height: 20, color: '#FFFFFF' }} />
          </div>
          <span style={{ fontWeight: 800, fontSize: 20, color: 'var(--foreground)', letterSpacing: '-0.3px' }}>
            GlobalTrade
          </span>
        </div>

        {/* Heading */}
        <div style={{ marginBottom: 24 }}>
          <h1 style={{ fontSize: 24, fontWeight: 800, color: 'var(--foreground)', marginBottom: 4, letterSpacing: '-0.02em' }}>
            Create Account
          </h1>
          <p style={{ fontSize: 14, color: 'var(--muted-foreground)', margin: 0 }}>
            Join the global trade community
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

          {/* Full Name */}
          <div>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--foreground)', marginBottom: 6 }}>
              Full Name
            </label>
            <div style={{ position: 'relative' }}>
              <User style={iconStyle} />
              <input type="text" value={formData.name} onChange={(e) => handleChange('name', e.target.value)}
                placeholder="John Doe" required className="theme-input" style={fieldInput} />
            </div>
          </div>

          {/* Company */}
          <div>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--foreground)', marginBottom: 6 }}>
              Company Name
            </label>
            <div style={{ position: 'relative' }}>
              <Building style={iconStyle} />
              <input type="text" value={formData.company} onChange={(e) => handleChange('company', e.target.value)}
                placeholder="Your Company Ltd." required className="theme-input" style={fieldInput} />
            </div>
          </div>

          {/* Email */}
          <div>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--foreground)', marginBottom: 6 }}>
              Email Address
            </label>
            <div style={{ position: 'relative' }}>
              <Mail style={iconStyle} />
              <input type="email" value={formData.email} onChange={(e) => handleChange('email', e.target.value)}
                placeholder="you@example.com" required className="theme-input" style={fieldInput} />
            </div>
          </div>

          {/* Password */}
          <div>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--foreground)', marginBottom: 6 }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <Lock style={iconStyle} />
              <input type="password" value={formData.password} onChange={(e) => handleChange('password', e.target.value)}
                placeholder="••••••••" required className="theme-input" style={fieldInput} />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--foreground)', marginBottom: 6 }}>
              Confirm Password
            </label>
            <div style={{ position: 'relative' }}>
              <Lock style={iconStyle} />
              <input type="password" value={formData.confirmPassword} onChange={(e) => handleChange('confirmPassword', e.target.value)}
                placeholder="••••••••" required className="theme-input" style={fieldInput} />
            </div>
          </div>

          {/* Terms */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
            <input
              type="checkbox"
              id="terms"
              required
              style={{ width: 16, height: 16, marginTop: 2, accentColor: 'var(--primary)', cursor: 'pointer', flexShrink: 0 }}
            />
            <label htmlFor="terms" style={{ fontSize: 13, color: 'var(--muted-foreground)', lineHeight: 1.55 }}>
              I agree to the{' '}
              <button type="button" style={{ fontSize: 13, fontWeight: 600, color: 'var(--primary)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                Terms of Service
              </button>
              {' '}and{' '}
              <button type="button" style={{ fontSize: 13, fontWeight: 600, color: 'var(--primary)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                Privacy Policy
              </button>
            </label>
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="btn-primary"
            style={{ width: '100%', padding: '13px 16px', fontSize: 15, borderRadius: 12, marginTop: 4 }}
          >
            Create Account
          </motion.button>
        </form>

        {/* Login link */}
        <div style={{ marginTop: 20, textAlign: 'center' }}>
          <p style={{ fontSize: 14, color: 'var(--muted-foreground)' }}>
            Already have an account?{' '}
            <button
              onClick={() => navigate('/login')}
              style={{ fontSize: 14, fontWeight: 600, color: 'var(--primary)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              Sign in
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
