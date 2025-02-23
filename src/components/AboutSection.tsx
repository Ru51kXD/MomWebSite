import { Award, GraduationCap, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const stats = [
    { icon: Clock, value: "10+", label: "лет опыта" },
    { icon: Users, value: "2000+", label: "довольных клиентов" },
    { icon: Award, value: "15+", label: "сертификатов" },
    {
      icon: GraduationCap,
      value: "50+",
      label: "курсов повышения квалификации",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold"
            >
              О докторе
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 text-gray-600"
            >
              <motion.p variants={itemVariants} className="mb-4">
                Здравствуйте! Я Анна Сергеевна, врач-дерматокосметолог с
                10-летним стажем работы. Являюсь членом Российского общества
                дерматовенерологов и косметологов.
              </motion.p>
              <motion.p variants={itemVariants} className="mb-4">
                Окончила Первый Московский государственный медицинский
                университет им. И.М. Сеченова, прошла ординатуру по
                дерматовенерологии и профессиональную переподготовку по
                косметологии.
              </motion.p>
              <motion.p variants={itemVariants}>
                Регулярно повышаю квалификацию на российских и международных
                конференциях, владею современными методиками омоложения и
                коррекции эстетических недостатков.
              </motion.p>
            </motion.div>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-[#FDF8F3] rounded-lg text-center cursor-pointer transition-all hover:shadow-lg"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-[#9F8772]" />
                <div className="text-2xl font-bold text-[#9F8772] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
