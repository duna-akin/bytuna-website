import React from 'react';
    import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
    import { motion } from 'framer-motion';
    import { useLanguage } from '@/contexts/LanguageContext';

    const footerTranslations = {
      en: {
        rightsReserved: "Tuna Akin. All rights reserved.",
      },
      tr: {
        rightsReserved: "Tuna AKIN. Tüm hakları saklıdır.",
      }
    };
    

    const socialLinks = [
      { icon: <Github className="h-6 w-6" />, href: 'https://github.com/duna-akin', label: 'GitHub' },
      { icon: <Linkedin className="h-6 w-6" />, href: 'https://www.linkedin.com/in/tuna-ak%C4%B1n/', label: 'LinkedIn' },
      { icon: <Mail className="h-6 w-6" />, href: 'mailto:tuna.takin@gmail.com', label: 'Email' },
    ];

    const Footer = () => {
      const { language } = useLanguage();
      const t = (key) => footerTranslations[language][key] || key;

      return (
        <footer className="bg-slate-100 dark:bg-slate-800/50 py-12 border-t border-border">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center space-x-6 mb-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-muted-foreground hover:text-primary dark:hover:text-sky-400 transition-colors duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
            <motion.p 
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: socialLinks.length * 0.1, duration: 0.5 }}
            >
              &copy; {new Date().getFullYear()} {t('rightsReserved')}
            </motion.p>
          </div>
        </footer>
      );
    };

    export default Footer;