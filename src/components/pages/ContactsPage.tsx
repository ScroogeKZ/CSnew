import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { toast } from 'sonner@2.0.3';
import { Toaster } from '../ui/sonner';

interface ContactsPageProps {
  language: string;
}

const translations = {
  ru: {
    title: 'Свяжитесь с нами',
    subtitle: 'Готовы начать проект? Оставьте заявку, и мы свяжемся с вами в ближайшее время',
    formTitle: 'Форма заявки',
    name: 'Ваше имя',
    namePlaceholder: 'Иван Иванов',
    nameError: 'Пожалуйста, введите ваше имя',
    email: 'Email',
    emailPlaceholder: 'ivan@example.com',
    emailError: 'Пожалуйста, введите корректный email',
    phone: 'Телефон',
    phonePlaceholder: '+7 (700) 123-45-67',
    phoneError: 'Пожалуйста, введите номер телефона',
    message: 'Сообщение',
    messagePlaceholder: 'Расскажите о вашем проекте...',
    messageError: 'Пожалуйста, расскажите о вашем проекте',
    submit: 'Отправить заявку',
    submitting: 'Отправка...',
    contactInfo: 'Контактная информация',
    address: 'Наш офис',
    addressValue: 'Алматы, Казахстан\nпр. Аль-Фараби, 77',
    phoneValue: '+7 (727) 123-45-67',
    emailValue: 'info@creativestudio.kz',
    workingHours: 'Часы работы',
    workingHoursValue: 'Пн-Пт: 9:00 - 18:00\nСб-Вс: Выходной',
    success: 'Спасибо! Мы получили вашу заявку',
    successDesc: 'Наш менеджер свяжется с вами в ближайшее время',
  },
  kz: {
    title: 'Бізбен байланысыңыз',
    subtitle: 'Жобаны бастауға дайынсыз ба? Өтінім қалдырыңыз, біз сізбен жақын арада байланысамыз',
    formTitle: 'Өтінім формасы',
    name: 'Сіздің атыңыз',
    namePlaceholder: 'Иван Иванов',
    nameError: 'Өтінеміз, атыңызды енгізіңіз',
    email: 'Email',
    emailPlaceholder: 'ivan@example.com',
    emailError: 'Өтінеміз, дұрыс email енгізіңіз',
    phone: 'Телефон',
    phonePlaceholder: '+7 (700) 123-45-67',
    phoneError: 'Өтінеміз, телефон нөмірін енгізіңіз',
    message: 'Хабарлама',
    messagePlaceholder: 'Жобаңыз туралы айтыңыз...',
    messageError: 'Өтінеміз, жобаңыз туралы айтыңыз',
    submit: 'Өтінім жіберу',
    submitting: 'Жіберілуде...',
    contactInfo: 'Байланыс ақпараты',
    address: 'Біздің офис',
    addressValue: 'Алматы, Қазақстан\nӘл-Фараби даңғылы, 77',
    phoneValue: '+7 (727) 123-45-67',
    emailValue: 'info@creativestudio.kz',
    workingHours: 'Жұмыс уақыты',
    workingHoursValue: 'Дс-Жм: 9:00 - 18:00\nСб-Жс: Демалыс',
    success: 'Рахмет! Біз сіздің өтінімді алдық',
    successDesc: 'Біздің менеджер жақын арада сізбен байланысады',
  },
  en: {
    title: 'Contact Us',
    subtitle: 'Ready to start a project? Leave a request and we will contact you soon',
    formTitle: 'Request Form',
    name: 'Your Name',
    namePlaceholder: 'John Doe',
    nameError: 'Please enter your name',
    email: 'Email',
    emailPlaceholder: 'john@example.com',
    emailError: 'Please enter a valid email',
    phone: 'Phone',
    phonePlaceholder: '+7 (700) 123-45-67',
    phoneError: 'Please enter your phone number',
    message: 'Message',
    messagePlaceholder: 'Tell us about your project...',
    messageError: 'Please tell us about your project',
    submit: 'Submit Request',
    submitting: 'Submitting...',
    contactInfo: 'Contact Information',
    address: 'Our Office',
    addressValue: 'Almaty, Kazakhstan\nAl-Farabi Ave, 77',
    phoneValue: '+7 (727) 123-45-67',
    emailValue: 'info@creativestudio.kz',
    workingHours: 'Working Hours',
    workingHoursValue: 'Mon-Fri: 9:00 AM - 6:00 PM\nSat-Sun: Closed',
    success: 'Thank you! We received your request',
    successDesc: 'Our manager will contact you soon',
  },
};

export default function ContactsPage({ language }: ContactsPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const t = translations[language as keyof typeof translations];

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? t.nameError : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? t.emailError : '';
      case 'phone':
        return value.trim().length < 5 ? t.phoneError : '';
      case 'message':
        return value.trim().length < 10 ? t.messageError : '';
      default:
        return '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success(t.success, {
        description: t.successDesc,
        duration: 5000,
      });
      
      setSubmitted(true);
      setIsSubmitting(false);
      
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error on change
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    if (error) {
      setErrors({ ...errors, [name]: error });
    }
  };

  const contactDetails = [
    {
      icon: MapPin,
      label: t.address,
      value: t.addressValue,
      link: 'https://maps.google.com',
      color: 'from-[#A3132D] to-[#6B0D1E]',
    },
    {
      icon: Phone,
      label: t.phone,
      value: t.phoneValue,
      link: `tel:${t.phoneValue}`,
      color: 'from-[#6B0D1E] to-[#A3132D]',
    },
    {
      icon: Mail,
      label: t.email,
      value: t.emailValue,
      link: `mailto:${t.emailValue}`,
      color: 'from-[#A3132D] to-[#c11638]',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Toaster position="top-right" theme="dark" />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center space-y-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                {t.title}
              </span>
            </h1>
            <p className="text-gray-400 text-xl">
              {t.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="glass-effect rounded-3xl p-8 lg:p-12"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="text-3xl mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                {t.formTitle}
              </h2>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    className="flex flex-col items-center justify-center py-12 space-y-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                  >
                    <motion.div 
                      className="w-24 h-24 rounded-full bg-gradient-to-br from-[#A3132D] to-[#6B0D1E] flex items-center justify-center"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle className="w-12 h-12 text-white" />
                    </motion.div>
                    <div className="text-center">
                      <h3 className="text-2xl text-white mb-2">{t.success}</h3>
                      <p className="text-gray-400">{t.successDesc}</p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-gray-300 mb-2">
                        {t.name}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder={t.namePlaceholder}
                        className={`w-full px-4 py-3 bg-gray-900/50 border ${
                          errors.name ? 'border-red-500' : 'border-gray-700'
                        } rounded-xl focus:border-[#A3132D] focus:outline-none text-white placeholder-gray-500 transition-all`}
                      />
                      <AnimatePresence>
                        {errors.name && (
                          <motion.div
                            className="flex items-center gap-2 mt-2 text-red-400 text-sm"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                          >
                            <AlertCircle className="w-4 h-4" />
                            <span>{errors.name}</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2">
                        {t.email}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder={t.emailPlaceholder}
                        className={`w-full px-4 py-3 bg-gray-900/50 border ${
                          errors.email ? 'border-red-500' : 'border-gray-700'
                        } rounded-xl focus:border-[#A3132D] focus:outline-none text-white placeholder-gray-500 transition-all`}
                      />
                      <AnimatePresence>
                        {errors.email && (
                          <motion.div
                            className="flex items-center gap-2 mt-2 text-red-400 text-sm"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                          >
                            <AlertCircle className="w-4 h-4" />
                            <span>{errors.email}</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label htmlFor="phone" className="block text-gray-300 mb-2">
                        {t.phone}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder={t.phonePlaceholder}
                        className={`w-full px-4 py-3 bg-gray-900/50 border ${
                          errors.phone ? 'border-red-500' : 'border-gray-700'
                        } rounded-xl focus:border-[#A3132D] focus:outline-none text-white placeholder-gray-500 transition-all`}
                      />
                      <AnimatePresence>
                        {errors.phone && (
                          <motion.div
                            className="flex items-center gap-2 mt-2 text-red-400 text-sm"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                          >
                            <AlertCircle className="w-4 h-4" />
                            <span>{errors.phone}</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-gray-300 mb-2">
                        {t.message}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        rows={5}
                        placeholder={t.messagePlaceholder}
                        className={`w-full px-4 py-3 bg-gray-900/50 border ${
                          errors.message ? 'border-red-500' : 'border-gray-700'
                        } rounded-xl focus:border-[#A3132D] focus:outline-none text-white placeholder-gray-500 resize-none transition-all`}
                      />
                      <AnimatePresence>
                        {errors.message && (
                          <motion.div
                            className="flex items-center gap-2 mt-2 text-red-400 text-sm"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                          >
                            <AlertCircle className="w-4 h-4" />
                            <span>{errors.message}</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-to-r from-[#A3132D] to-[#6B0D1E] rounded-xl hover:shadow-2xl hover:shadow-red-900/50 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    >
                      <span className="text-white text-lg">
                        {isSubmitting ? t.submitting : t.submit}
                      </span>
                      {!isSubmitting && <Send className="w-5 h-5 text-white" />}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Contact Information */}
            <div className="space-y-8">
              <motion.div
                className="glass-effect rounded-3xl p-8 lg:p-12"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h2 className="text-3xl mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  {t.contactInfo}
                </h2>

                <div className="space-y-6">
                  {contactDetails.map((detail, index) => {
                    const Icon = detail.icon;
                    return (
                      <motion.a
                        key={index}
                        href={detail.link}
                        target={detail.icon === MapPin ? '_blank' : undefined}
                        rel={detail.icon === MapPin ? 'noopener noreferrer' : undefined}
                        className="group flex items-start gap-4 p-5 rounded-2xl bg-gray-900/50 hover:bg-gray-900 transition-all"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                        whileHover={{ x: 5 }}
                      >
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${detail.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm mb-1">{detail.label}</p>
                          <p className="text-white whitespace-pre-line">
                            {detail.value}
                          </p>
                        </div>
                      </motion.a>
                    );
                  })}

                  {/* Working Hours */}
                  <motion.div
                    className="p-5 rounded-2xl bg-gray-900/50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    <p className="text-gray-400 text-sm mb-2">{t.workingHours}</p>
                    <p className="text-white whitespace-pre-line">{t.workingHoursValue}</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
