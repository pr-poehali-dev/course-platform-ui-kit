import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface CourseCardProps {
  title: string;
  category: string;
  instructor: string;
  duration: string;
  students: string;
  description: string;
  price: string;
  image: string;
  badge?: "Новый" | "Популярный";
}

const CourseCard = ({
  title,
  category,
  instructor,
  duration,
  students,
  description,
  price,
  image,
  badge,
}: CourseCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {badge && (
          <Badge
            className={`absolute top-4 right-4 ${
              badge === "Новый"
                ? "bg-accent text-white"
                : "bg-primary text-white"
            }`}
          >
            {badge}
          </Badge>
        )}
      </div>

      <CardHeader>
        <Badge variant="secondary" className="w-fit mb-2">
          {category}
        </Badge>
        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
          {title}
        </h3>
      </CardHeader>

      <CardContent className="flex-grow">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <Icon name="User" size={16} />
          <span>{instructor}</span>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Icon name="Clock" size={16} />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="Users" size={16} />
            <span>{students}</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
      </CardContent>

      <CardFooter className="flex items-center justify-between border-t pt-4">
        <div className="text-2xl font-bold text-primary">{price}</div>
        <Button size="sm" className="bg-primary hover:bg-primary/90">
          Подробнее
          <Icon name="ArrowRight" size={16} className="ml-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
