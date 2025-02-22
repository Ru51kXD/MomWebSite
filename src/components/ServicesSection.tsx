import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Leaf, Heart } from "lucide-react";

interface ServicesSectionProps {
  onBookingClick?: () => void;
}

const services = [
  {
    icon: Sparkles,
    title: "Инъекционная косметология",
    description: "Биоревитализация, мезотерапия, контурная пластика",
    price: "от 3000 ₽",
  },
  {
    icon: Leaf,
    title: "Уходовые процедуры",
    description: "Чистка лица, пилинги, маски, массаж лица",
    price: "от 2000 ₽",
  },
  {
    icon: Heart,
    title: "Аппаратная косметология",
    description: "RF-лифтинг, микротоки, ультразвуковая терапия",
    price: "от 2500 ₽",
  },
];

export default function ServicesSection({
  onBookingClick,
}: ServicesSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Услуги</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardHeader>
                <service.icon className="w-10 h-10 text-[#9F8772] mb-2" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="font-semibold mb-4">{service.price}</p>
                <Button
                  onClick={onBookingClick}
                  variant="outline"
                  className="w-full border-[#9F8772] text-[#9F8772] hover:bg-[#9F8772] hover:text-white"
                >
                  Записаться
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
