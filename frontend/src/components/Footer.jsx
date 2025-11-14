import React from 'react';
import { Phone, Cpu } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative bg-slate-950 border-t border-slate-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Coluna 1 - Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl blur-md opacity-75"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Cpu className="w-7 h-7 text-white" />
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">PHB</span>
                <span className="text-xl font-light text-cyan-400 ml-1">Soluções</span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Desenvolvemos apps e sites sob medida que resolvem problemas reais do seu negócio. Nosso diferencial é implementar inteligência artificial que automatiza processos, reduz custos e escala suas operações — tudo isso sem você precisar entender de tecnologia.
            </p>
          </div>
          
          {/* Coluna 2 - Serviços */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-cyan-400">Serviços</h3>
            <ul className="space-y-3 text-slate-400">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Apps de Gestão</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Apps de Nutrição</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">CRM Personalizado</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Apps de Viagem</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">E-commerce Completo</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Sistemas com IA</li>
            </ul>
          </div>
          
          {/* Coluna 3 - Contato */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-cyan-400">Contato</h3>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                  <Phone className="w-5 h-5 text-cyan-400" />
                </div>
                <a 
                  href="tel:+557999833027" 
                  className="group-hover:text-cyan-400 transition-colors"
                >
                  📱 +55 79 9983-3027
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-500">&copy; 2024 PHB Soluções. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

