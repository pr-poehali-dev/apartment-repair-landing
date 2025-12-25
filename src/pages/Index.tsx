import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import Calculator from "@/components/Calculator";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Форма отправлена:", formData);
  };

  const services = [
    {
      icon: "Home",
      title: "Ремонт квартир",
      description: "Комплексный ремонт квартир любой сложности с гарантией качества"
    },
    {
      icon: "Building2",
      title: "Ремонт офисов",
      description: "Профессиональный ремонт офисных помещений в кратчайшие сроки"
    },
    {
      icon: "Warehouse",
      title: "Ремонт домов",
      description: "Капитальный и косметический ремонт загородных домов"
    },
    {
      icon: "Brush",
      title: "Дизайн интерьера",
      description: "Создание уникального дизайн-проекта под ваш стиль"
    },
    {
      icon: "Hammer",
      title: "Отделочные работы",
      description: "Качественная отделка стен, потолков и полов"
    },
    {
      icon: "Lightbulb",
      title: "Электромонтаж",
      description: "Монтаж электрики с соблюдением всех норм безопасности"
    }
  ];

  const portfolio = [
    {
      image: "https://cdn.poehali.dev/projects/a5cabbb3-c53a-405e-9728-f291e5e288fc/files/64707763-baea-455d-9d8a-f42893d9f482.jpg",
      title: "Квартира в ЖК «Современный»",
      area: "85 м²",
      duration: "45 дней"
    },
    {
      image: "https://cdn.poehali.dev/projects/a5cabbb3-c53a-405e-9728-f291e5e288fc/files/2ca2dc70-128a-42b9-8c97-2e189fc2190e.jpg",
      title: "Офис IT-компании",
      area: "220 м²",
      duration: "60 дней"
    },
    {
      image: "https://cdn.poehali.dev/projects/a5cabbb3-c53a-405e-9728-f291e5e288fc/files/0aa6050a-ec11-47a5-8b28-6dfcd3420d64.jpg",
      title: "Частный дом в Подмосковье",
      area: "150 м²",
      duration: "90 дней"
    }
  ];

  const testimonials = [
    {
      name: "Алексей Морозов",
      text: "Отличная работа! Сделали ремонт квартиры точно в срок, качество на высоте. Особенно порадовало внимание к деталям.",
      rating: 5
    },
    {
      name: "Марина Соколова",
      text: "Профессиональная команда, использовали качественные материалы. Гарантия 3 года дала уверенность в качестве работ.",
      rating: 5
    },
    {
      name: "Дмитрий Васильев",
      text: "Делали ремонт офиса. Работали быстро и аккуратно, не мешали работе сотрудников. Рекомендую!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Hammer" className="text-primary" size={32} />
            <span className="text-2xl font-bold">РемонтПро</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <a href="#calculator" className="hover:text-primary transition-colors">Калькулятор</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:flex">
            <Icon name="Phone" size={18} className="mr-2" />
            +7 (495) 123-45-67
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 text-base px-4 py-2" variant="secondary">
              Гарантия 3 года на все работы
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Ремонт под ключ в Москве
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Качественный ремонт квартир, домов и офисов. Используем только проверенные материалы премиум-класса
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <a href="#calculator">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить нам
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">О компании</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Мы — команда профессионалов с 15-летним опытом в сфере ремонта и отделки. 
              Наша миссия — создавать комфортные пространства, которые радуют наших клиентов годами.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center hover:shadow-xl transition-shadow animate-scale-in">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Гарантия 3 года</h3>
              <p className="text-muted-foreground">
                Письменная гарантия на все виды работ и материалы. Бесплатное устранение дефектов
              </p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-xl transition-shadow animate-scale-in">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" className="text-secondary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Премиум материалы</h3>
              <p className="text-muted-foreground">
                Работаем только с проверенными поставщиками. Все материалы сертифицированы
              </p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-xl transition-shadow animate-scale-in">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Точные сроки</h3>
              <p className="text-muted-foreground">
                Фиксируем сроки в договоре. Штраф за каждый день просрочки
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Калькулятор стоимости</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Рассчитайте примерную стоимость вашего ремонта за 1 минуту
            </p>
          </div>
          <Calculator />
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр ремонтных работ от косметического ремонта до капитальной реконструкции
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={service.icon} className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Портфолио работ</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Более 500 успешно реализованных проектов в Москве и области
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-shadow group cursor-pointer">
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon name="Square" size={16} />
                      <span>{project.area}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Calendar" size={16} />
                      <span>{project.duration}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Более 500 довольных клиентов доверили нам свои проекты
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-primary fill-primary" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground">
              Оставьте заявку, и мы свяжемся с вами в течение 15 минут
            </p>
          </div>
          
          <Card className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Ваше имя</label>
                <Input 
                  placeholder="Введите ваше имя" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="h-12"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Телефон</label>
                <Input 
                  placeholder="+7 (___) ___-__-__" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="h-12"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Сообщение</label>
                <Textarea 
                  placeholder="Расскажите о вашем проекте" 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full text-lg py-6">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </form>
            
            <div className="mt-8 pt-8 border-t grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Icon name="Phone" className="mx-auto mb-2 text-primary" size={24} />
                <p className="font-semibold">Телефон</p>
                <p className="text-muted-foreground">+7 (495) 123-45-67</p>
              </div>
              <div>
                <Icon name="Mail" className="mx-auto mb-2 text-primary" size={24} />
                <p className="font-semibold">Email</p>
                <p className="text-muted-foreground">info@remontpro.ru</p>
              </div>
              <div>
                <Icon name="MapPin" className="mx-auto mb-2 text-primary" size={24} />
                <p className="font-semibold">Адрес</p>
                <p className="text-muted-foreground">Москва, ул. Примерная, 123</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Hammer" size={28} />
                <span className="text-xl font-bold">РемонтПро</span>
              </div>
              <p className="text-background/70">
                Профессиональный ремонт под ключ с гарантией качества
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-background/70">
                <li>Ремонт квартир</li>
                <li>Ремонт офисов</li>
                <li>Ремонт домов</li>
                <li>Дизайн интерьера</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-background/70">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-background/70">
                <li>+7 (495) 123-45-67</li>
                <li>info@remontpro.ru</li>
                <li>Москва, ул. Примерная, 123</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 pt-8 text-center text-background/70">
            <p>&copy; 2024 РемонтПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;