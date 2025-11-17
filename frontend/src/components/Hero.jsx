import React, { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  ArrowRight,
  Check,
  Smartphone,
  Pizza,
  ShoppingCart,
  SmartphoneCharging,
  Globe,
  BarChart3,
  CreditCard,
  Truck,
  Star
} from 'lucide-react';

export const Hero = ({ onCTAClick }) => {

  const highlightItems = [
    {
      key: 'menu',
      icon: Pizza,
      label: 'Cardápios Digitais',
      color: '#F39C12',
      pitch: 'Menus interativos com fotos, combos inteligentes e pedidos direto da mesa.',
      features: ['Upsell automático', 'Integração com WhatsApp', 'Pagamentos instantâneos'],
      prompt:
        'Realistic smartphone mockup showing a modern digital restaurant menu interface, with product cards, prices, food photos, dark theme with neon blue highlights, clean UI, high contrast, reflections, premium design.',
      image: '/Cardápios Digitais.jpg',
    },
    {
      key: 'ecommerce',
      icon: ShoppingCart,
      label: 'E-commerce',
      color: '#00B4D8',
      pitch: 'Lojas completas com carrinho inteligente, retargeting e automação.',
      features: ['Checkout 1-clique', 'Recomendações com IA', 'Relatórios em tempo real'],
      prompt:
        'Realistic smartphone mockup displaying an e-commerce app screen with product grid, shopping cart icon, prices, discount tags, white and blue tech aesthetic, modern UI, soft shadows, high detail.',
      image: '/E-commerce.jpg',
    },
    {
      key: 'apps',
      icon: SmartphoneCharging,
      label: 'Apps Personalizados',
      color: '#9B59B6',
      pitch: 'Apps nativos ou híbridos com fluxos desenhados para o seu processo.',
      features: ['Push segmentado', 'Gamificação', 'Monitoramento 24/7'],
      prompt:
        'Realistic smartphone mockup showing a customizable app dashboard with widgets, statistics, graphs, activity cards, modular components, futuristic interface, blue and purple accents, clean layout.',
      image: '/Apps Personalizados.jpg',
    },
    {
      key: 'sites',
      icon: Globe,
      label: 'Sites Profissionais',
      color: '#1ABC9C',
      pitch: 'Sites rápidos, indexáveis e pensados para conversão.',
      features: ['SEO avançado', 'Blog integrado', 'Áreas restritas seguras'],
      prompt:
        'Realistic smartphone mockup showing a professional business website mobile version, hero banner, navigation menu, service cards, corporate blue color palette, elegant and modern UI design.',
      image: '/Sites Profissionais.jpg',
    },
    {
      key: 'erp',
      icon: BarChart3,
      label: 'Sistemas de Gestão',
      color: '#3498DB',
      pitch: 'ERP sob medida com dashboards, integrações e automação de rotinas.',
      features: ['KPIs em tempo real', 'Workflow customizável', 'Integração com bancos'],
      prompt:
        'Realistic smartphone mockup with a management system dashboard, KPIs, charts, tables, notifications, sidebar navigation, dark theme with cyan accents, tech and corporate look.',
      image: '/Sistemas de Gestão.jpg',
    },
    {
      key: 'fintech',
      icon: CreditCard,
      label: 'Pagamento Online',
      color: '#E67E22',
      pitch: 'Soluções de pagamento integradas e seguras para seu negócio.',
      features: ['Checkout seguro', 'Múltiplas formas de pagamento', 'Relatórios financeiros'],
      prompt:
        'Realistic smartphone mockup showing a payment interface, secure checkout, payment methods, transaction history, clean white interface with blue highlights, minimalistic financial style.',
      image: '/Pagamento Online.jpg',
    },
    {
      key: 'logistics',
      icon: Truck,
      label: 'Delivery Integrado',
      color: '#2ECC71',
      pitch: 'Hub que conecta logística, estoque e atendimento em um só painel.',
      features: ['Roteirização inteligente', 'Tracking em tempo real', 'Alertas proativos'],
      prompt:
        'Realistic smartphone mockup displaying a delivery tracking interface, live map, route line, order status timeline, green tracking accents, modern logistics app UI.',
      image: '/Delivery Integrado.jpg',
    },
    {
      key: 'custom',
      icon: Star,
      label: '+ muito mais…',
      color: '#F1C40F',
      pitch: 'Projetos especiais com IA, visão computacional, voice bots e o que mais imaginar.',
      features: ['Discovery guiado', 'Prototipagem rápida', 'Squad dedicado'],
      prompt:
        'Realistic smartphone mockup showing a dynamic app showcase interface, multiple app icons, futuristic gradient background, holographic elements, emphasizing variety and innovation.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const [selectedMockup, setSelectedMockup] = useState(highlightItems[0]);
  const activeMockup = selectedMockup || highlightItems[0];

  const handleMockupClick = (item) => {
    setSelectedMockup(item);
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="w-full max-w-7xl mx-auto relative z-10">

        {/* TITULO / TEXTO */}
        <div className="text-center mb-20 space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mx-auto max-w-5xl">
            O mercado mudou: apps não são mais luxo, são básico. Você está ficando para trás.
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mx-auto max-w-4xl">
            Ter app já virou padrão — o diferencial agora é inteligência artificial. Negócios que adicionaram IA nos seus apps dominam o mercado: atendem melhor, vendem mais, gastam menos. Quem não tem app ou tem app sem IA? Está perdendo dinheiro todos os dias. Transformação digital completa: criamos seu app do zero com IA integrada ou turbinamos seu app atual com automação inteligente que trabalha 24/7 por você.
          </p>
        </div>

        {/* HERO CARD */}
        <div className="relative mb-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <div className="mb-8">
              <div className="relative inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl blur-xl opacity-40"></div>
                  <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <Smartphone className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Produtos</p>
                  <p className="text-lg font-semibold text-white">Explore a experiência</p>
                </div>
              </div>
            </div>

            {/* LISTA */}
            <div className="space-y-3 text-white/80 flex flex-col items-start">
              {highlightItems.map((item) => {
                const isActive = selectedMockup?.key === item.key;
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => handleMockupClick(item)}
                    className={`group flex items-center gap-3 px-4 py-2 rounded-full border transition-all duration-300 w-full text-left focus:outline-none focus:ring-2 focus:ring-cyan-400/70 ${
                      isActive
                        ? 'bg-white/10 border-cyan-400/60 shadow-lg shadow-cyan-500/20'
                        : 'bg-white/5 border-white/10 hover:border-cyan-400/50'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center" style={{ color: item.color }}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[15px] font-medium text-cyan-50 flex-1">{item.label}</span>
                    <ArrowRight className={`w-4 h-4 ${isActive ? 'text-cyan-200' : 'text-slate-300 group-hover:text-cyan-300'}`} />
                  </button>
                );
              })}
            </div>

            {/* CTA */}
            <div className="w-full max-w-sm mt-10">
              <Button
                onClick={onCTAClick}
                size="lg"
                className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white text-lg shadow-xl transition-all duration-300"
              >
                Consulta Gratuita
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 blur-3xl"></div>
            <div className="relative rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden bg-slate-900/50">
              <div className="relative w-full aspect-[4/3] flex items-center justify-center">
                <img
                  src={activeMockup.image}
                  alt={activeMockup.label}
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left pointer-events-none">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/70 mb-2">PRÉ-VISUALIZAÇÃO</p>
                  <p className="text-2xl font-semibold text-white mb-2">{activeMockup.label}</p>
                  <p className="text-sm text-slate-200">{activeMockup.pitch}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="text-center mt-10">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-cyan-400" />
              <span>100% gratuito, sem compromisso</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-cyan-400" />
              <span>Consultoria direta comigo, não com robô</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-cyan-400" />
              <span>Soluções práticas para o SEU negócio específico</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
