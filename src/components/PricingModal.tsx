import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface PricingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  courseTitle: string;
  basePrice: string;
}

const PricingModal = ({ open, onOpenChange, courseTitle, basePrice }: PricingModalProps) => {
  const pricingPlans = [
    {
      name: "Базовый",
      price: basePrice,
      period: "Единоразовый платёж",
      features: [
        "Доступ к курсу на 1 год",
        "Все видеоуроки",
        "Домашние задания",
        "Сертификат об окончании",
        "Доступ к материалам курса"
      ],
      recommended: false
    },
    {
      name: "Стандарт",
      price: `${parseInt(basePrice.replace(/[^\d]/g, '')) + 3000} ₽`,
      period: "Единоразовый платёж",
      features: [
        "Всё из тарифа «Базовый»",
        "Безлимитный доступ к курсу",
        "Проверка домашних заданий",
        "Обратная связь от преподавателя",
        "Доступ к закрытому чату"
      ],
      recommended: true
    },
    {
      name: "Премиум",
      price: `${parseInt(basePrice.replace(/[^\d]/g, '')) + 6000} ₽`,
      period: "Единоразовый платёж",
      features: [
        "Всё из тарифа «Стандарт»",
        "Индивидуальные консультации",
        "Разбор личных проектов",
        "Помощь в трудоустройстве",
        "Год доступа ко всем курсам"
      ],
      recommended: false
    }
  ];

  const paymentMethods = [
    { icon: "CreditCard", name: "Банковская карта", description: "Visa, MasterCard, МИР" },
    { icon: "Wallet", name: "СБП", description: "Быстрый платёж по номеру телефона" },
    { icon: "Building", name: "Рассрочка", description: "0% на 6 месяцев" },
    { icon: "FileText", name: "Счёт для юр. лиц", description: "Оплата по счёту" }
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{courseTitle}</DialogTitle>
          <DialogDescription>
            Выберите подходящий тариф и способ оплаты
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="plans" className="mt-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="plans">Тарифы</TabsTrigger>
            <TabsTrigger value="payment">Способы оплаты</TabsTrigger>
          </TabsList>

          <TabsContent value="plans" className="mt-6">
            <div className="grid md:grid-cols-3 gap-4">
              {pricingPlans.map((plan, index) => (
                <Card 
                  key={index}
                  className={`relative ${plan.recommended ? 'border-primary border-2' : ''}`}
                >
                  {plan.recommended && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                      Рекомендуем
                    </Badge>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.period}</CardDescription>
                    <div className="text-3xl font-bold text-primary mt-2">
                      {plan.price}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm">
                          <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${plan.recommended ? 'bg-primary' : ''}`}
                      variant={plan.recommended ? 'default' : 'outline'}
                    >
                      Выбрать тариф
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6 p-4 bg-muted rounded-lg">
              <div className="flex items-start gap-3">
                <Icon name="Info" size={20} className="text-primary mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Гарантия возврата средств</h4>
                  <p className="text-sm text-muted-foreground">
                    Если в течение 7 дней после покупки курс вам не подойдёт — вернём деньги, без вопросов
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="payment" className="mt-6">
            <div className="grid md:grid-cols-2 gap-4">
              {paymentMethods.map((method, index) => (
                <Card 
                  key={index}
                  className="hover:border-primary cursor-pointer transition-colors"
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name={method.icon} size={24} className="text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{method.name}</CardTitle>
                        <CardDescription>{method.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="mt-6 space-y-4">
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Icon name="Shield" size={24} className="text-green-600" />
                    <div>
                      <CardTitle className="text-lg text-green-800">Безопасная оплата</CardTitle>
                      <CardDescription className="text-green-700">
                        Все платежи защищены по стандарту PCI DSS. Мы не храним данные ваших карт
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Часто задаваемые вопросы</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Можно ли оплатить частями?</h4>
                    <p className="text-sm text-muted-foreground">
                      Да, доступна рассрочка на 6 месяцев без переплат через банки-партнёры
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Есть ли скидки для студентов?</h4>
                    <p className="text-sm text-muted-foreground">
                      Да, студентам очной формы обучения предоставляется скидка 15% при предъявлении студенческого билета
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Можно ли вернуть деньги?</h4>
                    <p className="text-sm text-muted-foreground">
                      Да, в течение 7 дней после покупки можно вернуть полную стоимость курса без объяснения причин
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default PricingModal;
