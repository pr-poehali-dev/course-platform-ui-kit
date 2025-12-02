import Icon from "@/components/ui/icon";

const Footer = () => {
  const footerLinks = {
    "О платформе": ["О нас", "Наша команда", "Карьера", "Пресса"],
    "Для студентов": [
      "Каталог курсов",
      "Как начать обучение",
      "Сертификаты",
      "Помощь",
    ],
    "Для преподавателей": [
      "Стать преподавателем",
      "Ресурсы",
      "Сообщество",
      "Поддержка",
    ],
  };

  const socialLinks = [
    { icon: "Facebook", href: "#" },
    { icon: "Twitter", href: "#" },
    { icon: "Instagram", href: "#" },
    { icon: "Linkedin", href: "#" },
  ];

  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="GraduationCap" className="w-8 h-8" />
              <span className="text-2xl font-bold">EduPlatform</span>
            </div>
            <p className="text-white/80 mb-6 max-w-sm">
              Образовательная платформа нового поколения. Развивайте свои
              навыки вместе с лучшими преподавателями.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                >
                  <Icon name={social.icon} size={20} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/80 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 EduPlatform. Все права защищены.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
