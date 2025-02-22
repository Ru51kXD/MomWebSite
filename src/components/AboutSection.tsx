import { Award, GraduationCap, Clock, Users } from "lucide-react";

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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">О докторе</h2>
            <div className="space-y-4 text-gray-600">
              <p className="mb-4">
                Здравствуйте! Я Анна Сергеевна, врач-дерматокосметолог с
                10-летним стажем работы. Являюсь членом Российского общества
                дерматовенерологов и косметологов.
              </p>
              <p className="mb-4">
                Окончила Первый Московский государственный медицинский
                университет им. И.М. Сеченова, прошла ординатуру по
                дерматовенерологии и профессиональную переподготовку по
                косметологии.
              </p>
              <p>
                Регулярно повышаю квалификацию на российских и международных
                конференциях, владею современными методиками омоложения и
                коррекции эстетических недостатков.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 bg-[#FDF8F3] rounded-lg text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-[#9F8772]" />
                <div className="text-2xl font-bold text-[#9F8772] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
