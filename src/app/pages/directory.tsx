import { useState, useMemo } from 'react';
import { Navbar } from '../components/navbar';
import { HeroSection } from '../components/hero-section';
import { FilterSidebar } from '../components/filter-sidebar';
import { CompanyCard } from '../components/company-card';
import { companies } from '../data/companies';
import { motion } from 'motion/react';
import { Search } from 'lucide-react';

export function Directory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [selectedMarkets, setSelectedMarkets] = useState<string[]>([]);

  const filteredCompanies = useMemo(() => {
    return companies.filter((company) => {
      // Search filter
      const matchesSearch =
        searchQuery === '' ||
        company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.products.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()));

      // Country filter
      const matchesCountry =
        selectedCountries.length === 0 || selectedCountries.includes(company.country);

      // Product filter
      const matchesProduct =
        selectedProducts.length === 0 ||
        company.products.some((p) => selectedProducts.includes(p));

      // Market filter
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
    <div className="min-h-screen">
      <Navbar onSearch={setSearchQuery} searchQuery={searchQuery} />
      
      <HeroSection />

      <div id="companies-section" className="max-w-[1800px] mx-auto px-6 py-12">
        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <aside className="w-80 flex-shrink-0 hidden lg:block">
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

          {/* Companies Grid */}
          <main className="flex-1">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">
                Discover Companies
              </h2>
              <p className="text-gray-400">
                Found {filteredCompanies.length} {filteredCompanies.length === 1 ? 'company' : 'companies'}
              </p>
            </div>

            {filteredCompanies.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCompanies.map((company, index) => (
                  <CompanyCard key={company.id} company={company} index={index} />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card rounded-3xl p-16 text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 
                              flex items-center justify-center border border-purple-500/30">
                  <Search className="w-10 h-10 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">No companies found</h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your filters or search query to find what you're looking for.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 
                           hover:shadow-[0_0_30px_rgba(127,90,240,0.5)] transition-all duration-300"
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
