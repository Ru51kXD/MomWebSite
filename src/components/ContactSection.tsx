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
      color: "bg-[#25D366]/90 hover:bg-[#25D366]",
      hoverScale: true,
    },
    {
      icon: InstagramIcon,
      label: "Instagram",
      href: "https://instagram.com/doctor_account",
      color:
        "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90",
      hoverScale: true,
    },
    {
      icon: TelegramIcon,
      label: "Telegram",
      href: "https://t.me/doctor_account",
      color: "bg-[#0088cc]/90 hover:bg-[#0088cc]",
      hoverScale: true,
    },
  ];

  return (
    <section
      id="contacts"
      className="py-24 bg-gradient-to-b from-[#FDF8F3] to-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6 text-[#2C1810]">
            Запись на консультацию
          </h2>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            Для записи на консультацию или процедуру, пожалуйста, свяжитесь со
            мной любым удобным для вас способом
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={link.hoverScale ? { scale: 1.05 } : {}}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`${link.color} text-white rounded px-4 py-2 flex items-center justify-center space-x-1.5 transition-all duration-300 text-sm w-full sm:w-auto`}
              >
                <link.icon className="w-5 h-5" />
                <span className="font-medium">{link.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center text-gray-600 max-w-lg mx-auto bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
        >
          <h3 className="font-semibold text-[#2C1810] mb-4">Часы работы</h3>
          <p className="mb-2">Понедельник - Пятница: 9:00 - 20:00</p>
          <p>Суббота - Воскресенье: по предварительной записи</p>
        </motion.div>
      </div>
    </section>
  );
}
