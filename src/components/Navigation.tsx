import { motion } from "framer-motion";
import { WhatsappIcon } from "./icons/WhatsappIcon";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavigationProps {}

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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

          <div className="flex items-center space-x-4">
            {/* Mobile booking button */}
            <motion.a
              href="https://wa.me/79991234567"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="md:hidden bg-[#25D366] hover:bg-[#128C7E] text-white px-3 py-1.5 rounded-md flex items-center space-x-1.5 transition-all duration-300 shadow-md hover:shadow-lg text-sm font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <WhatsappIcon className="w-3.5 h-3.5" />
              <span className="text-xs font-medium">Записаться</span>
            </motion.a>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: "about", text: "О докторе" },
                { id: "services", text: "Услуги" },
                { id: "gallery", text: "Результаты" },
                { id: "reviews", text: "Отзывы" },
                { id: "faq", text: "Вопросы" },
                { id: "map", text: "Как найти" },
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

              {/* Desktop booking button */}
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

            {/* Mobile menu button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              onClick={toggleMenu}
              className="md:hidden text-gray-600 hover:text-[#9F8772] transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-md"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {[
                { id: "about", text: "О докторе" },
                { id: "services", text: "Услуги" },
                { id: "gallery", text: "Результаты" },
                { id: "reviews", text: "Отзывы" },
                { id: "faq", text: "Вопросы" },
                { id: "map", text: "Как найти" },
                { id: "contacts", text: "Контакты" },
              ].map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-600 hover:text-[#9F8772] transition-colors duration-300 text-left py-2 border-b border-gray-100"
                  whileTap={{ scale: 0.98 }}
                >
                  {item.text}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
