import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  price: string;
}

interface GalleryItem {
  id: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  image: string;
}

interface StoreState {
  services: Service[];
  galleryItems: GalleryItem[];
  certificates: Certificate[];
  setServices: (services: Service[]) => void;
  setGalleryItems: (items: GalleryItem[]) => void;
  setCertificates: (certificates: Certificate[]) => void;
}

export const useStore = create<StoreState>(
  persist(
    (set) => ({
      services: [
        {
          id: "1",
          icon: "Sparkles",
          title: "Чистка Лица",
          description: "Механическая чистка лица, Карбоновый пилинг",
          price: "от 5000 ₸",
        },
        {
          id: "2",
          icon: "Leaf",
          title: "Биоревитализация",
          description: "Биоревитализация лица и шеи",
          price: "от 5000 ₸",
        },
        {
          id: "3",
          icon: "Heart",
          title: "Плазмалифтинг",
          description: "Плазмалифтинг лица, шеи, головы (волос)",
          price: "от 5000 ₸",
        },
        {
          id: "4",
          icon: "Sparkles",
          title: "Препараты",
          description: "Полимолочной кислоты 5 и 10 мл",
          price: "от 3000 ₸",
        },
        {
          id: "5",
          icon: "Leaf",
          title: "Жидкие нити",
          description: "",
          price: "от 5000 ₸",
        },
        {
          id: "6",
          icon: "Heart",
          title: "Мезонити",
          description: "«Гладкие» нити, «Насечками» нити",
          price: "от 5000 ₸",
        },
        {
          id: "7",
          icon: "Sparkles",
          title: "Ботулотоксины по зонам",
          description:
            "Межбровна зона, Лоб, Вокруг глаз, «Гусиные лапки», Морщины спинки носа, Вокруг губ «Кисетные морщины», Жевательные мышцы, Расслабление Платизмы, Форма улыбки и губ",
          price: "от 5000 ₸",
        },
        {
          id: "8",
          icon: "Leaf",
          title: "Лечение гипергидроза (обильное потоотделение)",
          description: "Подмышечная область, Ладони, Ступни",
          price: "от 5000 ₸",
        },
        {
          id: "9",
          icon: "Heart",
          title: "Аппаратная косметология",
          description:
            "Удаление татуажа бровей, Удаление папиломы, Удаление бородавок, IPL лечение акне, Безинъекционная мезотерапия, Уходовая процедура Наноазия",
          price: "от 5000 ₸",
        },
        {
          id: "10",
          icon: "Sparkles",
          title: "Пилинги",
          description:
            "Гликолевый пилинг, Ретиноевый пиллинг, Пилинг PRX-T, TCA пилинг 15%, TCA пилинг 30%",
          price: "от 5000 ₸",
        },
        {
          id: "11",
          icon: "Leaf",
          title: "Липолитики",
          description: "Лицо, Подбородок, Вдовий горбик, Липолитики по телу",
          price: "от 5000 ₸",
        },
        {
          id: "12",
          icon: "Heart",
          title: "Контурная пластика",
          description: "Губ, Носогубной складки, Скул, Кисетные морщины",
          price: "от 5000 ₸",
        },
        {
          id: "13",
          icon: "Sparkles",
          title: "Апаратные процедуры",
          description: "IPL лечение акне, RF лифтинг, Фотоомоложение",
          price: "от 5000 ₸",
        },
      ],
      galleryItems: [
        {
          id: "1",
          beforeImage:
            "../img/DO1.jpg",
          afterImage:
            "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80",
          description: "Результат после курса биоревитализации",
        },
        {
          id: "2",
          beforeImage:
            "../img/DO2.jpg",
          afterImage:
            "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80",
          description: "Эффект после пилинга и RF-лифтинга",
        },
        {
          id: "3",
          beforeImage:
            "../img/DO3.jpg",
          afterImage:
            "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=800&q=80",
          description: "Результат комплексного ухода",
        },
        {
          id: "4",
          beforeImage:
            "../img/DO4.jpg",
          afterImage:
            "https://images.unsplash.com/photo-1542996966-2e31c00bae31?w=800&q=80",
          description: "Коррекция морщин в области лба",
        },
        {
          id: "5",
          beforeImage:
            "../img/DO5.jpg",
          afterImage:
            "https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?w=800&q=80",
          description: "Удаление папиллом",
        },
        {
          id: "6",
          beforeImage:
            "../img/DO6.jpg",
          afterImage:
            "https://images.unsplash.com/photo-1605294283245-aad4d294d518?w=800&q=80",
          description: "Омоложение кожи шеи",
        },
      ],
      certificates: [
        {
          id: "1",
          title: "Сертификат по дерматокосметологии",
          issuer: "РУДН",
          year: "2020",
          image:
            "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800",
        },
        {
          id: "2",
          title: "Advanced Injection Techniques",
          issuer: "European Academy of Cosmetology",
          year: "2021",
          image:
            "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800",
        },
        {
          id: "3",
          title: "Лазерная косметология",
          issuer: "Институт красоты",
          year: "2022",
          image:
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
        },
        {
          id: "4",
          title: "Современные методы омоложения",
          issuer: "Medical Beauty Academy",
          year: "2023",
          image:
            "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800",
        },
      ],
      setServices: (services) => set({ services }),
      setGalleryItems: (galleryItems) => set({ galleryItems }),
      setCertificates: (certificates) => set({ certificates }),
    }),
    {
      name: "cosmetology-store",
      storage: createJSONStorage(() => localStorage),
      version: 1,
    },
  ),
);
