import { motion } from "framer-motion";
import { WhatsappIcon } from "./icons/WhatsappIcon";

interface NavigationProps {}

export default function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-semibold text-[#9F8772]"
          >
            Dr.Kononova
          </motion.div>
          <div className="hidden md:flex items-center space-x-8">
            {[
              { id: "about", text: "О докторе" },
              { id: "services", text: "Услуги" },
              { id: "gallery", text: "Результаты" },
              { id: "contacts", text: "Контакты" },
            ].map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-600 hover:text-[#9F8772] transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.text}
              </motion.button>
            ))}
            <motion.a
              href="https://wa.me/79991234567"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-2 rounded-md flex items-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm font-medium animate-subtle-bounce"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <WhatsappIcon className="w-4 h-4" />
              <span className="text-sm font-medium">Записаться</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
