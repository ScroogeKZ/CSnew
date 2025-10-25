import { ExternalLink, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface CasesPageProps {
  language: string;
  onCaseClick: (caseId: number) => void;
}

const translations = {
  ru: {
    title: 'Полное портфолио',
    subtitle: 'Проекты, которыми мы гордимся',
    viewCase: 'Смотреть кейс',
    result: 'Результат',
    category: 'Категория',
  },
  kz: {
    title: 'Толық портфолио',
    subtitle: 'Мақтан тұратын жобалар',
    viewCase: 'Кейсті қарау',
    result: 'Нәтиже',
    category: 'Санат',
  },
  en: {
    title: 'Complete Portfolio',
    subtitle: 'Projects we are proud of',
    viewCase: 'View Case',
    result: 'Result',
    category: 'Category',
  },
};

export default function CasesPage({ language, onCaseClick }: CasesPageProps) {
  const t = translations[language as keyof typeof translations];

  const cases = [
    {
      id: 0,
      image: 'https://images.unsplash.com/photo-1628017973088-8feb5de8dddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMG9mZmljZXxlbnwxfHx8fDE3NjEyMTc4MTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Digital Transformation',
      client: 'Tech Corporation',
      category: 'Digital Marketing',
      result: '+250% ROI',
      description: 'Complete digital marketing transformation',
    },
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1662393792373-52f5477094f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYnJhbmQlMjBkZXNpZ258ZW58MXx8fHwxNzYxMjM0NTI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Brand Redesign',
      client: 'Fashion Brand',
      category: 'Branding',
      result: '+180% Brand Awareness',
      description: 'Full brand identity and communication strategy',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1758686254082-0f91a27b3075?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlY29tbWVyY2V8ZW58MXx8fHwxNzYxMjM0NTI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'E-commerce Platform',
      client: 'Retail Company',
      category: 'Tech Solutions',
      result: '+320% Sales Growth',
      description: 'Custom e-commerce platform development',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYxMjMwODAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Mobile App',
      client: 'FinTech Startup',
      category: 'Mobile Development',
      result: '100K+ Downloads',
      description: 'Cross-platform mobile application',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1758887249067-a32805351a72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwYnJhbmRpbmd8ZW58MXx8fHwxNzYxMTUyMzkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Restaurant Chain',
      client: 'Food & Beverage',
      category: 'Branding & Marketing',
      result: '+200% Customer Flow',
      description: 'Complete branding and marketing campaign',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1621857093087-7daa85ab14a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB3ZWJzaXRlfGVufDF8fHx8MTc2MTE1NzAxMHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Corporate Website',
      client: 'International Corporation',
      category: 'Web Development',
      result: '+150% Engagement',
      description: 'Enterprise-level web platform',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#A3132D]/20 to-[#6B0D1E]/20" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center space-y-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-[#A3132D] to-[#6B0D1E] bg-clip-text text-transparent">
                {t.title}
              </span>
            </h1>
            <p className="text-gray-400 text-xl">
              {t.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {cases.map((caseItem, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl bg-gray-800 border border-gray-700 hover:border-[#A3132D] transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/20"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={caseItem.image}
                    alt={caseItem.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-gray-800/50 to-transparent opacity-90" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-[#A3132D] to-[#6B0D1E] rounded-full text-sm">
                      {caseItem.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#A3132D] group-hover:to-[#6B0D1E] group-hover:bg-clip-text transition-all">
                      {caseItem.title}
                    </h3>
                    <p className="text-gray-400">{caseItem.client}</p>
                  </div>

                  <p className="text-gray-500 text-sm">
                    {caseItem.description}
                  </p>

                  {/* Result */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-[#A3132D]" />
                      <span className="text-gray-400 text-sm">{t.result}:</span>
                    </div>
                    <span className="bg-gradient-to-r from-[#A3132D] to-[#6B0D1E] bg-clip-text text-transparent">
                      {caseItem.result}
                    </span>
                  </div>

                  {/* View Case Button */}
                  <motion.button 
                    onClick={() => onCaseClick(caseItem.id)}
                    className="w-full mt-4 py-3 bg-gray-900 border border-gray-700 rounded-lg hover:border-[#A3132D] hover:bg-gray-700 transition-all flex items-center justify-center space-x-2 group/btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{t.viewCase}</span>
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <style>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(163, 19, 45, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(163, 19, 45, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
}
