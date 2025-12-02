import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  const contactInfo = [
    {
      icon: "MapPin",
      title: "Адрес",
      content: "г. Скадовск, ул. Покровская 7а",
    },
    {
      icon: "Phone",
      title: "Телефон",
      content: "+38 (0552) 32-64-29",
    },
    {
      icon: "Mail",
      title: "Email",
      content: "info@kspu.edu.ua",
    },
    {
      icon: "Clock",
      title: "Приёмная комиссия",
      content: "Пн-Пт: 9:00 - 18:00",
    },
  ];

  return (
    <section id="contacts" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Контакты</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом. Мы всегда рады ответить на
            ваши вопросы.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={item.icon} className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-card rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-xl mb-4">Мы в социальных сетях</h3>
              <div className="flex gap-4">
                {[
                  { icon: "Facebook", href: "#" },
                  { icon: "Instagram", href: "#" },
                  { icon: "Linkedin", href: "#" },
                  { icon: "Youtube", href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-muted hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <Icon name={social.icon} size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-md">
            <h3 className="font-bold text-2xl mb-6">Напишите нам</h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone">Телефон</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+38 (0__) ___-__-__"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="subject">Тема обращения</Label>
                <Input
                  id="subject"
                  placeholder="Вопрос по курсам"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="message">Сообщение</Label>
                <Textarea
                  id="message"
                  placeholder="Расскажите подробнее о вашем вопросе..."
                  rows={5}
                  className="mt-1"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90"
                size="lg"
              >
                <Icon name="Send" size={20} className="mr-2" />
                Отправить сообщение
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2747.8429473925447!2d32.61503431572914!3d46.63533997913111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c41aa7c1c0d717%3A0x7f6a1b3e8c8a3f7b!2z0KPQvdC40LLQtdGA0YHQuNGC0LXRgtGB0LrQsNGPINGD0LsuLCAyNywg0KXQtdGA0YHQvtC9LCDQpdC10YDRgdC-0L3RgdC60LDRjyDQvtCx0LsuLCA3MzAwMA!5e0!3m2!1sru!2sua!4v1615825923123!5m2!1sru!2sua"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Карта расположения университета"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contacts;