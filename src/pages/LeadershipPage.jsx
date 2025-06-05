import React from 'react';
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
    import { Award, CalendarDays, TrendingUp } from 'lucide-react';
    import { motion } from 'framer-motion';
    import { useLanguage } from '@/contexts/LanguageContext';

    const leadershipTranslations = {
      en: {
        pageTitle: "Leadership & Involvement",
        roles: [
          {
            role: 'President',
            organization: 'Side Hustle Community',
            date: 'Spring 2025',
            impact: 'Since Spring 2025, I’ve started serving as the President of the Side Hustle Community, a campus-wide initiative supporting student-run ventures at Lafayette. We’ve grown the network to 25+ student sellers, collectively generating over $5,000 in revenue, and established an executive board to help lead strategic expansion efforts in collaboration with the Dyer Center. I conduct member surveys, implement growth plans, and organize key events—including semesterly fairs with 200+ attendees, pop-up mini-markets with local businesses, and the “Student-Made” retail partnership with the campus store.',
          },
          {
            role: 'Co-Director of Onboarding & Ambassador Training',
            organization: 'Ambassadors of Lafayette',
            date: 'Spring 2024 – Summer 2025',
            impact: 'From Spring 2024 to Summer 2025, I served as Co-Director of Onboarding and Training for the Ambassadors of Lafayette, acting as a key liaison between over 40 student ambassadors and senior admissions leadership. I led efforts to resolve operational concerns and proposed policy updates in meetings. Collaborating with the marketing team, I helped refine tour scripts and co-developed social media campaigns that reached over 5,000 prospective students. I also designed and led ambassador onboarding sessions and training workshops each semester, improving overall tour quality and message consistency.',
          },
        ]
      },
      tr: {
        pageTitle: "Liderlik & Katılımlar",
        roles: [
          {
            role: 'Başkan',
            organization: 'Side Hustle Community',
            date: 'İlkbahar 2025',
            impact: 'İlkbahar 2025’ten itibaren, Lafayette’te öğrenci girişimlerini destekleyen kampüs çapında bir girişim olan Side Hustle Community’nin Başkanı olarak görev yapıyorum. Ağı 25’ten fazla öğrenci girişimcisine büyüttük ve toplamda 5.000$’ın üzerinde gelir elde ettik. Ayrıca, Dyer Center iş birliğiyle stratejik büyüme çalışmalarını yönlendirecek bir yürütme kurulu kurduk. Üyelerle anketler yürütüyor, büyüme planları uyguluyor ve dönemlik panayırlar (200+ katılımcı), yerel işletmelerle mini pazarlar ve okul mağazasıyla “Student-Made” perakende iş birliği gibi önemli etkinlikleri organize ediyorum.'
          },
          {
            role: 'Onboarding ve Elçi Eğitimi Eş-Direktörü',
            organization: 'Ambassadors of Lafayette',
            date: 'İlkbahar 2024 – Yaz 2025',
            impact: 'İlkbahar 2024’ten Yaz 2025’e kadar, Ambassadors of Lafayette bünyesinde Onboarding ve Elçi Eğitimi Eş-Direktörü olarak görev yaptım. 40’tan fazla öğrenci elçi ile kıdemli kabul ofisi yöneticileri arasında köprü görevi gördüm. Operasyonel sorunların çözümü ve politika güncellemeleri konusunda toplantılarda aktif rol aldım. Pazarlama ekibiyle birlikte tur anlatılarını geliştirip 5.000’den fazla adaya ulaşan sosyal medya kampanyaları tasarladım. Her dönem elçi oryantasyonlarını ve eğitim atölyelerini organize ederek tur kalitesini ve anlatım tutarlılığını artırdım.'
          }
        ]
      }
    };

    const LeadershipPage = () => {
      const { language } = useLanguage();
      const t = (key) => leadershipTranslations[language][key] || key;
      const currentRoles = leadershipTranslations[language].roles;

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

          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
            {currentRoles.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card className="overflow-hidden hover:shadow-primary/10 dark:hover:shadow-emerald-green/20 transition-shadow duration-300 glass-card">
                  <CardHeader className="bg-primary/5 dark:bg-emerald-green/10 p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center mb-2">
                           <Award className="h-7 w-7 text-primary dark:text-emerald-green mr-3" />
                           <CardTitle className="text-2xl !bg-none !text-foreground">{item.role}</CardTitle>
                        </div>
                        <CardDescription className="text-lg font-medium text-muted-foreground">{item.organization}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <CalendarDays className="mr-1.5 h-4 w-4" /> {item.date}
                    </div>
                    <div className="flex items-start text-foreground/80 dark:text-foreground/70">
                      <TrendingUp className="mr-2 h-5 w-5 mt-1 flex-shrink-0 text-emerald-green" />
                      <p className="leading-relaxed">{item.impact}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      );
    };

    export default LeadershipPage;