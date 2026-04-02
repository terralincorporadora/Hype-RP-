/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Download, Copy, Check, Share2, Calendar, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [copied, setCopied] = useState(false);

  const invitationText = `Bom dia!! ☀️

Acabei de conhecer todos os detalhes do Hype Ricardo Paranhos, o próximo lançamento de compactos do marista. Fiquei surpreso com o potencial deste investimento. Você precisa conhecer! 

⚠️ O último lançamento como este vendeu todas as unidades em poucas horas, e a boa notícia é que neste sábado já teremos o primeiro evento confirmado para clientes. 

☕ Café da Manhã (à partir das 09h)
📅 Sábado, 11 de Abril
📍 Espaço Terral

Posso confirmar sua presença?`;

  const invitationImageUrl = "https://i.ibb.co/Rp2cPhbJ/convites-caf-jpg.jpg";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(invitationText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = invitationImageUrl;
    link.download = 'convite-hype-ricardo-paranhos.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-md mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="font-bold text-xl tracking-tight text-slate-800">Material de Lançamento</h1>
          <div className="w-8 h-8 overflow-hidden rounded-lg">
            <img 
              src="https://i.ibb.co/fY3XWcG9/TERR-0002-000-DE-GRAFISMO-T-PREENCHIDO-POS-RGB.png" 
              alt="Logo Terral" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-6 py-8 space-y-8 pb-24">
        {/* Welcome Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-2"
        >
          <h2 className="text-2xl font-bold text-slate-900">Olá, Corretor!</h2>
          <p className="text-slate-600 leading-relaxed">
            Aqui está o material pronto para compartilhar com seus clientes sobre o nosso próximo café da manhã de lançamento.
          </p>
        </motion.section>

        {/* Image Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <Share2 className="w-5 h-5 text-blue-500" />
              Imagem de Convite
            </h3>
          </div>
          
          <div className="relative group rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
            <img 
              src={invitationImageUrl} 
              alt="Preview Convite" 
              className="w-full aspect-[9/16] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
               <button 
                onClick={handleDownload}
                className="bg-white text-slate-900 px-6 py-3 rounded-full font-bold flex items-center gap-2 shadow-xl transform scale-90 group-hover:scale-100 transition-transform"
              >
                <Download className="w-5 h-5" />
                Baixar Imagem
              </button>
            </div>
          </div>
          
          <button 
            onClick={handleDownload}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-200 transition-all active:scale-[0.98] sm:hidden"
          >
            <Download className="w-5 h-5" />
            Baixar para enviar
          </button>
        </motion.section>

        {/* Text Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <Copy className="w-5 h-5 text-blue-500" />
            Texto de Convite
          </h3>
          
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative group">
            <pre className="whitespace-pre-wrap font-sans text-slate-700 text-sm leading-relaxed">
              {invitationText}
            </pre>
            
            <button 
              onClick={handleCopy}
              className={`absolute top-4 right-4 p-2 rounded-lg transition-all ${
                copied ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
            </button>
          </div>

          <button 
            onClick={handleCopy}
            className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-lg ${
              copied 
                ? 'bg-green-600 text-white shadow-green-100' 
                : 'bg-slate-900 text-white shadow-slate-200 hover:bg-slate-800'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-5 h-5" />
                Copiado para a área de transferência!
              </>
            ) : (
              <>
                <Copy className="w-5 h-5" />
                Copiar texto para WhatsApp
              </>
            )}
          </button>
        </motion.section>

        {/* Event Details Card */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-blue-50 border border-blue-100 rounded-2xl p-6 space-y-4"
        >
          <h4 className="font-bold text-blue-900">Lembrete do Evento</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-blue-800">
              <Calendar className="w-5 h-5 opacity-70" />
              <span className="text-sm font-medium">Sábado, 11 de Abril, 09:00 AM</span>
            </div>
            <div className="flex items-center gap-3 text-blue-800">
              <MapPin className="w-5 h-5 opacity-70" />
              <div className="flex flex-col">
                <span className="text-sm font-bold">Espaço Terral</span>
                <span className="text-xs opacity-80">Rua 1132, Qd. 235, Lts. 5/6, Setor Marista</span>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer / Quick Action */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-slate-200 p-4 sm:hidden">
        <div className="max-w-md mx-auto flex gap-3">
          <button 
            onClick={handleDownload}
            className="flex-1 bg-slate-100 text-slate-900 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            Imagem
          </button>
          <button 
            onClick={handleCopy}
            className="flex-[2] bg-blue-600 text-white py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-100"
          >
            <Copy className="w-4 h-4" />
            Copiar Convite
          </button>
        </div>
      </footer>
    </div>
  );
}

