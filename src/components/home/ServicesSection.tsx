import { Smartphone, Megaphone, BarChart3, Code2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

interface ServicesSectionProps {
  onNavigate: (page: string) => void;
  language: string;
}

const translations = {
  ru: {
    title: 'Наши направления',
    subtitle: 'Комплексные решения для вашего бизнеса',
    digital: 'Digital-маркетинг',
    digitalDesc: 'SMM, SEO, контекстная реклама и продвижение в digital-пространстве',
    communication: 'Коммуникационные стратегии',
    communicationDesc: 'Разработка креативных концепций и стратегий продвижения брендов',
    research: 'Исследования и аналитика',
    researchDesc: 'Глубокий анализ рынка, аудитории и конкурентов для принятия решений',
    tech: 'Технологические решения',
    techDesc: 'Разработка сайтов, приложений и цифровых продуктов',
    explore: 'Узнать больше',
  },
  kz: {
    title: 'Біздің бағыттар',
    subtitle: 'Сіздің бизнесіңіз үшін кешенді шешімдер',
    digital: 'Digital-маркетинг',
    digitalDesc: 'SMM, SEO, контекстік жарнама және digital кеңістікте жылжыту',
    communication: 'Коммуникациялық стратегиялар',
    communicationDesc: 'Креативті концепциялар мен брендтерді жылжыту стратегияларын әзірлеу',
    research: 'Зерттеулер және аналитика',
    researchDesc: 'Шешім қабылдау үшін нарық, аудитория және бәсекелестерді терең талдау',
    tech: 'Технологиялық шешімдер',
    techDesc: 'Сайттар, қосымшалар және цифрлық өнімдерді әзірлеу',
    explore: 'Толығырақ',
  },
  en: {
    title: 'Our Services',
    subtitle: 'Comprehensive solutions for your business',
    digital: 'Digital Marketing',
    digitalDesc: 'SMM, SEO, contextual advertising and promotion in digital space',
    communication: 'Communication Strategies',
    communicationDesc: 'Development of creative concepts and brand promotion strategies',
    research: 'Research & Analytics',
    researchDesc: 'Deep analysis of market, audience and competitors for decision making',
    tech: 'Tech Solutions',
    techDesc: 'Development of websites, applications and digital products',
    explore: 'Learn More',
  },
};

export default function ServicesSection({ onNavigate, language }: ServicesSectionProps) {
  const t = translations[language as keyof typeof translations];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: Smartphone,
      title: t.digital,
      description: t.digitalDesc,
      color: 'from-[#A3132D] to-[#6B0D1E]',
      metrics: '250%',
      metricLabel: 'ROI',
    },
    {
      icon: Megaphone,
      title: t.communication,
      description: t.communicationDesc,
      color: 'from-[#6B0D1E] to-[#A3132D]',
      metrics: '180%',
      metricLabel: 'Awareness',
    },
    {
      icon: BarChart3,
      title: t.research,
      description: t.researchDesc,
      color: 'from-[#A3132D] to-[#c11638]',
      metrics: '95%',
      metricLabel: 'Accuracy',
    },
    {
      icon: Code2,
      title: t.tech,
      description: t.techDesc,
      color: 'from-[#8b1126] to-[#6B0D1E]',
      metrics: '100+',
      metricLabel: 'Projects',
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-950" />
      <div className="absolute inset-0 gradient-mesh opacity-50" />

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

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLarge = index === 0;
            
            return (
              <motion.div
                key={index}
                className={`group relative ${isLarge ? 'md:row-span-2' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div
                  className={`relative h-full ${isLarge ? 'min-h-[500px]' : 'min-h-[240px]'} rounded-3xl overflow-hidden glass-effect`}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-3xl p-[1px]">
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  </div>

                  {/* Content */}
                  <div className={`relative h-full bg-gray-900/90 rounded-3xl p-8 ${isLarge ? 'lg:p-12' : 'lg:p-8'} flex flex-col justify-between`}>
                    {/* Top Section */}
                    <div className="space-y-6">
                      {/* Icon with Glow */}
                      <motion.div
                        className="relative inline-block"
                        animate={hoveredIndex === index ? {
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, 0],
                        } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        <div className={`w-16 h-16 ${isLarge ? 'lg:w-20 lg:h-20' : ''} rounded-2xl bg-gradient-to-br ${service.color} p-[1px]`}>
                          <div className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center">
                            <Icon className={`${isLarge ? 'w-8 h-8 lg:w-10 lg:h-10' : 'w-7 h-7'} text-white`} />
                          </div>
                        </div>
                        {hoveredIndex === index && (
                          <motion.div
                            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} blur-xl opacity-50`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                          />
                        )}
                      </motion.div>

                      {/* Text Content */}
                      <div className="space-y-3">
                        <h3 className={`${isLarge ? 'text-3xl lg:text-4xl' : 'text-2xl'} text-white group-hover:bg-gradient-to-r group-hover:${service.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                          {service.title}
                        </h3>
                        <p className={`text-gray-400 ${isLarge ? 'text-lg' : ''} leading-relaxed`}>
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Section - Metrics & CTA */}
                    <div className="space-y-4 mt-8">
                      {/* Metrics */}
                      <div className="flex items-end gap-2">
                        <span className={`${isLarge ? 'text-5xl lg:text-6xl' : 'text-4xl'} bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                          {service.metrics}
                        </span>
                        <span className="text-gray-500 text-lg mb-2">{service.metricLabel}</span>
                      </div>

                      {/* CTA */}
                      <motion.button
                        onClick={() => onNavigate('/services')}
                        className="group/btn inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <span>{t.explore}</span>
                        <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.button>
                    </div>

                    {/* Hover Gradient Overlay */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl pointer-events-none`}
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
