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

      <footer className="py-16 bg-gradient-to-b from-white to-[#FDF8F3]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-[#2C1810] mb-4">
              Контактная информация
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Профессиональная косметология с индивидуальным подходом к каждому
              клиенту. Безопасность и качество - наши главные приоритеты.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <p className="font-medium text-[#2C1810]">Телефон</p>
                <p className="text-gray-600">+7 (999) 123-45-67</p>
              </div>
              <div className="text-center">
                <p className="font-medium text-[#2C1810]">Email</p>
                <p className="text-gray-600">info@cosmetology.ru</p>
              </div>
              <div className="text-center">
                <p className="font-medium text-[#2C1810]">Адрес</p>
                <p className="text-gray-600">ул. Примерная, 123, Москва</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Косметологический кабинет
              доктора Анны Сергеевны.
              <br />
              Все права защищены.
            </p>
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  );
}
