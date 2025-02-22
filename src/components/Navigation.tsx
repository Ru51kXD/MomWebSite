import { Button } from "@/components/ui/button";

interface NavigationProps {
  onBookingClick: () => void;
}

export default function Navigation({ onBookingClick }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-semibold text-[#9F8772]">
            Dr. Анна Сергеевна
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-[#9F8772]">
              О докторе
            </a>
            <a href="#services" className="text-gray-600 hover:text-[#9F8772]">
              Услуги
            </a>
            <a href="#gallery" className="text-gray-600 hover:text-[#9F8772]">
              Результаты
            </a>
            <a href="#contacts" className="text-gray-600 hover:text-[#9F8772]">
              Контакты
            </a>
          </div>
          <Button
            onClick={onBookingClick}
            variant="outline"
            className="border-[#9F8772] text-[#9F8772] hover:bg-[#9F8772] hover:text-white"
          >
            Записаться
          </Button>
        </div>
      </div>
    </nav>
  );
}
