import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CourseDetail = () => {
  const navigate = useNavigate();

  const courseModules = [
    {
      title: "Модуль 1: Основы композиции",
      lessons: ["Правило третей", "Визуальный баланс", "Ритм и движение", "Практическое задание"],
      duration: "2 недели"
    },
    {
      title: "Модуль 2: Типографика",
      lessons: ["Классификация шрифтов", "Иерархия текста", "Читаемость и разборчивость", "Работа с текстом в проектах"],
      duration: "2 недели"
    },
    {
      title: "Модуль 3: Цветовая теория",
      lessons: ["Цветовой круг", "Цветовые схемы", "Психология цвета", "Создание палитры"],
      duration: "2 недели"
    },
    {
      title: "Модуль 4: Финальный проект",
      lessons: ["Брифинг клиента", "Разработка концепции", "Презентация проекта"],
      duration: "2 недели"
    }
  ];

  const instructor = {
    name: "Анна Петрова",
    role: "Графический дизайнер",
    experience: "12 лет опыта",
    bio: "Профессиональный графический дизайнер с опытом работы в ведущих креативных агентствах. Преподаватель курсов по графическому дизайну с 2018 года.",
    avatar: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/6d83d059-683d-4cfe-a24b-8dda416dc0ad.jpg"
  };

  const features = [
    { icon: "Clock", text: "8 недель обучения" },
    { icon: "Users", text: "1,234 студента" },
    { icon: "BookOpen", text: "32 урока" },
    { icon: "Award", text: "Сертификат после окончания" },
    { icon: "Video", text: "Видео в HD качестве" },
    { icon: "MessageCircle", text: "Поддержка преподавателя" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-6"
          >
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Назад к каталогу
          </Button>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <Badge className="mb-4">Популярный курс</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Основы графического дизайна
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Изучите основы композиции, типографики и цветовой теории для создания профессиональных дизайн-проектов
                </p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Icon name={feature.icon} size={20} className="text-accent" />
                      <span className="text-sm">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative rounded-lg overflow-hidden aspect-video bg-gradient-to-br from-accent/20 to-primary/20">
                <img 
                  src="https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/6d83d059-683d-4cfe-a24b-8dda416dc0ad.jpg"
                  alt="Основы графического дизайна"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    <Icon name="Play" size={24} className="mr-2" />
                    Посмотреть превью
                  </Button>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Что вы изучите</CardTitle>
                  <CardDescription>
                    После прохождения курса вы сможете создавать профессиональные дизайн-проекты
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>Работать с композицией и визуальной иерархией</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>Правильно подбирать и сочетать шрифты</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>Создавать гармоничные цветовые палитры</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>Использовать профессиональные инструменты дизайна</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>Презентовать свои проекты клиентам</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Программа курса</CardTitle>
                  <CardDescription>
                    4 модуля, 32 урока, практические задания
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {courseModules.map((module, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold text-lg">{module.title}</h3>
                        <Badge variant="outline">{module.duration}</Badge>
                      </div>
                      <ul className="space-y-2">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <li key={lessonIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Icon name="PlayCircle" size={16} className="text-accent" />
                            {lesson}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Преподаватель</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-4">
                    <img 
                      src={instructor.avatar}
                      alt={instructor.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div className="flex-grow">
                      <h3 className="font-bold text-lg">{instructor.name}</h3>
                      <p className="text-accent mb-1">{instructor.role}</p>
                      <p className="text-sm text-muted-foreground mb-2">{instructor.experience}</p>
                      <p className="text-sm">{instructor.bio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold">12,990 ₽</span>
                  </div>
                  <CardDescription>Единоразовый платёж</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input id="name" placeholder="Иван Иванов" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="example@email.com" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
                    </div>
                    <div>
                      <Label htmlFor="message">Комментарий (необязательно)</Label>
                      <Textarea id="message" placeholder="Ваши вопросы или пожелания..." />
                    </div>
                  </div>

                  <Button className="w-full" size="lg">
                    <Icon name="ShoppingCart" size={20} className="mr-2" />
                    Записаться на курс
                  </Button>

                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-accent" />
                      <span>Доступ сразу после оплаты</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-accent" />
                      <span>Сертификат после окончания</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-accent" />
                      <span>Поддержка преподавателя</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CourseDetail;
