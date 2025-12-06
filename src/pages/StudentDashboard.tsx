import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import LearningTab from "@/components/dashboard/LearningTab";
import PortfolioTab from "@/components/dashboard/PortfolioTab";

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
          <DashboardHeader userName={userInfo.name} />

          <div className="grid lg:grid-cols-4 gap-6 mb-8">
            <DashboardSidebar userInfo={userInfo} />

            <div className="lg:col-span-3">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="learning">Обучение</TabsTrigger>
                  <TabsTrigger value="portfolio">Портфолио</TabsTrigger>
                </TabsList>

                <TabsContent value="learning">
                  <LearningTab 
                    activeCourses={activeCourses}
                    notifications={notifications}
                    communityActivity={communityActivity}
                  />
                </TabsContent>

                <TabsContent value="portfolio">
                  <PortfolioTab 
                    portfolioWorks={portfolioWorks}
                    learningTimeline={learningTimeline}
                  />
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
