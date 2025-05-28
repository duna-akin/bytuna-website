import React from 'react';
    import { useLanguage } from '@/contexts/LanguageContext';
    import { Button } from '@/components/ui/button';
    import {
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuTrigger,
    } from "@/components/ui/dropdown-menu";
    import { Globe } from 'lucide-react';
    import { motion } from 'framer-motion';

    const LanguageToggle = () => {
      const { language, setLang } = useLanguage();

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Change language" className="relative overflow-hidden">
               <motion.div
                key={language}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="absolute"
              >
                <Globe className="h-5 w-5" />
              </motion.div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setLang('en')} disabled={language === 'en'}>
              English
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setLang('tr')} disabled={language === 'tr'}>
              Türkçe
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    };

    export default LanguageToggle;