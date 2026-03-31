export interface Company {
  id: string;
  name: string;
  logo: string;
  country: string;
  products: string[];
  exportMarkets: string[];
  transitTime: string;
  seasonality: string;
  description: string;
  contact: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
}

export const companies: Company[] = [
  {
    id: '1',
    name: 'Letaba Citrus',
    logo: 'https://images.unsplash.com/photo-1740761408566-03e4372f2d25?w=400&h=400&fit=crop',
    country: 'South Africa',
    products: ['Oranges', 'Grapefruits', 'Mandarins', 'Lemons'],
    exportMarkets: ['India', 'EU', 'UK', 'Middle East', 'Asia'],
    transitTime: '18-25 days',
    seasonality: 'Peak: May-Oct',
    description: 'Leading citrus exporter from South Africa with over 30 years of experience. Specializing in premium quality oranges, grapefruits, and mandarins. Committed to sustainable farming practices and consistently delivering exceptional fruit quality to global markets.',
    contact: {
      name: 'Mashii Mapeka',
      email: 'export2@letaba.com',
      phone: '+27 720744984',
      address: 'Letaba Estate, Letsitele, Limpopo, South Africa'
    }
  },
  {
    id: '2',
    name: 'Capespan',
    logo: 'https://images.unsplash.com/photo-1623815242959-fb20354f9b8d?w=400&h=400&fit=crop',
    country: 'South Africa',
    products: ['Apples', 'Pears', 'Citrus', 'Stone Fruit', 'Grapes'],
    exportMarkets: ['Europe', 'UK', 'Middle East', 'Asia', 'Africa', 'India'],
    transitTime: '15-22 days',
    seasonality: 'Year-round',
    description: 'One of the world\'s leading fresh fruit marketing companies with a heritage spanning over a century. Exporting premium quality apples, pears, citrus, and grapes to over 100 countries. Known for innovation, quality, and sustainable practices in fruit production and distribution.',
    contact: {
      name: 'Tanea Taylor',
      email: 'tanea.taylor@capespan.co.za',
      phone: '+27 219172787',
      address: 'Capespan Head Office, Bellville, Western Cape, South Africa'
    }
  },
  {
    id: '3',
    name: 'Golden Ridge',
    logo: 'https://images.unsplash.com/photo-1764575344012-01fc9e1270c7?w=400&h=400&fit=crop',
    country: 'South Africa',
    products: ['Oranges', 'Mandarins', 'Lemons', 'Soft Citrus'],
    exportMarkets: ['India', 'EU', 'UK', 'Middle East'],
    transitTime: '18-23 days',
    seasonality: 'Peak: May-Sep',
    description: 'Premium citrus exporter specializing in high-quality oranges, mandarins, and lemons. Known for excellent grading, consistent supply, and strong partnerships with global buyers. Committed to delivering fresh, flavorful citrus with full traceability.',
    contact: {
      name: 'Martin Kemp',
      email: 'martin@goldenridge.co.za',
      phone: '+27 828008750',
      address: 'Golden Ridge Packhouse, Eastern Cape, South Africa'
    }
  },
  {
    id: '4',
    name: 'Fruitways',
    logo: 'https://images.unsplash.com/photo-1623815242959-fb20354f9b8d?w=400&h=400&fit=crop',
    country: 'South Africa',
    products: ['Apples', 'Pears', 'Stone Fruit'],
    exportMarkets: ['India', 'Africa', 'Middle East', 'Asia'],
    transitTime: '16-24 days',
    seasonality: 'Peak: Feb-Jul',
    description: 'Specialized exporter of premium South African apples and pears. Building strong presence in Indian market with focus on quality branded fruit. Committed to remodeling business structure to serve Asian markets better with consistent supply and competitive pricing.',
    contact: {
      name: 'Kobus Jacobs',
      email: 'kobus.jacobs@fruitways.co.za',
      phone: '+27 218519742',
      address: 'Fruitways Marketing, Western Cape, South Africa'
    }
  },
  {
    id: '5',
    name: 'Langplaas',
    logo: 'https://images.unsplash.com/photo-1710528184650-fc75ae862c13?w=400&h=400&fit=crop',
    country: 'South Africa',
    products: ['Sweet Potatoes', 'Strawberries', 'Fresh Vegetables'],
    exportMarkets: ['India', 'Malaysia', 'Middle East', 'Asia'],
    transitTime: '12-18 days',
    seasonality: 'Year-round',
    description: 'Innovative fresh produce exporter specializing in sweet potatoes and strawberries. Focused on premium quality, sustainable farming, and building long-term partnerships. Committed to exploring new markets in Asia with trial programs and regular supply.',
    contact: {
      name: 'Simon Barnsdale',
      email: 'simon@langplaas.co.za',
      phone: '+44 7912856240',
      address: 'Langplaas Farms, Western Cape, South Africa'
    }
  },
  {
    id: '6',
    name: 'Supra Group',
    logo: 'https://images.unsplash.com/photo-1740761408566-03e4372f2d25?w=400&h=400&fit=crop',
    country: 'Brazil',
    products: ['Oranges', 'Limes', 'Citrus Juice'],
    exportMarkets: ['Europe', 'Asia', 'Middle East', 'India', 'Malaysia'],
    transitTime: '25-35 days',
    seasonality: 'Year-round',
    description: 'Major Brazilian citrus exporter with extensive operations in fresh fruit and juice production. Committed to continuous supply without gaps, providing consistent quality to global markets. Exploring Indian market with marketing support and partnership opportunities.',
    contact: {
      name: 'Helder Carvalho',
      email: 'helder.carvalho@supragrupo.com',
      phone: '+55 17997755490',
      address: 'Bebedouro, São Paulo, Brazil'
    }
  },
  {
    id: '7',
    name: 'Greenyard Brazil',
    logo: 'https://images.unsplash.com/photo-1549746423-e5fe9cafded8?w=400&h=400&fit=crop',
    country: 'Brazil',
    products: ['Limes', 'Tropical Fruits', 'Citrus'],
    exportMarkets: ['India', 'Europe', 'Asia', 'Middle East'],
    transitTime: '28-35 days (Air: 3-5 days)',
    seasonality: 'Year-round',
    description: 'Part of global fresh produce leader Greenyard Group. Specializing in Brazilian limes and tropical fruits with innovative logistics solutions including air freight options. Focused on quality, food safety, and sustainable sourcing practices.',
    contact: {
      name: 'Guy Crouzet',
      email: 'gcrouzet@greenyardfresh.com.br',
      phone: '+55 7130234377',
      address: 'Salvador, Bahia, Brazil'
    }
  },
  {
    id: '8',
    name: 'Salhia Company',
    logo: 'https://images.unsplash.com/photo-1740761408566-03e4372f2d25?w=400&h=400&fit=crop',
    country: 'Egypt',
    products: ['Oranges', 'Strawberries', 'Pomegranates', 'Grapes'],
    exportMarkets: ['India', 'EU', 'Malaysia', 'Middle East', 'Asia'],
    transitTime: '8-14 days',
    seasonality: 'Peak: Dec-Apr',
    description: 'Premium Egyptian fruit exporter with focus on citrus, strawberries, and pomegranates. Known for excellent communication, quality control, and reliability. Building strong partnerships across Asia and Europe with consistent supply and competitive pricing.',
    contact: {
      name: 'Shaimaa Mohamed',
      email: 'shaimaa@salhiaco.com',
      phone: '+20 1018098798',
      address: 'Cairo, Egypt'
    }
  },
  {
    id: '9',
    name: 'Fresh Egypt Products',
    logo: 'https://images.unsplash.com/photo-1710528184650-fc75ae862c13?w=400&h=400&fit=crop',
    country: 'Egypt',
    products: ['Strawberries', 'Oranges', 'Pomegranates'],
    exportMarkets: ['India', 'Malaysia', 'Middle East', 'Europe'],
    transitTime: '7-12 days',
    seasonality: 'Peak: Dec-Mar',
    description: 'Specialized exporter of fresh strawberries, oranges, and pomegranates from Egypt. Committed to premium quality, sustainable practices, and building long-term partnerships. Known for competitive pricing and reliable supply during peak season.',
    contact: {
      name: 'Kareem Gamal',
      email: 'kareem.gamal@freshegyptproducts.com',
      phone: '+20 100049625',
      address: 'Ismailia, Egypt'
    }
  },
  {
    id: '10',
    name: 'Orange-Agricrops',
    logo: 'https://images.unsplash.com/photo-1740761408566-03e4372f2d25?w=400&h=400&fit=crop',
    country: 'Egypt',
    products: ['Oranges', 'Strawberries', 'Pomegranates', 'Grapes'],
    exportMarkets: ['India', 'Europe', 'Middle East', 'Asia'],
    transitTime: '8-15 days',
    seasonality: 'Peak: Dec-Apr',
    description: 'Grower and exporter of premium Egyptian fruits with own farms and packhouses. Specializing in citrus and soft fruits with focus on quality and food safety. Interested in serving as official consultant partner for market expansion in India.',
    contact: {
      name: 'Alexander Ammar',
      email: 'ammar@orange-agricrops.com',
      phone: '+20 1277555590',
      address: 'Alexandria, Egypt'
    }
  },
  {
    id: '11',
    name: 'Agrisweets',
    logo: 'https://images.unsplash.com/photo-1757283961582-ab596b0ca595?w=400&h=400&fit=crop',
    country: 'Egypt',
    products: ['Oranges', 'Sweet Potatoes', 'Citrus'],
    exportMarkets: ['India', 'Europe', 'Middle East'],
    transitTime: '9-16 days',
    seasonality: 'Peak: Nov-Apr',
    description: 'Egyptian exporter specializing in citrus fruits and sweet potatoes. Focused on competitive pricing and reliable supply to European and Asian markets. Building new partnerships for consistent business relationships.',
    contact: {
      name: 'Hisham Younis',
      email: 'hisham@agrisweets.com',
      phone: '+20 1153086276',
      address: 'Cairo, Egypt'
    }
  },
  {
    id: '12',
    name: 'ABC Fresh GmbH',
    logo: 'https://images.unsplash.com/photo-1631337902392-b4bb679fbfdb?w=400&h=400&fit=crop',
    country: 'Germany',
    products: ['Strawberries', 'Citrus', 'Tropical Fruits', 'Vegetables'],
    exportMarkets: ['Europe', 'Middle East', 'Asia'],
    transitTime: '5-10 days',
    seasonality: 'Year-round',
    description: 'Hamburg-based fresh produce trading company with operations in Egypt. Specializing in year-round supply of fresh fruits and vegetables to European and Asian markets. Known for flexible payment terms and reliable logistics.',
    contact: {
      name: 'Shimaa Abdelwhab',
      email: 'shimaa@abcfresh.de',
      phone: '+20 1140628005',
      address: 'Hamburg, Germany / Cairo Office, Egypt'
    }
  },
  {
    id: '13',
    name: 'Mami Alexandra',
    logo: 'https://images.unsplash.com/photo-1692066305151-95f8e9e78bad?w=400&h=400&fit=crop',
    country: 'Greece',
    products: ['Kiwi', 'Citrus', 'Fresh Fruits'],
    exportMarkets: ['Europe', 'Middle East', 'India'],
    transitTime: '7-12 days',
    seasonality: 'Peak: Oct-Mar',
    description: 'Greek exporter specializing in premium kiwi fruit and Mediterranean produce. Committed to quality and freshness with direct farm sourcing. Building presence in Indian and Middle Eastern markets.',
    contact: {
      name: 'Despina Vasileiadou',
      email: 'despina@mamifruits.com',
      phone: '+30 6984434436',
      address: 'Thessaloniki, Greece'
    }
  },
  {
    id: '14',
    name: 'G F Union Grupo',
    logo: 'https://images.unsplash.com/photo-1740761408566-03e4372f2d25?w=400&h=400&fit=crop',
    country: 'Spain',
    products: ['Citrus', 'Oranges', 'Mandarins', 'Mediterranean Fruits'],
    exportMarkets: ['India', 'Europe', 'Middle East', 'Asia'],
    transitTime: '10-15 days',
    seasonality: 'Peak: Oct-Apr',
    description: '50-year-old Spanish citrus company specializing in premium Mediterranean fruits. Interested in direct export to India and Asian markets. Committed to building exclusive partnerships and learning international trade systems for sustainable growth.',
    contact: {
      name: 'Joaquín Vicent',
      email: 'jvicent@gustavoferrada.com',
      phone: '+34 682368600',
      address: 'Valencia, Spain'
    }
  },
  {
    id: '15',
    name: 'Swiss Tropical',
    logo: 'https://images.unsplash.com/photo-1757332051021-ce94ace2039c?w=400&h=400&fit=crop',
    country: 'Costa Rica',
    products: ['Pineapples', 'Tropical Fruits', 'Fruit Juices', 'Processed Fruits'],
    exportMarkets: ['Europe', 'USA', 'India', 'Asia'],
    transitTime: '15-25 days (Air: 3-5 days)',
    seasonality: 'Year-round',
    description: 'Costa Rican tropical fruit exporter and processor. Specializing in fresh pineapples and processed fruit products including juices. Exploring opportunities in frozen fruits and juice centers. Committed to sustainable tropical fruit production.',
    contact: {
      name: 'Johann Dähler Jr.',
      email: 'info.cr@swisstropical.ch',
      phone: '+506 88427984',
      address: 'San José, Costa Rica'
    }
  },
  {
    id: '16',
    name: 'Smiling Monkey',
    logo: 'https://images.unsplash.com/photo-1623815242959-fb20354f9b8d?w=400&h=400&fit=crop',
    country: 'USA',
    products: ['Red Delicious Apples', 'Gala Apples', 'Fresh Apples'],
    exportMarkets: ['India', 'Asia', 'Middle East'],
    transitTime: '20-30 days',
    seasonality: 'Peak: Sep-Apr',
    description: 'USA-based premium apple supplier specializing in Red Delicious and other varieties. Building strong export program to India and Asian markets with monthly container programs. Known for consistent quality and reliable supply.',
    contact: {
      name: 'Kam Chauhan',
      email: 'kam@smilingmonkey.ca',
      phone: '+1 3602968323',
      address: 'Washington State, USA'
    }
  },
  {
    id: '17',
    name: 'MSC Shipping Company',
    logo: 'https://images.unsplash.com/photo-1644134913822-1cd030b3d148?w=400&h=400&fit=crop',
    country: 'Germany',
    products: ['Logistics Services', 'Cold Chain', 'Container Shipping'],
    exportMarkets: ['Global', 'All Major Ports'],
    transitTime: 'Varies by route',
    seasonality: 'Year-round',
    description: 'Global shipping and logistics leader providing specialized cold chain solutions for fresh produce. Supporting exporters and importers with reliable container services, contractual support, and comprehensive logistics solutions worldwide.',
    contact: {
      name: 'Bastian Böttcher',
      email: 'bastian.boettcher@msc.com',
      phone: '+49 40302951324',
      address: 'Hamburg, Germany'
    }
  },
  {
    id: '18',
    name: 'INI Farms',
    logo: 'https://images.unsplash.com/photo-1772135893276-0ab79fc6d225?w=400&h=400&fit=crop',
    country: 'India',
    products: ['Pomegranates', 'Grapes', 'Fresh Fruits'],
    exportMarkets: ['Europe', 'Middle East', 'Asia', 'UK'],
    transitTime: '10-18 days',
    seasonality: 'Peak: Sep-Mar',
    description: 'Leading Indian exporter of premium pomegranates and grapes. Known for sustainable farming practices, superior quality, and strong presence in European markets. Committed to innovation in fresh fruit export and exploring new market opportunities.',
    contact: {
      name: 'Krutik Shah',
      email: 'krutik.shah@inifarms.com',
      phone: '+91 7021249698',
      address: 'Pune, Maharashtra, India'
    }
  },
  {
    id: '19',
    name: 'Superplum',
    logo: 'https://images.unsplash.com/photo-1690139510290-8c9eb0806344?w=400&h=400&fit=crop',
    country: 'India',
    products: ['Grapes', 'Ginger', 'Fresh Fruits', 'Vegetables'],
    exportMarkets: ['Europe', 'UK', 'Middle East', 'Asia'],
    transitTime: '12-18 days',
    seasonality: 'Peak: Dec-Mar',
    description: 'Indian exporter specializing in premium grapes and ginger to European markets. Interested in expanding product range and building partnerships with European importers. Known for quality produce and reliable supply chain management.',
    contact: {
      name: 'Mamta Roy',
      email: 'mamta.roy@superplum.com',
      phone: '+91 9811556102',
      address: 'Nashik, Maharashtra, India'
    }
  },
  {
    id: '20',
    name: 'Shubham Enterprises',
    logo: 'https://images.unsplash.com/photo-1690139510290-8c9eb0806344?w=400&h=400&fit=crop',
    country: 'India',
    products: ['Grapes', 'Pomegranates', 'Fresh Fruits'],
    exportMarkets: ['Malaysia', 'Middle East', 'Europe'],
    transitTime: '8-15 days',
    seasonality: 'Peak: Dec-Mar',
    description: 'Established Indian grape exporter with strong presence in Malaysia and Middle East. Exploring European market opportunities with capacity for 10-20 containers per season. Committed to quality, competitive pricing, and building long-term partnerships.',
    contact: {
      name: 'Sumit Bhujbal',
      email: 'sumit@shubhamenterprises.in',
      phone: '+91 9821519189',
      address: 'Nashik, Maharashtra, India'
    }
  },
  {
    id: '21',
    name: 'Agrify',
    logo: 'https://images.unsplash.com/photo-1623815242959-fb20354f9b8d?w=400&h=400&fit=crop',
    country: 'India',
    products: ['Royal Gala Apples', 'Fresh Apples', 'Imported Fruits'],
    exportMarkets: ['India', 'Middle East', 'Asia'],
    transitTime: '18-25 days',
    seasonality: 'Year-round (Import)',
    description: 'Indian importer and distributor specializing in premium imported apples including Royal Gala and Johanna Prince varieties. Committed to large volume programs with focus on quality branded fruit for Indian market.',
    contact: {
      name: 'Karthik Gopalkrishnan',
      email: 'kartik.g@agrifyfresh.com',
      phone: '+91 9769460230',
      address: 'Mumbai, Maharashtra, India'
    }
  },
  {
    id: '22',
    name: 'UPL Limited',
    logo: 'https://images.unsplash.com/photo-1631337902392-b4bb679fbfdb?w=400&h=400&fit=crop',
    country: 'India',
    products: ['Agricultural Solutions', 'Crop Protection', 'Seeds'],
    exportMarkets: ['Global', 'Asia', 'Europe', 'Americas', 'Africa'],
    transitTime: 'Varies',
    seasonality: 'Year-round',
    description: 'Global leader in sustainable agriculture solutions with presence in over 130 countries. Providing innovative crop protection products, seeds, and post-harvest solutions. Committed to food security and sustainable farming practices worldwide.',
    contact: {
      name: 'Deepak Chowdary',
      email: 'deepak.chowdhary@upl-ltd.com',
      phone: '+91 7304716866',
      address: 'Mumbai, Maharashtra, India'
    }
  },
  {
    id: '23',
    name: 'Bloomfield Agro Products',
    logo: 'https://images.unsplash.com/photo-1690139510290-8c9eb0806344?w=400&h=400&fit=crop',
    country: 'India',
    products: ['Grapes', 'Agricultural Chemicals', 'Consulting Services'],
    exportMarkets: ['India', 'Middle East', 'Asia'],
    transitTime: '10-15 days',
    seasonality: 'Peak: Dec-Mar',
    description: 'Agricultural products manufacturer and export consultant specializing in Indian grapes. Providing comprehensive support to importers including regulatory compliance, quality control, and market insights for Indian agricultural products.',
    contact: {
      name: 'Avinash Ippar',
      email: 'info@bloomfieldagritech.com',
      phone: '+91 8605280266',
      address: 'Pune, Maharashtra, India'
    }
  },
  {
    id: '24',
    name: 'Jaguar The Fresh Company',
    logo: 'https://images.unsplash.com/photo-1764575344012-01fc9e1270c7?w=400&h=400&fit=crop',
    country: 'Singapore',
    products: ['Mandarins', 'Citrus', 'Fresh Fruits'],
    exportMarkets: ['Asia', 'Singapore', 'India', 'Malaysia'],
    transitTime: '5-12 days',
    seasonality: 'Year-round',
    description: 'Singapore-based fresh fruit trading company specializing in premium citrus from South Africa and other origins. Focused on Asian market distribution with emphasis on quality, competitive pricing, and flexible payment terms.',
    contact: {
      name: 'Raed Kazi',
      email: 'raed.kazi@jaguartfc.nl',
      phone: '+65 83484647',
      address: 'Singapore'
    }
  },
  {
    id: '25',
    name: 'Vegrow',
    logo: 'https://images.unsplash.com/photo-1631337902392-b4bb679fbfdb?w=400&h=400&fit=crop',
    country: 'India',
    products: ['Fresh Fruits', 'Vegetables', 'Agricultural Products'],
    exportMarkets: ['India', 'Middle East', 'Asia'],
    transitTime: '8-15 days',
    seasonality: 'Year-round',
    description: 'Bangalore-based agricultural trading company focused on export and import of fresh produce. Building distribution network across India with interest in international trade partnerships. Committed to quality and innovative supply chain solutions.',
    contact: {
      name: 'Divyesh Sharma',
      email: 'divyesh.sharma@vegrow.com',
      phone: '+971 58536826',
      address: 'Bangalore, Karnataka, India'
    }
  },
  {
    id: '26',
    name: 'Seratrade',
    logo: 'https://images.unsplash.com/photo-1740761408566-03e4372f2d25?w=400&h=400&fit=crop',
    country: 'Egypt',
    products: ['Oranges', 'Citrus', 'Fresh Fruits'],
    exportMarkets: ['Middle East', 'Asia', 'Europe'],
    transitTime: '8-14 days',
    seasonality: 'Peak: Dec-Apr',
    description: 'Egyptian citrus trading company with connections across Middle East and North Africa. Specializing in competitive pricing and flexible trading arrangements for citrus fruits and fresh produce.',
    contact: {
      name: 'Sara Nasser',
      email: 'info@seratrade.com',
      phone: '+20 1152240775',
      address: 'Cairo, Egypt'
    }
  },
  {
    id: '27',
    name: 'Intercont+ Logistics',
    logo: 'https://images.unsplash.com/photo-1644134913822-1cd030b3d148?w=400&h=400&fit=crop',
    country: 'India',
    products: ['Freight Forwarding', 'Logistics Services', 'Cold Chain'],
    exportMarkets: ['Global', 'Europe', 'Middle East', 'Asia'],
    transitTime: 'Varies by route',
    seasonality: 'Year-round',
    description: 'International logistics company specializing in fresh produce transportation. Offering comprehensive freight forwarding, cold chain solutions, and customs clearance services. Strong presence in India, Europe, and Middle East trade lanes.',
    contact: {
      name: 'Nishith Shalwala',
      email: 'nishith@intercontliner.com',
      phone: '+91 9769671122',
      address: 'Mumbai, Maharashtra, India'
    }
  },
  {
    id: '28',
    name: 'Foef Fresh Produce',
    logo: 'https://images.unsplash.com/photo-1740761408566-03e4372f2d25?w=400&h=400&fit=crop',
    country: 'South Africa',
    products: ['Citrus', 'Stone Fruit', 'Grapes'],
    exportMarkets: ['Europe', 'Middle East', 'Asia', 'UK'],
    transitTime: '15-22 days',
    seasonality: 'Peak: Mar-Sep',
    description: 'South African fresh produce exporter specializing in premium citrus and stone fruits. Committed to sustainable farming, quality control, and building long-term partnerships with global buyers.',
    contact: {
      name: 'Piet de Jager',
      email: 'piet@foef.co.za',
      phone: '+27 215267424',
      address: 'Western Cape, South Africa'
    }
  }
];

export const countries = Array.from(new Set(companies.map(c => c.country))).sort();
export const allProducts = Array.from(new Set(companies.flatMap(c => c.products))).sort();
export const allMarkets = Array.from(new Set(companies.flatMap(c => c.exportMarkets))).sort();
