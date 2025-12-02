import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Главная", href: "#home" },
    { label: "Каталог курсов", href: "#catalog" },
    { label: "Преподаватели", href: "#teachers" },
    { label: "О нас", href: "#about" },
    { label: "Контакты", href: "#contacts" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Icon name="GraduationCap" className="w-8 h-8 text-primary" />
            <span className="text-primary my-[29px] mx-2 py-0 font-semibold text-base">Херсонский государственный 
педагогический университет</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Войти
            </Button>
            <Button size="sm" className="bg-accent hover:bg-accent/90">
              Регистрация
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} className="w-6 h-6" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t">
                <Button variant="ghost" size="sm">
                  Войти
                </Button>
                <Button size="sm" className="bg-accent hover:bg-accent/90">
                  Регистрация
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;