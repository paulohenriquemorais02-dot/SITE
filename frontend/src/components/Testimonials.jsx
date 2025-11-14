import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Júlio Fernandes',
    company: 'Mercadinho São Jorge',
    headline: 'Parcelei e já tá se pagando',
    content: 'Eu ia deixar pra depois porque achei que não ia dar pra pagar de uma vez. Aí o Breno me explicou que dava pra parcelar tranquilo e que o app ia gerar vendas pra pagar ele mesmo. Não acreditei muito, mas topei. Resultado? Em 3 meses as vendas online já cobriram o investimento. Agora tenho delivery próprio, não pago mais 25% de taxa pra app de terceiro. Valeu cada centavo.',
    rating: 5,
    initials: 'JF'
  },
  {
    id: 2,
    name: 'Amanda Costa',
    company: 'Clínica Fisio+',
    headline: 'Desconfiada? Era eu. Mas deu super certo',
    content: 'Já tinha gasto dinheiro com site que não deu em nada. Fiquei com o pé atrás. Mas o diferencial da PHB foi que eles realmente entenderam meu negócio. Não empurraram nada pronto, criaram do jeito que EU precisava. O sistema de agendamento reduziu meus "furos" em 90%. Antes perdia uns 15 horários por mês, agora quase zero. E meus pacientes acham super moderno.',
    rating: 5,
    initials: 'AC'
  },
  {
    id: 3,
    name: 'Thiago Almeida',
    company: 'Auto Elétrica TH',
    headline: 'Auto elétrica com app? Pensei que era maluquice',
    content: 'Quando me falaram de app pra oficina eu ri. "Quem vai agendar troca de bateria por app?" Pensei. Mas o pessoal mostrou os números: 70% dos clientes pesquisam no Google antes de ir na oficina. Hoje tenho app com catálogo de serviços, orçamento online, histórico do carro do cliente... Minha oficina parece high-tech comparado com a concorrência da rua. Ganho cliente todo dia só pela credibilidade.',
    rating: 5,
    initials: 'TA'
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <Badge className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30 backdrop-blur-sm mb-6">
            Depoimentos
          </Badge>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            O Que Nossos <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Clientes</span> Dizem
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-slate-900/50 backdrop-blur-sm border-slate-800 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full blur-md opacity-50"></div>
                    <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center border-2 border-cyan-500/30">
                      <span className="text-white font-bold text-xl">{testimonial.initials}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg text-white">{testimonial.name}</CardTitle>
                    <CardDescription className="text-sm text-cyan-400">{testimonial.company}</CardDescription>
                  </div>
                </div>
                <div className="flex space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-cyan-400 text-cyan-400" />
                  ))}
                </div>
                <h3 className="text-xl font-bold text-cyan-300 mb-2">{testimonial.headline}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 leading-relaxed">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

