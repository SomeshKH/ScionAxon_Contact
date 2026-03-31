import { motion } from 'motion/react';
import { Filter, X } from 'lucide-react';
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

  const toggleCountry = (country: string) => {
    if (selectedCountries.includes(country)) {
      onCountryChange(selectedCountries.filter(c => c !== country));
    } else {
      onCountryChange([...selectedCountries, country]);
    }
  };

  const toggleProduct = (product: string) => {
    if (selectedProducts.includes(product)) {
      onProductChange(selectedProducts.filter(p => p !== product));
    } else {
      onProductChange([...selectedProducts, product]);
    }
  };

  const toggleMarket = (market: string) => {
    if (selectedMarkets.includes(market)) {
      onMarketChange(selectedMarkets.filter(m => m !== market));
    } else {
      onMarketChange([...selectedMarkets, market]);
    }
  };

  const hasActiveFilters = selectedCountries.length > 0 || selectedProducts.length > 0 || selectedMarkets.length > 0;

  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="glass-card rounded-3xl p-6 h-fit sticky top-24"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
            <Filter className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-xl font-bold">Filters</h2>
        </div>
        {hasActiveFilters && (
          <button
            onClick={onClearAll}
            className="text-sm text-gray-400 hover:text-white flex items-center gap-1 transition-colors"
          >
            <X className="w-4 h-4" />
            Clear
          </button>
        )}
      </div>

      {/* Filter Sections */}
      <div className="space-y-4">
        {/* Country Filter */}
        <FilterSection
          title="Country"
          count={selectedCountries.length}
          expanded={expandedSection === 'country'}
          onToggle={() => setExpandedSection(expandedSection === 'country' ? null : 'country')}
        >
          <div className="space-y-2 max-h-60 overflow-y-auto custom-scrollbar">
            {countries.map((country) => (
              <FilterCheckbox
                key={country}
                label={country}
                checked={selectedCountries.includes(country)}
                onChange={() => toggleCountry(country)}
              />
            ))}
          </div>
        </FilterSection>

        {/* Product Filter */}
        <FilterSection
          title="Products"
          count={selectedProducts.length}
          expanded={expandedSection === 'products'}
          onToggle={() => setExpandedSection(expandedSection === 'products' ? null : 'products')}
        >
          <div className="space-y-2 max-h-60 overflow-y-auto custom-scrollbar">
            {allProducts.map((product) => (
              <FilterCheckbox
                key={product}
                label={product}
                checked={selectedProducts.includes(product)}
                onChange={() => toggleProduct(product)}
              />
            ))}
          </div>
        </FilterSection>

        {/* Export Markets Filter */}
        <FilterSection
          title="Export Markets"
          count={selectedMarkets.length}
          expanded={expandedSection === 'markets'}
          onToggle={() => setExpandedSection(expandedSection === 'markets' ? null : 'markets')}
        >
          <div className="space-y-2 max-h-60 overflow-y-auto custom-scrollbar">
            {allMarkets.map((market) => (
              <FilterCheckbox
                key={market}
                label={market}
                checked={selectedMarkets.includes(market)}
                onChange={() => toggleMarket(market)}
              />
            ))}
          </div>
        </FilterSection>
      </div>
    </motion.div>
  );
}

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
    <div className="border-b border-white/10 pb-4 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between mb-3 hover:text-purple-400 transition-colors"
      >
        <span className="font-semibold">
          {title}
          {count > 0 && (
            <span className="ml-2 px-2 py-0.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-xs">
              {count}
            </span>
          )}
        </span>
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: expanded ? 'auto' : 0,
          opacity: expanded ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden"
      >
        {children}
      </motion.div>
    </div>
  );
}

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
    <label className="flex items-center gap-3 cursor-pointer group">
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div
          className={`w-5 h-5 rounded border-2 transition-all duration-200 ${
            checked
              ? 'bg-gradient-to-br from-purple-500 to-cyan-500 border-transparent'
              : 'border-white/30 group-hover:border-purple-500/50'
          }`}
        >
          {checked && (
            <svg className="w-full h-full text-white p-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      </div>
      <span className={`text-sm transition-colors ${checked ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
        {label}
      </span>
    </label>
  );
}
