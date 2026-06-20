
"use client";

import React from 'react';
import Image from 'next/image';
import { Mail, ShieldCheck, Download, MessageCircle, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CreatorAndDelivery() {
  return (
    <div className="flex flex-col">
      {/* SEÇÃO: INSTAGRAM RURAL PLANNER (AGORA NO TOPO) */}
      <section className="bg-[#0d1f10] pt-16 pb-12 border-t border-border overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          
          <div className="mb-12">
            <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-1 rounded-full font-black text-[9px] tracking-[0.2em] uppercase mb-4 shadow-lg">
              📲 Acompanhe de Perto
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 leading-tight">
              Nos siga no Instagram e veja o <span className="text-primary">Rural Planner em ação</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed italic">
              Dicas de planejamento rural, projetos reais e conteúdo exclusivo toda semana. Ficou com dúvida? É só chamar por lá.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 relative group">
            <div className="h-1 w-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#f9ce34]" />
            
            <div className="p-4 md:p-5">
              <div className="flex flex-col items-center mb-3">
                <div className="relative mb-2">
                  <div className="p-1 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#fd1d1d] to-[#833ab4]">
                    <div className="relative w-14 h-14 rounded-full border-2 border-[#1a1a1a] overflow-hidden bg-muted">
                      <Image
                        src="https://www.image2url.com/r2/default/images/1781571112882-16bee3cb-0446-4fda-935a-785186b069c9.jpeg"
                        alt="Rural Planner Profile"
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-5 h-5 bg-gradient-to-tr from-[#f9ce34] via-[#fd1d1d] to-[#833ab4] rounded-md flex items-center justify-center border-2 border-[#1a1a1a] shadow-lg">
                    <span className="text-[8px]">📸</span>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-white font-black text-base leading-tight mb-0.5">Rural Planner</h3>
                  <p className="text-primary font-bold text-xs">@ruralplanner.oficial</p>
                </div>
              </div>

              <div className="text-center mb-3 space-y-0.5">
                <p className="text-white/80 text-[10px] font-medium italic">🌾 Planejamento rural do jeito certo</p>
                <p className="text-white/80 text-[10px] font-medium italic">📐 +100 projetos profissionais de sítios</p>
              </div>

              <div className="grid grid-cols-3 gap-2 py-2 border-y border-white/5 mb-3">
                <div className="text-center">
                  <span className="block text-primary font-black text-sm">+100</span>
                  <span className="text-[8px] text-muted-foreground uppercase font-bold tracking-widest">Projetos</span>
                </div>
                <div className="text-center border-x border-white/5">
                  <span className="block text-primary font-black text-sm">12 mil</span>
                  <span className="text-[8px] text-muted-foreground uppercase font-bold tracking-widest">Produtores</span>
                </div>
                <div className="text-center">
                  <span className="block text-primary font-black text-sm">15+</span>
                  <span className="text-[8px] text-muted-foreground uppercase font-bold tracking-widest">Anos exp.</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="aspect-square bg-white/5 rounded-lg flex items-center justify-center text-lg hover:bg-white/10 transition-colors cursor-pointer">🌱</div>
                <div className="aspect-square bg-white/5 rounded-lg flex items-center justify-center text-lg hover:bg-white/10 transition-colors cursor-pointer">📐</div>
                <div className="aspect-square bg-white/5 rounded-lg flex items-center justify-center text-lg hover:bg-white/10 transition-colors cursor-pointer">🌾</div>
              </div>

              <Button 
                asChild
                className="w-full shine-effect bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#f9ce34] hover:opacity-95 hover:scale-[1.01] transition-all text-white font-black uppercase tracking-widest text-[9px] h-10 shadow-xl shadow-red-900/20"
              >
                <a href="https://www.instagram.com/ruralplanner.oficial?igsh=MWgyMGVhY29rczRzZg%3D%3D" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2" size={14} />
                  Ver @ruralplanner.oficial no Instagram
                </a>
              </Button>

              <p className="text-center text-[8px] text-muted-foreground font-medium mt-2">
                Ficou com dúvida? Fala com a gente direto no perfil ✓
              </p>
            </div>
          </div>
          
          <p className="text-center text-[10px] text-muted-foreground/60 font-medium mt-8 uppercase tracking-[0.2em]">
            Conteúdo novo toda semana · Dicas reais de planejamento rural · Sem enrolação
          </p>
        </div>
      </section>

      {/* SEÇÃO: COMO VOCÊ RECEBE O MATERIAL (MOVIDO PARA BAIXO) */}
      <section className="bg-[#0d1f10] pb-16 border-b border-border">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-b from-card to-[#0d1f10] border-2 border-primary rounded-2xl shadow-2xl flex flex-col items-center group relative overflow-hidden h-auto">
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <Download size={100} className="text-primary" />
              </div>
              
              <div className="p-5 md:p-6 w-full flex flex-col items-center text-center md:items-start md:text-left">
                <span className="text-primary font-black text-[10px] tracking-[0.3em] uppercase mb-1 relative z-10">
                  ENTREGA IMEDIATA
                </span>
                <div className="w-12 h-[1px] bg-primary/30 mb-3 relative z-10" />
                <h3 className="text-2xl font-black text-foreground font-headline mb-3 w-full relative z-10">
                  Como Você <span className="text-primary">Recebe o Material</span>
                </h3>
                
                <div className="w-full flex justify-center mb-4 md:justify-start gap-4 relative z-10">
                  <div className="bg-primary/20 p-2.5 rounded-full border border-primary/30">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div className="bg-primary/20 p-2.5 rounded-full border border-primary/30">
                    <MessageCircle size={20} className="text-primary" />
                  </div>
                </div>
              </div>

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
                  <div key={step.id} className="flex gap-4 items-center py-2.5 px-8 border-b border-primary/10 group/step hover:bg-primary/5 transition-colors">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-black flex items-center justify-center font-black text-[10px] shadow-lg shadow-primary/20 group-hover/step:scale-110 transition-transform">
                      {step.id}
                    </div>
                    <div className="text-left">
                      <h4 className="font-black text-primary text-[10px] uppercase mb-0.5 leading-tight tracking-wide">{step.title}</h4>
                      <p className="text-muted-foreground text-[10px] leading-tight">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 w-full text-center md:text-left relative z-10">
                <div className="inline-flex items-center gap-2 text-primary font-black text-[9px] tracking-widest uppercase">
                  <ShieldCheck size={12} />
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
