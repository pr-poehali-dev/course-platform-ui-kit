import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Teachers = () => {
  const teachers = [
    {
      name: "Анна Петрова",
      position: "Профессор графического дизайна",
      experience: "15 лет опыта",
      students: "3,500+",
      courses: "12",
      description:
        "Кандидат искусствоведения, эксперт в области визуальных коммуникаций и брендинга.",
      image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/6d83d059-683d-4cfe-a24b-8dda416dc0ad.jpg",
      socials: {
        linkedin: "#",
        twitter: "#",
        email: "a.petrova@university.edu",
      },
    },
    {
      name: "Михаил Соколов",
      position: "Мастер цифрового искусства",
      experience: "10 лет опыта",
      students: "2,800+",
      courses: "8",
      description:
        "Профессиональный digital-художник, работал с ведущими анимационными студиями.",
      image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/03aed20d-3800-46d0-a1f1-58d6ec5bf1c8.jpg",
      socials: {
        linkedin: "#",
        twitter: "#",
        email: "m.sokolov@university.edu",
      },
    },
    {
      name: "Елена Иванова",
      position: "UX/UI дизайн эксперт",
      experience: "12 лет опыта",
      students: "4,200+",
      courses: "15",
      description:
        "Сертифицированный специалист по пользовательскому опыту, ex-lead designer в IT-компании.",
      image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/6d83d059-683d-4cfe-a24b-8dda416dc0ad.jpg",
      socials: {
        linkedin: "#",
        twitter: "#",
        email: "e.ivanova@university.edu",
      },
    },
    {
      name: "Дмитрий Орлов",
      position: "Фотограф-профессионал",
      experience: "18 лет опыта",
      students: "2,100+",
      courses: "9",
      description:
        "Международный фотожурналист, лауреат множества профессиональных премий.",
      image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/03aed20d-3800-46d0-a1f1-58d6ec5bf1c8.jpg",
      socials: {
        linkedin: "#",
        twitter: "#",
        email: "d.orlov@university.edu",
      },
    },
  ];

  return (
    <section id="teachers" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Наши преподаватели
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Учитесь у лучших экспертов в своей области. Наша команда — это
            практикующие профессионалы с богатым опытом.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{teacher.name}</h3>
                <p className="text-primary text-sm font-medium mb-3">
                  {teacher.position}
                </p>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {teacher.description}
                </p>

                <div className="flex justify-between text-sm text-muted-foreground mb-4 pb-4 border-b">
                  <div>
                    <Icon
                      name="Users"
                      size={16}
                      className="inline mr-1 text-primary"
                    />
                    <span>{teacher.students}</span>
                  </div>
                  <div>
                    <Icon
                      name="BookOpen"
                      size={16}
                      className="inline mr-1 text-primary"
                    />
                    <span>{teacher.courses} курсов</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={teacher.socials.linkedin}
                    className="w-8 h-8 flex items-center justify-center bg-muted hover:bg-primary hover:text-white rounded-full transition-colors"
                  >
                    <Icon name="Linkedin" size={16} />
                  </a>
                  <a
                    href={teacher.socials.twitter}
                    className="w-8 h-8 flex items-center justify-center bg-muted hover:bg-primary hover:text-white rounded-full transition-colors"
                  >
                    <Icon name="Twitter" size={16} />
                  </a>
                  <a
                    href={`mailto:${teacher.socials.email}`}
                    className="w-8 h-8 flex items-center justify-center bg-muted hover:bg-primary hover:text-white rounded-full transition-colors"
                  >
                    <Icon name="Mail" size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            Все преподаватели
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Teachers;
