
    import React from 'react';
    import { useTheme } from '@/contexts/ThemeContext';
    import { Button } from '@/components/ui/button';
    import { Sun, Moon } from 'lucide-react';
    import { motion } from 'framer-motion';

    const ThemeToggle = () => {
      const { theme, toggleTheme } = useTheme();

      return (
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
          className="relative overflow-hidden"
        >
          <motion.div
            key={theme}
            initial={{ y: theme === 'light' ? -20 : 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: theme === 'light' ? 20 : -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute"
          >
            {theme === 'light' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </motion.div>
        </Button>
      );
    };

    export default ThemeToggle;
  