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
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="glass-card rounded-2xl p-6 cursor-pointer group relative overflow-hidden"
      onClick={() => navigate(`/company/${company.id}`)}
    >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-blue-500/0 to-cyan-500/0 
                    group-hover:from-purple-500/10 group-hover:via-blue-500/10 group-hover:to-cyan-500/10 
                    transition-all duration-500 rounded-2xl" />
      
      {/* Gradient Border on Hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
           style={{
             background: 'linear-gradient(135deg, #7F5AF0, #00C2FF)',
             padding: '1px',
             WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
             WebkitMaskComposite: 'xor',
             maskComposite: 'exclude',
           }} />

      <div className="relative">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="relative">
            <img
              src={company.logo}
              alt={company.name}
              className="w-16 h-16 rounded-xl object-cover border-2 border-white/10 
                       group-hover:border-purple-500/50 transition-all duration-300"
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-500 border-2 border-[#0B0F1A]" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-lg mb-1 truncate group-hover:text-purple-400 transition-colors">
              {company.name}
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>{company.country}</span>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-2">PRODUCTS</p>
          <div className="flex flex-wrap gap-2">
            {company.products.slice(0, 3).map((product, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-xs bg-gradient-to-r from-purple-500/20 to-cyan-500/20 
                         border border-purple-500/30 backdrop-blur-sm
                         group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-300"
              >
                {product}
              </span>
            ))}
          </div>
        </div>

        {/* Export Markets */}
        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-2">EXPORT MARKETS</p>
          <div className="flex flex-wrap gap-1.5">
            {company.exportMarkets.slice(0, 5).map((market, idx) => (
              <span
                key={idx}
                className="px-2 py-1 rounded-lg text-xs bg-white/5 border border-white/10 text-gray-300"
              >
                {market}
              </span>
            ))}
            {company.exportMarkets.length > 5 && (
              <span className="px-2 py-1 rounded-lg text-xs bg-white/5 border border-white/10 text-gray-400">
                +{company.exportMarkets.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Transit Time */}
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Clock className="w-4 h-4" />
            <span>{company.transitTime}</span>
          </div>
          <span className="text-xs px-2 py-1 rounded-lg bg-green-500/20 text-green-400 border border-green-500/30">
            {company.seasonality}
          </span>
        </div>

        {/* View Profile Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 
                   flex items-center justify-center gap-2 group/btn relative overflow-hidden"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/company/${company.id}`);
          }}
        >
          <span className="relative z-10 flex items-center gap-2 font-semibold">
            View Profile
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 
                        opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
        </motion.button>
      </div>
    </motion.div>
  );
}
