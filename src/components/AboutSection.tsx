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

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#FDF8F3]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-[#2C1810]">О докторе</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Добро пожаловать в мир профессиональной косметологии, где наука
            встречается с искусством красоты
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070"
                alt="Доктор Анна Сергеевна"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#9F8772] rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#E6D5C9] rounded-full opacity-20 blur-xl"></div>
          </motion.div>

          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <h3 className="text-2xl font-semibold mb-4 text-[#2C1810]">
                Анна Сергеевна
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Врач-дерматокосметолог с 10-летним стажем работы, член
                  Российского общества дерматовенерологов и косметологов. Моя
                  миссия — помогать людям обрести уверенность в себе через
                  заботу о здоровье и красоте их кожи.
                </p>
                <p>
                  Выпускница Первого Московского государственного медицинского
                  университета им. И.М. Сеченова. Прошла ординатуру по
                  дерматовенерологии и профессиональную переподготовку по
                  косметологии.
                </p>
                <p>
                  Постоянно совершенствую свои навыки на российских и
                  международных конференциях, владею современными методиками
                  омоложения и коррекции эстетических недостатков.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white/80 backdrop-blur rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 mb-3 text-[#9F8772]" />
                  <div className="text-2xl font-bold text-[#2C1810] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
