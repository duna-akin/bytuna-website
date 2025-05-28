import React from 'react';
    import Navbar from '@/components/Navbar';
    import Footer from '@/components/Footer';
    import { motion } from 'framer-motion';
    import { useLocation } from 'react-router-dom';

    const pageVariants = {
      initial: {
        opacity: 0,
        y: 20,
      },
      in: {
        opacity: 1,
        y: 0,
      },
      out: {
        opacity: 0,
        y: -20,
      },
    };

    const pageTransition = {
      type: 'tween',
      ease: 'anticipate',
      duration: 0.5,
    };

    const Layout = ({ children }) => {
      const location = useLocation();
      return (
        <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-500">
          <Navbar />
          <motion.main
            key={location.pathname}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="flex-grow container mx-auto px-4 py-8"
          >
            {children}
          </motion.main>
          <Footer />
        </div>
      );
    };

    export default Layout;