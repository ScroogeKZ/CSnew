import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onNavigate: (page: string) => void;
  language: string;
}

const translations = {
  ru: {
    title: 'Создаём цифровое будущее',
    subtitle: 'Digital & Brandformance Agency CreativeStudio',
    description: 'Трансформируем бренды через инновационные digital-решения и стратегический подход к маркетингу',
    ctaPrimary: 'Оставить заявку',
    ctaSecondary: 'Наши услуги',
  },
  kz: {
    title: 'Цифрлық болашақты құрамыз',
    subtitle: 'Digital & Brandformance Agency CreativeStudio',
    description: 'Инновациялық digital шешімдер және маркетингке стратегиялық тәсіл арқылы брендтерді трансформациялаймыз',
    ctaPrimary: 'Өтінім қалдыру',
    ctaSecondary: 'Біздің қызметтер',
  },
  en: {
    title: 'Creating Digital Future',
    subtitle: 'Digital & Brandformance Agency CreativeStudio',
    description: 'Transforming brands through innovative digital solutions and strategic marketing approach',
    ctaPrimary: 'Get Started',
    ctaSecondary: 'Our Services',
  },
};

export default function HeroSection({ onNavigate, language }: HeroSectionProps) {
  const t = translations[language as keyof typeof translations];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-mesh">
      {/* Dynamic Gradient Background with Motion */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, #A3132D 0%, #6B0D1E 100%)',
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, #6B0D1E 0%, #A3132D 100%)',
          }}
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-br from-[#A3132D] to-[#6B0D1E] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect"
            >
              <Sparkles className="w-4 h-4 text-[#A3132D]" />
              <span className="text-gray-300 text-sm uppercase tracking-widest">
                {t.subtitle}
              </span>
            </motion.div>

            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl max-w-5xl mx-auto leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                {t.title.split(' ')[0]}{' '}
              </span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#A3132D] via-[#c11638] to-[#6B0D1E] bg-clip-text text-transparent animate-gradient-x">
                  {t.title.split(' ').slice(1).join(' ')}
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#A3132D] to-[#6B0D1E] rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </span>
            </motion.h1>

            <motion.p 
              className="text-gray-400 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {t.description}
            </motion.p>
          </div>

          {/* CTA Buttons with Magnetic Effect */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.button
              onClick={() => onNavigate('/contacts')}
              className="group relative px-8 py-4 bg-gradient-to-r from-[#A3132D] to-[#6B0D1E] rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#c11638] to-[#8b1126]"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              <span className="relative flex items-center gap-2 text-white">
                {t.ctaPrimary}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 rounded-2xl"
                initial={{ boxShadow: '0 0 0 0 rgba(163, 19, 45, 0)' }}
                whileHover={{ boxShadow: '0 0 30px 5px rgba(163, 19, 45, 0.3)' }}
              />
            </motion.button>

            <motion.button
              onClick={() => onNavigate('/services')}
              className="group px-8 py-4 glass-effect rounded-2xl border border-gray-700 hover:border-[#A3132D] transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white">{t.ctaSecondary}</span>
            </motion.button>
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            className="grid grid-cols-3 gap-4 max-w-2xl mx-auto pt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            {[
              { value: '100+', label: language === 'ru' ? 'Клиентов' : language === 'kz' ? 'Клиенттер' : 'Clients' },
              { value: '300+', label: language === 'ru' ? 'Проектов' : language === 'kz' ? 'Жобалар' : 'Projects' },
              { value: '10', label: language === 'ru' ? 'Лет опыта' : language === 'kz' ? 'Жыл тәжірибе' : 'Years' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="glass-effect rounded-xl p-4"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl lg:text-3xl bg-gradient-to-r from-[#A3132D] to-[#6B0D1E] bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex items-start justify-center p-2">
            <motion.div 
              className="w-1.5 h-3 bg-gradient-to-b from-[#A3132D] to-[#6B0D1E] rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
