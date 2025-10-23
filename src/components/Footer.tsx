import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
  language: string;
}

const translations = {
  ru: {
    quickLinks: 'Быстрые ссылки',
    home: 'Главная',
    services: 'Услуги',
    cases: 'Кейсы',
    blog: 'Блог',
    contacts: 'Контакты',
    contactInfo: 'Контактная информация',
    address: 'Алматы, Казахстан',
    phone: '+7 (727) 123-45-67',
    email: 'info@creativestudio.kz',
    social: 'Социальные сети',
    rights: '© 2025 CreativeStudio. Все права защищены.',
  },
  kz: {
    quickLinks: 'Жылдам сілтемелер',
    home: 'Басты бет',
    services: 'Қызметтер',
    cases: 'Жобалар',
    blog: 'Блог',
    contacts: 'Байланыс',
    contactInfo: 'Байланыс ақпараты',
    address: 'Алматы, Қазақстан',
    phone: '+7 (727) 123-45-67',
    email: 'info@creativestudio.kz',
    social: 'Әлеуметтік желілер',
    rights: '© 2025 CreativeStudio. Барлық құқықтар қорғалған.',
  },
  en: {
    quickLinks: 'Quick Links',
    home: 'Home',
    services: 'Services',
    cases: 'Cases',
    blog: 'Blog',
    contacts: 'Contacts',
    contactInfo: 'Contact Information',
    address: 'Almaty, Kazakhstan',
    phone: '+7 (727) 123-45-67',
    email: 'info@creativestudio.kz',
    social: 'Social Media',
    rights: '© 2025 CreativeStudio. All rights reserved.',
  },
};

export default function Footer({ onNavigate, language }: FooterProps) {
  const t = translations[language as keyof typeof translations];

  const quickLinks = [
    { label: t.home, path: '/' },
    { label: t.services, path: '/services' },
    { label: t.cases, path: '/cases' },
    { label: t.blog, path: '/blog' },
    { label: t.contacts, path: '/contacts' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#A3132D] to-[#6B0D1E] rounded-lg flex items-center justify-center">
                <span className="text-white">CS</span>
              </div>
              <span className="bg-gradient-to-r from-[#A3132D] to-[#6B0D1E] bg-clip-text text-transparent">
                CreativeStudio
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Digital & Brandformance Agency
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 bg-gradient-to-r from-[#A3132D] to-[#6B0D1E] bg-clip-text text-transparent">
              {t.quickLinks}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => onNavigate(link.path)}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 bg-gradient-to-r from-[#A3132D] to-[#6B0D1E] bg-clip-text text-transparent">
              {t.contactInfo}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-[#A3132D]" />
                <span>{t.address}</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-[#A3132D]" />
                <a href={`tel:${t.phone}`} className="hover:text-white transition-colors">
                  {t.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-[#A3132D]" />
                <a href={`mailto:${t.email}`} className="hover:text-white transition-colors">
                  {t.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 bg-gradient-to-r from-[#A3132D] to-[#6B0D1E] bg-clip-text text-transparent">
              {t.social}
            </h3>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gradient-to-br hover:from-[#A3132D] hover:to-[#6B0D1E] flex items-center justify-center transition-all transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800">
          <p className="text-center text-gray-500 text-sm">
            {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
