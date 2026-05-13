
"use client";

import React from 'react';
import Image from 'next/image';
import { User, Mail, ShieldCheck, Download, MessageCircle } from 'lucide-react';

export function CreatorAndDelivery() {
  return (
    <section className="bg-[#0d1f10] py-8 border-t border-border">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-black text-foreground">
            Quem está por trás do <span className="text-primary">Rural Planner</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {/* Card 1: Sobre o Criador */}
          <div className="bg-gradient-to-b from-card to-[#0d1f10] border-2 border-primary rounded-2xl p-4 md:p-5 shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group relative overflow-hidden h-full">
            <div className="absolute top-0 left-0 p-4 opacity-10 pointer-events-none">
              <User size={120} className="text-primary" />
            </div>

            <span className="text-primary font-black text-[9px] tracking-[0.2em] uppercase mb-1 relative z-10">
              SOBRE O CRIADOR
            </span>
            <div className="w-10 h-[1px] bg-primary/30 mb-3 relative z-10" />

            <div className="relative w-[110px] h-[110px] mb-3 z-10">
              <div className="absolute inset-0 rounded-full border-[3px] border-primary shadow-[0_8px_20px_rgba(201,169,97,0.3)] overflow-hidden bg-muted">
                <Image
                  src="https://www.image2url.com/r2/default/images/1778703679498-65add934-4afc-423a-ba71-4d8f27fa9042.blob"
                  alt="Ricardo Almeida"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h3 className="text-base font-black text-foreground font-headline mb-0.5 relative z-10">
              Ricardo Almeida
            </h3>
            <p className="text-primary font-medium text-[11px] italic mb-2 relative z-10">
              Fundador & Criador do planejameto +100 Projetos
            </p>

            <p className="text-muted-foreground text-[11px] leading-relaxed mb-3 flex-grow relative z-10">
              Engenheiro agrônomo com mais de 15 anos de experiência em planejamento rural no Brasil. Já visitou mais de 3.000 sítios e chácaras atendeu pessoalmente mais de 12 mil produtores rurais brasileiros.
            </p>

            <div className="w-full pt-2 border-t border-primary/20 grid grid-cols-3 gap-1 relative z-10">
              <div className="flex flex-col">
                <span className="text-primary font-black text-sm font-headline">15+</span>
                <span className="text-muted-foreground text-[7px] uppercase font-bold tracking-tighter">anos exp.</span>
              </div>
              <div className="flex flex-col">
                <span className="text-primary font-black text-sm font-headline">3.000+</span>
                <span className="text-muted-foreground text-[7px] uppercase font-bold tracking-tighter">sítios</span>
              </div>
              <div className="flex flex-col">
                <span className="text-primary font-black text-sm font-headline">12 mil</span>
                <span className="text-muted-foreground text-[7px] uppercase font-bold tracking-tighter">produtores</span>
              </div>
            </div>
          </div>

          {/* Card 2: Como Você Recebe */}
          <div className="bg-gradient-to-b from-card to-[#0d1f10] border-2 border-primary rounded-2xl shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <Download size={120} className="text-primary" />
            </div>
            
            <div className="p-3 md:p-4 w-full flex flex-col items-center text-center md:items-start md:text-left">
              <span className="text-primary font-black text-[9px] tracking-[0.2em] uppercase mb-1 relative z-10">
                ENTREGA IMEDIATA
              </span>
              <div className="w-10 h-[1px] bg-primary/30 mb-2 relative z-10" />
              <h3 className="text-base font-black text-foreground font-headline mb-2 w-full relative z-10">
                Como Você <span className="text-primary">Recebe o Material</span>
              </h3>
              
              <div className="w-full flex justify-center mb-2 md:justify-start gap-3 relative z-10">
                <div className="bg-primary/20 p-2 rounded-full border border-primary/30">
                  <Mail size={20} className="text-primary" />
                </div>
                <div className="bg-primary/20 p-2 rounded-full border border-primary/30">
                  <MessageCircle size={20} className="text-primary" />
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
                <div key={step.id} className="flex gap-3 items-center py-2 px-5 border-b border-primary/10 group/step hover:bg-primary/5 transition-colors">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-black flex items-center justify-center font-black text-[10px] shadow-lg shadow-primary/20 group-hover/step:scale-110 transition-transform">
                    {step.id}
                  </div>
                  <div className="text-left">
                    <h4 className="font-black text-primary text-[10px] uppercase mb-0 leading-tight tracking-wide">{step.title}</h4>
                    <p className="text-muted-foreground text-[9px] leading-tight">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 w-full text-center md:text-left relative z-10">
              <div className="inline-flex items-center gap-2 text-primary font-black text-[8px] tracking-widest uppercase">
                <ShieldCheck size={10} />
                Sistema de Entrega 100% Seguro
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
