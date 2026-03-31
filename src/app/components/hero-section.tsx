import { motion } from 'motion/react';
import { ArrowRight, Globe, TrendingUp, Users } from 'lucide-react';

export function HeroSection() {
  const stats = [
    { icon: Globe,      value: '150+',  label: 'Countries',    color: '#15803D' },
    { icon: Users,      value: '10K+',  label: 'Companies',    color: '#16A34A' },
    { icon: TrendingUp, value: '$2B+',  label: 'Trade Volume', color: '#22C55E' },
  ];

  return (
    <div
      style={{
        position: 'relative',
        paddingTop: 100,
        paddingBottom: 64,
        paddingLeft: 24,
        paddingRight: 24,
        overflow: 'hidden',
        background: 'var(--background)',
      }}
    >
      {/* Subtle green tint background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(21,128,61,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Decorative green blobs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.18, 0.12] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: -80,
          left: -120,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: '#15803D',
          filter: 'blur(100px)',
          pointerEvents: 'none',
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        style={{
          position: 'absolute',
          top: 60,
          right: -100,
          width: 350,
          height: 350,
          borderRadius: '50%',
          background: '#22C55E',
          filter: 'blur(100px)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{ position: 'relative', maxWidth: 1200, margin: '0 auto' }}
      >
        {/* Tag */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 7,
              padding: '6px 16px',
              borderRadius: 999,
              background: 'var(--primary-light)',
              border: '1px solid var(--primary-muted)',
              fontSize: 13,
              fontWeight: 600,
              color: 'var(--primary-dark)',
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: 'var(--primary)',
                display: 'inline-block',
              }}
            />
            Global Trade Made Simple
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          style={{
            textAlign: 'center',
            fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: '-0.03em',
            color: 'var(--foreground)',
            marginBottom: 20,
          }}
        >
          Discover Global{' '}
          <span className="gradient-text">Exporters</span>
          <br />& Markets
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, delay: 0.18 }}
          style={{
            textAlign: 'center',
            fontSize: 18,
            color: 'var(--muted-foreground)',
            lineHeight: 1.7,
            maxWidth: 560,
            margin: '0 auto 36px',
          }}
        >
          Connect with verified exporters worldwide. Explore opportunities, build
          partnerships, and grow your business in the global marketplace.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, delay: 0.26 }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: 60 }}
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              document.getElementById('companies-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '14px 28px',
              fontSize: 16,
              borderRadius: 12,
            }}
          >
            Explore Companies
            <ArrowRight style={{ width: 18, height: 18 }} />
          </motion.button>
        </motion.div>

        {/* Stats */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 16,
          }}
        >
          {stats.map(({ icon: Icon, value, label, color }, i) => (
            <motion.div
              key={i}
              initial={{ y: 32, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.32 + i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass-card"
              style={{
                borderRadius: 14,
                padding: '20px 28px',
                minWidth: 180,
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                cursor: 'default',
                transition: 'box-shadow 0.2s, border-color 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--primary-muted)';
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  '0 6px 20px rgba(21,128,61,0.10)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)';
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)';
              }}
            >
              {/* Icon circle */}
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 11,
                  background: color + '18',
                  border: `1px solid ${color}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Icon style={{ width: 22, height: 22, color }} />
              </div>
              <div>
                <p
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    color: 'var(--foreground)',
                    lineHeight: 1,
                    marginBottom: 2,
                  }}
                >
                  {value}
                </p>
                <p style={{ fontSize: 13, color: 'var(--muted-foreground)', margin: 0 }}>
                  {label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
