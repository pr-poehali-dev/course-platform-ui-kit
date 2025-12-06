import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import ParticlesBackground from "@/components/ParticlesBackground";
import RegistrationModal from "@/components/RegistrationModal";

const Hero = () => {
  const [showRegistration, setShowRegistration] = useState(false);
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-20 md:py-32"
    >
      <ParticlesBackground />
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="absolute top-10 right-20 opacity-20 animate-float hidden xl:block">
        <img
          src="https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/aed39833-f1ea-4925-958e-d33efaae7d22.jpg"
          alt="Декоративный элемент"
          className="w-32 h-32 object-contain"
        />
      </div>

      <div className="absolute bottom-20 left-10 opacity-20 animate-float-delayed hidden xl:block">
        <img
          src="https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/7d982e69-0081-4df9-9909-06064f9fb8c1.jpg"
          alt="Декоративный элемент"
          className="w-24 h-24 object-contain"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Дополнительное профессиональное образование
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 leading-tight">
              ФГБОУ ВО "ХГПУ"
            </h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-8 border border-white/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="flex items-start gap-2">
                  <Icon name="CheckCircle" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>Онлайн обучение</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="FileCheck" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>Внесение в ФИС ФРДО</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Award" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>Диплом / Удостоверение</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="GraduationCap" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>Для лиц с СПО/ВО</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl transition-all"
                onClick={() => setShowRegistration(true)}
              >
                <Icon name="UserPlus" className="mr-2" />
                Регистрация
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary"
                onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="Search" className="mr-2" />
                Поиск курсов
              </Button>
            </div>
          </div>

          <div className="hidden lg:block animate-scale-in relative">
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/b7265a06-5454-4ccf-9c1a-a0af5b59878f.jpg"
                alt="Образовательная иллюстрация"
                className="rounded-2xl w-full relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-accent/30 rounded-2xl"></div>
              <div className="absolute -top-6 -left-6 w-full h-full bg-white/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      <RegistrationModal 
        open={showRegistration} 
        onOpenChange={setShowRegistration} 
      />
    </section>
  );
};

export default Hero;