import { Toaster } from "@/components/ui/toaster";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import GallerySection from "./GallerySection";
import AboutSection from "./AboutSection";
import CertificatesSection from "./CertificatesSection";
import ContactSection from "./ContactSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <HeroSection />
        <section id="about">
          <AboutSection />
        </section>
        <section id="services">
          <ServicesSection />
        </section>
        <section id="gallery">
          <GallerySection />
        </section>
        <CertificatesSection />
        <ContactSection />
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
