import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';

const recentProjects = [
  {
    id: 1,
    name: 'DClamps',
    category: 'App de Gestão Empresarial com IA',
    description: 'O DClamps é nosso projeto mais recente e com maior quantidade de funcionalidades entregues até agora. É um app completo de gestão empresarial com inteligência artificial integrada capaz de entender todo o sistema da empresa. Analisa funcionários, materiais, estoque e muito mais. A IA conversa por voz, texto, imagens e até vídeos, tornando a gestão empresarial acessível e inteligente. O sistema automatiza processos, fornece insights em tempo real e facilita a tomada de decisões estratégicas.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    isFeatured: true
  },
  {
    id: 2,
    name: 'Closet Inteligente',
    category: 'App de Moda com IA',
    description: 'App revolucionário que permite armazenar fotos das suas roupas e transformá-las em um manequim virtual idêntico às peças fotografadas. Facilita a escolha de looks sem precisar olhar no armário real — tudo pode ser feito dentro do app. A inteligência artificial sugere combinações de roupas baseadas em ocasião, clima e tendências, economizando horas de tempo. Evita sair fora de moda ou inadequado para cada ocasião, funcionando como um personal stylist no bolso.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8',
    isFeatured: false
  },
  {
    id: 3,
    name: 'NutriTrack Pro',
    category: 'App de Nutrição para Profissionais',
    description: 'Aplicativo desenvolvido para nutricionistas, academias e personal trainers que ajuda seus alunos a terem controle preciso da alimentação sem dor de cabeça. O diferencial é a análise por foto ou áudio: o usuário tira uma foto do prato ou envia um áudio descrevendo a refeição, e a IA calcula automaticamente calorias, macronutrientes, micronutrientes e porções. Elimina a necessidade de pesar alimentos ou fazer cálculos manuais, tornando o acompanhamento nutricional simples e preciso.',
    image: 'https://images.pexels.com/photos/8939267/pexels-photo-8939267.jpeg',
    isFeatured: false
  }
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="projects" className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30 backdrop-blur-sm mb-6">
              Projetos
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              Projetos <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Recent</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Veja nossos projetos mais recentes que estão transformando negócios com inteligência artificial
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {recentProjects.map((project) => (
              <Card 
                key={project.id} 
                className={`group bg-slate-900/50 backdrop-blur-sm border-slate-800 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 ${
                  project.isFeatured ? 'lg:col-span-2 lg:row-span-1' : ''
                }`}
              >
                <div className="relative h-64 lg:h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white border-0 shadow-lg">
                      {project.category}
                    </Badge>
                  </div>
                  {project.isFeatured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-yellow-500/90 text-slate-900 border-0 shadow-lg font-bold">
                        ⭐ Destaque
                      </Badge>
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl lg:text-3xl text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-base text-slate-400">
                    {project.category}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={() => openProjectModal(project)}
                    variant="outline" 
                    className="w-full border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
                  >
                    Ver Detalhes
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de Projeto */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-3xl bg-slate-900 border-slate-800 text-white max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl text-cyan-400">{selectedProject.name}</DialogTitle>
                <DialogDescription className="text-cyan-300 text-lg pt-2">
                  {selectedProject.category}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <p className="text-slate-300 leading-relaxed text-lg whitespace-pre-line">
                  {selectedProject.description}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

