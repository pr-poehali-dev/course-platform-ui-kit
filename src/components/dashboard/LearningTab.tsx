import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

interface Course {
  id: string;
  title: string;
  instructor: string;
  progress: number;
  nextLesson: string;
  image: string;
  deadline: string;
  totalLessons: number;
  completedLessons: number;
}

interface Notification {
  id: number;
  type: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
}

interface CommunityActivityItem {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  type: string;
  content: string;
  image?: string;
  comment?: string;
  grade?: string;
  time: string;
  likes?: number;
}

interface LearningTabProps {
  activeCourses: Course[];
  notifications: Notification[];
  communityActivity: CommunityActivityItem[];
}

const LearningTab = ({ activeCourses, notifications, communityActivity }: LearningTabProps) => {
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'homework':
        return 'FileCheck';
      case 'message':
        return 'MessageSquare';
      case 'course':
        return 'BookOpen';
      default:
        return 'Bell';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Мои курсы</h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {activeCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{course.title}</CardTitle>
                <CardDescription>Преподаватель: {course.instructor}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Прогресс</span>
                    <span className="font-medium">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>{course.completedLessons} из {course.totalLessons} уроков</span>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <Icon name="PlayCircle" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Следующий урок: {course.nextLesson}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Calendar" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Дедлайн: {course.deadline}</span>
                  </div>
                </div>

                <Button className="w-full">
                  Продолжить обучение
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Bell" size={20} />
              Уведомления
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div 
                  key={notification.id}
                  className={`flex gap-3 p-3 rounded-lg transition-colors ${
                    !notification.read ? 'bg-blue-50 dark:bg-blue-950/20' : 'hover:bg-muted'
                  }`}
                >
                  <div className={`mt-1 ${!notification.read ? 'text-blue-600' : 'text-muted-foreground'}`}>
                    <Icon name={getNotificationIcon(notification.type)} size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="font-medium text-sm">{notification.title}</h4>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-1.5" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{notification.message}</p>
                    <span className="text-xs text-muted-foreground">{notification.time}</span>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-4">
              Все уведомления
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Users" size={20} />
              Активность сообщества
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {communityActivity.map((activity) => (
                <div key={activity.id} className="flex gap-3">
                  <Avatar className="w-10 h-10 flex-shrink-0">
                    <AvatarImage src={activity.user.avatar} />
                    <AvatarFallback>{activity.user.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm mb-1">
                      <span className="font-medium">{activity.user.name}</span>{" "}
                      <span className="text-muted-foreground">{activity.content}</span>
                    </p>
                    
                    {activity.image && (
                      <img 
                        src={activity.image} 
                        alt="" 
                        className="w-full h-32 object-cover rounded-lg my-2"
                      />
                    )}
                    
                    {activity.comment && (
                      <div className="bg-muted p-3 rounded-lg my-2 text-sm">
                        {activity.comment}
                      </div>
                    )}
                    
                    {activity.grade && (
                      <Badge variant="secondary" className="my-2">
                        {activity.grade}
                      </Badge>
                    )}
                    
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mt-2">
                      <span>{activity.time}</span>
                      {activity.likes !== undefined && (
                        <button className="flex items-center gap-1 hover:text-primary transition-colors">
                          <Icon name="Heart" size={14} />
                          <span>{activity.likes}</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-4">
              Смотреть больше
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LearningTab;
