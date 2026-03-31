import { useParams, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import {
  ArrowLeft, MapPin, Mail, Phone, MapPinned, Heart,
  Package, Globe, Clock, Calendar, Building,
} from 'lucide-react';
import { companies } from '../data/companies';
import { Navbar } from '../components/navbar';

export function CompanyProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const company = companies.find((c) => c.id === id);

  if (!company) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--background)',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <h1
            style={{ fontSize: 32, fontWeight: 700, color: 'var(--foreground)', marginBottom: 12 }}
          >
            Company Not Found
          </h1>
          <button
            onClick={() => navigate('/')}
            className="btn-primary"
            style={{ padding: '12px 24px', fontSize: 15 }}
          >
            Back to Directory
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)' }}>
      <Navbar />

      <div style={{ paddingTop: 80, paddingBottom: 48, paddingLeft: 24, paddingRight: 24 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          {/* Back */}
          <motion.button
            initial={{ x: -16, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileHover={{ x: -4 }}
            onClick={() => navigate('/')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 7,
              marginBottom: 24,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: 14,
              fontWeight: 500,
              color: 'var(--muted-foreground)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = 'var(--primary)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = 'var(--muted-foreground)';
            }}
          >
            <ArrowLeft style={{ width: 16, height: 16 }} />
            Back to Directory
          </motion.button>

          {/* Header Banner */}
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="glass-card"
            style={{ borderRadius: 16, overflow: 'hidden', marginBottom: 24 }}
          >
            {/* Green banner */}
            <div
              style={{
                height: 160,
                background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-hover) 100%)',
                position: 'relative',
              }}
            >
              {/* decorative pattern */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: 0.12,
                  backgroundImage:
                    'radial-gradient(circle at 20% 50%, #fff 0%, transparent 50%), radial-gradient(circle at 80% 20%, #fff 0%, transparent 40%)',
                }}
              />
            </div>

            {/* Company info */}
            <div style={{ padding: '0 32px 28px' }}>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'flex-end',
                  gap: 20,
                  marginTop: -52,
                }}
              >
                {/* Logo */}
                <img
                  src={company.logo}
                  alt={company.name}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 16,
                    objectFit: 'cover',
                    border: '4px solid var(--card)',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                    flexShrink: 0,
                  }}
                />

                {/* Name + meta */}
                <div style={{ flex: 1, minWidth: 200, paddingTop: 56 }}>
                  <h1
                    style={{
                      fontSize: 28,
                      fontWeight: 800,
                      color: 'var(--foreground)',
                      marginBottom: 6,
                    }}
                  >
                    {company.name}
                  </h1>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 16,
                      fontSize: 14,
                      color: 'var(--muted-foreground)',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <MapPin style={{ width: 14, height: 14 }} />
                      {company.country}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <Building style={{ width: 14, height: 14 }} />
                      Verified Exporter
                    </span>
                  </div>
                </div>

                {/* Action buttons */}
                <div
                  style={{
                    display: 'flex',
                    gap: 10,
                    flexWrap: 'wrap',
                    paddingTop: 56,
                  }}
                >
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="btn-ghost"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 7,
                      fontSize: 14,
                    }}
                  >
                    <Heart style={{ width: 16, height: 16 }} />
                    <span className="hidden md:block">Save</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="btn-primary"
                    style={{ fontSize: 14, padding: '10px 24px' }}
                  >
                    Contact Company
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 20,
            }}
            className="lg:grid-cols-[1fr_320px]"
          >
            {/* Left column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

              {/* About */}
              <motion.div
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="glass-card"
                style={{ borderRadius: 14, padding: 28 }}
              >
                <h2
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: 'var(--foreground)',
                    marginBottom: 12,
                  }}
                >
                  About Company
                </h2>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.75,
                    color: 'var(--muted-foreground)',
                    margin: 0,
                  }}
                >
                  {company.description}
                </p>
              </motion.div>

              {/* Products */}
              <motion.div
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="glass-card"
                style={{ borderRadius: 14, padding: 28 }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    marginBottom: 18,
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 9,
                      background: 'var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Package style={{ width: 18, height: 18, color: '#FFF' }} />
                  </div>
                  <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--foreground)', margin: 0 }}>
                    Products & Services
                  </h2>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {company.products.map((product, idx) => (
                    <span key={idx} className="badge-primary" style={{ fontSize: 13, padding: '6px 14px' }}>
                      {product}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Export Markets */}
              <motion.div
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="glass-card"
                style={{ borderRadius: 14, padding: 28 }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    marginBottom: 18,
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 9,
                      background: 'var(--primary-hover)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Globe style={{ width: 18, height: 18, color: '#FFF' }} />
                  </div>
                  <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--foreground)', margin: 0 }}>
                    Export Markets
                  </h2>
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                    gap: 8,
                  }}
                >
                  {company.exportMarkets.map((market, idx) => (
                    <div
                      key={idx}
                      className="badge-neutral"
                      style={{
                        borderRadius: 9,
                        padding: '8px 12px',
                        textAlign: 'center',
                        fontSize: 13,
                        transition: 'border-color 0.2s, background 0.2s',
                        cursor: 'default',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--primary-muted)';
                        (e.currentTarget as HTMLDivElement).style.background  = 'var(--primary-light)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--badge-neutral-border)';
                        (e.currentTarget as HTMLDivElement).style.background  = 'var(--badge-neutral-bg)';
                      }}
                    >
                      {market}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

              {/* Business Details */}
              <motion.div
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="glass-card"
                style={{ borderRadius: 14, padding: 24 }}
              >
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: 'var(--foreground)',
                    marginBottom: 16,
                  }}
                >
                  Business Details
                </h3>

                {/* Transit */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 12,
                    padding: '12px 0',
                    borderBottom: '1px solid var(--border)',
                  }}
                >
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 9,
                      background: 'var(--primary-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Clock style={{ width: 16, height: 16, color: 'var(--primary)' }} />
                  </div>
                  <div>
                    <p style={{ fontSize: 12, color: 'var(--muted-foreground)', marginBottom: 2 }}>
                      Transit Time
                    </p>
                    <p style={{ fontWeight: 600, fontSize: 14, color: 'var(--foreground)', margin: 0 }}>
                      {company.transitTime}
                    </p>
                  </div>
                </div>

                {/* Seasonality */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 12,
                    padding: '12px 0',
                  }}
                >
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 9,
                      background: 'var(--success-bg)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Calendar style={{ width: 16, height: 16, color: 'var(--success-text)' }} />
                  </div>
                  <div>
                    <p style={{ fontSize: 12, color: 'var(--muted-foreground)', marginBottom: 2 }}>
                      Seasonality
                    </p>
                    <span className="badge-success">{company.seasonality}</span>
                  </div>
                </div>
              </motion.div>

              {/* Contact */}
              <motion.div
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="glass-card"
                style={{ borderRadius: 14, padding: 24 }}
              >
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: 'var(--foreground)',
                    marginBottom: 16,
                  }}
                >
                  Contact Information
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {/* Name */}
                  <div>
                    <p style={{ fontSize: 12, color: 'var(--muted-foreground)', marginBottom: 2 }}>
                      Contact Person
                    </p>
                    <p style={{ fontWeight: 600, fontSize: 14, color: 'var(--foreground)', margin: 0 }}>
                      {company.contact.name}
                    </p>
                  </div>

                  {/* Email */}
                  <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        background: 'var(--primary-light)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Mail style={{ width: 15, height: 15, color: 'var(--primary)' }} />
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <p style={{ fontSize: 12, color: 'var(--muted-foreground)', marginBottom: 2 }}>Email</p>
                      <a
                        href={`mailto:${company.contact.email}`}
                        style={{
                          fontSize: 13,
                          color: 'var(--primary)',
                          textDecoration: 'none',
                          wordBreak: 'break-all',
                          fontWeight: 500,
                        }}
                      >
                        {company.contact.email}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        background: 'var(--success-bg)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Phone style={{ width: 15, height: 15, color: 'var(--success-text)' }} />
                    </div>
                    <div>
                      <p style={{ fontSize: 12, color: 'var(--muted-foreground)', marginBottom: 2 }}>Phone</p>
                      <a
                        href={`tel:${company.contact.phone}`}
                        style={{
                          fontSize: 13,
                          color: 'var(--success-text)',
                          textDecoration: 'none',
                          fontWeight: 500,
                        }}
                      >
                        {company.contact.phone}
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        background: 'var(--muted)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <MapPinned style={{ width: 15, height: 15, color: 'var(--muted-foreground)' }} />
                    </div>
                    <div>
                      <p style={{ fontSize: 12, color: 'var(--muted-foreground)', marginBottom: 2 }}>Address</p>
                      <p style={{ fontSize: 13, color: 'var(--foreground)', margin: 0, lineHeight: 1.5 }}>
                        {company.contact.address}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
