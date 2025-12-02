import Icon from "@/components/ui/icon";

const Stats = () => {
  const stats = [
    {
      icon: "Users",
      value: "15,000+",
      label: "Активных студентов",
    },
    {
      icon: "BookOpen",
      value: "200+",
      label: "Онлайн курсов",
    },
    {
      icon: "Award",
      value: "98%",
      label: "Довольных студентов",
    },
    {
      icon: "GraduationCap",
      value: "50+",
      label: "Экспертных преподавателей",
    },
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Icon name={stat.icon} className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
