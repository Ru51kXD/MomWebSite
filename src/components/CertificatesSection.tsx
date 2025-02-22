import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const certificates = [
  {
    title: "Сертификат по дерматокосметологии",
    issuer: "РУДН",
    year: "2020",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800",
  },
  {
    title: "Advanced Injection Techniques",
    issuer: "European Academy of Cosmetology",
    year: "2021",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800",
  },
  {
    title: "Лазерная косметология",
    issuer: "Институт красоты",
    year: "2022",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
  },
  {
    title: "Современные методы омоложения",
    issuer: "Medical Beauty Academy",
    year: "2023",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800",
  },
];

export default function CertificatesSection() {
  return (
    <section className="py-16 bg-[#FDF8F3]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Сертификаты и дипломы
        </h2>
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex space-x-6">
            {certificates.map((cert, index) => (
              <Card
                key={index}
                className="inline-block w-[300px] border-none shadow-lg"
              >
                <CardContent className="p-0">
                  <div className="aspect-[3/4] relative">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-1">{cert.title}</h3>
                    <p className="text-sm text-gray-600">{cert.issuer}</p>
                    <p className="text-sm text-gray-500">{cert.year}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
}
