import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface CasesSectionProps {
  onNavigate: (page: string) => void;
  language: string;
}

const translations = {
  ru: {
    title: 'Кейсы и проекты',
    subtitle: 'Успешные проекты наших клиентов',
    viewAll: 'Смотреть все кейсы',
    result: 'Результат',
    viewCase: 'Смотреть кейс',
  },
  kz: {
    title: 'Кейстер және жобалар',
    subtitle: 'Клиенттерімізді табысты жобалары',
    viewAll: 'Барлық кейстерді қарау',
    result: 'Нәтиже',
    viewCase: 'Кейсті қарау',
  },
  en: {
    title: 'Cases & Projects',
    subtitle: 'Successful projects of our clients',
    viewAll: 'View All Cases',
    result: 'Result',
    viewCase: 'View Case',
  },
};

export default function CasesSection({ onNavigate, language }: CasesSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const t = translations[language as keyof typeof translations];

  const cases = [
    {
      image: 'https://images.unsplash.com/photo-1542744094-f77e9f7a10b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MTIwODY2MHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Digital Transformation',
      client: 'Tech Corporation',
      result: '+250% ROI',
      category: 'Digital Marketing',
      color: 'from-[#A3132D] to-[#6B0D1E]',
    },
    {
      image: 'https://images.unsplash.com/photo-1758539197206-f66723e880a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGJyYW5kaW5nJTIwZGVzaWdufGVufDF8fHx8MTc2MTE2NTc3NHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Brand Redesign',
      client: 'Luxury Brand',
      result: '+180% Brand Awareness',
      category: 'Branding',
      color: 'from-[#6B0D1E] to-[#A3132D]',
    },
    {
      image: 'https://images.unsplash.com/photo-1758876020953-90dea8d081e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMHN0cmF0ZWd5fGVufDF8fHx8MTc2MTEzOTYxMHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'E-commerce Platform',
      client: 'Retail Company',
      result: '+320% Sales Growth',
      category: 'Tech Solutions',
      color: 'from-[#A3132D] to-[#c11638]',
    },
  ];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % cases.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + cases.length) % cases.length);
  };

  return (
    <section className="relative py-32 overflow-hidden bg-gray-900">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-6xl">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {t.title}
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative h-[500px] lg:h-[600px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
                className="absolute inset-0"
              >
                <div className="relative h-full group cursor-pointer" onClick={() => onNavigate('/cases')}>
                  <motion.div 
                    className="relative h-full overflow-hidden rounded-3xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Image */}
                    <ImageWithFallback
                      src={cases[currentSlide].image}
                      alt={cases[currentSlide].title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent`} />

                    {/* Content */}
                    <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end">
                      {/* Category Badge */}
                      <motion.div
                        className="mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <span className={`inline-block px-4 py-2 bg-gradient-to-r ${cases[currentSlide].color} rounded-full text-sm backdrop-blur-sm`}>
                          {cases[currentSlide].category}
                        </span>
                      </motion.div>

                      {/* Title & Client */}
                      <motion.div
                        className="space-y-3 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <h3 className="text-4xl lg:text-5xl text-white">
                          {cases[currentSlide].title}
                        </h3>
                        <p className="text-gray-300 text-xl">
                          {cases[currentSlide].client}
                        </p>
                      </motion.div>

                      {/* Result & CTA */}
                      <motion.div
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-gray-400">{t.result}:</span>
                          <span className={`text-3xl bg-gradient-to-r ${cases[currentSlide].color} bg-clip-text text-transparent`}>
                            {cases[currentSlide].result}
                          </span>
                        </div>

                        <motion.button
                          className="group/btn inline-flex items-center gap-2 px-6 py-3 glass-effect rounded-xl hover:bg-white/10 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="text-white">{t.viewCase}</span>
                          <ExternalLink className="w-5 h-5 text-white group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </motion.button>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full glass-effect hover:bg-white/10 flex items-center justify-center transition-all z-20"
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          
          <motion.button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full glass-effect hover:bg-white/10 flex items-center justify-center transition-all z-20"
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {cases.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentSlide ? 1 : -1);
                  setCurrentSlide(index);
                }}
                className="relative"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'w-10 bg-gradient-to-r from-[#A3132D] to-[#6B0D1E]'
                    : 'w-2 bg-gray-700 hover:bg-gray-600'
                }`} />
              </motion.button>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.button
            onClick={() => onNavigate('/cases')}
            className="group inline-flex items-center gap-3 px-8 py-4 glass-effect border border-gray-700 hover:border-[#A3132D] rounded-2xl transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-white">{t.viewAll}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
