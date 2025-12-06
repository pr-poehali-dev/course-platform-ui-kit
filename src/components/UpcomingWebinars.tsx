import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const UpcomingWebinars = () => {
  const webinars = [
    {
      title: "Основы композиции в графическом дизайне",
      date: "15 декабря, 19:00",
      duration: "1.5 часа",
      instructor: "Анна Петрова",
      seats: "23 места",
      image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/6d83d059-683d-4cfe-a24b-8dda416dc0ad.jpg",
      isFree: true
    },
    {
      title: "Карьера в UX/UI дизайне: с чего начать",
      date: "18 декабря, 20:00",
      duration: "2 часа",
      instructor: "Елена Иванова",
      seats: "15 мест",
      image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/03aed20d-3800-46d0-a1f1-58d6ec5bf1c8.jpg",
      isFree: true
    },
    {
      title: "Портфолио дизайнера: как выделиться",
      date: "22 декабря, 18:00",
      duration: "1 час",
      instructor: "Михаил Соколов",
      seats: "30 мест",
      image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/6d83d059-683d-4cfe-a24b-8dda416dc0ad.jpg",
      isFree: true
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Предстоящие вебинары
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Бесплатные онлайн-встречи с экспертами. Узнайте о трендах, получите советы и задайте вопросы
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {webinars.map((webinar, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img 
                  src={webinar.image}
                  alt={webinar.title}
                  className="w-full h-48 object-cover"
                />
                {webinar.isFree && (
                  <Badge className="absolute top-4 right-4 bg-green-500 text-white">
                    Бесплатно
                  </Badge>
                )}
              </div>
              <CardHeader>
                <CardTitle className="text-lg line-clamp-2">{webinar.title}</CardTitle>
                <CardDescription>
                  <div className="space-y-2 mt-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Calendar" size={16} className="text-primary" />
                      {webinar.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Clock" size={16} className="text-primary" />
                      {webinar.duration}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="User" size={16} className="text-primary" />
                      {webinar.instructor}
                    </div>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Icon name="Users" size={14} />
                    Осталось {webinar.seats}
                  </span>
                </div>
                <Button className="w-full">
                  <Icon name="Video" size={16} className="mr-2" />
                  Зарегистрироваться
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingWebinars;
