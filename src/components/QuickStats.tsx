import Icon from "@/components/ui/icon";

const QuickStats = () => {
  const stats = [
    {
      icon: "Users",
      value: "15 000+",
      label: "Активных студентов"
    },
    {
      icon: "Briefcase",
      value: "98%",
      label: "Успешно трудоустроены"
    },
    {
      icon: "BookOpen",
      value: "200+",
      label: "Онлайн курсов"
    },
    {
      icon: "Award",
      value: "50+",
      label: "Экспертных преподавателей"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-primary to-primary/90">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <Icon name={stat.icon} size={32} className="text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white/90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickStats;
