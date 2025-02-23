import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onBookingClick?: () => void;
}

export default function HeroSection({ onBookingClick }: HeroSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative min-h-[600px] bg-[#FDF8F3] flex items-center"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900"
          >
            Профессиональная косметология для вашей красоты
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg text-gray-600"
          >
            Индивидуальный подход к каждому клиенту, современные методики и
            безопасные процедуры для достижения наилучших результатов
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Button
              onClick={onBookingClick}
              size="lg"
              className="bg-[#9F8772] hover:bg-[#876F58] text-white transition-colors duration-300"
            >
              Записаться на консультацию
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
        >
          <motion.img
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070"
            alt="Косметологические процедуры"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
