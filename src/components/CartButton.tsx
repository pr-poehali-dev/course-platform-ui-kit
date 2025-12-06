import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface CartItem {
  id: string;
  title: string;
  price: string;
  image: string;
}

interface CartButtonProps {
  items?: CartItem[];
}

const CartButton = ({ items = [] }: CartButtonProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(items);

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => {
    const price = parseInt(item.price.replace(/[^\d]/g, ''));
    return sum + price;
  }, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="relative">
          <Icon name="ShoppingCart" size={20} />
          {cartItems.length > 0 && (
            <Badge 
              className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-accent text-white text-xs"
            >
              {cartItems.length}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Корзина</SheetTitle>
          <SheetDescription>
            {cartItems.length === 0 
              ? "Ваша корзина пока пуста" 
              : `В корзине ${cartItems.length} ${cartItems.length === 1 ? 'курс' : 'курса'}`
            }
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <Icon name="ShoppingCart" size={48} className="mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">Добавьте курсы в корзину</p>
            </div>
          ) : (
            <>
              <div className="space-y-4 max-h-[60vh] overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3 border rounded-lg p-3">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-grow">
                      <h4 className="font-medium text-sm line-clamp-2 mb-2">{item.title}</h4>
                      <p className="text-primary font-bold">{item.price}</p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => removeItem(item.id)}
                      className="flex-shrink-0"
                    >
                      <Icon name="X" size={16} />
                    </Button>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-4">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Итого:</span>
                  <span className="text-primary">{total.toLocaleString('ru-RU')} ₽</span>
                </div>
                <Button className="w-full" size="lg">
                  <Icon name="CreditCard" size={20} className="mr-2" />
                  Перейти к оплате
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartButton;
