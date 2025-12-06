import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface TeacherModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  teacher: {
    name: string;
    position: string;
    experience: string;
    students: string;
    courses: string;
    description: string;
    image: string;
    fullBio?: string;
    education?: string[];
    achievements?: string[];
    specializations?: string[];
    coursesList?: Array<{ title: string; students: string }>;
    socials: {
      linkedin: string;
      twitter: string;
      email: string;
    };
  };
}

const TeacherModal = ({ open, onOpenChange, teacher }: TeacherModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex flex-col md:flex-row gap-6 mb-4">
            <img 
              src={teacher.image}
              alt={teacher.name}
              className="w-full md:w-48 h-48 object-cover rounded-lg"
            />
            <div className="flex-grow">
              <DialogTitle className="text-3xl mb-2">{teacher.name}</DialogTitle>
              <p className="text-primary text-lg font-medium mb-3">{teacher.position}</p>
              <DialogDescription className="text-base mb-4">
                {teacher.description}
              </DialogDescription>
              
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Icon name="Award" size={20} className="text-primary" />
                  <span className="text-sm font-medium">{teacher.experience}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Users" size={20} className="text-primary" />
                  <span className="text-sm font-medium">{teacher.students} студентов</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="BookOpen" size={20} className="text-primary" />
                  <span className="text-sm font-medium">{teacher.courses} курсов</span>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={teacher.socials.linkedin}
                  className="w-10 h-10 flex items-center justify-center bg-muted hover:bg-primary hover:text-white rounded-full transition-colors"
                >
                  <Icon name="Linkedin" size={18} />
                </a>
                <a
                  href={teacher.socials.twitter}
                  className="w-10 h-10 flex items-center justify-center bg-muted hover:bg-primary hover:text-white rounded-full transition-colors"
                >
                  <Icon name="Twitter" size={18} />
                </a>
                <a
                  href={`mailto:${teacher.socials.email}`}
                  className="w-10 h-10 flex items-center justify-center bg-muted hover:bg-primary hover:text-white rounded-full transition-colors"
                >
                  <Icon name="Mail" size={18} />
                </a>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Icon name="User" size={20} className="text-primary" />
              О преподавателе
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {teacher.fullBio || "Профессиональный преподаватель с многолетним опытом работы в сфере образования и практической деятельности. Автор методических разработок и участник профессиональных конференций."}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Icon name="GraduationCap" size={20} className="text-primary" />
              Образование
            </h3>
            <ul className="space-y-2">
              {(teacher.education || [
                "Магистр педагогических наук, ХГПУ",
                "Кандидат искусствоведения",
                "Профессиональная переподготовка по направлению \"Современные образовательные технологии\""
              ]).map((edu, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{edu}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Icon name="Award" size={20} className="text-primary" />
              Достижения
            </h3>
            <ul className="space-y-2">
              {(teacher.achievements || [
                "Лауреат премии \"Лучший преподаватель года\"",
                "Автор 15+ научных публикаций",
                "Спикер международных конференций",
                "Разработчик образовательных программ"
              ]).map((achievement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Icon name="Star" size={16} className="text-accent mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Icon name="Target" size={20} className="text-primary" />
              Специализация
            </h3>
            <div className="flex flex-wrap gap-2">
              {(teacher.specializations || [
                "Композиция",
                "Типографика",
                "Цветовая теория",
                "Digital дизайн",
                "Брендинг"
              ]).map((spec, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  {spec}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Icon name="BookOpen" size={20} className="text-primary" />
              Курсы преподавателя
            </h3>
            <div className="space-y-3">
              {(teacher.coursesList || [
                { title: "Основы графического дизайна", students: "1,234" },
                { title: "Adobe Photoshop: Продвинутый уровень", students: "1,890" },
                { title: "Создание визуального контента", students: "456" }
              ]).map((course, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/70 transition-colors">
                  <span className="font-medium">{course.title}</span>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Icon name="Users" size={14} />
                    {course.students}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t">
            <Button className="w-full" size="lg">
              <Icon name="Mail" size={20} className="mr-2" />
              Связаться с преподавателем
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TeacherModal;
