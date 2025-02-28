import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Leaf, Heart } from "lucide-react";
import { useStore } from "@/lib/store";
import { useEffect, useState } from "react";

interface ServicesSectionProps {
  onBookingClick?: () => void;
}

export default function ServicesSection({
  onBookingClick,
}: ServicesSectionProps) {
  const { services } = useStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Map icon string to component
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Sparkles":
        return Sparkles;
      case "Leaf":
        return Leaf;
      case "Heart":
        return Heart;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Услуги</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {mounted &&
            services &&
            services.map((service) => {
              const IconComponent = getIconComponent(service.icon);
              return (
                <Card key={service.id} className="border-none shadow-lg">
                  <CardHeader>
                    <IconComponent className="w-10 h-10 text-[#9F8772] mb-2" />
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <p className="font-semibold">{service.price}</p>
                  </CardContent>
                </Card>
              );
            })}
        </div>
      </div>
    </section>
  );
}
