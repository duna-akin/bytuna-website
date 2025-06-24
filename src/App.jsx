import React from 'react';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import { AnimatePresence } from 'framer-motion';
    import Layout from '@/components/Layout';
    import HomePage from '@/pages/HomePage';
    import AboutPage from '@/pages/AboutPage';
    import ProjectsPage from '@/pages/ProjectsPage';
    import BlogPage from '@/pages/BlogPage';
    import BlogPostPage from '@/pages/BlogPostPage';
    import ContactPage from '@/pages/ContactPage';
    import { ThemeProvider } from '@/contexts/ThemeContext';
    import { LanguageProvider } from '@/contexts/LanguageContext';
    import { Toaster } from '@/components/ui/toaster';

    function App() {
      return (
        <ThemeProvider>
          <LanguageProvider>
            <Router>
              <Layout>
                <AnimatePresence mode="wait">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/blog/:postId" element={<BlogPostPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                  </Routes>
                </AnimatePresence>
              </Layout>
              <Toaster />
            </Router>
          </LanguageProvider>
        </ThemeProvider>
      );
    }

    export default App;