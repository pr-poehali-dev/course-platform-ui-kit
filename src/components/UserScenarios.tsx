import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const UserScenarios = () => {
  const scenarios = [
    {
      icon: "Rocket",
      title: "С чего начать?",
      description: "Подберем идеальный курс для новичков с учетом ваших целей и интересов",
      action: "Пройти тест",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: "Gift",
      title: "Бесплатные материалы",
      description: "Вводные уроки, гайды и мастер-классы для знакомства с направлением",
      action: "Смотреть",
      color: "from-green-500 to-green-600"
    },
    {
      icon: "TrendingUp",
      title: "Популярные направления",
      description: "Самые востребованные специальности с высоким уровнем трудоустройства",
      action: "Посмотреть",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: "Zap",
      title: "Экспертные интенсивы",
      description: "Короткие практические курсы от лидеров индустрии для быстрого старта",
      action: "Выбрать",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {scenarios.map((scenario, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0"
            >
              <div className={`h-2 bg-gradient-to-r ${scenario.color}`} />
              <CardHeader>
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r ${scenario.color} mb-4`}>
                  <Icon name={scenario.icon} size={28} className="text-white" />
                </div>
                <CardTitle className="text-xl">{scenario.title}</CardTitle>
                <CardDescription className="text-base">
                  {scenario.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="ghost" 
                  className="w-full group-hover:bg-primary group-hover:text-white transition-all"
                >
                  {scenario.action}
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserScenarios;
