import { motion } from 'motion/react';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { countries, allProducts, allMarkets } from '../data/companies';
import { useState } from 'react';

interface FilterSidebarProps {
  selectedCountries: string[];
  selectedProducts: string[];
  selectedMarkets: string[];
  onCountryChange: (countries: string[]) => void;
  onProductChange: (products: string[]) => void;
  onMarketChange: (markets: string[]) => void;
  onClearAll: () => void;
}

export function FilterSidebar({
  selectedCountries,
  selectedProducts,
  selectedMarkets,
  onCountryChange,
  onProductChange,
  onMarketChange,
  onClearAll,
}: FilterSidebarProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>('country');

  const toggleCountry = (c: string) =>
    onCountryChange(
      selectedCountries.includes(c)
        ? selectedCountries.filter((x) => x !== c)
        : [...selectedCountries, c]
    );
  const toggleProduct = (p: string) =>
    onProductChange(
      selectedProducts.includes(p)
        ? selectedProducts.filter((x) => x !== p)
        : [...selectedProducts, p]
    );
  const toggleMarket = (m: string) =>
    onMarketChange(
      selectedMarkets.includes(m)
        ? selectedMarkets.filter((x) => x !== m)
        : [...selectedMarkets, m]
    );

  const totalActive =
    selectedCountries.length + selectedProducts.length + selectedMarkets.length;

  return (
    <motion.div
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="glass-card"
      style={{ borderRadius: 16, padding: 20, position: 'sticky', top: 80 }}
    >
      {/* ── Header ── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 18,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 9,
              background: 'var(--primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SlidersHorizontal style={{ width: 16, height: 16, color: '#FFF' }} />
          </div>
          <div>
            <h2
              style={{
                fontWeight: 700,
                fontSize: 15,
                color: 'var(--foreground)',
                margin: 0,
              }}
            >
              Filters
            </h2>
            {totalActive > 0 && (
              <p style={{ fontSize: 12, color: 'var(--muted-foreground)', margin: 0 }}>
                {totalActive} active
              </p>
            )}
          </div>
        </div>

        {totalActive > 0 && (
          <button
            onClick={onClearAll}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              fontSize: 12,
              fontWeight: 500,
              color: 'var(--danger-text)',
              background: 'var(--danger-bg)',
              border: '1px solid var(--danger-border)',
              borderRadius: 7,
              padding: '4px 10px',
              cursor: 'pointer',
            }}
          >
            <X style={{ width: 12, height: 12 }} />
            Clear all
          </button>
        )}
      </div>

      {/* ── Sections ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <FilterSection
          title="Country"
          count={selectedCountries.length}
          expanded={expandedSection === 'country'}
          onToggle={() =>
            setExpandedSection(expandedSection === 'country' ? null : 'country')
          }
        >
          <div className="custom-scrollbar" style={{ maxHeight: 220, overflowY: 'auto' }}>
            {countries.map((c) => (
              <FilterCheckbox
                key={c}
                label={c}
                checked={selectedCountries.includes(c)}
                onChange={() => toggleCountry(c)}
              />
            ))}
          </div>
        </FilterSection>

        <FilterSection
          title="Products"
          count={selectedProducts.length}
          expanded={expandedSection === 'products'}
          onToggle={() =>
            setExpandedSection(expandedSection === 'products' ? null : 'products')
          }
        >
          <div className="custom-scrollbar" style={{ maxHeight: 220, overflowY: 'auto' }}>
            {allProducts.map((p) => (
              <FilterCheckbox
                key={p}
                label={p}
                checked={selectedProducts.includes(p)}
                onChange={() => toggleProduct(p)}
              />
            ))}
          </div>
        </FilterSection>

        <FilterSection
          title="Export Markets"
          count={selectedMarkets.length}
          expanded={expandedSection === 'markets'}
          onToggle={() =>
            setExpandedSection(expandedSection === 'markets' ? null : 'markets')
          }
        >
          <div className="custom-scrollbar" style={{ maxHeight: 220, overflowY: 'auto' }}>
            {allMarkets.map((m) => (
              <FilterCheckbox
                key={m}
                label={m}
                checked={selectedMarkets.includes(m)}
                onChange={() => toggleMarket(m)}
              />
            ))}
          </div>
        </FilterSection>
      </div>
    </motion.div>
  );
}

/* ── FilterSection ── */
function FilterSection({
  title,
  count,
  expanded,
  onToggle,
  children,
}: {
  title: string;
  count: number;
  expanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        borderRadius: 10,
        border: '1px solid var(--border)',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 14px',
          background: expanded ? 'var(--muted)' : 'transparent',
          border: 'none',
          cursor: 'pointer',
          transition: 'background 0.15s',
          color: 'var(--foreground)',
        }}
        onMouseEnter={(e) => {
          if (!expanded)
            (e.currentTarget as HTMLButtonElement).style.background = 'var(--muted)';
        }}
        onMouseLeave={(e) => {
          if (!expanded)
            (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontWeight: 600, fontSize: 13, color: 'var(--foreground)' }}>
            {title}
          </span>
          {count > 0 && (
            <span className="badge-primary" style={{ fontSize: 11 }}>
              {count}
            </span>
          )}
        </div>
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown
            style={{ width: 14, height: 14, color: 'var(--muted-foreground)' }}
          />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{ overflow: 'hidden' }}
      >
        <div style={{ padding: '8px 14px 12px' }}>{children}</div>
      </motion.div>
    </div>
  );
}

/* ── FilterCheckbox ── */
function FilterCheckbox({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '5px 0',
        cursor: 'pointer',
      }}
    >
      <input type="checkbox" checked={checked} onChange={onChange} style={{ display: 'none' }} />
      {/* Custom box */}
      <div
        style={{
          width: 17,
          height: 17,
          borderRadius: 5,
          border: checked ? 'none' : '2px solid var(--border)',
          background: checked ? 'var(--primary)' : 'var(--card)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          transition: 'background 0.15s, border 0.15s',
        }}
      >
        {checked && (
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </div>
      <span
        style={{
          fontSize: 13,
          color: checked ? 'var(--foreground)' : 'var(--muted-foreground)',
          fontWeight: checked ? 500 : 400,
          transition: 'color 0.15s',
        }}
      >
        {label}
      </span>
    </label>
  );
}
