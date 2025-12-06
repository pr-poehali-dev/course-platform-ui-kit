import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

interface UserInfo {
  name: string;
  email: string;
  phone: string;
  avatar: string;
  registrationDate: string;
  coursesCompleted: number;
  coursesInProgress: number;
  portfolioWorks: number;
}

interface DashboardSidebarProps {
  userInfo: UserInfo;
}

const DashboardSidebar = ({ userInfo }: DashboardSidebarProps) => {
  return (
    <Card className="lg:col-span-1">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          <Avatar className="w-24 h-24 mb-4">
            <AvatarImage src={userInfo.avatar} />
            <AvatarFallback>ИП</AvatarFallback>
          </Avatar>
          <h2 className="text-xl font-semibold mb-1">{userInfo.name}</h2>
          <p className="text-sm text-muted-foreground mb-4">Студент</p>
          
          <div className="w-full space-y-3 mb-6">
            <div className="flex items-center gap-2 text-sm">
              <Icon name="Mail" size={16} className="text-muted-foreground" />
              <span className="text-muted-foreground truncate">{userInfo.email}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Icon name="Phone" size={16} className="text-muted-foreground" />
              <span className="text-muted-foreground">{userInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Icon name="Calendar" size={16} className="text-muted-foreground" />
              <span className="text-muted-foreground">С {userInfo.registrationDate}</span>
            </div>
          </div>

          <div className="w-full space-y-2 mb-6 pt-6 border-t">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Курсов завершено</span>
              <span className="font-semibold">{userInfo.coursesCompleted}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Курсов в процессе</span>
              <span className="font-semibold">{userInfo.coursesInProgress}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Работ в портфолио</span>
              <span className="font-semibold">{userInfo.portfolioWorks}</span>
            </div>
          </div>

          <Button className="w-full" variant="outline">
            <Icon name="Settings" size={16} className="mr-2" />
            Настройки профиля
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardSidebar;
