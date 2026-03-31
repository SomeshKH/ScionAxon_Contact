import { useState, useMemo } from 'react';
import { Navbar } from '../components/navbar';
import { HeroSection } from '../components/hero-section';
import { FilterSidebar } from '../components/filter-sidebar';
import { CompanyCard } from '../components/company-card';
import { companies } from '../data/companies';
import { motion } from 'motion/react';
import { Search } from 'lucide-react';

export function Directory() {
  const [searchQuery, setSearchQuery]         = useState('');
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedProducts, setSelectedProducts]   = useState<string[]>([]);
  const [selectedMarkets, setSelectedMarkets]     = useState<string[]>([]);

  const filteredCompanies = useMemo(() => {
    return companies.filter((company) => {
      const matchesSearch =
        searchQuery === '' ||
        company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.products.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCountry =
        selectedCountries.length === 0 || selectedCountries.includes(company.country);

      const matchesProduct =
        selectedProducts.length === 0 ||
        company.products.some((p) => selectedProducts.includes(p));

      const matchesMarket =
        selectedMarkets.length === 0 ||
        company.exportMarkets.some((m) => selectedMarkets.includes(m));

      return matchesSearch && matchesCountry && matchesProduct && matchesMarket;
    });
  }, [searchQuery, selectedCountries, selectedProducts, selectedMarkets]);

  const clearAllFilters = () => {
    setSelectedCountries([]);
    setSelectedProducts([]);
    setSelectedMarkets([]);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)' }}>
      <Navbar onSearch={setSearchQuery} searchQuery={searchQuery} />

      <HeroSection />

      <div
        id="companies-section"
        style={{ maxWidth: 1800, margin: '0 auto', padding: '32px 24px 64px' }}
      >
        <div style={{ display: 'flex', gap: 28 }}>
          {/* Filter Sidebar */}
          <aside style={{ width: 288, flexShrink: 0 }} className="hidden lg:block">
            <FilterSidebar
              selectedCountries={selectedCountries}
              selectedProducts={selectedProducts}
              selectedMarkets={selectedMarkets}
              onCountryChange={setSelectedCountries}
              onProductChange={setSelectedProducts}
              onMarketChange={setSelectedMarkets}
              onClearAll={clearAllFilters}
            />
          </aside>

          {/* Main Content */}
          <main style={{ flex: 1 }}>
            {/* Section header */}
            <div style={{ marginBottom: 24 }}>
              <h2
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: 'var(--foreground)',
                  marginBottom: 4,
                }}
              >
                Discover Companies
              </h2>
              <p style={{ fontSize: 14, color: 'var(--muted-foreground)' }}>
                {filteredCompanies.length}{' '}
                {filteredCompanies.length === 1 ? 'company' : 'companies'} found
              </p>
            </div>

            {filteredCompanies.length > 0 ? (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                  gap: 20,
                }}
              >
                {filteredCompanies.map((company, index) => (
                  <CompanyCard key={company.id} company={company} index={index} />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card"
                style={{
                  borderRadius: 16,
                  padding: '72px 24px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: 72,
                    height: 72,
                    margin: '0 auto 20px',
                    borderRadius: '50%',
                    background: 'var(--primary-light)',
                    border: '1px solid var(--primary-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Search
                    style={{ width: 32, height: 32, color: 'var(--primary)' }}
                  />
                </div>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: 'var(--foreground)',
                    marginBottom: 8,
                  }}
                >
                  No companies found
                </h3>
                <p
                  style={{
                    color: 'var(--muted-foreground)',
                    marginBottom: 24,
                    fontSize: 14,
                  }}
                >
                  Try adjusting your filters or search query.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="btn-primary"
                  style={{ padding: '10px 24px', fontSize: 14 }}
                >
                  Clear All Filters
                </button>
              </motion.div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
