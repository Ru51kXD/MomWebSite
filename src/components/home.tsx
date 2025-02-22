import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Toaster } from "@/components/ui/toaster";
import { useState } from "react";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import GallerySection from "./GallerySection";
import AboutSection from "./AboutSection";
import CertificatesSection from "./CertificatesSection";
import BookingForm from "./BookingForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookingOpen = () => setIsBookingOpen(true);
  const handleBookingClose = () => setIsBookingOpen(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Адрес",
      content: "ул. Примерная, 123, Москва",
    },
    {
      icon: Phone,
      title: "Телефон",
      content: "+7 (999) 123-45-67",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@cosmetology.ru",
    },
    {
      icon: Clock,
      title: "Часы работы",
      content: "Пн-Пт: 9:00-20:00",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation onBookingClick={handleBookingOpen} />
      <main className="pt-16">
        <HeroSection onBookingClick={handleBookingOpen} />
        <section id="about">
          <AboutSection />
        </section>
        <section id="services">
          <ServicesSection onBookingClick={handleBookingOpen} />
        </section>
        <section id="gallery">
          <GallerySection onBookingClick={handleBookingOpen} />
        </section>
        <CertificatesSection />

        <section id="contacts" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Контакты</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="text-center space-y-3">
                  <item.icon className="w-8 h-8 mx-auto text-[#9F8772]" />
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <BookingForm onClose={handleBookingClose} />
          </DialogContent>
        </Dialog>
      </main>

      <footer className="py-12 bg-[#FDF8F3]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">О нас</h3>
              <p className="text-sm text-gray-600">
                Профессиональная косметология с индивидуальным подходом к
                каждому клиенту. Безопасность и качество - наши главные
                приоритеты.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Часы работы</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>Понедельник - Пятница: 9:00 - 20:00</p>
                <p>Суббота - Воскресенье: Выходной</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>Телефон: +7 (999) 123-45-67</p>
                <p>Email: info@cosmetology.ru</p>
                <p>Адрес: ул. Примерная, 123, Москва</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
            <p>
              &copy; {new Date().getFullYear()} Косметологический кабинет. Все
              права защищены.
            </p>
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  );
}
