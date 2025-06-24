import React, { useState, useEffect } from 'react';
    import { Link, useLocation } from 'react-router-dom';
    import { Button } from '@/components/ui/button';
    import ThemeToggle from '@/components/ThemeToggle';
    import LanguageToggle from '@/components/LanguageToggle';
    import { Menu, X, Code, User, BookOpen, Mail } from 'lucide-react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { useLanguage } from '@/contexts/LanguageContext';
    import {
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuTrigger,
    } from "@/components/ui/dropdown-menu";
    import { Globe } from 'lucide-react';


    const navLinkTranslations = {
      en: {
        home: 'Home',
        about: 'About',
        blog: 'Blog',
        contact: 'Contact',
      },
      tr: {
        home: 'Ana Sayfa',
        about: 'Hakkımda',
        blog: 'Blog',
        contact: 'İletişim',
      }
    };

    const Navbar = () => {
      const [isOpen, setIsOpen] = useState(false);
      const location = useLocation();
      const [isScrolled, setIsScrolled] = useState(false);
      const { language } = useLanguage();

      const navLinks = [
        { href: '/', labelKey: 'home', icon: <Code className="h-5 w-5" /> },
        { href: '/about', labelKey: 'about', icon: <User className="h-5 w-5" /> },
        { href: '/blog', labelKey: 'blog', icon: <BookOpen className="h-5 w-5" /> },
        { href: '/contact', labelKey: 'contact', icon: <Mail className="h-5 w-5" /> },
      ];
      
      const t = (key) => navLinkTranslations[language][key] || key;

      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
      
      const toggleMenu = () => setIsOpen(!isOpen);

      const NavLinkItem = ({ href, label, icon, onClick }) => (
        <Link
          to={href}
          onClick={onClick}
          className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300
            ${location.pathname === href 
              ? 'bg-accent/20 text-accent-foreground dark:bg-accent/30 dark:text-emerald-green' 
              : 'text-muted-foreground hover:text-primary hover:bg-accent/10 dark:hover:text-emerald-green dark:hover:bg-accent/20'
            }`}
        >
          {icon}
          <span className="ml-2">{label}</span>
        </Link>
      );

      return (
        <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              <Link to="/" className="flex items-center space-x-2">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
                >
                  <Code className="h-8 w-8 text-primary dark:text-emerald-green" />
                </motion.div>
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-green to-soft-mint"
                >
                  ByTuna
                </motion.span>
              </Link>
              <div className="hidden md:flex items-center space-x-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index + 0.5 }}
                  >
                    <NavLinkItem href={link.href} label={t(link.labelKey)} icon={link.icon} />
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * navLinks.length + 0.5 }}
                  className="flex items-center"
                >
                  <ThemeToggle />
                  <LanguageToggle />
                </motion.div>
              </div>
              <div className="md:hidden flex items-center">
                <ThemeToggle />
                <LanguageToggle />
                <Button variant="ghost" size="icon" onClick={toggleMenu} className="ml-2">
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden bg-background/95 backdrop-blur-sm shadow-lg absolute w-full"
              >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navLinks.map((link) => (
                    <NavLinkItem key={link.href} href={link.href} label={t(link.labelKey)} icon={link.icon} onClick={() => setIsOpen(false)} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      );
    };

    export default Navbar;