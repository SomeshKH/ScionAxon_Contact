import { useTheme } from 'next-themes';
import { Sun, Moon, Monitor, ChevronDown, Check } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

type ThemeOption = {
  value: 'light' | 'dark' | 'system';
  label: string;
  icon: React.ElementType;
};

const THEME_OPTIONS: ThemeOption[] = [
  { value: 'light',  label: 'Light Theme',    icon: Sun     },
  { value: 'dark',   label: 'Dark Theme',     icon: Moon    },
  { value: 'system', label: 'System Default', icon: Monitor },
];

function ActiveIcon({ theme }: { theme: string | undefined }) {
  const style = { width: 15, height: 15, color: '#FFFFFF' };
  if (theme === 'light')  return <Sun  style={style} />;
  if (theme === 'dark')   return <Moon style={style} />;
  return <Monitor style={style} />;
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen]       = useState(false);
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  if (!mounted) {
    return (
      <div
        style={{
          width: 80,
          height: 34,
          borderRadius: 8,
          background: 'rgba(255,255,255,0.12)',
          border: '1px solid rgba(255,255,255,0.20)',
        }}
      />
    );
  }

  const activeOption = THEME_OPTIONS.find((o) => o.value === theme) ?? THEME_OPTIONS[1];
  const shortLabel   = activeOption.label.replace(' Theme', '').replace('System Default', 'System');

  return (
    <div ref={ref} style={{ position: 'relative', display: 'inline-block' }}>
      {/* ── Trigger ── */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select theme"
        /* uses navbar-btn class for consistent navbar context styling */
        className="navbar-btn"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          padding: '7px 12px',
          cursor: 'pointer',
          fontSize: 13,
          fontWeight: 500,
          whiteSpace: 'nowrap',
        }}
      >
        <motion.span
          key={theme}
          initial={{ rotate: -20, opacity: 0, scale: 0.8 }}
          animate={{ rotate: 0,   opacity: 1, scale: 1   }}
          transition={{ duration: 0.2 }}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <ActiveIcon theme={theme} />
        </motion.span>

        <span style={{ color: '#FFFFFF' }}>{shortLabel}</span>

        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.18 }}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <ChevronDown style={{ width: 13, height: 13, color: 'rgba(255,255,255,0.70)' }} />
        </motion.span>
      </motion.button>

      {/* ── Dropdown ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            role="listbox"
            aria-label="Theme options"
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0,  scale: 1     }}
            exit={{    opacity: 0, y: -6, scale: 0.96  }}
            transition={{ duration: 0.14, ease: 'easeOut' }}
            style={{
              position:    'absolute',
              right:       0,
              top:         'calc(100% + 8px)',
              width:       196,
              borderRadius: 12,
              padding:     6,
              background:  'var(--dropdown-bg)',
              border:      '1px solid var(--border)',
              backdropFilter: 'blur(12px)',
              boxShadow:   'var(--dropdown-shadow)',
              zIndex:      9999,
            }}
          >
            {THEME_OPTIONS.map(({ value, label, icon: Icon }) => {
              const active = theme === value;
              return (
                <button
                  key={value}
                  role="option"
                  aria-selected={active}
                  onClick={() => { setTheme(value); setOpen(false); }}
                  style={{
                    display:    'flex',
                    alignItems: 'center',
                    gap:        10,
                    width:      '100%',
                    padding:    '9px 12px',
                    borderRadius: 8,
                    border:     'none',
                    cursor:     'pointer',
                    fontSize:   13,
                    fontWeight: active ? 600 : 500,
                    textAlign:  'left',
                    background: active ? 'var(--primary-light)' : 'transparent',
                    color:      active ? 'var(--primary)'        : 'var(--foreground)',
                    transition: 'background 0.15s',
                  }}
                  onMouseEnter={(e) => {
                    if (!active) (e.currentTarget as HTMLButtonElement).style.background = 'var(--muted)';
                  }}
                  onMouseLeave={(e) => {
                    if (!active) (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                  }}
                >
                  <Icon
                    style={{
                      width: 15,
                      height: 15,
                      flexShrink: 0,
                      color: active ? 'var(--primary)' : 'var(--muted-foreground)',
                    }}
                  />
                  <span style={{ flex: 1 }}>{label}</span>
                  {active && (
                    <Check
                      style={{ width: 13, height: 13, flexShrink: 0, color: 'var(--primary)' }}
                    />
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
