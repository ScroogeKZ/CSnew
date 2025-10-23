import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

interface CTASectionProps {
  onNavigate: (page: string) => void;
  language: string;
}

const translations = {
  ru: {
    title: 'Готовы создать что-то невероятное?',
    subtitle: 'Начните свой проект с CreativeStudio сегодня и превратите идеи в реальность',
    cta: 'Оставить заявку',
    feature1: 'Бесплатная консультация',
    feature2: 'Индивидуальный подход',
    feature3: 'Гарантия результата',
  },
  kz: {
    title: 'Керемет нәрсе жасауға дайынсыз ба?',
    subtitle: 'Бүгін CreativeStudio-мен жобаңызды бастаңыз және идеяларды шындыққа айналдырыңыз',
    cta: 'Өтінім қалдыру',
    feature1: 'Тегін кеңес',
    feature2: 'Жеке тәсіл',
    feature3: 'Нәтижеге кепілдік',
  },
  en: {
    title: 'Ready to create something incredible?',
    subtitle: 'Start your project with CreativeStudio today and turn ideas into reality',
    cta: 'Get Started',
    feature1: 'Free Consultation',
    feature2: 'Individual Approach',
    feature3: 'Result Guarantee',
  },
};

export default function CTASection({ onNavigate, language }: CTASectionProps) {
  const t = translations[language as keyof typeof translations];
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  const features = [
    { icon: Sparkles, text: t.feature1 },
    { icon: Zap, text: t.feature2 },
    { icon: ArrowRight, text: t.feature3 },
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-[#A3132D] via-[#8b1126] to-[#6B0D1E]"
        style={{ opacity }}
      />
      
      {/* Mesh Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-[10%] w-72 h-72 bg-white/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-[10%] w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-12"
          style={{ y, scale }}
        >
          {/* Icon */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <motion.div 
              className="w-24 h-24 rounded-full glass-effect flex items-center justify-center"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="w-12 h-12 text-white" />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
              {t.title}
            </h2>
            <p className="text-white/90 text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed">
              {t.subtitle}
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 glass-effect rounded-full"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Icon className="w-4 h-4 text-white" />
                  <span className="text-white text-sm">{feature.text}</span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.button
              onClick={() => onNavigate('/contacts')}
              className="group relative inline-flex items-center gap-3 px-12 py-5 bg-white text-[#A3132D] rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              
              <span className="relative text-xl z-10">{t.cta}</span>
              <ArrowRight className="relative w-6 h-6 z-10 group-hover:translate-x-2 transition-transform" />

              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  boxShadow: '0 0 50px 10px rgba(255, 255, 255, 0.3)',
                }}
              />
            </motion.button>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            className="flex items-center justify-center gap-4 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="h-[1px] w-20 bg-white/30" />
            <motion.div 
              className="w-2 h-2 rounded-full bg-white"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <div className="h-[1px] w-20 bg-white/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
