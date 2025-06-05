import React from 'react';
    import { Button } from '@/components/ui/button';
    import { Download, ArrowRight } from 'lucide-react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import { useLanguage } from '@/contexts/LanguageContext';

    const translations = {
      en: {
        yourName: "Tuna Akin",
        tagline: "Computer Science & Economics Undergraduate",
        downloadResume: "Resume",
        learnMore: "Learn More"
      },
      tr: {
        yourName: "Tuna AKIN",
        tagline: "Yazılım Mühendisliği & Ekonomi Lisans Öğrencisi",
        downloadResume: "Resume",
        learnMore: "Daha Fazla Bilgi"
      }
    };

    const HomePage = () => {
      const { language } = useLanguage();
      const t = (key) => translations[language][key] || key;

      return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] text-center px-4">
          <motion.div 
            className="absolute inset-0 overflow-hidden -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-green/20 rounded-full mix-blend-screen filter blur-2xl opacity-50 animate-blob dark:opacity-30"></div>
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-soft-mint/20 rounded-full mix-blend-screen filter blur-2xl opacity-50 animate-blob animation-delay-2000 dark:opacity-30"></div>
            <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-emerald-green/10 rounded-full mix-blend-screen filter blur-2xl opacity-50 animate-blob animation-delay-4000 dark:opacity-20"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-8"
          >
            <img  
              className="w-40 h-40 rounded-full object-cover mx-auto shadow-2xl border-4 border-primary/30 dark:border-emerald-green/40" 
              alt={t('Tuna') + " Profile Picture"}
             src="/images/tuna-akin.jpg" />
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-green via-soft-mint to-emerald-green"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 120 }}
          >
            {t('Tuna')}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {t('tagline')}
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-emerald-green to-green-600 hover:from-green-600 hover:to-emerald-green/90 text-primary-foreground shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 neumorphic-btn"
>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                {t('downloadResume')}
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-primary/50 text-primary dark:border-emerald-green/60 dark:text-emerald-green hover:bg-primary/10 dark:hover:bg-emerald-green/20 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/about">
                {t('learnMore')} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      );
    };

    export default HomePage;