import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function MapSection() {
  return (
    <section id="map" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-6"
        >
          Как нас найти
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Мы находимся в удобном месте в центре города
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-[#2C1810]">
              Контактная информация
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-[#9F8772] mr-3 mt-1" />
                <div>
                  <h4 className="font-medium text-[#2C1810]">Адрес</h4>
                  <p className="text-gray-600">г. Астана, ТРЦ Азия парк</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-5 h-5 text-[#9F8772] mr-3 mt-1" />
                <div>
                  <h4 className="font-medium text-[#2C1810]">Телефон</h4>
                  <p className="text-gray-600">+7 (999) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-5 h-5 text-[#9F8772] mr-3 mt-1" />
                <div>
                  <h4 className="font-medium text-[#2C1810]">Email</h4>
                  <p className="text-gray-600">info@cosmetology.ru</p>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-[#2C1810] mb-2">Часы работы</h4>
                <p className="text-gray-600 mb-1">
                  Понедельник - Пятница: 9:00 - 20:00
                </p>
                <p className="text-gray-600">
                  Суббота - Воскресенье: по предварительной записи
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-[400px] rounded-xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.5919331549766!2d71.41690491585518!3d51.12926694590403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424585a605525605%3A0x4dff4a6d5473d51!2sAsia%20Park!5e0!3m2!1sen!2skz!4v1645544417242!5m2!1sen!2skz"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Карта расположения клиники"
              className="w-full h-full"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
