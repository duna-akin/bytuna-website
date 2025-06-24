import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const projectsData = {
  en: {
    pageTitle: "My Projects",
    projects: [
      {
        title: "ScheduleFlow",
        description: "A scheduling automation engine built for Lafayette College's Ambassador Program using Slate CRM. Designed to intelligently assign tours based on performance and availability metrics, projected to save 250+ staff hours each semester.",
        technologies: ["Slate CRM", "JavaScript", "Automation"],
        status: "In Development",
        date: "Summer 2025",
        github: null,
        demo: null,
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71"
      },      {
        title: "KebApp",
        description: "...",
        technologies: ["React Native", "API Integration", "Mobile Dev"],
        status: "In Development",
        date: "2025",
        github: null,
        demo: null,
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
      },
      {
        title: "LuminaPrep",
        description: "A college counseling initiative that helps Turkish students navigate the U.S. college application process. It offers guidance on application strategy, essay development, and financial aid—tailored to the unique challenges international applicants face. The goal is to make the admissions process more transparent and achievable for students who may not have access to expert advising.",
        technologies: ["Educational Consulting", "Content Creation", "Mentoring"],
        status: "Active",
        date: "Winter 2024 - Present",
        github: null,
        demo: null,
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
      },
      {
        title: "Protein Structure Analysis Pipeline",
        description: "Python-based computational pipeline for modeling and refining 3D structures of Lam quorum-sensing receptors. Trajectory analysis and high-resolution PyMOL visualizations adapted in NSF-funded research.",
        technologies: ["Python", "PyMOL", "Linux", "Molecular Dynamics"],
        status: "Research Project",
        date: "2024-2025",
        github: null, // Research code
        demo: null,
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69"
      },
      {
        title: "CNN-Based Real-Time Image Recognition of Industrial Produce",
        description: "Custom convolutional neural network for smart manufacturing, trained on 1,000-image benchmark dataset. Winner of TUBİTAK 2204-A National Research Competition (1st out of 753 entries).",
        technologies: ["Python", "TensorFlow", "Computer Vision", "CNN"],
        status: "Award Winner",
        date: "2020-2022",
        github: null, // Competition project
        demo: null,
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c"
      }
    ]
  },
  tr: {
    pageTitle: "Projelerim",
    projects: [
      {
        title: "ScheduleFlow",
        description: "Lafayette College Elçi Programı için Slate CRM kullanarak geliştirilen planlama otomasyon motoru. Performans ve müsaitlik metriklerine göre turları akıllıca atamak üzere tasarlanmış, her dönem 250+ personel saati tasarrufu hedefliyor.",
        technologies: ["Slate CRM", "JavaScript", "Otomasyon"],
        status: "Geliştirme Aşamasında",
        date: "Yaz 2025",
        github: null,
        demo: null,
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71"
      },      {
        title: "KebApp",
        description: "...",
        technologies: ["React Native", "API Entegrasyonu", "Mobil Geliştirme"],
        status: "Geliştirme Aşamasında",
        date: "2025",
        github: null,
        demo: null,
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
      },
      {
        title: "LuminaPrep",
        description: "Türk öğrencilerinin ABD üniversite başvuru sürecinde yol almasına yardımcı olan üniversite danışmanlığı girişimi. Başvuru stratejisi, kompozisyon geliştirme ve mali yardım konularında rehberlik sunuyor—uluslararası başvuru sahiplerinin karşılaştığı benzersiz zorluklara özel çözümler getiriyor. Amaç, uzman danışmanlığa erişimi olmayan öğrenciler için kabul sürecini daha şeffaf ve ulaşılabilir hale getirmek.",
        technologies: ["Eğitim Danışmanlığı", "İçerik Üretimi", "Mentorluk"],
        status: "Aktif",
        date: "Kış 2024 - Devam Ediyor",
        github: null,
        demo: null,
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
      },
      {
        title: "Protein Yapı Analiz Hattı",
        description: "Lam quorum-sensing reseptörlerinin 3D yapılarını modellemek ve iyileştirmek için Python tabanlı hesaplamalı hat. Otomatik yörünge analizi ve NSF destekli araştırma için yüksek çözünürlüklü PyMOL görselleştirmeleri içeriyor.",
        technologies: ["Python", "PyMOL", "Linux", "Moleküler Dinamik"],
        status: "Araştırma Projesi",
        date: "2024-2025",
        github: null,
        demo: null,
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69"
      },
      {
        title: "CNN Tabanlı Gerçek Zamanlı Endüstriyel Görüntü Tanıma Sistemi",
        description: "Akıllı üretim için özel evrişimsel sinir ağı, 1.000 görsel benchmark veri setiyle eğitildi. TUBİTAK Liseler Arası 2204-A Ulusal Araştırma Yarışması Türkiye birincisi (753 proje arasından)",
        technologies: ["Python", "TensorFlow", "Bilgisayarlı Görü", "CNN"],
        status: "Ödül Sahibi",
        date: "2020-2022",
        github: null,
        demo: null,
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c"
      }
    ]
  }
};

const ProjectsPage = () => {
  const { language } = useLanguage();
  const t = (key) => projectsData[language][key] || key;
  const projects = projectsData[language].projects;
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
      case 'tamamlandı':
        return 'text-green-600 dark:text-green-400';
      case 'in development':
      case 'geliştirme aşamasında':
        return 'text-blue-600 dark:text-blue-400';
      case 'active':
      case 'aktif':
        return 'text-emerald-600 dark:text-emerald-400';
      case 'research project':
      case 'araştırma projesi':
        return 'text-purple-600 dark:text-purple-400';
      case 'award winner':
      case 'ödül sahibi':
        return 'text-yellow-600 dark:text-yellow-400';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <motion.h1 
        className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-green to-soft-mint"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t('pageTitle')}
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col overflow-hidden hover:shadow-primary/10 dark:hover:shadow-emerald-green/20 transition-shadow duration-300 glass-card">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  className="w-full h-48 object-cover" 
                  alt={project.title} 
                />
              </div>
              
              <CardHeader className="flex-grow">
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl !bg-none !text-foreground">{project.title}</CardTitle>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="mr-1 h-3.5 w-3.5" />
                    {project.date}
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  <Tag className="mr-1.5 h-4 w-4" />
                  <span className={`text-sm font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                <CardDescription className="text-sm text-foreground/80 dark:text-foreground/70 leading-relaxed mb-4">
                  {project.description}
                </CardDescription>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-primary/10 dark:bg-emerald-green/20 text-primary dark:text-emerald-green rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex gap-3">
                  {project.github && (
                    <Button 
                      asChild
                      variant="outline" 
                      size="sm"
                      className="flex-1 border-primary/50 dark:border-emerald-green/60 text-primary dark:text-emerald-green hover:bg-primary/10 dark:hover:bg-emerald-green/20"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  
                  {project.demo && (
                    <Button 
                      asChild
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-emerald-green to-green-600 hover:from-green-600 hover:to-emerald-green/90 text-primary-foreground"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                  
                  {!project.github && !project.demo && (
                    <div className="flex-1 text-center">
                      <span className="text-xs text-muted-foreground">
                        {language === 'en' ? 'Private/Internal Project' : 'Özel/Dahili Proje'}
                      </span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
