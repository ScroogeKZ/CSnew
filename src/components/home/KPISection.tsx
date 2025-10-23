import { useState, useEffect, useRef } from 'react';
import { Users, Briefcase, Award, TrendingUp } from 'lucide-react';
import { motion, useInView } from 'motion/react';

interface KPISectionProps {
  language: string;
}

const translations = {
  ru: {
    title: 'Наши достижения',
    subtitle: 'Цифры, которые говорят сами за себя',
    clients: 'Довольных клиентов',
    projects: 'Реализованных проектов',
    experience: 'Лет опыта',
    specialists: 'Специалистов в команде',
  },
  kz: {
    title: 'Біздің жетістіктер',
    subtitle: 'Өздері туралы айтатын сандар',
    clients: 'Қанағаттанған клиенттер',
    projects: 'Іске асырылған жобалар',
    experience: 'Жылдық тәжірибе',
    specialists: 'Команда мамандары',
  },
  en: {
    title: 'Our Achievements',
    subtitle: 'Numbers that speak for themselves',
    clients: 'Happy Clients',
    projects: 'Completed Projects',
    experience: 'Years of Experience',
    specialists: 'Team Specialists',
  },
};

interface KPIItemProps {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  index: number;
}

function KPIItem({ icon: Icon, value, suffix, label, index }: KPIItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [value, isInView]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative"
    >
      <motion.div 
        className="relative h-full rounded-3xl glass-effect p-8 lg:p-10 overflow-hidden"
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Gradient Border on Hover */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#A3132D] to-[#6B0D1E] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
        
        {/* Content Container */}
        <div className="relative bg-gray-900/80 rounded-3xl p-6 lg:p-8">
          {/* Icon with Magnetic Effect */}
          <motion.div 
            className="mb-6"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-[#A3132D] to-[#6B0D1E] p-[1px]">
              <div className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center">
                <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
            </div>
          </motion.div>

          {/* Counter */}
          <div className="space-y-3">
            <motion.div 
              className="text-5xl lg:text-6xl"
              initial={{ scale: 0.5 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 100 }}
            >
              <span className="bg-gradient-to-r from-[#A3132D] via-[#c11638] to-[#6B0D1E] bg-clip-text text-transparent">
                {count}{suffix}
              </span>
            </motion.div>
            <p className="text-gray-400 text-lg">{label}</p>
          </div>

          {/* Decorative Element */}
          <motion.div
            className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#A3132D]/20 to-[#6B0D1E]/20 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function KPISection({ language }: KPISectionProps) {
  const t = translations[language as keyof typeof translations];
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const kpis = [
    {
      icon: Users,
      value: 100,
      suffix: '+',
      label: t.clients,
    },
    {
      icon: Briefcase,
      value: 300,
      suffix: '+',
      label: t.projects,
    },
    {
      icon: Award,
      value: 10,
      suffix: '',
      label: t.experience,
    },
    {
      icon: TrendingUp,
      value: 15,
      suffix: '+',
      label: t.specialists,
    },
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-[#A3132D]/10 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-br from-[#6B0D1E]/10 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <h2 className="text-4xl lg:text-6xl">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                {t.title}
              </span>
            </h2>
            <motion.div
              className="h-1 bg-gradient-to-r from-[#A3132D] to-[#6B0D1E] rounded-full mt-4"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </motion.div>
          <motion.p 
            className="text-gray-400 text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t.subtitle}
          </motion.p>
        </motion.div>

        {/* KPI Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {kpis.map((kpi, index) => (
            <KPIItem key={index} {...kpi} index={index} />
          ))}
        </div>

        {/* Decorative Line */}
        <motion.div
          className="mt-20 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-gray-700" />
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#A3132D] to-[#6B0D1E]" />
          <div className="h-[1px] w-20 bg-gradient-to-r from-gray-700 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
