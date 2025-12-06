import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("courses");

  const userInfo = {
    name: "Иван Петров",
    email: "ivan.petrov@example.com",
    phone: "+7 (999) 123-45-67",
    avatar: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/6d83d059-683d-4cfe-a24b-8dda416dc0ad.jpg",
    registrationDate: "15 сентября 2024",
    coursesCompleted: 2,
    coursesInProgress: 3
  };

  const activeCourses = [
    {
      id: "graphic-design-basics",
      title: "Основы графического дизайна",
      instructor: "Анна Петрова",
      progress: 65,
      nextLesson: "Цветовые схемы и палитры",
      image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/6d83d059-683d-4cfe-a24b-8dda416dc0ad.jpg",
      deadline: "15 января 2025"
    },
    {
      id: "web-design",
      title: "Веб-дизайн и UX/UI",
      instructor: "Елена Иванова",
      progress: 40,
      nextLesson: "Прототипирование в Figma",
      image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/03aed20d-3800-46d0-a1f1-58d6ec5bf1c8.jpg",
      deadline: "28 января 2025"
    },
    {
      id: "photography",
      title: "Фотография для начинающих",
      instructor: "Дмитрий Орлов",
      progress: 20,
      nextLesson: "Композиция в фотографии",
      image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/6d83d059-683d-4cfe-a24b-8dda416dc0ad.jpg",
      deadline: "10 февраля 2025"
    }
  ];

  const completedCourses = [
    {
      id: "digital-art-intro",
      title: "Введение в цифровое искусство",
      instructor: "Михаил Соколов",
      completedDate: "10 декабря 2024",
      certificate: true,
      image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/03aed20d-3800-46d0-a1f1-58d6ec5bf1c8.jpg"
    },
    {
      id: "color-theory",
      title: "Теория цвета для дизайнеров",
      instructor: "Анна Петрова",
      completedDate: "25 ноября 2024",
      certificate: true,
      image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/6d83d059-683d-4cfe-a24b-8dda416dc0ad.jpg"
    }
  ];

  const achievements = [
    { icon: "Award", title: "Первый курс", description: "Завершили первый курс" },
    { icon: "Target", title: "Целеустремлённый", description: "5 курсов подряд без пропусков" },
    { icon: "Star", title: "Отличник", description: "Средний балл выше 90%" },
    { icon: "Zap", title: "Быстрый старт", description: "Завершили курс за 2 недели" }
  ];

  const recentActivity = [
    {
      type: "lesson",
      title: "Завершён урок «Цветовой круг»",
      course: "Основы графического дизайна",
      time: "2 часа назад"
    },
    {
      type: "certificate",
      title: "Получен сертификат",
      course: "Введение в цифровое искусство",
      time: "3 дня назад"
    },
    {
      type: "homework",
      title: "Отправлено домашнее задание",
      course: "Веб-дизайн и UX/UI",
      time: "5 дней назад"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Личный кабинет</h1>
            <p className="text-muted-foreground">Управляйте своим обучением и отслеживайте прогресс</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 mb-8">
            <Card className="lg:col-span-1">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="w-24 h-24 mb-4">
                    <AvatarImage src={userInfo.avatar} />
                    <AvatarFallback>ИП</AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-bold mb-1">{userInfo.name}</h2>
                  <p className="text-sm text-muted-foreground mb-4">{userInfo.email}</p>
                  
                  <div className="w-full space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Активных курсов:</span>
                      <span className="font-semibold">{userInfo.coursesInProgress}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Завершено:</span>
                      <span className="font-semibold">{userInfo.coursesCompleted}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">С нами с:</span>
                      <span className="font-semibold text-xs">{userInfo.registrationDate}</span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full mb-2">
                    <Icon name="Settings" size={16} className="mr-2" />
                    Настройки
                  </Button>
                  <Button variant="ghost" className="w-full">
                    <Icon name="LogOut" size={16} className="mr-2" />
                    Выйти
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="lg:col-span-3">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="mb-6">
                  <TabsTrigger value="courses">Мои курсы</TabsTrigger>
                  <TabsTrigger value="completed">Завершённые</TabsTrigger>
                  <TabsTrigger value="achievements">Достижения</TabsTrigger>
                  <TabsTrigger value="profile">Профиль</TabsTrigger>
                </TabsList>

                <TabsContent value="courses" className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Активные курсы</h3>
                    <div className="space-y-4">
                      {activeCourses.map((course) => (
                        <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                          <div className="flex flex-col md:flex-row">
                            <img 
                              src={course.image}
                              alt={course.title}
                              className="w-full md:w-48 h-48 object-cover"
                            />
                            <div className="flex-grow p-6">
                              <div className="flex items-start justify-between mb-2">
                                <div>
                                  <Link to={`/course/${course.id}`}>
                                    <h4 className="text-lg font-bold hover:text-primary transition-colors">
                                      {course.title}
                                    </h4>
                                  </Link>
                                  <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                                    <Icon name="User" size={14} />
                                    {course.instructor}
                                  </p>
                                </div>
                                <Badge variant="outline" className="flex items-center gap-1">
                                  <Icon name="Calendar" size={14} />
                                  {course.deadline}
                                </Badge>
                              </div>

                              <div className="mb-4">
                                <div className="flex justify-between text-sm mb-2">
                                  <span className="text-muted-foreground">Прогресс</span>
                                  <span className="font-semibold">{course.progress}%</span>
                                </div>
                                <Progress value={course.progress} className="h-2" />
                              </div>

                              <div className="flex items-center justify-between">
                                <div className="text-sm">
                                  <span className="text-muted-foreground">Следующий урок: </span>
                                  <span className="font-medium">{course.nextLesson}</span>
                                </div>
                                <Button size="sm">
                                  <Icon name="PlayCircle" size={16} className="mr-2" />
                                  Продолжить
                                </Button>
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>Последняя активность</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentActivity.map((activity, index) => (
                          <div key={index} className="flex items-start gap-3 pb-4 border-b last:border-0 last:pb-0">
                            <div className={`p-2 rounded-full ${
                              activity.type === 'certificate' ? 'bg-accent/10 text-accent' :
                              activity.type === 'lesson' ? 'bg-primary/10 text-primary' :
                              'bg-secondary/10 text-secondary'
                            }`}>
                              <Icon 
                                name={
                                  activity.type === 'certificate' ? 'Award' :
                                  activity.type === 'lesson' ? 'BookOpen' :
                                  'FileText'
                                } 
                                size={20} 
                              />
                            </div>
                            <div className="flex-grow">
                              <p className="font-medium">{activity.title}</p>
                              <p className="text-sm text-muted-foreground">{activity.course}</p>
                              <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="completed" className="space-y-4">
                  <h3 className="text-xl font-bold mb-4">Завершённые курсы</h3>
                  {completedCourses.map((course) => (
                    <Card key={course.id} className="overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <img 
                          src={course.image}
                          alt={course.title}
                          className="w-full md:w-48 h-48 object-cover"
                        />
                        <div className="flex-grow p-6">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h4 className="text-lg font-bold">{course.title}</h4>
                              <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                                <Icon name="User" size={14} />
                                {course.instructor}
                              </p>
                            </div>
                            <Badge className="bg-green-500">
                              <Icon name="Check" size={14} className="mr-1" />
                              Завершён
                            </Badge>
                          </div>

                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Icon name="Calendar" size={14} />
                              <span>Завершён {course.completedDate}</span>
                            </div>
                            {course.certificate && (
                              <Button size="sm" variant="outline">
                                <Icon name="Award" size={16} className="mr-2" />
                                Скачать сертификат
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="achievements">
                  <Card>
                    <CardHeader>
                      <CardTitle>Ваши достижения</CardTitle>
                      <CardDescription>Награды за успехи в обучении</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {achievements.map((achievement, index) => (
                          <div key={index} className="flex items-start gap-3 p-4 border rounded-lg">
                            <div className="p-3 bg-accent/10 text-accent rounded-full">
                              <Icon name={achievement.icon} size={24} />
                            </div>
                            <div>
                              <h4 className="font-semibold mb-1">{achievement.title}</h4>
                              <p className="text-sm text-muted-foreground">{achievement.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="profile">
                  <Card>
                    <CardHeader>
                      <CardTitle>Настройки профиля</CardTitle>
                      <CardDescription>Управляйте вашими личными данными</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="name">Имя и фамилия</Label>
                          <Input id="name" defaultValue={userInfo.name} />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" defaultValue={userInfo.email} />
                        </div>
                        <div>
                          <Label htmlFor="phone">Телефон</Label>
                          <Input id="phone" type="tel" defaultValue={userInfo.phone} />
                        </div>
                        <div>
                          <Label htmlFor="password">Новый пароль</Label>
                          <Input id="password" type="password" placeholder="Оставьте пустым, чтобы не менять" />
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button>
                          <Icon name="Save" size={16} className="mr-2" />
                          Сохранить изменения
                        </Button>
                        <Button variant="outline">Отмена</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StudentDashboard;
