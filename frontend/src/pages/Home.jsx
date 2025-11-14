import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Menu, X, Cpu, Zap } from 'lucide-react';
import { Hero } from '../components/Hero';
import { Testimonials } from '../components/Testimonials';
import { Projects } from '../components/Projects';
import { Footer } from '../components/Footer';
import { Toaster } from '../components/ui/sonner';

export const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleCTAClick = () => {
    const typebotUrl = 'https://typebot.io/?utm_source=litebadge';
    window.open(typebotUrl, '_blank', 'noopener,noreferrer');
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
              <button onClick={() => scrollToSection('projects')} className="text-slate-300 hover:text-cyan-400 transition-colors font-medium relative group">
                Projetos
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-slate-300 hover:text-cyan-400 transition-colors font-medium relative group">
                Depoimentos
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </button>
              <Button onClick={handleCTAClick} className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white border-0 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300">
                <Zap className="w-4 h-4 mr-2" />
                Consultoria Gratuita
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
              <button onClick={() => scrollToSection('projects')} className="text-left text-slate-300 hover:text-cyan-400 transition-colors font-medium">Projetos</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-left text-slate-300 hover:text-cyan-400 transition-colors font-medium">Depoimentos</button>
              <Button onClick={handleCTAClick} className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white w-full">
                Consultoria Gratuita
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <Hero onCTAClick={handleCTAClick} />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section - Simplified */}
      <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <div className="mb-12">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              Pronto para <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Transformar</span> seu Negócio?
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Agende sua consultoria gratuita de 30 minutos e descubra como podemos ajudar
            </p>
            <Button 
              onClick={handleCTAClick}
              size="lg" 
              className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white text-xl px-12 py-6 shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300 border-0"
            >
              Quero Minha Consultoria Gratuita de 30min
              <Zap className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
