import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PublicPortfolio = () => {
  const portfolioOwner = {
    name: "Иван Петров",
    title: "Графический дизайнер",
    bio: "Специализируюсь на брендинге, айдентике и веб-дизайне. Студент Херсонского государственного педагогического университета.",
    avatar: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/6d83d059-683d-4cfe-a24b-8dda416dc0ad.jpg",
    skills: ["Adobe Photoshop", "Illustrator", "Figma", "UX/UI Design", "Branding"],
    completedCourses: 2,
    totalWorks: 8
  };

  const portfolioWorks = [
    {
      id: 1,
      title: "Логотип для кофейни",
      category: "Графический дизайн",
      description: "Создание уникального логотипа и фирменного стиля для сети кофеен «Утро»",
      image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/6d83d059-683d-4cfe-a24b-8dda416dc0ad.jpg",
      likes: 24,
      views: 156,
      date: "5 декабря 2024"
    },
    {
      id: 2,
      title: "Дизайн мобильного приложения",
      category: "UX/UI дизайн",
      description: "Интерфейс приложения для заказа еды с акцентом на простоту использования",
      image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/03aed20d-3800-46d0-a1f1-58d6ec5bf1c8.jpg",
      likes: 31,
      views: 203,
      date: "2 декабря 2024"
    },
    {
      id: 3,
      title: "Иллюстрация персонажа",
      category: "Цифровое искусство",
      description: "Серия персонажей для детской книги «Приключения в сказочном лесу»",
      image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/6d83d059-683d-4cfe-a24b-8dda416dc0ad.jpg",
      likes: 45,
      views: 312,
      date: "28 ноября 2024"
    },
    {
      id: 4,
      title: "Веб-дизайн лендинга",
      category: "Веб-дизайн",
      description: "Дизайн посадочной страницы для образовательной платформы",
      image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/03aed20d-3800-46d0-a1f1-58d6ec5bf1c8.jpg",
      likes: 18,
      views: 127,
      date: "25 ноября 2024"
    },
    {
      id: 5,
      title: "Брендинг для стартапа",
      category: "Графический дизайн",
      description: "Полный комплект фирменного стиля для IT-стартапа",
      image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/6d83d059-683d-4cfe-a24b-8dda416dc0ad.jpg",
      likes: 38,
      views: 245,
      date: "20 ноября 2024"
    },
    {
      id: 6,
      title: "Постеры для мероприятия",
      category: "Графический дизайн",
      description: "Серия рекламных постеров для музыкального фестиваля",
      image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/03aed20d-3800-46d0-a1f1-58d6ec5bf1c8.jpg",
      likes: 29,
      views: 189,
      date: "15 ноября 2024"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-primary/20">
                <AvatarImage src={portfolioOwner.avatar} />
                <AvatarFallback>ИП</AvatarFallback>
              </Avatar>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{portfolioOwner.name}</h1>
              <p className="text-xl text-primary mb-4">{portfolioOwner.title}</p>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                {portfolioOwner.bio}
              </p>

              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {portfolioOwner.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-4 justify-center mb-8">
                <Button size="lg">
                  <Icon name="Mail" size={20} className="mr-2" />
                  Связаться
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать резюме
                </Button>
              </div>

              <div className="flex gap-8 justify-center text-sm">
                <div>
                  <p className="font-bold text-2xl">{portfolioOwner.totalWorks}</p>
                  <p className="text-muted-foreground">Работ</p>
                </div>
                <div>
                  <p className="font-bold text-2xl">{portfolioOwner.completedCourses}</p>
                  <p className="text-muted-foreground">Курсов пройдено</p>
                </div>
                <div>
                  <p className="font-bold text-2xl">156</p>
                  <p className="text-muted-foreground">Подписчиков</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Портфолио</h2>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Все работы</Button>
                  <Button variant="ghost" size="sm">Графический дизайн</Button>
                  <Button variant="ghost" size="sm">UX/UI</Button>
                  <Button variant="ghost" size="sm">Иллюстрация</Button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioWorks.map((work) => (
                  <Card key={work.id} className="group overflow-hidden hover:shadow-xl transition-all cursor-pointer">
                    <div className="relative overflow-hidden aspect-video">
                      <img 
                        src={work.image}
                        alt={work.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button variant="secondary">
                          <Icon name="ZoomIn" size={16} className="mr-2" />
                          Посмотреть
                        </Button>
                      </div>
                    </div>
                    <CardContent className="pt-4">
                      <Badge variant="secondary" className="mb-2">{work.category}</Badge>
                      <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">
                        {work.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {work.description}
                      </p>
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
                        <span className="text-xs">{work.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-2">
              <CardContent className="p-8 text-center">
                <Icon name="MessageCircle" size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-2">Заинтересовались моими работами?</h3>
                <p className="text-muted-foreground mb-6">
                  Свяжитесь со мной для обсуждения вашего проекта
                </p>
                <div className="flex gap-4 justify-center">
                  <Button size="lg">
                    <Icon name="Mail" size={20} className="mr-2" />
                    Написать письмо
                  </Button>
                  <Button size="lg" variant="outline">
                    <Icon name="Phone" size={20} className="mr-2" />
                    +7 (999) 123-45-67
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PublicPortfolio;
