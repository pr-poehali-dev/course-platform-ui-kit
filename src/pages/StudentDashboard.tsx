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
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("learning");

  const userInfo = {
    name: "Иван Петров",
    email: "ivan.petrov@example.com",
    phone: "+7 (999) 123-45-67",
    avatar: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/6d83d059-683d-4cfe-a24b-8dda416dc0ad.jpg",
    registrationDate: "15 сентября 2024",
    coursesCompleted: 2,
    coursesInProgress: 3,
    portfolioWorks: 8
  };

  const learningTimeline = [
    {
      date: "Декабрь 2024",
      status: "active",
      courses: [
        {
          id: "graphic-design-basics",
          title: "Основы графического дизайна",
          progress: 65,
          image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/6d83d059-683d-4cfe-a24b-8dda416dc0ad.jpg"
        },
        {
          id: "web-design",
          title: "Веб-дизайн и UX/UI",
          progress: 40,
          image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/03aed20d-3800-46d0-a1f1-58d6ec5bf1c8.jpg"
        }
      ]
    },
    {
      date: "Ноябрь 2024",
      status: "completed",
      courses: [
        {
          id: "digital-art",
          title: "Введение в цифровое искусство",
          progress: 100,
          completedDate: "10 декабря 2024",
          image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/6d83d059-683d-4cfe-a24b-8dda416dc0ad.jpg"
        }
      ]
    },
    {
      date: "Октябрь 2024",
      status: "completed",
      courses: [
        {
          id: "color-theory",
          title: "Теория цвета для дизайнеров",
          progress: 100,
          completedDate: "25 ноября 2024",
          image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/03aed20d-3800-46d0-a1f1-58d6ec5bf1c8.jpg"
        }
      ]
    }
  ];

  const portfolioWorks = [
    {
      id: 1,
      title: "Логотип для кофейни",
      category: "Графический дизайн",
      image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/6d83d059-683d-4cfe-a24b-8dda416dc0ad.jpg",
      likes: 24,
      views: 156,
      date: "5 декабря 2024"
    },
    {
      id: 2,
      title: "Дизайн мобильного приложения",
      category: "UX/UI дизайн",
      image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/03aed20d-3800-46d0-a1f1-58d6ec5bf1c8.jpg",
      likes: 31,
      views: 203,
      date: "2 декабря 2024"
    },
    {
      id: 3,
      title: "Иллюстрация персонажа",
      category: "Цифровое искусство",
      image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/6d83d059-683d-4cfe-a24b-8dda416dc0ad.jpg",
      likes: 45,
      views: 312,
      date: "28 ноября 2024"
    },
    {
      id: 4,
      title: "Веб-дизайн лендинга",
      category: "Веб-дизайн",
      image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/03aed20d-3800-46d0-a1f1-58d6ec5bf1c8.jpg",
      likes: 18,
      views: 127,
      date: "25 ноября 2024"
    }
  ];

  const communityActivity = [
    {
      id: 1,
      user: {
        name: "Мария Смирнова",
        avatar: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/6d83d059-683d-4cfe-a24b-8dda416dc0ad.jpg"
      },
      type: "work",
      content: "опубликовала работу «Брендинг для стартапа»",
      image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/03aed20d-3800-46d0-a1f1-58d6ec5bf1c8.jpg",
      time: "2 часа назад",
      likes: 15
    },
    {
      id: 2,
      user: {
        name: "Анна Петрова",
        avatar: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/6d83d059-683d-4cfe-a24b-8dda416dc0ad.jpg"
      },
      type: "comment",
      content: "оставила комментарий к вашей работе «Логотип для кофейни»",
      comment: "Отличная работа! Очень нравится выбор цветовой палитры",
      time: "5 часов назад"
    },
    {
      id: 3,
      user: {
        name: "Дмитрий Орлов",
        avatar: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/03aed20d-3800-46d0-a1f1-58d6ec5bf1c8.jpg"
      },
      type: "homework",
      content: "проверил ваше домашнее задание по курсу «Основы графического дизайна»",
      grade: "Отлично",
      time: "1 день назад"
    }
  ];

  const notifications = [
    {
      id: 1,
      type: "homework",
      title: "Задание проверено",
      message: "Ваше домашнее задание «Композиция в дизайне» получило оценку «Отлично»",
      time: "1 час назад",
      read: false
    },
    {
      id: 2,
      type: "message",
      title: "Новое сообщение",
      message: "Анна Петрова ответила на ваш вопрос",
      time: "3 часа назад",
      read: false
    },
    {
      id: 3,
      type: "course",
      title: "Новый урок доступен",
      message: "В курсе «Веб-дизайн и UX/UI» появился новый урок",
      time: "5 часов назад",
      read: true
    }
  ];

  const activeCourses = [
    {
      id: "graphic-design-basics",
      title: "Основы графического дизайна",
      instructor: "Анна Петрова",
      progress: 65,
      nextLesson: "Цветовые схемы и палитры",
      image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/6d83d059-683d-4cfe-a24b-8dda416dc0ad.jpg",
      deadline: "15 января 2025",
      totalLessons: 32,
      completedLessons: 21
    },
    {
      id: "web-design",
      title: "Веб-дизайн и UX/UI",
      instructor: "Елена Иванова",
      progress: 40,
      nextLesson: "Прототипирование в Figma",
      image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/03aed20d-3800-46d0-a1f1-58d6ec5bf1c8.jpg",
      deadline: "28 января 2025",
      totalLessons: 40,
      completedLessons: 16
    },
    {
      id: "photography",
      title: "Фотография для начинающих",
      instructor: "Дмитрий Орлов",
      progress: 20,
      nextLesson: "Композиция в фотографии",
      image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/6d83d059-683d-4cfe-a24b-8dda416dc0ad.jpg",
      deadline: "10 февраля 2025",
      totalLessons: 24,
      completedLessons: 5
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Личный кабинет</h1>
                <p className="text-muted-foreground">Добро пожаловать, {userInfo.name}!</p>
              </div>
              <Link to="/portfolio/public">
                <Button variant="outline">
                  <Icon name="ExternalLink" size={16} className="mr-2" />
                  Моё публичное портфолио
                </Button>
              </Link>
            </div>
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
                      <span className="text-muted-foreground">Работ в портфолио:</span>
                      <span className="font-semibold">{userInfo.portfolioWorks}</span>
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
                <TabsList className="mb-6 grid grid-cols-4 w-full">
                  <TabsTrigger value="learning">Мое обучение</TabsTrigger>
                  <TabsTrigger value="portfolio">Портфолио</TabsTrigger>
                  <TabsTrigger value="community">Сообщество</TabsTrigger>
                  <TabsTrigger value="courses">Мои курсы</TabsTrigger>
                </TabsList>

                <TabsContent value="learning" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Моя образовательная траектория</CardTitle>
                      <CardDescription>Временная шкала вашего обучения</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-8">
                        {learningTimeline.map((period, index) => (
                          <div key={index} className="relative">
                            <div className="flex items-center gap-4 mb-4">
                              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                                period.status === 'active' ? 'bg-primary text-white' : 'bg-green-500 text-white'
                              }`}>
                                <Icon name={period.status === 'active' ? 'Clock' : 'Check'} size={24} />
                              </div>
                              <div>
                                <h3 className="font-bold text-lg">{period.date}</h3>
                                <Badge variant={period.status === 'active' ? 'default' : 'secondary'}>
                                  {period.status === 'active' ? 'В процессе' : 'Завершено'}
                                </Badge>
                              </div>
                            </div>
                            
                            <div className="ml-16 space-y-4">
                              {period.courses.map((course) => (
                                <Card key={course.id} className="hover:shadow-md transition-shadow">
                                  <div className="flex gap-4 p-4">
                                    <img 
                                      src={course.image}
                                      alt={course.title}
                                      className="w-24 h-24 rounded object-cover"
                                    />
                                    <div className="flex-grow">
                                      <Link to={`/course/${course.id}`}>
                                        <h4 className="font-semibold hover:text-primary transition-colors mb-2">
                                          {course.title}
                                        </h4>
                                      </Link>
                                      <div className="space-y-2">
                                        <div className="flex items-center justify-between text-sm">
                                          <span className="text-muted-foreground">Прогресс</span>
                                          <span className="font-semibold">{course.progress}%</span>
                                        </div>
                                        <Progress value={course.progress} className="h-2" />
                                      </div>
                                      {course.completedDate && (
                                        <p className="text-sm text-muted-foreground mt-2 flex items-center gap-1">
                                          <Icon name="Calendar" size={14} />
                                          Завершён {course.completedDate}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                </Card>
                              ))}
                            </div>

                            {index < learningTimeline.length - 1 && (
                              <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-border" />
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="portfolio" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle>Моё портфолио</CardTitle>
                          <CardDescription>Управление работами и проектами</CardDescription>
                        </div>
                        <Button>
                          <Icon name="Plus" size={16} className="mr-2" />
                          Добавить работу
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-6 flex gap-2">
                        <Button variant="outline" size="sm">Все работы</Button>
                        <Button variant="ghost" size="sm">Графический дизайн</Button>
                        <Button variant="ghost" size="sm">UX/UI дизайн</Button>
                        <Button variant="ghost" size="sm">Цифровое искусство</Button>
                        <Button variant="ghost" size="sm">Веб-дизайн</Button>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        {portfolioWorks.map((work) => (
                          <Card key={work.id} className="group overflow-hidden hover:shadow-lg transition-all">
                            <div className="relative overflow-hidden aspect-video">
                              <img 
                                src={work.image}
                                alt={work.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                              />
                              <div className="absolute top-2 right-2 flex gap-2">
                                <Button size="sm" variant="secondary" className="h-8">
                                  <Icon name="Edit" size={14} />
                                </Button>
                                <Button size="sm" variant="secondary" className="h-8">
                                  <Icon name="Trash2" size={14} />
                                </Button>
                              </div>
                            </div>
                            <CardContent className="pt-4">
                              <Badge variant="secondary" className="mb-2">{work.category}</Badge>
                              <h4 className="font-bold mb-2">{work.title}</h4>
                              <div className="flex items-center justify-between text-sm text-muted-foreground">
                                <div className="flex gap-4">
                                  <span className="flex items-center gap-1">
                                    <Icon name="Heart" size={14} />
                                    {work.likes}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Icon name="Eye" size={14} />
                                    {work.views}
                                  </span>
                                </div>
                                <span>{work.date}</span>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="community" className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="md:col-span-2">
                      <CardHeader>
                        <CardTitle>Лента активности</CardTitle>
                        <CardDescription>Что происходит в сообществе</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          {communityActivity.map((activity) => (
                            <div key={activity.id} className="flex gap-4 pb-6 border-b last:border-0">
                              <Avatar>
                                <AvatarImage src={activity.user.avatar} />
                                <AvatarFallback>{activity.user.name[0]}</AvatarFallback>
                              </Avatar>
                              <div className="flex-grow">
                                <p className="text-sm mb-2">
                                  <span className="font-semibold">{activity.user.name}</span>
                                  {" "}{activity.content}
                                </p>
                                {activity.image && (
                                  <img 
                                    src={activity.image}
                                    alt="Work preview"
                                    className="w-full h-48 object-cover rounded-lg mb-2"
                                  />
                                )}
                                {activity.comment && (
                                  <div className="bg-muted p-3 rounded-lg mb-2">
                                    <p className="text-sm">{activity.comment}</p>
                                  </div>
                                )}
                                {activity.grade && (
                                  <Badge className="mb-2 bg-green-500">{activity.grade}</Badge>
                                )}
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                  <span>{activity.time}</span>
                                  {activity.likes !== undefined && (
                                    <>
                                      <Button variant="ghost" size="sm" className="h-8 px-2">
                                        <Icon name="Heart" size={14} className="mr-1" />
                                        {activity.likes}
                                      </Button>
                                      <Button variant="ghost" size="sm" className="h-8 px-2">
                                        <Icon name="MessageCircle" size={14} className="mr-1" />
                                        Ответить
                                      </Button>
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <div className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Icon name="Bell" size={20} />
                            Уведомления
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            {notifications.map((notif) => (
                              <div 
                                key={notif.id}
                                className={`p-3 rounded-lg cursor-pointer transition-colors ${
                                  notif.read ? 'bg-background' : 'bg-accent/10'
                                }`}
                              >
                                <div className="flex items-start gap-2">
                                  <Icon 
                                    name={
                                      notif.type === 'homework' ? 'FileCheck' :
                                      notif.type === 'message' ? 'MessageCircle' :
                                      'BookOpen'
                                    }
                                    size={16}
                                    className="mt-0.5 text-primary"
                                  />
                                  <div className="flex-grow">
                                    <p className="font-semibold text-sm mb-1">{notif.title}</p>
                                    <p className="text-xs text-muted-foreground">{notif.message}</p>
                                    <p className="text-xs text-muted-foreground mt-1">{notif.time}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                          <Button variant="ghost" size="sm" className="w-full mt-4">
                            Показать все
                          </Button>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Icon name="MessageSquare" size={20} />
                            Сообщения
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="flex items-center gap-3 p-2 hover:bg-accent/10 rounded-lg cursor-pointer">
                              <Avatar className="w-10 h-10">
                                <AvatarFallback>АП</AvatarFallback>
                              </Avatar>
                              <div className="flex-grow">
                                <p className="font-semibold text-sm">Анна Петрова</p>
                                <p className="text-xs text-muted-foreground">Спасибо за вопрос!</p>
                              </div>
                              <Badge variant="secondary" className="text-xs">2</Badge>
                            </div>
                            <div className="flex items-center gap-3 p-2 hover:bg-accent/10 rounded-lg cursor-pointer">
                              <Avatar className="w-10 h-10">
                                <AvatarFallback>ЕИ</AvatarFallback>
                              </Avatar>
                              <div className="flex-grow">
                                <p className="font-semibold text-sm">Елена Иванова</p>
                                <p className="text-xs text-muted-foreground">Отлично справились!</p>
                              </div>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" className="w-full mt-4">
                            Все сообщения
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="courses" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Мои активные курсы</CardTitle>
                      <CardDescription>Продолжайте обучение с того места, где остановились</CardDescription>
                    </CardHeader>
                    <CardContent>
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
                                    <span className="text-muted-foreground">
                                      Пройдено уроков: {course.completedLessons} из {course.totalLessons}
                                    </span>
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
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Рекомендуемые курсы</CardTitle>
                      <CardDescription>На основе ваших интересов</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4">
                        {[
                          {
                            title: "Adobe Illustrator: Продвинутый уровень",
                            category: "Графический дизайн",
                            image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/6d83d059-683d-4cfe-a24b-8dda416dc0ad.jpg"
                          },
                          {
                            title: "Анимация в After Effects",
                            category: "Моушн-дизайн",
                            image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/03aed20d-3800-46d0-a1f1-58d6ec5bf1c8.jpg"
                          },
                          {
                            title: "3D моделирование в Blender",
                            category: "3D дизайн",
                            image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/6d83d059-683d-4cfe-a24b-8dda416dc0ad.jpg"
                          }
                        ].map((course, idx) => (
                          <Card key={idx} className="overflow-hidden">
                            <img 
                              src={course.image}
                              alt={course.title}
                              className="w-full h-32 object-cover"
                            />
                            <CardContent className="pt-4">
                              <Badge variant="secondary" className="mb-2">{course.category}</Badge>
                              <h4 className="font-semibold text-sm mb-3">{course.title}</h4>
                              <Button size="sm" variant="outline" className="w-full">
                                Узнать больше
                              </Button>
                            </CardContent>
                          </Card>
                        ))}
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
