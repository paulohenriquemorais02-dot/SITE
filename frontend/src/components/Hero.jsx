import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  ArrowRight,
  Sparkles,
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
    { icon: Pizza, label: 'Cardápios Digitais', color: '#F39C12' },
    { icon: ShoppingCart, label: 'E-commerce', color: '#00B4D8' },
    { icon: SmartphoneCharging, label: 'Apps Personalizados', color: '#9B59B6' },
    { icon: Globe, label: 'Sites Profissionais', color: '#1ABC9C' },
    { icon: BarChart3, label: 'Sistemas de Gestão', color: '#3498DB' },
    { icon: CreditCard, label: 'Pagamento Online', color: '#E74C3C' },
    { icon: Truck, label: 'Delivery Integrado', color: '#2ECC71' },
    { icon: Star, label: '+ muito mais…', color: '#F1C40F' }
  ];

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

        {/* SPLIT SCREEN */}
        <div className="relative mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-[0.35fr_0.65fr] rounded-3xl overflow-hidden shadow-2xl border border-slate-800 backdrop-blur-xl">

            {/* ANTES */}
            <div className="relative bg-slate-900">
              <div className="absolute inset-0 bg-slate-900/85"></div>

              <div className="relative z-20 p-10 h-full min-h-[500px] flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="text-6xl opacity-20">📋</div>

                  <div className="space-y-3">
                    <div className="h-4 bg-slate-700/40 rounded w-3/4"></div>
                    <div className="h-4 bg-slate-700/40 rounded w-2/3"></div>
                    <div className="h-4 bg-slate-700/40 rounded w-full"></div>
                  </div>

                  <div className="space-y-2">
                    <div className="h-2 bg-slate-700/30 rounded w-full"></div>
                    <div className="h-2 bg-slate-700/30 rounded w-4/5"></div>
                    <div className="h-2 bg-slate-700/30 rounded w-3/5"></div>
                  </div>
                </div>

                <div className="text-center">
                  <Badge className="bg-slate-800 text-slate-400 border border-slate-700">
                    Sem transformação digital
                  </Badge>
                </div>
              </div>
            </div>

            {/* DEPOIS */}
            <div className="relative bg-gradient-to-br from-cyan-900/20 via-blue-900/30 to-purple-900/20 border-l border-cyan-500/30">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10"></div>

              <div className="relative z-30 p-10 lg:p-14 min-h-[500px] flex flex-col items-center">

                {/* PHONE ICON */}
                <div className="mb-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl blur-xl opacity-40"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                      <Smartphone className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </div>

                {/* LISTA */}
                <div className="space-y-3 text-white/80 w-full max-w-sm">
                  <div className="flex flex-col gap-3">
                    {highlightItems.map((item, index) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/5 hover:border-cyan-400/40 transition-all duration-300 w-full"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-500/30 flex items-center justify-center text-cyan-200">
                          <item.icon className="w-5 h-5" style={{ color: item.color }} />
                        </div>
                        <span className="text-[15px] font-medium text-cyan-100">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="w-full max-w-sm mt-10">
                  <Button
                    onClick={onCTAClick}
                    size="lg"
                    className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white text-lg shadow-xl transition-all duration-300"
                  >
                    Começar Agora
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>

                {/* BADGE */}
                <div className="absolute bottom-6 right-6">
                  <Badge className="bg-gradient-to-r from-cyan-600/80 to-purple-600/80 text-white border-0">
                    Com PHB Soluções
                  </Badge>
                </div>
              </div>
            </div>

            {/* SETA DESKTOP */}
            <div className="hidden lg:flex items-center justify-center absolute left-[35%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 blur-xl opacity-40"></div>
                <div className="relative bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-2 rounded-full shadow-2xl">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold text-base">TRANSFORMAÇÃO</span>
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* CTA FINAL */}
        <div className="text-center space-y-6">
          <Button
            onClick={onCTAClick}
            size="lg"
            className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white text-xl px-14 py-6 shadow-xl transition-all duration-300"
          >
            Quero Minha Consultoria Gratuita de 30min
            <Sparkles className="ml-2 w-5 h-5" />
          </Button>

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
