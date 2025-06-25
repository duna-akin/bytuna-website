import React from 'react';
    import { Button } from '@/components/ui/button';
    import { Download } from 'lucide-react';
    import { motion } from 'framer-motion';
    import { Card, CardContent } from '@/components/ui/card';
    import { useLanguage } from '@/contexts/LanguageContext';

    const translations = {
      en: {
        pageTitle: "About Me",
        par1: "Hey, I’m Tuna, and yes that is my actual name. (It comes from the Danube River in Europe.) ",
        par2: "I like to design and build things that give people their afternoons back: ScheduleFlow, the scheduling automation engine projected to free 250+ staff-hours every semester at my school, and KebApp, a mobile coupon hunter that auto-drops discounts before you tap “Pay” on Turkish e-commerce apps. Research-wise, I used to script Python pipelines that model quorum-sensing proteins and turning them into slick PyMOL visuals.",
        par3: "Outside class I am scaling the Side Hustle Community (25+ student sellers, $5k+ total revenue so far) and serve as co-director of onboarding for 40+ admissions ambassadors—basically the person who gets our new guides tour-ready to market our school! When I’m not shipping code you’ll find me theory-crafting grand-strategy games, planning urban walks, or perfecting the world’s slowest skateboard tricks. Got a project—or just a café rec? Let’s talk.",

        downloadResume: "Resume",

      },
      tr: {
        pageTitle: "Hakkımda",
        par1: "Selamlar! Ben Tuna.",
        par2: "Amerika'da %100 tam burslu olarak Yazılım Mühendisliği & İktisat okuyorum. İnsanlara öğleden sonralarını geri kazandıran işler geliştiriyorum: Her dönem personele 250+ saat kazandırması planlanan Slate CRM tabanlı planlama sistemi ScheduleFlow ve Türk e-ticaret uygulamalarında ödeme öncesi otomatik indirim uygulayan mobil kupon avcısı KebApp. Araştırma tarafında ise geçmişte quorum-sensing proteinlerini modelleyen Python betikleri yazıyor ve bunları şık PyMOL görsellerine dönüştürüyordum.",
        par3: "Ders dışında, 25+ öğrenci girişimciyi bir araya getiren Side Hustle Community’yi büyütüyorum. (Şimdiden 5.000$+ ciro) 40+ kabul elçisinin onboarding süreçlerinden sorumlu eş-yöneticilik yapıyorum — yeni rehberleri okulu marketlemek için tura hazır hale getiren kişi yani. Kod yazmadığımda CK3 ya da EU4 gibi grand-strategy oyunlarında teoriler üretir, New York'ta şehir yürüyüşleri planlar veya dünyanın en yavaş kaykay numaralarını mükemmelleştirmeye çalışırım. Bir proje fikrin ya da sadece iyi bir cafe önerin mi var? Konuşmaktan çekinme.",

        downloadResume: "Resume",

      }
    };
    



    const AboutPage = () => {
      const { language } = useLanguage();
      const t = (key) => translations[language][key] || key;



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
               src="/images/tuna-akin.jpg" />
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
                  <p className="mb-4">
                    {t('par3')}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-emerald-green to-green-600 hover:from-green-600 hover:to-emerald-green/90 text-primary-foreground shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 neumorphic-btn">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                {t('downloadResume')}
              </a>
            </Button>
          </motion.div>
        </div>
      );
    };

    export default AboutPage;