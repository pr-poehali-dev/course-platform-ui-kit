import Icon from "@/components/ui/icon";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Мария Ковалева",
      role: "Выпускница курса «Графический дизайн»",
      image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/6d83d059-683d-4cfe-a24b-8dda416dc0ad.jpg",
      text: "Невероятный опыт обучения! Преподаватели объясняют сложные вещи простым языком. За 8 недель я получила навыки, которые помогли мне устроиться в дизайн-студию мечты.",
      rating: 5,
    },
    {
      name: "Александр Смирнов",
      role: "Студент курса «Веб-дизайн»",
      image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/03aed20d-3800-46d0-a1f1-58d6ec5bf1c8.jpg",
      text: "Платформа очень удобная, материалы структурированы идеально. Особенно понравились практические задания и обратная связь от преподавателей. Рекомендую всем!",
      rating: 5,
    },
    {
      name: "Екатерина Новикова",
      role: "Выпускница курса «Фотография»",
      image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/6d83d059-683d-4cfe-a24b-8dda416dc0ad.jpg",
      text: "Я всегда мечтала научиться фотографировать профессионально. Этот курс превзошёл все ожидания! Теперь у меня есть собственная клиентская база.",
      rating: 5,
    },
    {
      name: "Игорь Волков",
      role: "Студент курса «Цифровое искусство»",
      image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/03aed20d-3800-46d0-a1f1-58d6ec5bf1c8.jpg",
      text: "Отличное соотношение теории и практики. Преподаватель всегда на связи и помогает разобраться в сложных моментах. Очень доволен результатом!",
      rating: 5,
    },
    {
      name: "Ольга Петренко",
      role: "Выпускница курса «UX/UI дизайн»",
      image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/6d83d059-683d-4cfe-a24b-8dda416dc0ad.jpg",
      text: "Курс полностью изменил моё представление о дизайне интерфейсов. Получила навыки, которые сразу применила в работе. Цена более чем оправдана!",
      rating: 5,
    },
    {
      name: "Дмитрий Козлов",
      role: "Студент курса «Педагогика искусства»",
      image: "https://cdn.poehali.dev/projects/f97ddb5c-5eca-4a84-a657-08359a2eb635/files/03aed20d-3800-46d0-a1f1-58d6ec5bf1c8.jpg",
      text: "Как учитель рисования, я искал современные методики. Нашёл всё что нужно и даже больше. Студенты заметили изменения в моём подходе к преподаванию!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Отзывы студентов
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Узнайте, что говорят наши студенты о своём опыте обучения на
            платформе.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-8 bg-primary/10 rounded-full px-8 py-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4.9</div>
              <div className="text-sm text-muted-foreground">Средняя оценка</div>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">12,500+</div>
              <div className="text-sm text-muted-foreground">Отзывов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
