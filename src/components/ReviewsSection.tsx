import { motion } from "framer-motion";
import { Star, StarHalf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
  procedure?: string;
}

export default function ReviewsSection() {
  const reviews: Review[] = [
    {
      id: "1",
      name: "Анна К.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anna",
      rating: 5,
      date: "15.03.2023",
      text: "Прекрасный специалист! Делала контурную пластику губ, результат превзошел все ожидания. Очень аккуратная работа, никакой асимметрии или комков.",
      procedure: "Контурная пластика",
    },
    {
      id: "2",
      name: "Елена М.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
      rating: 5,
      date: "02.04.2023",
      text: "Хожу на биоревитализацию уже полгода. Кожа заметно подтянулась, исчезли мелкие морщинки. Доктор всегда подробно объясняет процедуру и дает рекомендации по уходу.",
      procedure: "Биоревитализация",
    },
    {
      id: "3",
      name: "Ирина В.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Irina",
      rating: 4.5,
      date: "17.05.2023",
      text: "Обратилась с проблемой акне. После курса процедур кожа значительно очистилась. Очень довольна результатом и профессиональным подходом.",
      procedure: "Лечение акне",
    },
    {
      id: "4",
      name: "Мария Д.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
      rating: 5,
      date: "30.06.2023",
      text: "Делала ботокс в зоне лба и межбровья. Результат очень естественный, никакой скованности мимики. Доктор подобрала идеальную дозировку.",
      procedure: "Ботулотоксины",
    },
    {
      id: "5",
      name: "Ольга С.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Olga",
      rating: 5,
      date: "12.07.2023",
      text: "Прошла курс пилингов. Кожа стала более ровной и сияющей. Очень благодарна за профессионализм и внимательное отношение.",
      procedure: "Пилинги",
    },
    {
      id: "6",
      name: "Наталья К.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Natalia",
      rating: 4.5,
      date: "25.08.2023",
      text: "Делала RF-лифтинг. После курса из 5 процедур лицо заметно подтянулось. Рекомендую всем, кто хочет избежать хирургического вмешательства.",
      procedure: "RF-лифтинг",
    },
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`full-${i}`}
          className="w-4 h-4 fill-yellow-400 text-yellow-400"
        />,
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key="half"
          className="w-4 h-4 fill-yellow-400 text-yellow-400"
        />,
      );
    }

    return stars;
  };

  return (
    <section id="reviews" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Отзывы клиентов
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#2C1810]">
                        {review.name}
                      </h3>
                      <div className="flex items-center mt-1 mb-1">
                        {renderStars(review.rating)}
                      </div>
                      {review.procedure && (
                        <span className="inline-block bg-[#F3EAE2] text-[#9F8772] text-xs px-2 py-1 rounded-full">
                          {review.procedure}
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-gray-500">{review.date}</div>
                  </div>
                  <p className="text-gray-600 text-sm">"{review.text}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-6">
            Более 1000+ довольных клиентов доверяют нам свою красоту и здоровье
          </p>
        </motion.div>
      </div>
    </section>
  );
}
