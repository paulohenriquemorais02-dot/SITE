import React, { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTypebot, setShowTypebot] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    const handleOpenTypebot = () => {
      setIsOpen(true);
      setShowTypebot(true);
    };

    window.addEventListener('phb:open-chatbot', handleOpen);
    window.addEventListener('phb:open-typebot', handleOpenTypebot);
    window.addEventListener('phb:close-chatbot', handleClose);

    return () => {
      window.removeEventListener('phb:open-chatbot', handleOpen);
      window.removeEventListener('phb:open-typebot', handleOpenTypebot);
      window.removeEventListener('phb:close-chatbot', handleClose);
    };
  }, []);

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 px-5 py-3 text-white shadow-lg shadow-cyan-500/40 hover:shadow-xl hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          aria-label="Abrir chat inteligente"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="hidden sm:inline text-sm font-semibold">Chat inteligente</span>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-4 right-4 z-50 w-[min(420px,calc(100vw-1.5rem))] h-[min(600px,calc(100vh-2rem))] bg-slate-950/90 border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/30 backdrop-blur-lg flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div>
                <p className="text-xs text-cyan-200">Assistente IA</p>
                <p className="text-base font-semibold text-white">PHB Soluções</p>
              </div>
              {!showTypebot && (
                <button
                  onClick={() => setShowTypebot(true)}
                  className="ml-2 px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white text-xs font-semibold rounded-full shadow-lg transition-all duration-300"
                  aria-label="Abrir Consulta Gratuita"
                >
                  Consulta Gratuita + muito mais…
                </button>
              )}
            </div>
            <div className="flex items-center gap-2">
              {showTypebot && (
                <button
                  onClick={() => setShowTypebot(false)}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors text-white"
                  aria-label="Voltar ao Chat"
                  title="Voltar ao Chat"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </button>
              )}
              <button
                onClick={() => {
                  setIsOpen(false);
                  setShowTypebot(false);
                }}
                className="p-2 rounded-full hover:bg-white/10 transition-colors text-white"
                aria-label="Fechar chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
          {showTypebot ? (
            <div className="flex-1 overflow-hidden bg-white relative">
              <iframe
                title="Typebot Consulta Gratuita"
                src="https://viewer.typebot.io/my-typebot-ndyet84"
                className="w-full h-full rounded-b-2xl border-0"
                allow="microphone; camera"
                style={{ border: 'none' }}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
              />
              {/* Overlay para ocultar completamente "Made with Typebot" */}
              <div 
                className="absolute bottom-0 left-0 right-0 bg-white z-20 pointer-events-none"
                style={{ 
                  height: '60px',
                  background: 'white',
                  boxShadow: '0 -5px 10px rgba(0, 0, 0, 0.05)'
                }}
              />
            </div>
          ) : (
            <iframe
              title="Chatbot PHB"
              src="/chatbot/index.html"
              className="w-full h-[calc(100%-60px)] rounded-b-2xl border-0 bg-white"
              allow="microphone; camera"
            />
          )}
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;

