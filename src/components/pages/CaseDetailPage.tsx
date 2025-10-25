import { ArrowLeft, Calendar, Users, Target, TrendingUp, CheckCircle, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface CaseDetailPageProps {
  caseId: number;
  onNavigate: (page: string) => void;
  language: string;
}

const translations = {
  ru: {
    back: 'Назад к кейсам',
    challenge: 'Вызов',
    solution: 'Решение',
    result: 'Результат',
    duration: 'Длительность',
    team: 'Команда',
    objectives: 'Цели проекта',
    achievements: 'Достижения',
    technologies: 'Технологии',
    viewWebsite: 'Посетить сайт',
    nextCase: 'Следующий кейс',
  },
  kz: {
    back: 'Кейстерге оралу',
    challenge: 'Міндет',
    solution: 'Шешім',
    result: 'Нәтиже',
    duration: 'Ұзақтығы',
    team: 'Команда',
    objectives: 'Жоба мақсаттары',
    achievements: 'Жетістіктер',
    technologies: 'Технологиялар',
    viewWebsite: 'Сайтқа кіру',
    nextCase: 'Келесі кейс',
  },
  en: {
    back: 'Back to Cases',
    challenge: 'Challenge',
    solution: 'Solution',
    result: 'Result',
    duration: 'Duration',
    team: 'Team',
    objectives: 'Project Objectives',
    achievements: 'Achievements',
    technologies: 'Technologies',
    viewWebsite: 'Visit Website',
    nextCase: 'Next Case',
  },
};

const casesData = [
  {
    id: 0,
    image: 'https://images.unsplash.com/photo-1628017973088-8feb5de8dddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMG9mZmljZXxlbnwxfHx8fDE3NjEyMTc4MTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Digital Transformation',
    client: 'Tech Corporation',
    category: 'Digital Marketing',
    result: '+250% ROI',
    duration: '6 месяцев',
    team: '12 специалистов',
    challenge: 'Компания столкнулась с устаревшими маркетинговыми каналами и низкой конверсией. Необходимо было полностью перестроить digital-стратегию и увеличить онлайн-присутствие.',
    solution: 'Мы разработали комплексную стратегию цифровой трансформации, включающую редизайн сайта, настройку аналитики, запуск таргетированной рекламы и контент-маркетинг. Внедрили CRM-систему и автоматизировали маркетинговые процессы.',
    objectives: [
      'Увеличить органический трафик на 200%',
      'Повысить конверсию в 3 раза',
      'Снизить стоимость привлечения клиента на 40%',
      'Автоматизировать маркетинговые процессы',
    ],
    achievements: [
      { metric: '+250%', description: 'Рост ROI' },
      { metric: '+180%', description: 'Органический трафик' },
      { metric: '+320%', description: 'Конверсия' },
      { metric: '-45%', description: 'Стоимость лида' },
    ],
    technologies: ['Google Analytics', 'Facebook Ads', 'SEO', 'Content Marketing', 'HubSpot CRM'],
  },
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1662393792373-52f5477094f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYnJhbmQlMjBkZXNpZ258ZW58MXx8fHwxNzYxMjM0NTI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Brand Redesign',
    client: 'Fashion Brand',
    category: 'Branding',
    result: '+180% Brand Awareness',
    duration: '4 месяца',
    team: '8 специалистов',
    challenge: 'Модный бренд нуждался в обновлении визуальной идентичности для привлечения молодой аудитории и выхода на международный рынок.',
    solution: 'Создали новую визуальную идентичность бренда, включая логотип, фирменный стиль, упаковку и digital-присутствие. Разработали brand guidelines и провели полный ребрендинг всех точек контакта с клиентами.',
    objectives: [
      'Создать современный визуальный язык бренда',
      'Увеличить узнаваемость на 150%',
      'Привлечь молодую аудиторию 18-35 лет',
      'Подготовить бренд к международному запуску',
    ],
    achievements: [
      { metric: '+180%', description: 'Узнаваемость бренда' },
      { metric: '+120%', description: 'Продажи' },
      { metric: '25K+', description: 'Новых подписчиков' },
      { metric: '4.8/5', description: 'Рейтинг бренда' },
    ],
    technologies: ['Adobe Creative Suite', 'Figma', 'Brand Strategy', 'Motion Design', 'Social Media'],
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1758686254082-0f91a27b3075?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlY29tbWVyY2V8ZW58MXx8fHwxNzYxMjM0NTI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'E-commerce Platform',
    client: 'Retail Company',
    category: 'Tech Solutions',
    result: '+320% Sales Growth',
    duration: '8 месяцев',
    team: '15 специалистов',
    challenge: 'Розничная компания нуждалась в современной e-commerce платформе для увеличения онлайн-продаж и улучшения пользовательского опыта.',
    solution: 'Разработали кастомную e-commerce платформу с интеграцией платежных систем, системой управления заказами, персонализированными рекомендациями и мобильным приложением.',
    objectives: [
      'Создать удобную e-commerce платформу',
      'Увеличить онлайн-продажи в 3 раза',
      'Снизить процент брошенных корзин',
      'Интегрировать с существующими системами',
    ],
    achievements: [
      { metric: '+320%', description: 'Рост продаж' },
      { metric: '-65%', description: 'Брошенные корзины' },
      { metric: '50K+', description: 'Активных пользователей' },
      { metric: '4.9/5', description: 'Оценка UX' },
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS', 'React Native'],
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYxMjMwODAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Mobile App',
    client: 'FinTech Startup',
    category: 'Mobile Development',
    result: '100K+ Downloads',
    duration: '10 месяцев',
    team: '10 специалистов',
    challenge: 'FinTech стартап нуждался в безопасном и удобном мобильном приложении для управления финансами.',
    solution: 'Разработали кроссплатформенное мобильное приложение с современным интерфейсом, высоким уровнем безопасности и интеграцией с банковскими API.',
    objectives: [
      'Создать безопасное финтех-приложение',
      'Достичь 100K+ загрузок за первый год',
      'Обеспечить высокий уровень безопасности',
      'Получить рейтинг 4.5+ в сторах',
    ],
    achievements: [
      { metric: '100K+', description: 'Загрузок' },
      { metric: '4.7/5', description: 'Рейтинг в сторах' },
      { metric: '85%', description: 'Удержание пользователей' },
      { metric: '0', description: 'Утечек данных' },
    ],
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Biometric Auth', 'Encryption'],
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1758887249067-a32805351a72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwYnJhbmRpbmd8ZW58MXx8fHwxNzYxMTUyMzkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Restaurant Chain',
    client: 'Food & Beverage',
    category: 'Branding & Marketing',
    result: '+200% Customer Flow',
    duration: '5 месяцев',
    team: '9 специалистов',
    challenge: 'Сеть ресторанов нуждалась в комплексной маркетинговой кампании для увеличения посещаемости и лояльности клиентов.',
    solution: 'Разработали полную маркетинговую стратегию, включая брендинг, SMM, программу лояльности, интеграцию с сервисами доставки и digital-рекламу.',
    objectives: [
      'Увеличить поток клиентов в 2 раза',
      'Запустить программу лояльности',
      'Улучшить присутствие в социальных сетях',
      'Интегрироваться с сервисами доставки',
    ],
    achievements: [
      { metric: '+200%', description: 'Поток клиентов' },
      { metric: '15K+', description: 'Участников программы' },
      { metric: '+300%', description: 'Заказы через приложение' },
      { metric: '4.6/5', description: 'Средний рейтинг' },
    ],
    technologies: ['Social Media Marketing', 'Google Ads', 'CRM', 'Mobile App', 'Analytics'],
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1621857093087-7daa85ab14a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB3ZWJzaXRlfGVufDF8fHx8MTc2MTE1NzAxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Corporate Website',
    client: 'International Corporation',
    category: 'Web Development',
    result: '+150% Engagement',
    duration: '7 месяцев',
    team: '14 специалистов',
    challenge: 'Международная корпорация нуждалась в современном корпоративном сайте с многоязычной поддержкой и интеграцией с внутренними системами.',
    solution: 'Создали enterprise-level веб-платформу с CMS, многоязычной поддержкой, интеграцией с CRM и ERP системами, продвинутой аналитикой.',
    objectives: [
      'Создать современный корпоративный сайт',
      'Реализовать поддержку 12 языков',
      'Интегрировать с внутренними системами',
      'Улучшить вовлеченность на 100%',
    ],
    achievements: [
      { metric: '+150%', description: 'Вовлеченность' },
      { metric: '12', description: 'Языков' },
      { metric: '500K+', description: 'Посетителей/месяц' },
      { metric: '99.9%', description: 'Uptime' },
    ],
    technologies: ['Next.js', 'TypeScript', 'Headless CMS', 'i18n', 'AWS', 'Analytics'],
  },
];

export default function CaseDetailPage({ caseId, onNavigate, language }: CaseDetailPageProps) {
  const t = translations[language as keyof typeof translations];
  const caseData = casesData[caseId] || casesData[0];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <ImageWithFallback
          src={caseData.image}
          alt={caseData.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
        
        {/* Back Button */}
        <motion.button
          onClick={() => onNavigate('/cases')}
          className="absolute top-24 left-8 flex items-center gap-2 px-4 py-2 glass-effect rounded-lg hover:bg-white/10 transition-all z-20"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ x: -5 }}
        >
          <ArrowLeft className="w-5 h-5" />
          <span>{t.back}</span>
        </motion.button>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#A3132D] to-[#6B0D1E] rounded-full text-sm mb-4">
                {caseData.category}
              </span>
              <h1 className="text-5xl lg:text-7xl mb-4">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {caseData.title}
                </span>
              </h1>
              <p className="text-2xl text-gray-300 mb-6">{caseData.client}</p>
              
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#A3132D]" />
                  <span className="text-gray-400">{t.duration}:</span>
                  <span className="text-white">{caseData.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#A3132D]" />
                  <span className="text-gray-400">{t.team}:</span>
                  <span className="text-white">{caseData.team}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Challenge, Solution, Result */}
            <div className="lg:col-span-2 space-y-12">
              {/* Challenge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3">
                  <Target className="w-6 h-6 text-[#A3132D]" />
                  <h2 className="text-3xl text-white">{t.challenge}</h2>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {caseData.challenge}
                </p>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-[#A3132D]" />
                  <h2 className="text-3xl text-white">{t.solution}</h2>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {caseData.solution}
                </p>
              </motion.div>

              {/* Objectives */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <h3 className="text-2xl text-white">{t.objectives}</h3>
                <ul className="space-y-3">
                  {caseData.objectives.map((objective, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-[#A3132D] mt-1 flex-shrink-0" />
                      <span className="text-gray-400">{objective}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Right Column - Achievements & Tech */}
            <div className="space-y-8">
              {/* Achievements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-[#A3132D]" />
                  <h3 className="text-2xl text-white">{t.achievements}</h3>
                </div>
                <div className="space-y-4">
                  {caseData.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      className="p-6 bg-gray-800 border border-gray-700 rounded-xl hover:border-[#A3132D] transition-all"
                    >
                      <div className="text-4xl bg-gradient-to-r from-[#A3132D] to-[#6B0D1E] bg-clip-text text-transparent mb-2">
                        {achievement.metric}
                      </div>
                      <div className="text-gray-400">{achievement.description}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-2xl text-white">{t.technologies}</h3>
                <div className="flex flex-wrap gap-2">
                  {caseData.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * index }}
                      className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300 hover:border-[#A3132D] transition-all"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
