import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface DashboardHeaderProps {
  userName: string;
}

const DashboardHeader = ({ userName }: DashboardHeaderProps) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Личный кабинет</h1>
          <p className="text-muted-foreground">Добро пожаловать, {userName}!</p>
        </div>
        <Link to="/portfolio/public">
          <Button variant="outline">
            <Icon name="ExternalLink" size={16} className="mr-2" />
            Моё публичное портфолио
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DashboardHeader;
