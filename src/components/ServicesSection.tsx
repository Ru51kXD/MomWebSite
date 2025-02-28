import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Leaf, Heart } from "lucide-react";

interface ServicesSectionProps {
  onBookingClick?: () => void;
}

const services = [
  {
    icon: Sparkles,
    title: "Чистка Лица",
    description: "Механическая чистка лица, Карбоновый пилинг",
    price: "от 5000 ₸",
  },
  {
    icon: Leaf,
    title: "Биоревитализация",
    description: "Биоревитализация лица и шеи",
    price: "от 5000 ₸",
  },
  {
    icon: Heart,
    title: "Плазмалифтинг",
    description: "Плазмалифтинг лица, шеи, головы (волос)",
    price: "от 5000 ₸",
  },
  {
    icon: Sparkles,
    title: "Препараты",
    description: "Полимолочной кислоты 5 и 10 мл",
    price: "от 3000 ₸", 
  },
  {
    icon: Leaf,
    title: "Жидкие нити",
    description: "",
    price: "от 5000 ₸",
  },
  {
    icon: Heart,
    title: "Мезонити",
    description: "«Гладкие» нити, «Насечками» нити",
    price: "от 5000 ₸",
  }, //«»
  {
    icon: Sparkles,
    title: "Ботулотоксины по зонам",
    description: "Межбровна зона, Лоб, Вокруг глаз, «Гусиные лапки», Морщины спинки носа, Вокруг губ «Кисетные морщины», Жевательные мышцы, Расслабление Платизмы, Форма улыбки и губ",
    price: "от 5000 ₸", 
  },
  {
    icon: Leaf,
    title: "Лечение гипергидроза (обильное потоотделение)",
    description: "Подмышечная область, Ладони, Ступни",
    price: "от 5000 ₸",
  },
  {
    icon: Heart,
    title: "Аппаратная косметология",
    description: "Удаление татуажа бровей, Удаление папиломы, Удаление бородавок, IPL лечение акне, Безинъекционная мезотерапия, Уходовая процедура Наноазия",
    price: "от 5000 ₸",
  },
  {
    icon: Sparkles,
    title: "Пилинги",
    description: "Гликолевый пилинг, Ретиноевый пиллинг, Пилинг PRX-T, TCA пилинг 15%, TCA пилинг 30%",
    price: "от 5000 ₸", 
  },
  {
    icon: Leaf,
    title: "Липолитики",
    description: "Лицо, Подбородок, Вдовий горбик, Липолитики по телу",
    price: "от 5000 ₸",
  },
  {
    icon: Heart,
    title: "Контурная пластика",
    description: "Губ, Носогубной складки, Скул, Кисетные морщины",
    price: "от 5000 ₸",
  },
  {
    icon: Sparkles,
    title: "Апаратные процедуры",
    description: "IPL лечение акне, RF лифтинг, Фотоомоложение",
    price: "от 5000 ₸", 
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
                <p className="font-semibold">{service.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
