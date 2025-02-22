import { Button } from "@/components/ui/button";
import BeforeAfterCard from "./BeforeAfterCard";

interface GallerySectionProps {
  onBookingClick?: () => void;
}

const results = [
  {
    beforeImage:
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800",
    afterImage:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800",
    description: "Результат после курса биоревитализации",
  },
  {
    beforeImage:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800",
    afterImage:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800",
    description: "Эффект после пилинга и RF-лифтинга",
  },
  {
    beforeImage:
      "https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=800",
    afterImage:
      "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=800",
    description: "Результат комплексного ухода",
  },
];

export default function GallerySection({
  onBookingClick,
}: GallerySectionProps) {
  return (
    <section className="py-16 bg-[#FDF8F3]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Результаты работы
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <BeforeAfterCard key={index} {...result} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            onClick={onBookingClick}
            size="lg"
            className="bg-[#9F8772] hover:bg-[#876F58] text-white"
          >
            Записаться на консультацию
          </Button>
        </div>
      </div>
    </section>
  );
}
