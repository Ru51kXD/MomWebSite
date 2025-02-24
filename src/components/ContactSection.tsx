import { motion } from "framer-motion";
import { WhatsappIcon } from "./icons/WhatsappIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
import { TelegramIcon } from "./icons/TelegramIcon";

export default function ContactSection() {
  const socialLinks = [
    {
      icon: WhatsappIcon,
      label: "WhatsApp",
      href: "https://wa.me/79991234567",
      color: "bg-[#25D366] hover:bg-[#128C7E]",
    },
    {
      icon: InstagramIcon,
      label: "Instagram",
      href: "https://instagram.com/doctor_account",
      color: "bg-[#E4405F] hover:bg-[#C13584]",
    },
    {
      icon: TelegramIcon,
      label: "Telegram",
      href: "https://t.me/doctor_account",
      color: "bg-[#0088cc] hover:bg-[#006699]",
    },
  ];

  return (
    <section id="contacts" className="py-16 bg-[#FDF8F3]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Запись на консультацию
        </motion.h2>
        <div className="max-w-2xl mx-auto text-center mb-8">
          <p className="text-lg text-gray-600 mb-8">
            Для записи на консультацию или процедуру, пожалуйста, свяжитесь со
            мной любым удобным для вас способом:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${link.color} text-white rounded-md p-2 flex items-center justify-center space-x-1.5 transition-all duration-300 text-sm`}
              >
                <link.icon className="w-4 h-4" />
                <span>{link.label}</span>
              </motion.a>
            ))}
          </div>
        </div>
        <div className="mt-12 text-center text-gray-600">
          <p className="mb-2">Часы работы:</p>
          <p>Понедельник - Пятница: 9:00 - 20:00</p>
          <p>Суббота - Воскресенье: по предварительной записи</p>
        </div>
      </div>
    </section>
  );
}
