
"use client";

import React from 'react';
import Image from 'next/image';
import { Mail, ShieldCheck, Download, MessageCircle, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CreatorAndDelivery() {
  return (
    <div className="flex flex-col">
      {/* NOVA SEÇÃO: INSTAGRAM RURAL PLANNER */}
      <section className="bg-[#0d1f10] pt-20 pb-16 border-t border-border overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          {/* Etiqueta Superior */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-1.5 rounded-full font-black text-[10px] tracking-[0.2em] uppercase mb-6 shadow-lg shadow-primary/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            📲 Acompanhe de Perto
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4 leading-tight">
            Nos siga no Instagram e veja o <span className="text-primary">Rural Planner em ação</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto mb-12 leading-relaxed">
            Dicas de planejamento rural, projetos reais e conteúdo exclusivo toda semana. Ficou com dúvida? É só chamar por lá.
          </p>

          {/* CARD DO PERFIL DO INSTAGRAM */}
          <div className="max-w-[380px] mx-auto bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 relative group">
            {/* BORDA SUPERIOR GRADIENTE INSTAGRAM */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#f9ce34]" />
            
            <div className="p-8">
              {/* Header do Perfil: Foto + Nome */}
              <div className="flex flex-col items-center mb-6">
                <div className="relative mb-4">
                  {/* Círculo com Gradiente Instagram */}
                  <div className="p-1 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#fd1d1d] to-[#833ab4]">
                    <div className="relative w-20 h-20 rounded-full border-2 border-[#1a1a1a] overflow-hidden bg-muted">
                      <Image
                        src="https://www.image2url.com/r2/default/images/1781571112882-16bee3cb-0446-4fda-935a-785186b069c9.jpeg"
                        alt="Ricardo Almeida"
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  </div>
                  {/* Ícone de Câmera Overlay */}
                  <div className="absolute bottom-0 right-0 w-7 h-7 bg-gradient-to-tr from-[#f9ce34] via-[#fd1d1d] to-[#833ab4] rounded-lg flex items-center justify-center border-2 border-[#1a1a1a] shadow-lg">
                    <span className="text-xs">📸</span>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-white font-black text-lg leading-tight mb-0.5">Rural Planner</h3>
                  <p className="text-primary font-bold text-sm">@ruralplanner.oficial</p>
                </div>
              </div>

              {/* BIO */}
              <div className="text-center mb-8 space-y-1">
                <p className="text-white/80 text-xs font-medium italic">🌾 Planejamento rural do jeito certo</p>
                <p className="text-white/80 text-xs font-medium italic">📐 +100 projetos profissionais de sítios</p>
              </div>

              {/* ESTATÍSTICAS */}
              <div className="grid grid-cols-3 gap-2 py-4 border-y border-white/5 mb-8">
                <div className="text-center">
                  <span className="block text-primary font-black text-sm">+100</span>
                  <span className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest">Projetos</span>
                </div>
                <div className="text-center border-x border-white/5">
                  <span className="block text-primary font-black text-sm">12 mil</span>
                  <span className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest">Produtores</span>
                </div>
                <div className="text-center">
                  <span className="block text-primary font-black text-sm">15+</span>
                  <span className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest">Anos exp.</span>
                </div>
              </div>

              {/* PRÉVIA DE POSTS 3x1 */}
              <div className="grid grid-cols-3 gap-1.5 mb-8">
                <div className="aspect-square bg-white/5 rounded-md flex items-center justify-center text-xl hover:bg-white/10 transition-colors cursor-pointer">🌱</div>
                <div className="aspect-square bg-white/5 rounded-md flex items-center justify-center text-xl hover:bg-white/10 transition-colors cursor-pointer">📐</div>
                <div className="aspect-square bg-white/5 rounded-md flex items-center justify-center text-xl hover:bg-white/10 transition-colors cursor-pointer">🌾</div>
              </div>

              {/* BOTÃO PRINCIPAL */}
              <Button 
                asChild
                className="w-full shine-effect bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#f9ce34] hover:opacity-90 hover:scale-[1.02] transition-all text-white font-black uppercase tracking-widest text-[10px] h-12 shadow-xl shadow-red-900/20"
              >
                <a href="https://www.instagram.com/ruralplanner.oficial?igsh=MWgyMGVhY29rczRzZg%3D%3D" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2" size={14} />
                  Ver @ruralplanner.oficial no Instagram
                </a>
              </Button>

              <p className="text-center text-[9px] text-muted-foreground font-medium mt-4">
                Ficou com dúvida? Fala com a gente direto no perfil ✓
              </p>
            </div>
          </div>

          {/* RODAPÉ DA SEÇÃO INSTAGRAM */}
          <p className="mt-12 text-[10px] md:text-xs text-muted-foreground/60 font-medium uppercase tracking-[0.2em]">
            Conteúdo novo toda semana · Dicas reais de planejamento rural · Sem enrolação
          </p>
        </div>
      </section>

      {/* SEÇÃO INTACTA: COMO VOCÊ RECEBE O MATERIAL */}
      <section className="bg-[#0d1f10] pb-20 border-b border-border">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-b from-card to-[#0d1f10] border-2 border-primary rounded-2xl shadow-2xl flex flex-col items-center group relative overflow-hidden h-auto">
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <Download size={120} className="text-primary" />
              </div>
              
              <div className="p-6 md:p-8 w-full flex flex-col items-center text-center md:items-start md:text-left">
                <span className="text-primary font-black text-[10px] tracking-[0.3em] uppercase mb-2 relative z-10">
                  ENTREGA IMEDIATA
                </span>
                <div className="w-12 h-[1px] bg-primary/30 mb-4 relative z-10" />
                <h3 className="text-2xl font-black text-foreground font-headline mb-4 w-full relative z-10">
                  Como Você <span className="text-primary">Recebe o Material</span>
                </h3>
                
                <div className="w-full flex justify-center mb-6 md:justify-start gap-4 relative z-10">
                  <div className="bg-primary/20 p-3 rounded-full border border-primary/30">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <div className="bg-primary/20 p-3 rounded-full border border-primary/30">
                    <MessageCircle size={24} className="text-primary" />
                  </div>
                </div>
              </div>

              {/* Listras de Entrega */}
              <div className="w-full relative z-10 border-t border-primary/10">
                {[
                  {
                    id: 1,
                    title: 'Pagamento Confirmado',
                    desc: 'Acesso liberado segundos após a confirmação.',
                  },
                  {
                    id: 2,
                    title: 'E-MAIL E WHATSAPP',
                    desc: 'Enviados automaticamente no seu E-mail e Whatsapp para você.',
                  },
                  {
                    id: 3,
                    title: 'Acesso Vitalício',
                    desc: 'Assista e baixe os projetos quando e onde quiser.',
                  },
                  {
                    id: 4,
                    title: 'Suporte VIP',
                    desc: 'Canal exclusivo para tirar suas dúvidas.',
                  }
                ].map((step) => (
                  <div key={step.id} className="flex gap-4 items-center py-4 px-8 border-b border-primary/10 group/step hover:bg-primary/5 transition-colors">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-black flex items-center justify-center font-black text-xs shadow-lg shadow-primary/20 group-hover/step:scale-110 transition-transform">
                      {step.id}
                    </div>
                    <div className="text-left">
                      <h4 className="font-black text-primary text-xs uppercase mb-0.5 leading-tight tracking-wide">{step.title}</h4>
                      <p className="text-muted-foreground text-[11px] leading-tight">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 w-full text-center md:text-left relative z-10">
                <div className="inline-flex items-center gap-2 text-primary font-black text-[10px] tracking-widest uppercase">
                  <ShieldCheck size={14} />
                  Sistema de Entrega 100% Seguro
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
