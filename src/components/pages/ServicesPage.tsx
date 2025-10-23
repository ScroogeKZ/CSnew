import { Smartphone, Megaphone, BarChart3, Code2, Target, Palette, TrendingUp, Zap } from 'lucide-react';

interface ServicesPageProps {
  language: string;
}

const translations = {
  ru: {
    title: 'Все наши услуги',
    subtitle: 'Комплексные решения для развития вашего бизнеса в digital-пространстве',
    digital: 'Digital-маркетинг',
    digitalDesc: 'Комплексное продвижение в digital-пространстве включая SMM, SEO, контекстную рекламу и email-маркетинг. Мы помогаем брендам достигать целевой аудитории и увеличивать конверсию.',
    communication: 'Коммуникационные стратегии',
    communicationDesc: 'Разработка креативных концепций, коммуникационных стратегий и кампаний для продвижения брендов. Создаем уникальные послания, которые находят отклик у вашей аудитории.',
    research: 'Исследования и аналитика',
    researchDesc: 'Глубокий анализ рынка, целевой аудитории и конкурентов. Проводим количественные и качественные исследования для принятия обоснованных маркетинговых решений.',
    tech: 'Технологические решения',
    techDesc: 'Разработка сайтов, мобильных приложений и цифровых продуктов. От лендингов до сложных корпоративных платформ с использованием современных технологий.',
    includes: 'В услугу входит:',
    smmTitle: 'SMM и контент-маркетинг',
    seoTitle: 'SEO-оптимизация',
    ppcTitle: 'Контекстная реклама',
    analyticsTitle: 'Аналитика и отчетность',
    brandingTitle: 'Брендинг и айдентика',
    contentTitle: 'Креативный контент',
    prTitle: 'PR и медиа',
    eventsTitle: 'Event-маркетинг',
    marketTitle: 'Маркетинговые исследования',
    competitorsTitle: 'Анализ конкурентов',
    audienceTitle: 'Исследование аудитории',
    strategyTitle: 'Стратегическое планирование',
    webTitle: 'Веб-разработка',
    mobileTitle: 'Мобильные приложения',
    uiTitle: 'UI/UX дизайн',
    supportTitle: 'Техническая поддержка',
  },
  kz: {
    title: 'Біздің барлық қызметтер',
    subtitle: 'Digital кеңістігінде бизнесіңізді дамыту үшін кешенді шешімдер',
    digital: 'Digital-маркетинг',
    digitalDesc: 'SMM, SEO, контекстік жарнама және email-маркетингті қоса алғанда, digital кеңістікте кешенді жылжыту. Брендтерге мақсатты аудиторияға жетуге және конверсияны арттыруға көмектесеміз.',
    communication: 'Коммуникациялық стратегиялар',
    communicationDesc: 'Брендтерді жылжыту үшін креативті концепциялар, коммуникациялық стратегиялар мен науқандарды әзірлеу. Аудиторияңызда үн қосатын бірегей хабарламалар жасаймыз.',
    research: 'Зерттеулер және аналитика',
    researchDesc: 'Нарықты, мақсатты аудиторияны және бәсекелестерді терең талдау. Негізделген маркетингтік шешімдер қабылдау үшін сандық және сапалық зерттеулер жүргіземіз.',
    tech: 'Технологиялық шешімдер',
    techDesc: 'Сайттар, мобильді қосымшалар және цифрлық өнімдерді әзірлеу. Лендингтерден заманауи технологияларды пайдаланатын күрделі корпоративтік платформаларға дейін.',
    includes: 'Қызметке кіреді:',
    smmTitle: 'SMM және контент-маркетинг',
    seoTitle: 'SEO-оңтайландыру',
    ppcTitle: 'Контекстік жарнама',
    analyticsTitle: 'Аналитика және есептілік',
    brandingTitle: 'Брендинг және айдентика',
    contentTitle: 'Креативті контент',
    prTitle: 'PR және медиа',
    eventsTitle: 'Event-маркетинг',
    marketTitle: 'Маркетингтік зерттеулер',
    competitorsTitle: 'Бәсекелестерді талдау',
    audienceTitle: 'Аудиторияны зерттеу',
    strategyTitle: 'Стратегиялық жоспарлау',
    webTitle: 'Веб-әзірлеу',
    mobileTitle: 'Мобильді қосымшалар',
    uiTitle: 'UI/UX дизайн',
    supportTitle: 'Техникалық қолдау',
  },
  en: {
    title: 'All Our Services',
    subtitle: 'Comprehensive solutions for your business development in digital space',
    digital: 'Digital Marketing',
    digitalDesc: 'Comprehensive digital promotion including SMM, SEO, contextual advertising and email marketing. We help brands reach their target audience and increase conversions.',
    communication: 'Communication Strategies',
    communicationDesc: 'Development of creative concepts, communication strategies and campaigns for brand promotion. We create unique messages that resonate with your audience.',
    research: 'Research & Analytics',
    researchDesc: 'Deep analysis of market, target audience and competitors. We conduct quantitative and qualitative research for informed marketing decisions.',
    tech: 'Tech Solutions',
    techDesc: 'Development of websites, mobile applications and digital products. From landing pages to complex corporate platforms using modern technologies.',
    includes: 'Service includes:',
    smmTitle: 'SMM & Content Marketing',
    seoTitle: 'SEO Optimization',
    ppcTitle: 'Contextual Advertising',
    analyticsTitle: 'Analytics & Reporting',
    brandingTitle: 'Branding & Identity',
    contentTitle: 'Creative Content',
    prTitle: 'PR & Media',
    eventsTitle: 'Event Marketing',
    marketTitle: 'Market Research',
    competitorsTitle: 'Competitor Analysis',
    audienceTitle: 'Audience Research',
    strategyTitle: 'Strategic Planning',
    webTitle: 'Web Development',
    mobileTitle: 'Mobile Applications',
    uiTitle: 'UI/UX Design',
    supportTitle: 'Technical Support',
  },
};

export default function ServicesPage({ language }: ServicesPageProps) {
  const t = translations[language as keyof typeof translations];

  const services = [
    {
      icon: Smartphone,
      title: t.digital,
      description: t.digitalDesc,
      items: [
        { icon: Target, title: t.smmTitle },
        { icon: TrendingUp, title: t.seoTitle },
        { icon: Zap, title: t.ppcTitle },
        { icon: BarChart3, title: t.analyticsTitle },
      ],
    },
    {
      icon: Megaphone,
      title: t.communication,
      description: t.communicationDesc,
      items: [
        { icon: Palette, title: t.brandingTitle },
        { icon: Zap, title: t.contentTitle },
        { icon: Target, title: t.prTitle },
        { icon: TrendingUp, title: t.eventsTitle },
      ],
    },
    {
      icon: BarChart3,
      title: t.research,
      description: t.researchDesc,
      items: [
        { icon: TrendingUp, title: t.marketTitle },
        { icon: Target, title: t.competitorsTitle },
        { icon: Zap, title: t.audienceTitle },
        { icon: Palette, title: t.strategyTitle },
      ],
    },
    {
      icon: Code2,
      title: t.tech,
      description: t.techDesc,
      items: [
        { icon: Code2, title: t.webTitle },
        { icon: Smartphone, title: t.mobileTitle },
        { icon: Palette, title: t.uiTitle },
        { icon: Target, title: t.supportTitle },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#A3132D]/20 to-[#6B0D1E]/20" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-[#A3132D] to-[#6B0D1E] bg-clip-text text-transparent">
                {t.title}
              </span>
            </h1>
            <p className="text-gray-400 text-xl">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="group relative p-8 lg:p-12 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-[#A3132D] transition-all duration-300"
                >
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left Column - Main Info */}
                    <div className="space-y-6">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#A3132D] to-[#6B0D1E] flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="space-y-4">
                        <h2 className="text-3xl lg:text-4xl text-white">
                          {service.title}
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Right Column - Items */}
                    <div>
                      <h3 className="text-lg text-gray-300 mb-4">{t.includes}</h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {service.items.map((item, itemIndex) => {
                          const ItemIcon = item.icon;
                          return (
                            <div 
                              key={itemIndex}
                              className="flex items-start space-x-3 p-4 rounded-lg bg-gray-900/50 hover:bg-gray-900 transition-colors"
                            >
                              <ItemIcon className="w-5 h-5 text-[#A3132D] mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300">{item.title}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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
