import React from 'react';
    import { useParams, Link } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { ArrowLeft, CalendarDays, UserCircle } from 'lucide-react';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent } from '@/components/ui/card'; // Removed CardHeader, CardTitle as they are not directly used here for post title
    import { useLanguage } from '@/contexts/LanguageContext';

    const blogPostsData = {
      en: [
        {
          id: 1,
          title: 'The Future of AI in Economic Modeling',
          date: 'October 26, 2024',
          author: 'Your Name',
          image: "https://images.unsplash.com/photo-1500401519266-0b71b29a05e0",
          content: `
            <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h2 class="text-2xl font-semibold my-6 text-emerald-green">The Rise of Machine Learning in Economics</h2>
            <p class="mb-4">Praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
            <img  class="my-6 rounded-lg shadow-md" alt="Data charts and graphs" src="https://images.unsplash.com/photo-1595512618325-86df927c7b4c" />
            <h2 class="text-2xl font-semibold my-6 text-emerald-green">Challenges and Opportunities</h2>
            <p class="mb-4">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
            <ul class="list-disc list-inside mb-4 pl-4 space-y-2">
              <li>Increased accuracy in predictions.</li>
              <li>Ability to process vast amounts of data.</li>
              <li>Potential for bias in algorithms.</li>
              <li>Ethical considerations in AI deployment.</li>
            </ul>
            <p class="mb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          `
        },
        {
          id: 2,
          title: 'React Best Practices for Scalable Applications',
          date: 'September 15, 2024',
          author: 'Your Name',
          image: "https://images.unsplash.com/photo-1597440836382-e5f0bd6155f7",
          content: `
            <p class="mb-4">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
            <h2 class="text-2xl font-semibold my-6 text-emerald-green">Component Design Patterns</h2>
            <p class="mb-4">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
            <img  class="my-6 rounded-lg shadow-md" alt="React code structure" src="https://images.unsplash.com/photo-1509966756634-9c23dd6e6815" />
            <h2 class="text-2xl font-semibold my-6 text-emerald-green">State Management Strategies</h2>
            <p class="mb-4">Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
          `
        },
        {
          id: 3,
          title: 'Behavioral Economics: Nudging for Better Outcomes',
          date: 'August 05, 2024',
          author: 'Your Name',
          image: "https://images.unsplash.com/photo-1699679886923-7ffc57337932",
          content: `
            <p class="mb-4"> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            <h2 class="text-2xl font-semibold my-6 text-emerald-green">The Power of Choice Architecture</h2>
            <p class="mb-4">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
            <img  class="my-6 rounded-lg shadow-md" alt="Nudge theory concept illustration" src="https://images.unsplash.com/photo-1609999312695-38a3608a45cb" />
            <h2 class="text-2xl font-semibold my-6 text-emerald-green">Ethical Implications</h2>
            <p class="mb-4">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
          `
        },
      ],
      tr: [
         {
          id: 1,
          title: 'Ekonomik Modellemede Yapay Zekanın Geleceği',
          date: '26 Ekim 2024',
          author: 'Adınız Soyadınız',
          image: "https://images.unsplash.com/photo-1500401519266-0b71b29a05e0",
          content: `
            <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h2 class="text-2xl font-semibold my-6 text-emerald-green">Ekonomide Makine Öğreniminin Yükselişi</h2>
            <p class="mb-4">Praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
            <img  class="my-6 rounded-lg shadow-md" alt="Veri grafikleri ve çizelgeleri" src="https://images.unsplash.com/photo-1516383274235-5f42d6c6426d" />
            <h2 class="text-2xl font-semibold my-6 text-emerald-green">Zorluklar ve Fırsatlar</h2>
            <p class="mb-4">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
            <ul class="list-disc list-inside mb-4 pl-4 space-y-2">
              <li>Tahminlerde artan doğruluk.</li>
              <li>Büyük miktarda veriyi işleme yeteneği.</li>
              <li>Algoritmalarda potansiyel önyargı.</li>
              <li>Yapay zeka dağıtımında etik hususlar.</li>
            </ul>
            <p class="mb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          `
        },
        {
          id: 2,
          title: 'Ölçeklenebilir Uygulamalar için React En İyi Uygulamaları',
          date: '15 Eylül 2024',
          author: 'Adınız Soyadınız',
          image: "https://images.unsplash.com/photo-1597440836382-e5f0bd6155f7",
          content: `
            <p class="mb-4">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
            <h2 class="text-2xl font-semibold my-6 text-emerald-green">Bileşen Tasarım Desenleri</h2>
            <p class="mb-4">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
            <img  class="my-6 rounded-lg shadow-md" alt="React kod yapısı" src="https://images.unsplash.com/photo-1561406084-7721f5e4d465" />
            <h2 class="text-2xl font-semibold my-6 text-emerald-green">Durum Yönetimi Stratejileri</h2>
            <p class="mb-4">Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
          `
        },
        {
          id: 3,
          title: 'Davranışsal İktisat: Daha İyi Sonuçlar İçin Dürtme',
          date: '05 Ağustos 2024',
          author: 'Adınız Soyadınız',
          image: "https://images.unsplash.com/photo-1699679886923-7ffc57337932",
          content: `
            <p class="mb-4"> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            <h2 class="text-2xl font-semibold my-6 text-emerald-green">Seçim Mimarisi'nin Gücü</h2>
            <p class="mb-4">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
            <img  class="my-6 rounded-lg shadow-md" alt="Dürtme teorisi konsept çizimi" src="https://images.unsplash.com/photo-1690170479933-6ef18fa4591f" />
            <h2 class="text-2xl font-semibold my-6 text-emerald-green">Etik Çıkarımlar</h2>
            <p class="mb-4">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
          `
        },
      ]
    }


    const BlogPostPage = () => {
      const { postId } = useParams();
      const { language } = useLanguage();
      const post = blogPostsData[language].find(p => p.id.toString() === postId);

      if (!post) {
        return (
          <div className="max-w-3xl mx-auto py-12 px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">Sorry, the blog post you are looking for does not exist.</p>
            <Button asChild variant="outline">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </Link>
            </Button>
          </div>
        );
      }

      return (
        <div className="max-w-3xl mx-auto py-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <Button asChild variant="outline" size="sm" className="mb-6 hover:bg-accent/10 dark:hover:bg-accent/20 border-primary/50 dark:border-emerald-green/60 text-primary dark:text-emerald-green">
                <Link to="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" /> {language === 'en' ? 'Back to Blog' : 'Blog\'a Geri Dön'}
                </Link>
              </Button>
              <img  className="w-full h-72 object-cover rounded-lg shadow-xl mb-6" alt={post.title} src={post.image} />
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-green to-soft-mint">{post.title}</h1>
              <div className="flex items-center text-sm text-muted-foreground mb-6 space-x-4">
                <span className="flex items-center"><CalendarDays className="mr-1.5 h-4 w-4" /> {post.date}</span>
                <span className="flex items-center"><UserCircle className="mr-1.5 h-4 w-4" /> {post.author}</span>
              </div>
            </div>
            <Card className="glass-card">
              <CardContent className="prose dark:prose-invert prose-lg max-w-none pt-8 text-foreground/90 dark:text-foreground/80">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      );
    };
    export default BlogPostPage;