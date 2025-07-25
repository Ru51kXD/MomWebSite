import { motion } from "framer-motion";

import React from "react";

interface HeroSectionProps {
  onBookingClick?: () => void;
}

export default function HeroSection({ onBookingClick }: HeroSectionProps) {
  return (
    <div className="relative min-h-[600px] bg-[#FDF8F3] flex items-center">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center py-8 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Профессиональная косметология для вашей красоты
          </h1>
          <p className="text-lg text-gray-600">
            Индивидуальный подход к каждому клиенту, современные методики и
            безопасные процедуры для достижения наилучших результатов
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-[4/3] rounded-2xl overflow-hidden"
        >
          <img
            src="../img/1FM.jpg"
            alt="Косметологические процедуры"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>
    </div>
  );
}
