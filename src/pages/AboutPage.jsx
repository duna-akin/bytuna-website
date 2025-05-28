import React from 'react';
    import { Button } from '@/components/ui/button';
    import { Download, UserCheck, Brain, BarChart3, Code, Database, PieChart, Zap, User } from 'lucide-react';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { useLanguage } from '@/contexts/LanguageContext';

    const translations = {
      en: {
        pageTitle: "About Me",
        par1: "Hey! I’m Tuna, a Computer Science & Economics student at Lafayette (rocking a 3.8 GPA) from the class of 2027. I build things that give people their afternoons back: ScheduleFlow, the Slate-powered scheduling engine freeing 250+ staff-hours every semester, and KebApp, a mobile coupon hunter that auto-drops discounts before you tap “Pay” on Turkish e-commerce apps. Research-wise, I used to script Python pipelines that model quorum-sensing proteins and turning them into slick PyMOL visuals.",
        par2: "Outside class I scaled the Side Hustle Community (25+ student sellers, $5k+ revenue so far) and serve as co-director of onboarding for 40+ admissions ambassadors—basically the hype-man who gets new guides tour-ready. When I’m not shipping code you’ll find me theory-crafting grand-strategy games, mapping urban walks, or perfecting the world’s slowest skateboard tricks. Got a project—or just a café rec? Let’s talk.",
        skillsTitle: "My Skills",
        downloadResume: "Resume",
        skills: [
          { name: "Project Management", level: "Advanced" },
          { name: "Software Engineering", level: "Intermediate" },
          { name: "Data Analysis & Visualization", level: "Proficient" },
          { name: "Soft & Non-Technical Skills", level: "Advanced" },
        ]
      },
      tr: {
        pageTitle: "Hakkımda",
        par1: "Selam! Ben Tuna, Lafayette’te Bilgisayar Bilimi & Ekonomi öğrencisiyim (2027 mezunuyum, not ortalamam 3.8). İnsanlara öğleden sonralarını geri kazandıran işler geliştiriyorum: Her dönem personele 250+ saat kazandıran Slate tabanlı planlama sistemi ScheduleFlow ve Türk e-ticaret uygulamalarında ödeme öncesi otomatik indirim uygulayan mobil kupon avcısı KebApp. Araştırma tarafında ise geçmişte quorum-sensing proteinlerini modelleyen Python betikleri yazıyor ve bunları şık PyMOL görsellerine dönüştürüyordum.",
        par2: "Ders dışında, 25+ öğrenci girişimciyi bir araya getiren Side Hustle Community’yi büyüttüm (şimdiden 5.000 $+ ciro) ve 40+ kabul elçisinin onboarding süreçlerinden sorumlu eş-yöneticilik yapıyorum—yeni rehberleri tura hazır hale getiren kişi yani. Kod yazmadığımda grand-strategy oyunlarında teoriler üretir, şehir yürüyüşleri planlar veya dünyanın en yavaş kaykay numaralarını mükemmelleştirmeye çalışırım. Bir proje fikrin ya da sadece iyi bir kahve önerin mi var? Hadi konuşalım.",
        skillsTitle: "Yeteneklerim",
        downloadResume: "Resume",
        skills: [
          { name: "Proje Yönetimi", level: "İleri Düzey" },
          { name: "Yazılım Mühendisliği", level: "Orta Düzey" },
          { name: "Veri Analizi ve Görselleştirme", level: "Yetkin" },
          { name: "Sosyal Beceri", level: "İleri Düzey" },
        ]
      }
    };
    
    const skillIcons = [ 
      { icon: <UserCheck className="h-6 w-6 text-emerald-green" />},
      { icon: <Code className="h-6 w-6 text-emerald-green" />},
      { icon: <PieChart className="h-6 w-6 text-emerald-green" />},
      { icon: <Zap className="h-6 w-6 text-emerald-green" />},
    ];


    const AboutPage = () => {
      const { language } = useLanguage();
      const t = (key) => translations[language][key] || key;
      const currentSkills = translations[language].skills;


      return (
        <div className="max-w-4xl mx-auto py-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-green to-soft-mint">{t('pageTitle')}</h1>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 items-center mb-12">
            <motion.div 
              className="md:col-span-1 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img  
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-xl border-4 border-primary/20 dark:border-emerald-green/30" 
                alt="Tuna Profile Image"
               src="../public/images/tuna-akin.jpg" />
            </motion.div>
            <motion.div 
              className="md:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="glass-card p-2">
                <CardContent className="text-lg text-foreground/90 dark:text-foreground/80 leading-relaxed pt-6">
                  <p className="mb-4">
                    {t('par1')}
                  </p>
                  <p className="mb-4">
                    {t('par2')}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-green to-soft-mint">{t('skillsTitle')}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {currentSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                >
                  <Card className="text-center hover:shadow-primary/20 dark:hover:shadow-emerald-green/30 transition-shadow duration-300 glass-card">
                    <CardHeader>
                      <div className="mx-auto mb-2 p-3 bg-primary/10 dark:bg-emerald-green/20 rounded-full inline-block">
                        {skillIcons[index % skillIcons.length].icon}
                      </div>
                      <CardTitle className="text-xl !bg-none !text-foreground">{skill.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{skill.level}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-emerald-green to-green-600 hover:from-green-600 hover:to-emerald-green/90 text-primary-foreground shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 neumorphic-btn"
              onClick={() => alert('Resume download functionality to be implemented!')}
            >
              <Download className="mr-2 h-5 w-5" />
              {t('downloadResume')}
            </Button>
          </motion.div>
        </div>
      );
    };

    export default AboutPage;