import { useState } from "react";
import CourseCard from "./CourseCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";

const CourseCatalog = () => {
  const [showFilters, setShowFilters] = useState(false);

  const courses = [
    {
      title: "Основы графического дизайна",
      category: "Графический дизайн",
      instructor: "Анна Петрова",
      duration: "8 недель",
      students: "1,234",
      description:
        "Изучите основы композиции, типографики и цветовой теории для создания профессиональных дизайн-проектов.",
      price: "12,990 ₽",
      image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/6d83d059-683d-4cfe-a24b-8dda416dc0ad.jpg",
      badge: "Популярный" as const,
    },
    {
      title: "Цифровое искусство",
      category: "Цифровое искусство",
      instructor: "Михаил Соколов",
      duration: "10 недель",
      students: "892",
      description:
        "Освойте техники digital-рисования, создания иллюстраций и работы в профессиональных графических редакторах.",
      price: "15,990 ₽",
      image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/03aed20d-3800-46d0-a1f1-58d6ec5bf1c8.jpg",
      badge: "Новый" as const,
    },
    {
      title: "Веб-дизайн и UX/UI",
      category: "Веб-дизайн",
      instructor: "Елена Иванова",
      duration: "12 недель",
      students: "2,156",
      description:
        "Научитесь создавать современные веб-интерфейсы с фокусом на пользовательский опыт и удобство использования.",
      price: "18,990 ₽",
      image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/6d83d059-683d-4cfe-a24b-8dda416dc0ad.jpg",
    },
    {
      title: "Фотография для начинающих",
      category: "Фотография",
      instructor: "Дмитрий Орлов",
      duration: "6 недель",
      students: "1,567",
      description:
        "Основы композиции, работы со светом и обработки фотографий. От базовых принципов до профессиональных техник.",
      price: "9,990 ₽",
      image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/03aed20d-3800-46d0-a1f1-58d6ec5bf1c8.jpg",
    },
    {
      title: "Педагогика искусства",
      category: "Педагогика искусства",
      instructor: "Ольга Смирнова",
      duration: "8 недель",
      students: "456",
      description:
        "Методики преподавания творческих дисциплин, психология обучения и развитие креативного мышления у учеников.",
      price: "14,990 ₽",
      image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/6d83d059-683d-4cfe-a24b-8dda416dc0ad.jpg",
      badge: "Новый" as const,
    },
    {
      title: "Adobe Photoshop: Продвинутый уровень",
      category: "Графический дизайн",
      instructor: "Анна Петрова",
      duration: "10 недель",
      students: "1,890",
      description:
        "Профессиональная ретушь, работа со слоями, масками и продвинутые техники цветокоррекции для дизайнеров.",
      price: "16,990 ₽",
      image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/03aed20d-3800-46d0-a1f1-58d6ec5bf1c8.jpg",
      badge: "Популярный" as const,
    },
  ];

  const filterGroups = [
    {
      title: "Направление",
      options: [
        "Графический дизайн",
        "Цифровое искусство",
        "Веб-дизайн",
        "Педагогика искусства",
        "Фотография",
      ],
    },
    {
      title: "Уровень сложности",
      options: ["Начальный", "Средний", "Продвинутый"],
    },
    {
      title: "Формат обучения",
      options: ["Онлайн", "Офлайн", "Смешанный"],
    },
    {
      title: "Цена",
      options: ["Бесплатные", "Платные"],
    },
  ];

  return (
    <section id="catalog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Каталог курсов
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите курс, который подходит именно вам. Все программы
            разработаны экспертами и адаптированы под современные требования.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <Input
                placeholder="Поиск курсов..."
                className="w-full"
                prefix={<Icon name="Search" size={20} />}
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden"
            >
              <Icon name="Filter" size={20} className="mr-2" />
              Фильтры
            </Button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside
            className={`lg:w-64 flex-shrink-0 ${
              showFilters ? "block" : "hidden lg:block"
            }`}
          >
            <div className="sticky top-24 bg-card rounded-lg border p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg">Фильтры</h3>
                <Button variant="ghost" size="sm" className="text-accent">
                  Сбросить
                </Button>
              </div>

              {filterGroups.map((group) => (
                <div key={group.title} className="space-y-3">
                  <Label className="text-sm font-semibold">
                    {group.title}
                  </Label>
                  <div className="space-y-2">
                    {group.options.map((option) => (
                      <div key={option} className="flex items-center gap-2">
                        <Checkbox id={option} />
                        <label
                          htmlFor={option}
                          className="text-sm cursor-pointer hover:text-primary transition-colors"
                        >
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <div className="flex-grow">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Button variant="outline" size="lg">
                Загрузить ещё курсы
                <Icon name="ChevronDown" size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCatalog;
