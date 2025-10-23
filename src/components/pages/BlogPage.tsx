import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface BlogPageProps {
  language: string;
}

const translations = {
  ru: {
    title: 'Наш Блог',
    subtitle: 'Последние новости, тренды и инсайты из мира digital',
    readMore: 'Читать далее',
    minRead: 'мин чтения',
  },
  kz: {
    title: 'Біздің Блог',
    subtitle: 'Digital әлемінен соңғы жаңалықтар, трендтер және инсайттар',
    readMore: 'Толығырақ оқу',
    minRead: 'мин оқу',
  },
  en: {
    title: 'Our Blog',
    subtitle: 'Latest news, trends and insights from the digital world',
    readMore: 'Read More',
    minRead: 'min read',
  },
};

export default function BlogPage({ language }: BlogPageProps) {
  const t = translations[language as keyof typeof translations];

  const articles = [
    {
      image: 'https://images.unsplash.com/photo-1641088008344-aa859e21051d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYmxvZ3xlbnwxfHx8fDE3NjEyMzQ1NjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Digital Marketing Trends 2025',
      excerpt: 'Explore the latest digital marketing trends that will shape the industry in 2025. From AI-powered automation to personalized experiences.',
      category: 'Digital Marketing',
      date: '2025-01-15',
      readTime: 5,
    },
    {
      image: 'https://images.unsplash.com/photo-1620479589423-0abc990883cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMHN0cmF0ZWd5fGVufDF8fHx8MTc2MTIzNDU2NHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Building a Strong Brand Identity',
      excerpt: 'Learn how to create a memorable brand identity that resonates with your target audience and stands out in the market.',
      category: 'Branding',
      date: '2025-01-12',
      readTime: 7,
    },
    {
      image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnR8ZW58MXx8fHwxNzYxMTc0NDEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Social Media Content Strategy',
      excerpt: 'Discover effective strategies for creating engaging social media content that drives engagement and builds community.',
      category: 'Social Media',
      date: '2025-01-10',
      readTime: 6,
    },
    {
      image: 'https://images.unsplash.com/photo-1672957603474-fe1d31c482e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHRpcHN8ZW58MXx8fHwxNzYxMjM0NTY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Web Development Best Practices',
      excerpt: 'Essential tips and best practices for modern web development, including performance optimization and user experience design.',
      category: 'Tech Solutions',
      date: '2025-01-08',
      readTime: 8,
    },
    {
      image: 'https://images.unsplash.com/photo-1760008486699-dbc9c319691a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHRyZW5kc3xlbnwxfHx8fDE3NjEyMzQ1NjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Creative Design Trends',
      excerpt: 'Stay ahead of the curve with the latest creative design trends that are transforming the visual landscape.',
      category: 'Design',
      date: '2025-01-05',
      readTime: 5,
    },
  ];

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(language === 'ru' ? 'ru-RU' : language === 'kz' ? 'kk-KZ' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

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

      {/* Blog Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Featured Post */}
            <div className="group relative overflow-hidden rounded-2xl bg-gray-800 border border-gray-700 hover:border-[#A3132D] transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-80 lg:h-auto overflow-hidden">
                  <ImageWithFallback
                    src={articles[0].image}
                    alt={articles[0].title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800/50 to-transparent lg:opacity-90" />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="px-4 py-1 bg-gradient-to-r from-[#A3132D] to-[#6B0D1E] rounded-full text-sm">
                      {articles[0].category}
                    </span>
                    <div className="flex items-center space-x-4 text-gray-400 text-sm">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(articles[0].date)}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{articles[0].readTime} {t.minRead}</span>
                      </span>
                    </div>
                  </div>

                  <h2 className="text-3xl lg:text-4xl text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#A3132D] group-hover:to-[#6B0D1E] group-hover:bg-clip-text transition-all">
                    {articles[0].title}
                  </h2>

                  <p className="text-gray-400 text-lg leading-relaxed">
                    {articles[0].excerpt}
                  </p>

                  <button className="inline-flex items-center space-x-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#A3132D] group-hover:to-[#6B0D1E] group-hover:bg-clip-text transition-all">
                    <span>{t.readMore}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Regular Posts Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {articles.slice(1).map((article, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-gray-800 border border-gray-700 hover:border-[#A3132D] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-900/20"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-gray-800/50 to-transparent opacity-90" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-[#A3132D] to-[#6B0D1E] rounded-full text-sm">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center space-x-4 text-gray-400 text-sm">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(article.date)}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime} {t.minRead}</span>
                      </span>
                    </div>

                    <h3 className="text-2xl text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#A3132D] group-hover:to-[#6B0D1E] group-hover:bg-clip-text transition-all">
                      {article.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed">
                      {article.excerpt}
                    </p>

                    <button className="inline-flex items-center space-x-2 pt-2 text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-[#A3132D] hover:to-[#6B0D1E] hover:bg-clip-text transition-all group/btn">
                      <span>{t.readMore}</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
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
