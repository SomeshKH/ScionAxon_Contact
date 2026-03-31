import { motion } from 'motion/react';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { Company } from '../data/companies';
import { useNavigate } from 'react-router';

interface CompanyCardProps {
  company: Company;
  index: number;
}

export function CompanyCard({ company, index }: CompanyCardProps) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      whileHover={{ y: -4 }}
      className="glass-card"
      style={{
        borderRadius: 16,
        padding: 24,
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        transition: 'box-shadow 0.25s, transform 0.25s, border-color 0.25s',
      }}
      onClick={() => navigate(`/company/${company.id}`)}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          '0 8px 24px rgba(21, 128, 61, 0.12)';
        (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--primary-muted)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)';
        (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)';
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 16 }}>
        {/* Logo */}
        <div style={{ position: 'relative', flexShrink: 0 }}>
          <img
            src={company.logo}
            alt={company.name}
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              objectFit: 'cover',
              border: '2px solid var(--border)',
            }}
          />
          {/* Online indicator */}
          <div
            style={{
              position: 'absolute',
              bottom: -2,
              right: -2,
              width: 14,
              height: 14,
              borderRadius: '50%',
              background: 'var(--success)',
              border: '2px solid var(--card)',
            }}
          />
        </div>

        {/* Name + Location */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <h3
            style={{
              fontWeight: 700,
              fontSize: 16,
              marginBottom: 4,
              color: 'var(--foreground)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {company.name}
          </h3>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 5,
              fontSize: 13,
              color: 'var(--muted-foreground)',
            }}
          >
            <MapPin style={{ width: 13, height: 13 }} />
            <span>{company.country}</span>
          </div>
        </div>
      </div>

      {/* Products */}
      <div style={{ marginBottom: 14 }}>
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.06em',
            color: 'var(--subtle)',
            marginBottom: 8,
            textTransform: 'uppercase',
          }}
        >
          Products
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {company.products.slice(0, 3).map((product, idx) => (
            <span key={idx} className="badge-primary" style={{ fontSize: 12 }}>
              {product}
            </span>
          ))}
          {company.products.length > 3 && (
            <span className="badge-neutral" style={{ fontSize: 12 }}>
              +{company.products.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Export Markets */}
      <div style={{ marginBottom: 14 }}>
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.06em',
            color: 'var(--subtle)',
            marginBottom: 8,
            textTransform: 'uppercase',
          }}
        >
          Export Markets
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
          {company.exportMarkets.slice(0, 5).map((market, idx) => (
            <span key={idx} className="badge-neutral" style={{ fontSize: 12 }}>
              {market}
            </span>
          ))}
          {company.exportMarkets.length > 5 && (
            <span className="badge-neutral" style={{ fontSize: 12 }}>
              +{company.exportMarkets.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Transit + Seasonality */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 16,
          paddingBottom: 16,
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            fontSize: 13,
            color: 'var(--muted-foreground)',
          }}
        >
          <Clock style={{ width: 14, height: 14 }} />
          <span>{company.transitTime}</span>
        </div>
        <span className="badge-success">{company.seasonality}</span>
      </div>

      {/* View Profile CTA */}
      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className="btn-primary"
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          padding: '11px 16px',
          fontSize: 14,
          borderRadius: 10,
        }}
        onClick={(e) => {
          e.stopPropagation();
          navigate(`/company/${company.id}`);
        }}
      >
        View Profile
        <ArrowRight style={{ width: 15, height: 15 }} />
      </motion.button>
    </motion.div>
  );
}
