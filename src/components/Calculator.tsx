import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";

const Calculator = () => {
  const [propertyType, setPropertyType] = useState("apartment");
  const [area, setArea] = useState("");
  const [repairType, setRepairType] = useState("cosmetic");
  const [services, setServices] = useState({
    design: false,
    furniture: false,
    dismantling: false,
    plumbing: false,
    electrical: false,
  });
  const [calculated, setCalculated] = useState(false);
  const [totalCost, setTotalCost] = useState(0);

  const basePrices = {
    apartment: {
      cosmetic: 3500,
      major: 7000,
      euro: 12000,
    },
    office: {
      cosmetic: 3000,
      major: 6500,
      euro: 11000,
    },
    house: {
      cosmetic: 4000,
      major: 8000,
      euro: 14000,
    },
  };

  const additionalServices = {
    design: 1500,
    furniture: 2000,
    dismantling: 800,
    plumbing: 1200,
    electrical: 1000,
  };

  const calculateCost = () => {
    const areaNum = parseFloat(area);
    if (!areaNum || areaNum <= 0) {
      alert("Пожалуйста, введите корректную площадь");
      return;
    }

    const basePrice = basePrices[propertyType as keyof typeof basePrices][repairType as keyof typeof basePrices.apartment];
    let total = basePrice * areaNum;

    Object.entries(services).forEach(([key, value]) => {
      if (value) {
        total += additionalServices[key as keyof typeof additionalServices] * areaNum;
      }
    });

    setTotalCost(total);
    setCalculated(true);
  };

  const resetCalculator = () => {
    setCalculated(false);
    setArea("");
    setServices({
      design: false,
      furniture: false,
      dismantling: false,
      plumbing: false,
      electrical: false,
    });
  };

  return (
    <Card className="p-8 max-w-3xl mx-auto">
      {!calculated ? (
        <div className="space-y-8">
          <div>
            <Label className="text-lg font-semibold mb-4 block">Тип помещения</Label>
            <RadioGroup value={propertyType} onValueChange={setPropertyType} className="grid grid-cols-3 gap-4">
              <div>
                <RadioGroupItem value="apartment" id="apartment" className="peer sr-only" />
                <Label
                  htmlFor="apartment"
                  className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-all"
                >
                  <Icon name="Home" size={32} className="mb-2" />
                  <span className="font-semibold">Квартира</span>
                </Label>
              </div>
              <div>
                <RadioGroupItem value="office" id="office" className="peer sr-only" />
                <Label
                  htmlFor="office"
                  className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-all"
                >
                  <Icon name="Building2" size={32} className="mb-2" />
                  <span className="font-semibold">Офис</span>
                </Label>
              </div>
              <div>
                <RadioGroupItem value="house" id="house" className="peer sr-only" />
                <Label
                  htmlFor="house"
                  className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-all"
                >
                  <Icon name="Warehouse" size={32} className="mb-2" />
                  <span className="font-semibold">Дом</span>
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label className="text-lg font-semibold mb-4 block">Площадь помещения</Label>
            <div className="relative">
              <Input
                type="number"
                placeholder="Введите площадь"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="h-14 text-lg pr-16"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                м²
              </span>
            </div>
          </div>

          <div>
            <Label className="text-lg font-semibold mb-4 block">Тип ремонта</Label>
            <RadioGroup value={repairType} onValueChange={setRepairType} className="space-y-3">
              <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-muted hover:border-primary/50 transition-colors">
                <RadioGroupItem value="cosmetic" id="cosmetic" />
                <Label htmlFor="cosmetic" className="flex-1 cursor-pointer">
                  <div className="font-semibold">Косметический ремонт</div>
                  <div className="text-sm text-muted-foreground">
                    Покраска, обои, линолеум от {basePrices[propertyType as keyof typeof basePrices].cosmetic} ₽/м²
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-muted hover:border-primary/50 transition-colors">
                <RadioGroupItem value="major" id="major" />
                <Label htmlFor="major" className="flex-1 cursor-pointer">
                  <div className="font-semibold">Капитальный ремонт</div>
                  <div className="text-sm text-muted-foreground">
                    Полная замена отделки, коммуникаций от {basePrices[propertyType as keyof typeof basePrices].major} ₽/м²
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-muted hover:border-primary/50 transition-colors">
                <RadioGroupItem value="euro" id="euro" />
                <Label htmlFor="euro" className="flex-1 cursor-pointer">
                  <div className="font-semibold">Евроремонт премиум</div>
                  <div className="text-sm text-muted-foreground">
                    Премиум материалы, авторский дизайн от {basePrices[propertyType as keyof typeof basePrices].euro} ₽/м²
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label className="text-lg font-semibold mb-4 block">Дополнительные услуги</Label>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <Checkbox
                  id="design"
                  checked={services.design}
                  onCheckedChange={(checked) => setServices({ ...services, design: checked as boolean })}
                />
                <Label htmlFor="design" className="flex-1 cursor-pointer">
                  <div className="font-medium">Дизайн-проект</div>
                  <div className="text-sm text-muted-foreground">+{additionalServices.design} ₽/м²</div>
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <Checkbox
                  id="furniture"
                  checked={services.furniture}
                  onCheckedChange={(checked) => setServices({ ...services, furniture: checked as boolean })}
                />
                <Label htmlFor="furniture" className="flex-1 cursor-pointer">
                  <div className="font-medium">Подбор и закупка мебели</div>
                  <div className="text-sm text-muted-foreground">+{additionalServices.furniture} ₽/м²</div>
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <Checkbox
                  id="dismantling"
                  checked={services.dismantling}
                  onCheckedChange={(checked) => setServices({ ...services, dismantling: checked as boolean })}
                />
                <Label htmlFor="dismantling" className="flex-1 cursor-pointer">
                  <div className="font-medium">Демонтажные работы</div>
                  <div className="text-sm text-muted-foreground">+{additionalServices.dismantling} ₽/м²</div>
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <Checkbox
                  id="plumbing"
                  checked={services.plumbing}
                  onCheckedChange={(checked) => setServices({ ...services, plumbing: checked as boolean })}
                />
                <Label htmlFor="plumbing" className="flex-1 cursor-pointer">
                  <div className="font-medium">Замена сантехники</div>
                  <div className="text-sm text-muted-foreground">+{additionalServices.plumbing} ₽/м²</div>
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <Checkbox
                  id="electrical"
                  checked={services.electrical}
                  onCheckedChange={(checked) => setServices({ ...services, electrical: checked as boolean })}
                />
                <Label htmlFor="electrical" className="flex-1 cursor-pointer">
                  <div className="font-medium">Электромонтажные работы</div>
                  <div className="text-sm text-muted-foreground">+{additionalServices.electrical} ₽/м²</div>
                </Label>
              </div>
            </div>
          </div>

          <Button onClick={calculateCost} size="lg" className="w-full text-lg py-6">
            <Icon name="Calculator" size={20} className="mr-2" />
            Рассчитать стоимость
          </Button>
        </div>
      ) : (
        <div className="text-center space-y-6 animate-scale-in">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <Icon name="CheckCircle2" className="text-primary" size={40} />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-2">Расчет готов!</h3>
            <p className="text-muted-foreground">Стоимость вашего проекта составит:</p>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
            <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              {totalCost.toLocaleString('ru-RU')} ₽
            </div>
            <div className="text-muted-foreground">Ориентировочная стоимость работ</div>
          </div>

          <div className="bg-muted/50 rounded-lg p-6 text-left space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Площадь:</span>
              <span className="font-semibold">{area} м²</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Тип помещения:</span>
              <span className="font-semibold">
                {propertyType === 'apartment' ? 'Квартира' : propertyType === 'office' ? 'Офис' : 'Дом'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Тип ремонта:</span>
              <span className="font-semibold">
                {repairType === 'cosmetic' ? 'Косметический' : repairType === 'major' ? 'Капитальный' : 'Евроремонт премиум'}
              </span>
            </div>
          </div>

          <div className="flex gap-4">
            <Button onClick={resetCalculator} variant="outline" size="lg" className="flex-1">
              <Icon name="RotateCcw" size={20} className="mr-2" />
              Пересчитать
            </Button>
            <Button size="lg" className="flex-1">
              <Icon name="Send" size={20} className="mr-2" />
              Оставить заявку
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            * Итоговая стоимость может отличаться в зависимости от выбранных материалов и сложности работ
          </p>
        </div>
      )}
    </Card>
  );
};

export default Calculator;
