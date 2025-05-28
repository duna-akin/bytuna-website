import React from 'react';
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
    import { Briefcase, CalendarDays, MapPin } from 'lucide-react';
    import { motion } from 'framer-motion';
    import { useLanguage } from '@/contexts/LanguageContext';

    const experienceTranslations = {
      en: {
        pageTitle: "My Experience",
        experiences: [
          {
            title: 'Project Lead & Software Developer',
            company: 'Lafayette College Office of Admissions',
            date: 'Summer 2025',
            location: 'Easton, PA',
            description: 'At Lafayette College’s Department of Admissions, I serve as the Project Lead and Software Developer for a full-scale migration of the Ambassador Program into Slate CRM. Since Summer 2025, I’ve partnered directly with the Slate team to design and implement a custom scheduling engine that intelligently assigns tours based on performance and availability metrics—streamlining operations and reclaiming over 250 staff hours each semester. My work includes developing tailored Slate objects, interactive forms, and live dashboards to provide admissions leadership with real-time insights into staffing and utilization.',
            logoAlt: "Tech Solutions Inc. Logo"
          },
          {
            title: 'Software Developer & Research Assistant',
            company: 'Dr. Heidi Hendrickson Research Group',
            date: 'Summer 2024 – Spring 2025',
            location: 'Easton, PA',
            description: 'As a Software Developer and Research Assistant in Dr. Heidi Hendrickson’s research group from Summer 2024 to Spring 2025, I led a computational campaign to model and refine the 3D structure of the Lam quorum-sensing receptor in Anoxybacillus. Using Linux-based clusters, I ran molecular dynamics simulations and built Python pipelines to automate trajectory analysis across simulation datasets. I also produced high-resolution structural visuals and animations in PyMOL, some of which were adopted in NSF-funded publications and presentations.', logoAlt: "University Logo"
          },
          {
            title: 'Co-Developer',
            company: 'Presidential Office of Digital Transformation',
            date: 'Summer 2020 – Winter 2022',
            location: 'Ankara, Turkey',
            description: 'I worked as a Co-Developer with the Presidential Office of Digital Transformation on a national smart manufacturing initiative. I developed a custom convolutional neural network (CNN) for real-time image recognition (RTIR), trained on a 1,000-image benchmark dataset. Collaborating with engineering teams, I integrated the vision module into a functional robotic framework, culminating in a demonstrable prototype. The project earned 1st place—ranked 1st out of 753 entries—in the TUBİTAK 2204‑A National Research Competition under the Computer Science category.',
            logoAlt: "Coding Club Logo"
          },
        ]
      },
      tr: {
        pageTitle: "Deneyimlerim",
        experiences: [
          {
            "title": "Proje Lideri & Yazılım Geliştirici",
            "company": "Lafayette College Kabul Ofisi",
            "date": "Yaz 2025",
            "location": "Easton, PA",
            "description": "Lafayette College Kabul Ofisi’nde, Elçi Programı’nın tamamının Slate CRM’e taşındığı bir dönüşüm sürecinde Proje Lideri ve Yazılım Geliştirici olarak görev yapıyorum. 2025 yazından bu yana Slate ekibiyle doğrudan çalışarak performans ve uygunluk metriklerine dayalı olarak turları akıllıca atayan özel bir planlama motoru tasarladım ve hayata geçirdim—bu sayede operasyonlar sadeleştirildi ve her dönem 250+ saatlik personel emeği geri kazanıldı. Çalışmalarım arasında özel Slate nesneleri, etkileşimli formlar ve anlık veri sunan canlı paneller geliştirmek de yer alıyor.",
            "logoAlt": "Teknoloji Çözümleri A.Ş. Logosu"
          },
          {
            "title": "Yazılım Geliştirici & Araştırma Asistanı",
            "company": "Dr. Heidi Hendrickson Araştırma Grubu",
            "date": "Yaz 2024 – Bahar 2025",
            "location": "Easton, PA",
            "description": "Dr. Heidi Hendrickson’ın araştırma grubunda Yazılım Geliştirici ve Araştırma Asistanı olarak görev yaptığım süre boyunca, Anoxybacillus bakterisinde bulunan Lam quorum-sensing reseptörünün 3D yapısını modellemek ve geliştirmek için hesaplamalı bir kampanyaya liderlik ettim. Linux tabanlı kümeler üzerinde moleküler dinamik simülasyonlar çalıştırdım ve simülasyon verilerini analiz etmek için Python betikleri yazdım. Ayrıca PyMOL ile yüksek çözünürlüklü yapısal görseller ve animasyonlar ürettim; bazıları NSF destekli yayınlarda ve sunumlarda kullanıldı.",
            "logoAlt": "Üniversite Logosu"
          },
          {
            "title": "Ortak Geliştirici",
            "company": "Cumhurbaşkanlığı Dijital Dönüşüm Ofisi",
            "date": "Yaz 2020 – Kış 2022",
            "location": "Ankara, Türkiye",
            "description": "Cumhurbaşkanlığı Dijital Dönüşüm Ofisi’nin ulusal akıllı üretim girişiminde Ortak Geliştirici olarak görev aldım. 1.000 görselden oluşan bir benchmark veri setiyle eğitilmiş özel bir evrişimsel sinir ağı (CNN) geliştirerek gerçek zamanlı görsel tanıma (RTIR) sistemine katkıda bulundum. Mühendislik ekipleriyle birlikte çalışarak görsel modülü fonksiyonel bir robotik sistemle entegre ettim ve gösterilebilir bir prototip ortaya çıkardık. Proje, TÜBİTAK 2204‑A Bilgisayar Bilimleri kategorisinde 753 proje arasından 1. olarak seçildi.",
            "logoAlt": "Kodlama Kulübü Logosu"
          }
      ]     
      }
    };

    const ExperiencePage = () => {
      const { language } = useLanguage();
      const t = (key) => experienceTranslations[language][key] || key;
      const currentExperiences = experienceTranslations[language].experiences;

      return (
        <div className="max-w-4xl mx-auto py-12 px-4">
          <motion.h1 
            className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-green to-soft-mint"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t('pageTitle')}
          </motion.h1>

          <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-emerald-green/50 before:via-soft-mint/50 before:to-emerald-green/50 dark:before:from-emerald-green/70 dark:before:via-soft-mint/70 dark:before:to-emerald-green/70">
            {currentExperiences.map((exp, index) => (
              <motion.div 
                key={index} 
                className="relative pl-10"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="absolute -left-1.5 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary dark:bg-emerald-green shadow-md">
                  <Briefcase className="h-4 w-4 text-primary-foreground" />
                </div>
                <Card className="hover:shadow-primary/10 dark:hover:shadow-emerald-green/20 transition-shadow duration-300 glass-card">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl mb-1 !bg-none !text-foreground">{exp.title}</CardTitle>
                        <CardDescription className="text-lg font-medium text-primary dark:text-emerald-green">{exp.company}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 dark:text-foreground/70 leading-relaxed">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      );
    };

    export default ExperiencePage;