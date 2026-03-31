import { useParams, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { 
  ArrowLeft, MapPin, Mail, Phone, MapPinned, Heart, 
  Package, Globe, Clock, Calendar, Building 
} from 'lucide-react';
import { companies } from '../data/companies';
import { Navbar } from '../components/navbar';

export function CompanyProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const company = companies.find((c) => c.id === id);

  if (!company) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Company Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500"
          >
            Back to Directory
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <motion.button
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileHover={{ x: -5 }}
            onClick={() => navigate('/')}
            className="flex items-center gap-2 mb-8 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Directory</span>
          </motion.button>

          {/* Header Banner */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="glass-card rounded-3xl overflow-hidden mb-8 relative"
          >
            {/* Gradient Background */}
            <div className="h-48 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 relative overflow-hidden">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-transparent to-purple-500/30"
              />
            </div>

            {/* Company Info */}
            <div className="p-8 relative">
              <div className="flex flex-col md:flex-row items-start md:items-end gap-6 -mt-24">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-32 h-32 rounded-2xl object-cover border-4 border-[#0B0F1A] shadow-2xl"
                />
                <div className="flex-1">
                  <h1 className="text-4xl font-bold mb-2">{company.name}</h1>
                  <div className="flex flex-wrap items-center gap-4 text-gray-400">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      <span>{company.country}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building className="w-5 h-5" />
                      <span>Verified Exporter</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 
                             flex items-center gap-2 transition-all duration-300"
                  >
                    <Heart className="w-5 h-5" />
                    <span className="hidden md:block">Add to Favorites</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 
                             hover:shadow-[0_0_30px_rgba(127,90,240,0.5)] transition-all duration-300 font-semibold"
                  >
                    Contact Company
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="glass-card rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4">About Company</h2>
                <p className="text-gray-300 leading-relaxed">{company.description}</p>
              </motion.div>

              {/* Products */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="glass-card rounded-2xl p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                    <Package className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Products & Services</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {company.products.map((product, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 
                               border border-purple-500/30 backdrop-blur-sm hover:from-purple-500/30 
                               hover:to-cyan-500/30 transition-all duration-300 cursor-default"
                    >
                      {product}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Export Markets */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="glass-card rounded-2xl p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Export Markets</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {company.exportMarkets.map((market, idx) => (
                    <div
                      key={idx}
                      className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 
                               hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 
                               text-center cursor-default"
                    >
                      {market}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Business Details */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="glass-card rounded-2xl p-6 space-y-4"
              >
                <h3 className="text-xl font-bold mb-4">Business Details</h3>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Transit Time</p>
                    <p className="font-semibold">{company.transitTime}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Seasonality</p>
                    <p className="font-semibold">{company.seasonality}</p>
                  </div>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="glass-card rounded-2xl p-6 space-y-4"
              >
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Contact Person</p>
                    <p className="font-semibold">{company.contact.name}</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-sm text-gray-500 mb-1">Email</p>
                      <a
                        href={`mailto:${company.contact.email}`}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors break-all"
                      >
                        {company.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Phone</p>
                      <a
                        href={`tel:${company.contact.phone}`}
                        className="text-green-400 hover:text-green-300 transition-colors"
                      >
                        {company.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPinned className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Address</p>
                      <p className="text-gray-300">{company.contact.address}</p>
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
