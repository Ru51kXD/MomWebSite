import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onBookingClick?: () => void;
}

export default function HeroSection({ onBookingClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-[600px] bg-[#FDF8F3] flex items-center">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Профессиональная косметология для вашей красоты
          </h1>
          <p className="text-lg text-gray-600">
            Индивидуальный подход к каждому клиенту, современные методики и
            безопасные процедуры для достижения наилучших результатов
          </p>
          <Button
            onClick={onBookingClick}
            size="lg"
            className="bg-[#9F8772] hover:bg-[#876F58] text-white"
          >
            Записаться на консультацию
          </Button>
        </div>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070"
            alt="Косметологические процедуры"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
