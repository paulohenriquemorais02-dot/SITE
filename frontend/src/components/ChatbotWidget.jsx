import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="fixed bottom-4 right-4 z-50 w-[min(420px,calc(100vw-1.5rem))] h-[min(600px,calc(100vh-2rem))] bg-slate-950/90 border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/30 backdrop-blur-lg">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <div>
              <p className="text-xs text-cyan-200">Assistente IA</p>
              <p className="text-base font-semibold text-white">PHB Soluções</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors text-white"
              aria-label="Fechar chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <iframe
            title="Chatbot PHB"
            src="/chatbot/index.html"
            className="w-full h-[calc(100%-60px)] rounded-b-2xl border-0 bg-white"
            allow="microphone; camera"
          />
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;

