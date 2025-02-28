import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { useStore } from "@/lib/store";
import { useEffect, useState } from "react";

export default function CertificatesSection() {
  const { certificates } = useStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-16 bg-[#FDF8F3]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Сертификаты и дипломы
        </motion.h2>
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex justify-center space-x-6">
            {mounted &&
              certificates &&
              certificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  viewport={{ once: true }}
                  className="inline-block w-[300px]"
                >
                  <Card className="border-none shadow-lg transition-shadow hover:shadow-xl w-full max-w-[300px] mx-auto">
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
                </motion.div>
              ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
}
