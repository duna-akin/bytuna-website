import React, { useState } from 'react';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Textarea } from '@/components/ui/textarea';
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
    import { Send, Mail, Phone, MapPin } from 'lucide-react';
    import { motion } from 'framer-motion';
    import { useToast } from '@/components/ui/use-toast';
    import { useLanguage } from '@/contexts/LanguageContext';

    const translations = {
      en: {
        pageTitle: "Get In Touch",
        contactInfoTitle: "Contact Information",
        contactInfoDesc: "Feel free to reach out through any of these channels.",
        emailLabel: "Email",
        phoneLabel: "Phone",
        locationLabel: "Location",
        sendMessageTitle: "Send Me a Message",
        sendMessageDesc: "I'll get back to you as soon as possible.",
        nameLabel: "Full Name",
        namePlaceholder: "Enter name",
        emailAddressLabel: "Email Address",
        emailPlaceholder: "name@example.com",
        messageLabel: "Your Message",
        messagePlaceholder: "Hi there...",
        sendButton: "Send Message",
        sendingButton: "Sending...",
        toastSuccessTitle: "Message Sent! 🚀",
        toastSuccessDesc: "Thanks for reaching out. I'll get back to you soon!",
      },
      tr: {
        pageTitle: "İletişime Geçin",
        contactInfoTitle: "İletişim Bilgileri",
        contactInfoDesc: "Bu kanallardan herhangi biri aracılığıyla bana ulaşmaktan çekinmeyin.",
        emailLabel: "E-posta",
        phoneLabel: "Telefon",
        locationLabel: "Konum",
        sendMessageTitle: "Bana Mesaj Gönderin",
        sendMessageDesc: "En kısa sürede size geri döneceğim.",
        nameLabel: "Tam Adınız",
        namePlaceholder: "Adınızı giriniz",
        emailAddressLabel: "E-posta Adresi",
        emailPlaceholder: "isim@example.edu",
        messageLabel: "Mesajınız",
        messagePlaceholder: "Merhaba...",
        sendButton: "Mesaj Gönder",
        sendingButton: "Gönderiliyor...",
        toastSuccessTitle: "Mesaj Gönderildi! 🚀",
        toastSuccessDesc: "Ulaştığınız için teşekkürler. En kısa zamanda size geri döneceğim!",
      }
    };

    const ContactPage = () => {
      const { toast } = useToast();
      const { language } = useLanguage();
      const t = (key) => translations[language][key] || key;

      const [formData, setFormData] = useState({ name: '', email: '', message: '' });
      const [isSubmitting, setIsSubmitting] = useState(false);

      const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Form data submitted:', formData);
        toast({
          title: t('toastSuccessTitle'),
          description: t('toastSuccessDesc'),
          variant: "default",
          className: "bg-card border-primary text-foreground dark:bg-card dark:border-emerald-green dark:text-foreground",
        });
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
      };

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

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl !bg-none !text-foreground">{t('contactInfoTitle')}</CardTitle>
                  <CardDescription>{t('contactInfoDesc')}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-primary/10 dark:bg-emerald-green/20 rounded-full">
                      <Mail className="h-6 w-6 text-primary dark:text-emerald-green" />
                    </div>
                    <div>
                      <p className="font-semibold">{t('emailLabel')}</p>
                      <a href="mailto:tuna.takin@gmail.com" className="text-muted-foreground hover:text-primary dark:hover:text-emerald-green transition-colors">{language === 'en' ? 'tuna.takin@gmail.com' : 'tuna.takin@gmail.com'}</a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-primary/10 dark:bg-emerald-green/20 rounded-full">
                      <Phone className="h-6 w-6 text-primary dark:text-emerald-green" />
                    </div>
                    <div>
                      <p className="font-semibold">{t('phoneLabel')}</p>
                      <p className="text-muted-foreground">+1 (482) 542-9931</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-primary/10 dark:bg-emerald-green/20 rounded-full">
                      <MapPin className="h-6 w-6 text-primary dark:text-emerald-green" />
                    </div>
                    <div>
                      <p className="font-semibold">{t('locationLabel')}</p>
                      <p className="text-muted-foreground">{language === 'en' ? 'New York City, NY' : 'New York City, ABD'}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl !bg-none !text-foreground">{t('sendMessageTitle')}</CardTitle>
                  <CardDescription>{t('sendMessageDesc')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">{t('nameLabel')}</Label>
                      <Input id="name" type="text" placeholder={t('namePlaceholder')} value={formData.name} onChange={handleChange} required />
                    </div>
                    <div>
                      <Label htmlFor="email">{t('emailAddressLabel')}</Label>
                      <Input id="email" type="email" placeholder={t('emailPlaceholder')} value={formData.email} onChange={handleChange} required />
                    </div>
                    <div>
                      <Label htmlFor="message">{t('messageLabel')}</Label>
                      <Textarea id="message" placeholder={t('messagePlaceholder')} rows={5} value={formData.message} onChange={handleChange} required />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-emerald-green to-green-600 hover:from-green-600 hover:to-emerald-green/90 text-primary-foreground shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 neumorphic-btn" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-background border-t-transparent rounded-full mr-2"
                        />
                      ) : (
                        <Send className="mr-2 h-5 w-5" />
                      )}
                      {isSubmitting ? t('sendingButton') : t('sendButton')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      );
    };

    export default ContactPage;