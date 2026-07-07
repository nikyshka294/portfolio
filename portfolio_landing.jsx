import React, { useState, useEffect } from 'react';
import { ChevronRight, Play } from 'lucide-react';

export default function PortfolioLanding() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const portfolioItems = [
    {
      id: 1,
      title: 'Реклама продукта',
      category: 'Видеоролик',
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      price: '15 000₽'
    },
    {
      id: 2,
      title: 'Промо для соцсетей',
      category: 'TikTok/Shorts',
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      price: '8 000₽'
    },
    {
      id: 3,
      title: 'Корпоративный видео',
      category: 'Full HD',
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      price: '20 000₽'
    },
    {
      id: 4,
      title: 'Анимационное видео',
      category: 'Motion Graphics',
      image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      price: '25 000₽'
    }
  ];

  const pricing = [
    {
      name: 'Базовый',
      price: '8 000',
      description: 'Коротко видео для соцсетей',
      features: ['До 60 секунд', 'Базовая цветокоррекция', '2 версии']
    },
    {
      name: 'Стандарт',
      price: '15 000',
      description: 'Полноценный видеоролик',
      features: ['До 5 минут', 'Профессиональный монтаж', 'Звуковое оформление', '3 версии'],
      featured: true
    },
    {
      name: 'Премиум',
      price: '30 000',
      description: 'Сложный проект с эффектами',
      features: ['Неограниченная длина', '3D анимация', 'Цветокоррекция 4K', '5 версий']
    }
  ];

  return (
    <div className="bg-white text-gray-900 overflow-hidden">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Portfolio</div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#portfolio" className="hover:text-gray-600 transition">Работы</a>
            <a href="#pricing" className="hover:text-gray-600 transition">Прайс</a>
            <a href="#contact" className="hover:text-gray-600 transition">Контакты</a>
          </div>
          <button className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition">
            Заказать
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div 
              className="space-y-6"
              style={{
                transform: `translateY(${scrollY * 0.3}px)`,
                opacity: 1 - scrollY / 1000
              }}
            >
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Создаю видео,<br />которое вдохновляет
              </h1>
              <p className="text-xl text-gray-600 max-w-md">
                От идеи до готового видеоролика. Профессиональный монтаж, цветокоррекция и звуковое оформление.
              </p>
              <div className="flex gap-4 pt-4">
                <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition flex items-center gap-2">
                  Начать проект <ChevronRight size={18} />
                </button>
                <button className="border border-gray-300 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition flex items-center gap-2">
                  <Play size={18} /> Смотреть примеры
                </button>
              </div>
            </div>

            {/* Right visual */}
            <div 
              className="relative h-96 rounded-3xl overflow-hidden"
              style={{
                transform: `translateY(${scrollY * 0.2}px)`,
              }}
            >
              <div 
                className="w-full h-full flex items-center justify-center text-white text-2xl font-bold"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                }}
              >
                <Play size={64} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold">50+</div>
              <div className="text-gray-600 mt-2">Завершённых проектов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">100+</div>
              <div className="text-gray-600 mt-2">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">8+</div>
              <div className="text-gray-600 mt-2">Лет опыта</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Последние работы</h2>
            <p className="text-gray-600 text-lg">Избранные проекты, которые я люблю</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className="group cursor-pointer"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="relative h-64 rounded-2xl overflow-hidden bg-gray-100">
                  <div
                    className="w-full h-full group-hover:scale-105 transition duration-500"
                    style={{ background: item.image }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
                  <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <Play size={48} className="text-white" />
                  </button>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">{item.category}</p>
                  <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
                  <p className="text-lg font-bold text-gray-900 mt-2">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Прозрачный прайс</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Выберите пакет, который подходит для вашего проекта. Все цены включают консультацию и доработки.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 transition ${
                  plan.featured
                    ? 'bg-gray-900 text-white ring-2 ring-gray-900 scale-105'
                    : 'bg-white border border-gray-200'
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-6 ${plan.featured ? 'text-gray-300' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className={plan.featured ? 'text-gray-300' : 'text-gray-600'}>₽</span>
                </div>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition mb-8 ${
                    plan.featured
                      ? 'bg-white text-gray-900 hover:bg-gray-100'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  Выбрать
                </button>
                <div className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center text-sm font-bold ${
                        plan.featured ? 'bg-white text-gray-900' : 'bg-gray-200'
                      }`}>
                        ✓
                      </div>
                      <span className={plan.featured ? 'text-gray-100' : 'text-gray-700'}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы начать?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Напишите мне о вашем проекте, и мы обсудим все детали. Первая консультация бесплатна.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gray-900 text-white px-10 py-4 rounded-full font-semibold hover:bg-gray-800 transition text-lg">
              Написать в Telegram
            </button>
            <button className="border-2 border-gray-900 text-gray-900 px-10 py-4 rounded-full font-semibold hover:bg-gray-50 transition text-lg">
              Email: hello@portfolio.com
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p>© 2024 Portfolio. Все права защищены.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
