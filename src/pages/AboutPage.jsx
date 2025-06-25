import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    pageTitle: "About Me",
    line1: "Hey, I’m Tuna.",
    line2: "Yes, that’s my actual name. It’s Turkish for the Danube River!",
    line3: "This site is where I share what I’m building, thinking about, or trying to figure out. Some of it’s technical: automating campus systems, building browser tools for Turkish e-commerce. Some of it is personal: essays on side projects, global issues, student life, or whatever else I’m wrestling with.",
    line4: "I’m a college student, into systems, strategy, and building things that save time or solve everyday problems—ideally with others. If you’re curious about any of it, or have a good café rec, reach out!"
  },
  tr: {
    pageTitle: "Hakkımda",
    line1: "Selam, ben Tuna.",
    line2: "Amerika’da tam burslu lisans okuyan bir Türk öğrenciyim. Bu site, üzerinde çalıştığım, düşündüğüm ya da anlamaya çalıştığım şeyleri paylaştığım bir alan.",
    line3: "Bazıları teknik: kampüs sistemlerini otomatikleştirmek, Türk e-ticareti için tarayıcı araçları geliştirmek gibi. Bazıları ise daha kişisel: yan projeler, küresel meseleler, Amerika’daki öğrenci hayatı ya da kafamı kurcalayan konular üzerine yazılar.", 
    line4: "Sistemler, strateji ve zamanı boşa harcamayan çözümler üretmek ile ilgileniyorum—genelde birileriyle birlikte. İlginizi çeken bir şey olursa ya da güzel bir mekân öneriniz varsa, yazmaktan çekinmeyin."
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
        transition={{ duration: 0.5 }}>
        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-green to-soft-mint">{t('pageTitle')}</h1>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 items-center mb-12">
        <motion.div 
          className="md:col-span-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          <img  
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-xl border-4 border-primary/20 dark:border-emerald-green/30" 
            alt="Tuna Profile Image"
            src="/images/tuna-akin.jpg" />
        </motion.div>
        <motion.div 
          className="md:col-span-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}>
          <Card className="glass-card p-2">
            <CardContent className="text-lg text-foreground/90 dark:text-foreground/80 leading-relaxed pt-6">
              <p className="mb-4">
                {t('line1')}
              </p>
              <p className="mb-4">
                {t('line2')}
              </p>
              <p className="mb-4">
                {t('line3')}
              </p>
              <p className="mb-4">
                {t('line4')}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>);};

export default AboutPage;