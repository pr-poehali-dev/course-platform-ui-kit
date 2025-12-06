import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface RegistrationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RegistrationModal = ({ open, onOpenChange }: RegistrationModalProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    middleName: "",
    email: "",
    phone: "",
    education: "",
    specialization: "",
    agreementPersonal: false,
    agreementContract: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      console.log("Регистрация:", formData);
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <Icon name="UserPlus" size={24} className="text-primary" />
            Регистрация на обучение
          </DialogTitle>
          <DialogDescription>
            {step === 1 
              ? "Заполните личные данные для создания учетной записи" 
              : "Информация об образовании и согласия"
            }
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="lastName">Фамилия *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    placeholder="Иванов"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="firstName">Имя *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    placeholder="Иван"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="middleName">Отчество</Label>
                <Input
                  id="middleName"
                  value={formData.middleName}
                  onChange={(e) => setFormData({...formData, middleName: e.target.value})}
                  placeholder="Иванович"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="example@mail.ru"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Телефон *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="+7 (900) 000-00-00"
                  required
                />
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                <div className="flex gap-3">
                  <Icon name="Info" size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-900 dark:text-blue-200">
                    На указанный email будет отправлена ссылка для подтверждения регистрации
                  </p>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="education">Уровень образования *</Label>
                <Select
                  value={formData.education}
                  onValueChange={(value) => setFormData({...formData, education: value})}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите уровень образования" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="spo">Среднее профессиональное образование (СПО)</SelectItem>
                    <SelectItem value="vo">Высшее образование (ВО)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="specialization">Специальность по диплому</Label>
                <Input
                  id="specialization"
                  value={formData.specialization}
                  onChange={(e) => setFormData({...formData, specialization: e.target.value})}
                  placeholder="Например: Дизайн, Информатика"
                />
              </div>

              <div className="border-t pt-4 space-y-4">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="agreementPersonal"
                    checked={formData.agreementPersonal}
                    onCheckedChange={(checked) => 
                      setFormData({...formData, agreementPersonal: checked as boolean})
                    }
                    required
                  />
                  <Label 
                    htmlFor="agreementPersonal" 
                    className="text-sm leading-relaxed cursor-pointer"
                  >
                    Я даю согласие на обработку персональных данных в соответствии с{" "}
                    <a href="#" className="text-primary hover:underline">
                      Политикой конфиденциальности
                    </a>
                  </Label>
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="agreementContract"
                    checked={formData.agreementContract}
                    onCheckedChange={(checked) => 
                      setFormData({...formData, agreementContract: checked as boolean})
                    }
                    required
                  />
                  <Label 
                    htmlFor="agreementContract" 
                    className="text-sm leading-relaxed cursor-pointer"
                  >
                    Я ознакомлен с{" "}
                    <a href="#" className="text-primary hover:underline">
                      Договором оферты
                    </a>
                    {" "}и принимаю условия обучения
                  </Label>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                <div className="flex gap-3">
                  <Icon name="CheckCircle" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-green-900 dark:text-green-200">
                    <p className="font-medium mb-1">После регистрации вы получите:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Доступ к личному кабинету</li>
                      <li>Возможность записаться на любой курс</li>
                      <li>Бесплатные пробные уроки</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-3 pt-4">
            {step === 2 && (
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(1)}
                className="flex-1"
              >
                <Icon name="ArrowLeft" size={16} className="mr-2" />
                Назад
              </Button>
            )}
            <Button
              type="submit"
              className="flex-1"
              disabled={
                step === 2 && 
                (!formData.agreementPersonal || !formData.agreementContract || !formData.education)
              }
            >
              {step === 1 ? (
                <>
                  Продолжить
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </>
              ) : (
                <>
                  <Icon name="CheckCircle" size={16} className="mr-2" />
                  Завершить регистрацию
                </>
              )}
            </Button>
          </div>
        </form>

        <div className="text-center text-sm text-muted-foreground pt-4 border-t">
          Уже есть аккаунт?{" "}
          <a href="#" className="text-primary hover:underline font-medium">
            Войти
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationModal;
