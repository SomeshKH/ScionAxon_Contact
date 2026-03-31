import { Search, LogIn, UserPlus } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ThemeToggle } from './theme-toggle';

interface NavbarProps {
  onSearch?: (query: string) => void;
  searchQuery?: string;
}

export function Navbar({ onSearch, searchQuery = '' }: NavbarProps) {
  const navigate = useNavigate();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: 'var(--navbar-bg)',
        borderBottom: '1px solid var(--navbar-border)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.20)',
      }}
    >
      <div style={{ maxWidth: 1800, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, height: 64 }}>

          {/* ── Logo ── */}
          <Link
            to="/"
            style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}
          >
            {/* Logo mark */}
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: 'rgba(255,255,255,0.20)',
                border: '1px solid rgba(255,255,255,0.30)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontWeight: 800, color: '#FFFFFF', fontSize: 16, letterSpacing: '-0.5px' }}>GT</span>
            </div>
            {/* Logo text */}
            <span
              style={{
                fontWeight: 700,
                fontSize: 18,
                color: '#FFFFFF',
                letterSpacing: '-0.3px',
              }}
              className="hidden md:block"
            >
              GlobalTrade
            </span>
          </Link>

          {/* ── Search Bar ── */}
          <div style={{ flex: 1, maxWidth: 600, position: 'relative' }}>
            <Search
              style={{
                position: 'absolute',
                left: 14,
                top: '50%',
                transform: 'translateY(-50%)',
                width: 18,
                height: 18,
                color: 'rgba(255,255,255,0.65)',
                pointerEvents: 'none',
              }}
            />
            <input
              type="text"
              placeholder="Search companies, products, countries…"
              value={searchQuery}
              onChange={(e) => onSearch?.(e.target.value)}
              className="navbar-input"
              style={{
                width: '100%',
                paddingLeft: 42,
                paddingRight: 16,
                paddingTop: 9,
                paddingBottom: 9,
                fontSize: 14,
              }}
            />
          </div>

          {/* ── Right: Theme Toggle + Auth ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Login */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/login')}
              className="navbar-btn hidden md:flex"
              style={{
                alignItems: 'center',
                gap: 7,
                padding: '8px 16px',
                cursor: 'pointer',
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              <LogIn style={{ width: 16, height: 16 }} />
              <span>Login</span>
            </motion.button>

            {/* Sign Up */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/signup')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 7,
                padding: '8px 18px',
                borderRadius: 10,
                background: '#FFFFFF',
                color: 'var(--primary-dark)',
                border: 'none',
                cursor: 'pointer',
                fontSize: 14,
                fontWeight: 600,
                boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
                transition: 'box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.20)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 1px 3px rgba(0,0,0,0.15)';
              }}
            >
              <UserPlus style={{ width: 16, height: 16 }} />
              <span className="hidden md:block">Sign Up</span>
            </motion.button>

          </div>
        </div>
      </div>
    </motion.nav>
  );
}
