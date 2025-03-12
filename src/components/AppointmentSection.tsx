import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/components/ui/use-toast";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { CalendarIcon, Loader2, Clock, CheckCircle } from "lucide-react";
import { submitBooking } from "@/lib/api";

export default function AppointmentSection() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: undefined as Date | undefined,
    time: "",
    service: "",
    message: "",
  });

  const timeSlots = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ];

  const services = [
    "Консультация",
    "Чистка лица",
    "Биоревитализация",
    "Ботулинотерапия",
    "Контурная пластика",
    "Пилинг",
    "RF-лифтинг",
    "Другое",
  ];

  const handleSubmit = async () => {
    if (
      !formData.name ||
      !formData.phone ||
      !formData.date ||
      !formData.time ||
      !formData.service
    ) {
      toast({
        variant: "destructive",
        title: "Ошибка",
        description: "Пожалуйста, заполните все обязательные поля",
      });
      return;
    }

    setIsLoading(true);
    try {
      const result = await submitBooking(formData);
      if (result.success) {
        setIsSubmitted(true);
        toast({
          title: "Успешно!",
          description: result.message,
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Ошибка",
        description: "Произошла ошибка при отправке заявки. Попробуйте позже.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="appointment" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-6"
        >
          Запись на прием
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Выберите удобную дату и время для консультации или процедуры, и мы
          свяжемся с вами для подтверждения записи
        </motion.p>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#F3EAE2] p-8 flex flex-col justify-center"
            >
              <h3 className="text-2xl font-semibold mb-6 text-[#2C1810]">
                Почему стоит записаться сейчас
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#9F8772] mr-3 mt-0.5" />
                  <span className="text-gray-700">
                    Индивидуальный подход к каждому клиенту
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#9F8772] mr-3 mt-0.5" />
                  <span className="text-gray-700">
                    Современное оборудование и сертифицированные препараты
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#9F8772] mr-3 mt-0.5" />
                  <span className="text-gray-700">
                    Более 18 лет опыта в косметологии
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#9F8772] mr-3 mt-0.5" />
                  <span className="text-gray-700">
                    Гибкий график и удобное расположение
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8"
            >
              {!isSubmitted ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя *</Label>
                      <Input
                        id="name"
                        placeholder="Введите ваше имя"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Дата приема *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {formData.date ? (
                              format(formData.date, "PPP", { locale: ru })
                            ) : (
                              <span>Выберите дату</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={formData.date}
                            onSelect={(date) =>
                              setFormData({ ...formData, date })
                            }
                            locale={ru}
                            initialFocus
                            disabled={(date) =>
                              date < new Date() ||
                              date.getDay() === 0 ||
                              date.getDay() === 6
                            }
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <Label>Время *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                          >
                            <Clock className="mr-2 h-4 w-4" />
                            {formData.time ? (
                              formData.time
                            ) : (
                              <span>Выберите время</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-48 p-2">
                          <div className="grid grid-cols-2 gap-2">
                            {timeSlots.map((time) => (
                              <Button
                                key={time}
                                variant="outline"
                                className={`text-sm ${formData.time === time ? "bg-[#9F8772] text-white hover:bg-[#876F58]" : ""}`}
                                onClick={() =>
                                  setFormData({ ...formData, time })
                                }
                              >
                                {time}
                              </Button>
                            ))}
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Услуга *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          {formData.service ? (
                            formData.service
                          ) : (
                            <span>Выберите услугу</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-56 p-2">
                        <div className="grid grid-cols-1 gap-1">
                          {services.map((service) => (
                            <Button
                              key={service}
                              variant="ghost"
                              className={`justify-start text-sm ${formData.service === service ? "bg-[#F3EAE2] text-[#9F8772] font-medium" : ""}`}
                              onClick={() =>
                                setFormData({ ...formData, service })
                              }
                            >
                              {service}
                            </Button>
                          ))}
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Комментарий</Label>
                    <Textarea
                      id="message"
                      placeholder="Опишите желаемую процедуру или проблему"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  <Button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="w-full bg-[#9F8772] hover:bg-[#876F58] text-white"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Отправка...
                      </>
                    ) : (
                      "Записаться на прием"
                    )}
                  </Button>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-[#2C1810]">
                    Заявка успешно отправлена!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Мы свяжемся с вами в ближайшее время для подтверждения
                    записи.
                  </p>
                  <Button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        date: undefined,
                        time: "",
                        service: "",
                        message: "",
                      });
                    }}
                    variant="outline"
                  >
                    Новая запись
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
