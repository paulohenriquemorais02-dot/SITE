import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import {
  Building2,
  Apple,
  Users,
  Plane,
  Scissors,
  UtensilsCrossed,
  Stethoscope,
  ShoppingCart,
  Sparkles,
  ArrowRight,
  Check,
  Star,
  Menu,
  X,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import { mockData } from '../mock';
import { useToast } from '../hooks/use-toast';
import { Toaster } from '../components/ui/sonner';
import { toast } from 'sonner';

const iconMap = {
  Building2,
  Apple,
  Users,
  Plane,
  Scissors,
  UtensilsCrossed,
  Stethoscope,
  ShoppingCart
};

export const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-right" />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">PHB</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-orange-600 transition-colors font-medium">Serviços</button>
              <button onClick={() => scrollToSection('niches')} className="text-gray-600 hover:text-orange-600 transition-colors font-medium">Nichos</button>
              <button onClick={() => scrollToSection('cases')} className="text-gray-600 hover:text-orange-600 transition-colors font-medium">Cases</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-600 hover:text-orange-600 transition-colors font-medium">Depoimentos</button>
              <Button onClick={() => scrollToSection('contact')} className="bg-orange-600 hover:bg-orange-700 text-white">
                Contato
              </Button>
            </nav>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-orange-600 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="flex flex-col space-y-4 px-4 py-6">
              <button onClick={() => scrollToSection('services')} className="text-left text-gray-600 hover:text-orange-600 transition-colors font-medium">Serviços</button>
              <button onClick={() => scrollToSection('niches')} className="text-left text-gray-600 hover:text-orange-600 transition-colors font-medium">Nichos</button>
              <button onClick={() => scrollToSection('cases')} className="text-left text-gray-600 hover:text-orange-600 transition-colors font-medium">Cases</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-left text-gray-600 hover:text-orange-600 transition-colors font-medium">Depoimentos</button>
              <Button onClick={() => scrollToSection('contact')} className="bg-orange-600 hover:bg-orange-700 text-white w-full">
                Contato
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 border-0">
                Desenvolvimento de Apps Inovadores
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transformamos suas ideias em
                <span className="text-orange-600"> aplicativos incríveis</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Da gestão empresarial ao e-commerce, criamos soluções personalizadas com inteligência artificial para qualquer nicho de mercado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => scrollToSection('contact')} size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8">
                  Comece Seu Projeto
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button onClick={() => scrollToSection('services')} size="lg" variant="outline" className="text-lg px-8 border-2 border-gray-300 hover:border-orange-600 hover:text-orange-600">
                  Ver Serviços
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-3xl blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NjMwNDIzMTR8MA&ixlib=rb-4.1.0&q=85"
                alt="App Development"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 border-0 mb-4">
              Nossos Serviços
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Soluções Completas para Seu Negócio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desenvolvemos aplicativos com tecnologia de ponta e inteligência artificial para diversos segmentos
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {mockData.services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-200 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <CardHeader>
                    <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-gray-900">{service.title}</CardTitle>
                    <CardDescription className="text-base text-gray-600">{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Niches Section */}
      <section id="niches" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 border-0 mb-4">
              Nichos Atendidos
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Atendemos Todos os Segmentos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De barbearias a clínicas, criamos apps personalizados para o seu negócio
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockData.niches.map((niche) => {
              const Icon = iconMap[niche.icon];
              return (
                <Card key={niche.id} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-200 overflow-hidden cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={niche.image}
                      alt={niche.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                      <div className="text-white">
                        <Icon className="w-8 h-8 mb-2" />
                        <h3 className="text-xl font-bold">{niche.name}</h3>
                      </div>
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <p className="text-gray-600">{niche.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 border-0 mb-4">
              Cases de Sucesso
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Projetos que Transformaram Negócios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja como ajudamos empresas a alcançarem resultados extraordinários
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {mockData.cases.map((caseItem) => (
              <Card key={caseItem.id} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-200 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={caseItem.image}
                    alt={caseItem.client}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-orange-600 text-white border-0">{caseItem.industry}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">{caseItem.client}</CardTitle>
                  <CardDescription className="text-base text-gray-600">{caseItem.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start space-x-2 bg-orange-50 p-4 rounded-lg">
                    <Check className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <p className="font-semibold text-orange-700">{caseItem.results}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 border-0 mb-4">
              Depoimentos
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Satisfação e resultados são nossa prioridade
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {mockData.testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-xl transition-shadow duration-300 border-2">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg text-gray-900">{testimonial.name}</CardTitle>
                      <CardDescription className="text-sm">{testimonial.role}</CardDescription>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 border-0 mb-4">
              Entre em Contato
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Vamos Criar Algo Incrível Juntos
            </h2>
            <p className="text-xl text-gray-600">
              Preencha o formulário e nossa equipe entrará em contato em até 24 horas
            </p>
          </div>
          
          <Card className="border-2 shadow-xl">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">Nome Completo</label>
                    <Input
                      type="text"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="border-2 focus:border-orange-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">E-mail</label>
                    <Input
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="border-2 focus:border-orange-600"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">Telefone</label>
                  <Input
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="border-2 focus:border-orange-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">Mensagem</label>
                  <Textarea
                    placeholder="Conte-nos sobre seu projeto..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="border-2 focus:border-orange-600"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-orange-600 hover:bg-orange-700 text-white text-lg">
                  Enviar Mensagem
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">PHB</span>
              </div>
              <p className="text-gray-400">
                Transformando ideias em aplicativos inovadores com inteligência artificial.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Serviços</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-orange-500 transition-colors cursor-pointer">Apps de Gestão</li>
                <li className="hover:text-orange-500 transition-colors cursor-pointer">Apps de Nutrição</li>
                <li className="hover:text-orange-500 transition-colors cursor-pointer">CRM Personalizado</li>
                <li className="hover:text-orange-500 transition-colors cursor-pointer">Apps de Viagem</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-orange-500 transition-colors cursor-pointer">Sobre Nós</li>
                <li className="hover:text-orange-500 transition-colors cursor-pointer">Cases de Sucesso</li>
                <li className="hover:text-orange-500 transition-colors cursor-pointer">Blog</li>
                <li className="hover:text-orange-500 transition-colors cursor-pointer">Carreiras</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Contato</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-orange-500" />
                  <span>contato@phb.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-orange-500" />
                  <span>(11) 9999-9999</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  <span>São Paulo, SP</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 PHB Desenvolvimento de Apps. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;