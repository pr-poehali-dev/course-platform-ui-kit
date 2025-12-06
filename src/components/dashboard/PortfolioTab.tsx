import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

interface PortfolioWork {
  id: number;
  title: string;
  category: string;
  image: string;
  likes: number;
  views: number;
  date: string;
}

interface TimelineCourse {
  id: string;
  title: string;
  progress: number;
  image: string;
  completedDate?: string;
}

interface TimelineItem {
  date: string;
  status: string;
  courses: TimelineCourse[];
}

interface PortfolioTabProps {
  portfolioWorks: PortfolioWork[];
  learningTimeline: TimelineItem[];
}

const PortfolioTab = ({ portfolioWorks, learningTimeline }: PortfolioTabProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Мои работы</h2>
        <Button>
          <Icon name="Plus" size={16} className="mr-2" />
          Добавить работу
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {portfolioWorks.map((work) => (
          <Card key={work.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="aspect-square overflow-hidden relative">
              <img 
                src={work.image} 
                alt={work.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <Button size="sm" variant="secondary">
                  <Icon name="Eye" size={16} className="mr-2" />
                  Просмотр
                </Button>
                <Button size="sm" variant="secondary">
                  <Icon name="Edit" size={16} />
                </Button>
              </div>
            </div>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">{work.title}</CardTitle>
              <CardDescription>{work.category}</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
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

      <Card>
        <CardHeader>
          <CardTitle>История обучения</CardTitle>
          <CardDescription>Ваш путь развития и достижения</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {learningTimeline.map((timeline, idx) => (
              <div key={idx} className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        timeline.status === 'active' 
                          ? 'bg-primary text-white' 
                          : 'bg-green-100 dark:bg-green-900/20 text-green-600'
                      }`}
                    >
                      <Icon 
                        name={timeline.status === 'active' ? 'BookOpen' : 'CheckCircle'} 
                        size={20} 
                      />
                    </div>
                    {idx < learningTimeline.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2 min-h-[100px]"></div>
                    )}
                  </div>
                  
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <h3 className="font-semibold text-lg">{timeline.date}</h3>
                      {timeline.status === 'active' && (
                        <Badge variant="secondary">В процессе</Badge>
                      )}
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      {timeline.courses.map((course) => (
                        <Card key={course.id} className="overflow-hidden">
                          <div className="flex gap-3 p-4">
                            <img 
                              src={course.image} 
                              alt={course.title}
                              className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-sm mb-2 line-clamp-2">{course.title}</h4>
                              {course.progress === 100 ? (
                                <div className="flex items-center gap-1 text-xs text-green-600">
                                  <Icon name="CheckCircle" size={14} />
                                  <span>Завершён {course.completedDate}</span>
                                </div>
                              ) : (
                                <div className="space-y-1">
                                  <div className="flex justify-between text-xs">
                                    <span className="text-muted-foreground">Прогресс</span>
                                    <span className="font-medium">{course.progress}%</span>
                                  </div>
                                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                                    <div 
                                      className="h-full bg-primary transition-all"
                                      style={{ width: `${course.progress}%` }}
                                    />
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Получить сертификат</CardTitle>
          <CardDescription>Заполните данные для получения официального документа</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">ФИО полностью</Label>
                <Input id="fullName" placeholder="Иванов Иван Иванович" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="birthDate">Дата рождения</Label>
                <Input id="birthDate" type="date" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="education">Образование</Label>
              <Input id="education" placeholder="Высшее образование, Московский государственный университет" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="course">Выберите курс</Label>
              <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option>Основы графического дизайна</option>
                <option>Веб-дизайн и UX/UI</option>
                <option>Фотография для начинающих</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="address">Адрес для отправки (если нужна физическая копия)</Label>
              <Textarea id="address" placeholder="Укажите полный почтовый адрес" rows={3} />
            </div>
            
            <Button type="submit" className="w-full md:w-auto">
              <Icon name="FileCheck" size={16} className="mr-2" />
              Оформить заявку на сертификат
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PortfolioTab;
