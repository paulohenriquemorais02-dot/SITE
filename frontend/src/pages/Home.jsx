import React, { useState, useEffect } from 'react';
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
  MapPin,
  Zap,
  Code,
  Cpu,
  Layers
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
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
      <Toaster position="top-right" />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Dot Grid Pattern */}
      <div className="fixed inset-0 bg-dot-pattern opacity-20 pointer-events-none"></div>
      
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-cyan-500/5' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
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
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('services')} className="text-slate-300 hover:text-cyan-400 transition-colors font-medium relative group">
                Serviços
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => scrollToSection('niches')} className="text-slate-300 hover:text-cyan-400 transition-colors font-medium relative group">
                Nichos
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => scrollToSection('cases')} className="text-slate-300 hover:text-cyan-400 transition-colors font-medium relative group">
                Cases
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-slate-300 hover:text-cyan-400 transition-colors font-medium relative group">
                Depoimentos
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </button>
              <Button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white border-0 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300">
                <Zap className="w-4 h-4 mr-2" />
                Contato
              </Button>
            </nav>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-cyan-400 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-cyan-500/20">
            <nav className="flex flex-col space-y-4 px-4 py-6">
              <button onClick={() => scrollToSection('services')} className="text-left text-slate-300 hover:text-cyan-400 transition-colors font-medium">Serviços</button>
              <button onClick={() => scrollToSection('niches')} className="text-left text-slate-300 hover:text-cyan-400 transition-colors font-medium">Nichos</button>
              <button onClick={() => scrollToSection('cases')} className="text-left text-slate-300 hover:text-cyan-400 transition-colors font-medium">Cases</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-left text-slate-300 hover:text-cyan-400 transition-colors font-medium">Depoimentos</button>
              <Button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white w-full">
                Contato
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300">
                <Sparkles className="w-4 h-4 mr-2" />
                Desenvolvimento de Apps Inovadores
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Transformamos suas
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient"> ideias em realidade digital</span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed">
                Da gestão empresarial ao e-commerce, criamos soluções personalizadas com inteligência artificial para qualquer nicho de mercado. Tecnologia de ponta, resultados extraordinários.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => scrollToSection('contact')} size="lg" className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white text-lg px-8 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 border-0">
                  Comece Seu Projeto
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button onClick={() => scrollToSection('services')} size="lg" variant="outline" className="text-lg px-8 border-2 border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 backdrop-blur-sm transition-all duration-300">
                  <Code className="mr-2 w-5 h-5" />
                  Ver Serviços
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">500+</div>
                  <div className="text-sm text-slate-400 mt-1">Projetos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">98%</div>
                  <div className="text-sm text-slate-400 mt-1">Satisfação</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">24/7</div>
                  <div className="text-sm text-slate-400 mt-1">Suporte</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-purple-600/30 rounded-3xl blur-3xl animate-pulse"></div>
              <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
                <img
                  src="https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NjMwNDIzMTR8MA&ixlib=rb-4.1.0&q=85"
                  alt="App Development"
                  className="relative w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl opacity-20 blur-xl animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl opacity-20 blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30 backdrop-blur-sm mb-6">
              <Layers className="w-4 h-4 mr-2" />
              Nossos Serviços
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              Soluções <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Completas</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Desenvolvemos aplicativos com tecnologia de ponta e inteligência artificial para diversos segmentos
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {mockData.services.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <Card key={service.id} className="group bg-slate-900/50 backdrop-blur-sm border-slate-800 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/20 group-hover:to-purple-500/20 transition-all duration-500"></div>
                  </div>
                  <CardHeader>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                      <div className="relative w-14 h-14 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-white group-hover:text-cyan-400 transition-colors duration-300">{service.title}</CardTitle>
                    <CardDescription className="text-base text-slate-400">{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Niches Section */}
      <section id="niches" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30 backdrop-blur-sm mb-6">
              Nichos Atendidos
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Atendemos</span> Todos os Segmentos
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              De barbearias a clínicas, criamos apps personalizados para transformar o seu negócio
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockData.niches.map((niche, index) => {
              const Icon = iconMap[niche.icon];
              return (
                <Card key={niche.id} className="group bg-slate-900/50 backdrop-blur-sm border-slate-800 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={niche.image}
                      alt={niche.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-transparent"></div>
                    <div className="absolute inset-0 flex items-end p-6">
                      <div className="text-white">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-3 shadow-lg shadow-cyan-500/30">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold">{niche.name}</h3>
                      </div>
                    </div>
                  </div>
                  <CardContent className="pt-6 bg-slate-900/50">
                    <p className="text-slate-400">{niche.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30 backdrop-blur-sm mb-6">
              Cases de Sucesso
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              Projetos que <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Transformaram</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Veja como ajudamos empresas a alcançarem resultados extraordinários
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {mockData.cases.map((caseItem, index) => (
              <Card key={caseItem.id} className="group bg-slate-900/50 backdrop-blur-sm border-slate-800 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={caseItem.image}
                    alt={caseItem.client}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white border-0 shadow-lg">{caseItem.industry}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-white group-hover:text-cyan-400 transition-colors duration-300">{caseItem.client}</CardTitle>
                  <CardDescription className="text-base text-slate-400">{caseItem.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start space-x-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-4 rounded-lg border border-cyan-500/20">
                    <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <p className="font-semibold text-cyan-300">{caseItem.results}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30 backdrop-blur-sm mb-6">
              Depoimentos
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              O Que Nossos <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Clientes</span> Dizem
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Satisfação e resultados são nossa prioridade
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {mockData.testimonials.map((testimonial, index) => (
              <Card key={testimonial.id} className="bg-slate-900/50 backdrop-blur-sm border-slate-800 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full blur-md opacity-50"></div>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="relative w-16 h-16 rounded-full object-cover border-2 border-cyan-500/30"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-white">{testimonial.name}</CardTitle>
                      <CardDescription className="text-sm text-slate-400">{testimonial.role}</CardDescription>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-cyan-400 text-cyan-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 italic leading-relaxed">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30 backdrop-blur-sm mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Entre em Contato
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              Vamos Criar Algo <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Incrível</span>
            </h2>
            <p className="text-xl text-slate-400">
              Preencha o formulário e nossa equipe entrará em contato em até 24 horas
            </p>
          </div>
          
          <Card className="bg-slate-900/50 backdrop-blur-xl border-slate-800 shadow-2xl">
            <CardContent className="pt-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-cyan-300">Nome Completo</label>
                    <Input
                      type="text"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-slate-950/50 border-slate-700 focus:border-cyan-500 text-white placeholder:text-slate-500 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-cyan-300">E-mail</label>
                    <Input
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-slate-950/50 border-slate-700 focus:border-cyan-500 text-white placeholder:text-slate-500 transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-cyan-300">Telefone</label>
                  <Input
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="bg-slate-950/50 border-slate-700 focus:border-cyan-500 text-white placeholder:text-slate-500 transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-cyan-300">Mensagem</label>
                  <Textarea
                    placeholder="Conte-nos sobre seu projeto..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-slate-950/50 border-slate-700 focus:border-cyan-500 text-white placeholder:text-slate-500 transition-all duration-300"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white text-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 border-0">
                  Enviar Mensagem
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-slate-950 border-t border-slate-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
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
                Transformando ideias em aplicativos inovadores com inteligência artificial.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4 text-cyan-400">Serviços</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Apps de Gestão</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Apps de Nutrição</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">CRM Personalizado</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Apps de Viagem</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4 text-cyan-400">Empresa</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Sobre Nós</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Cases de Sucesso</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Blog</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Carreiras</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4 text-cyan-400">Contato</h3>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="group-hover:text-cyan-400 transition-colors">contato@phb.com</span>
                </li>
                <li className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="group-hover:text-cyan-400 transition-colors">(11) 9999-9999</span>
                </li>
                <li className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="group-hover:text-cyan-400 transition-colors">São Paulo, SP</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-500">&copy; 2025 PHB Soluções. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;