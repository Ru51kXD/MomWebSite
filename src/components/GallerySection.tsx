import { Button } from "@/components/ui/button";
import BeforeAfterCard from "./BeforeAfterCard";
import { useStore } from "@/lib/store";
import { useEffect, useState } from "react";

interface GallerySectionProps {
  onBookingClick?: () => void;
}

export default function GallerySection({
  onBookingClick,
}: GallerySectionProps) {
  const { galleryItems } = useStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="gallery" className="py-16 bg-[#FDF8F3]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Результаты работы
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {mounted &&
            galleryItems &&
            galleryItems.map((result) => (
              <BeforeAfterCard key={result.id} {...result} />
            ))}
        </div>
      </div>
    </section>
  );
}
