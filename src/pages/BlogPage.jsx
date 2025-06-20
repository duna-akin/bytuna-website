import React from 'react';
    import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { ArrowRight, CalendarDays, UserCircle } from 'lucide-react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import { useLanguage } from '@/contexts/LanguageContext';

    const blogPostsData = {
      en: [
        {
          id: 1,
         title: 'Place-Holder Title',
          date: 'MMMM DD, YYYY',
          author: 'Tuna',
          excerpt: 'Lorem ipsum dolor sit amet...',
          image: "https://images.unsplash.com/photo-1500401519266-0b71b29a05e0"
        },
        {
          id: 2,
          title: 'Place-Holder Title',
          date: 'MMMM DD, YYYY',
          author: 'Tuna',
          excerpt: 'Lorem ipsum dolor sit amet...',
          image: "https://images.unsplash.com/photo-1597440836382-e5f0bd6155f7"
        },
        {
          id: 3,
          title: 'Place-Holder Title',
          date: 'MMMM DD, YYYY',
          author: 'Tuna',
          excerpt: 'Lorem ipsum dolor sit amet...',
          image: "https://images.unsplash.com/photo-1699679886923-7ffc57337932"
        },
      ],
      tr: [
        {
          id: 1,
          title: 'Place-Holder Title',
          date: 'MMMM DD, YYYY',
          author: 'Tuna',
          excerpt: 'Lorem ipsum dolor sit amet...',
          image: "https://images.unsplash.com/photo-1500401519266-0b71b29a05e0"
        },
        {
          id: 2,
          title: 'Place-Holder Title',
          date: 'MMMM DD, YYYY',
          author: 'Tuna',
          excerpt: 'Lorem ipsum dolor sit amet...',
          image: "https://images.unsplash.com/photo-1597440836382-e5f0bd6155f7"
        },
        {
          id: 3,
          title: 'Place-Holder Title',
          date: 'MMMM DD, YYYY',
          author: 'Tuna',
          excerpt: 'Lorem ipsum dolor sit amet...',
          image: "https://images.unsplash.com/photo-1699679886923-7ffc57337932"
        },
      ]
    };
    
    const pageTranslations = {
      en: {
        pageTitle: "My Thoughts & Insights",
        readMore: "Read More"
      },
      tr: {
        pageTitle: "Düşüncelerim & Analizlerim",
        readMore: "Devamını Oku"
      }
    }

    const BlogPage = () => {
      const { language } = useLanguage();
      const blogPosts = blogPostsData[language];
      const t = (key) => pageTranslations[language][key] || key;

      return (
        <div className="max-w-5xl mx-auto py-12 px-4">
          <motion.h1 
            className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-green to-soft-mint"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t('pageTitle')}
          </motion.h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="flex flex-col h-full overflow-hidden hover:shadow-primary/10 dark:hover:shadow-emerald-green/20 transition-shadow duration-300 glass-card">
                  <div className="aspect-video overflow-hidden">
                    <img src={post.image} className="w-full h-48 object-cover" alt={post.title} />
                  </div>
                  <CardHeader className="flex-grow">
                    <CardTitle className="text-xl mb-2 leading-tight !bg-none !text-foreground">{post.title}</CardTitle>
                    <div className="flex items-center text-xs text-muted-foreground mb-2 space-x-3">
                      <span className="flex items-center"><CalendarDays className="mr-1 h-3.5 w-3.5" /> {post.date}</span>
                      <span className="flex items-center"><UserCircle className="mr-1 h-3.5 w-3.5" /> {post.author}</span>
                    </div>
                    <CardDescription className="text-sm text-foreground/80 dark:text-foreground/70 leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button asChild variant="link" className="text-primary dark:text-emerald-green p-0 hover:underline">
                      <Link to={`/blog/${post.id}`}>
                        {t('readMore')} <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      );
    };

    export default BlogPage;