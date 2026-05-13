"use client";

import React from 'react';
import Image from 'next/image';
import { User, Mail, ShieldCheck, Download, RefreshCw } from 'lucide-react';

export function CreatorAndDelivery() {
  return (
    <section className="bg-[#0d1f10] py-8 border-t border-border">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-6">
          <span className="text-primary font-bold text-[10px] tracking-[0.4em] uppercase mb-1 block">
            ★ CONHEÇA O CRIADOR ★
          </span>
          <h2 className="text-xl md:text-2xl font-black text-foreground">
            Quem está por trás do <span className="text-primary">Rural Planner</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
          {/* Card 1: Sobre o Criador */}
          <div className="bg-[#F5F0E1] rounded-2xl p-4 md:p-5 border-t-4 border-primary shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group">
            <span className="text-primary font-black text-[9px] tracking-[0.2em] uppercase mb-1">
              SOBRE O CRIADOR
            </span>
            <div className="w-10 h-[1px] bg-primary/30 mb-3" />

            {/* Foto do Criador */}
            <div className="relative w-[110px] h-[110px] mb-3">
              <div className="absolute inset-0 rounded-full border-[3px] border-primary shadow-[0_8px_20px_rgba(201,169,97,0.3)] overflow-hidden bg-muted">
                <Image
                  src="https://www.image2url.com/r2/default/images/1778701423071-d893666a-099b-4658-894f-31607dff7fb8.png"
                  alt="Ricardo Almeida"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h3 className="text-base font-black text-[#1B4D2E] font-headline mb-0.5">
              Ricardo Almeida
            </h3>
            <p className="text-primary font-medium text-[11px] italic mb-2">
              Fundador & Criador do planejameto +100 Projetos
            </p>

            <p className="text-[#4A4A4A] text-[11px] leading-relaxed mb-3 flex-grow">
              Engenheiro agrônomo with more than 15 years of experience in rural planning in Brazil. 
              Has visited more than 3,000 sites and personally assisted more than 12,000 
              Brazilian rural producers.
            </p>

            {/* Mini Stats */}
            <div className="w-full pt-2 border-t border-primary/20 grid grid-cols-3 gap-1">
              <div className="flex flex-col">
                <span className="text-primary font-black text-sm font-headline">15+</span>
                <span className="text-[#6B6B6B] text-[7px] uppercase font-bold tracking-tighter">anos exp.</span>
              </div>
              <div className="flex flex-col">
                <span className="text-primary font-black text-sm font-headline">3.000+</span>
                <span className="text-[#6B6B6B] text-[7px] uppercase font-bold tracking-tighter">sítios</span>
              </div>
              <div className="flex flex-col">
                <span className="text-primary font-black text-sm font-headline">12 mil</span>
                <span className="text-[#6B6B6B] text-[7px] uppercase font-bold tracking-tighter">produtores</span>
              </div>
            </div>
          </div>

          {/* Card 2: Como Você Recebe */}
          <div className="bg-[#F5F0E1] rounded-2xl p-4 md:p-5 border-t-4 border-primary shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center md:items-start md:text-left group">
            <span className="text-primary font-black text-[9px] tracking-[0.2em] uppercase mb-1">
              COMO VOCÊ RECEBE
            </span>
            <div className="w-10 h-[1px] bg-primary/30 mb-3" />
            <h3 className="text-base font-black text-[#1B4D2E] font-headline mb-3 w-full">
              Acesso Rápido e Garantido
            </h3>
            
            <div className="w-full flex justify-center mb-3">
              <div className="bg-primary/10 p-2.5 rounded-full">
                <Mail size={28} className="text-primary" />
              </div>
            </div>

            <div className="space-y-2 flex-grow w-full">
              {[
                {
                  id: 1,
                  title: 'Pagamento Confirmado',
                  desc: 'Acesso imediato após a confirmação.',
                },
                {
                  id: 2,
                  title: 'E-mail Com Acesso',
                  desc: 'Receba login e senha automaticamente.',
                },
                {
                  id: 3,
                  title: 'Acesso Vitalício',
                  desc: 'Baixe todos os PDFs em alta resolução.',
                },
                {
                  id: 4,
                  title: 'Atualizações Gratuitas',
                  desc: 'Receba novos projetos sem pagar nada.',
                }
              ].map((step) => (
                <div key={step.id} className="flex gap-2.5 items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center font-bold text-[9px] shadow-lg shadow-primary/20">
                    {step.id}
                  </div>
                  <div>
                    <h4 className="font-black text-[#1B4D2E] text-[11px] uppercase mb-0.5 leading-tight">{step.title}</h4>
                    <p className="text-[#6B6B6B] text-[9px] leading-tight">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 pt-2 border-t border-primary/20 w-full text-center">
              <div className="inline-flex items-center gap-1.5 text-primary font-black text-[7px] tracking-widest uppercase">
                <ShieldCheck size={9} />
                Compra Segura · 7 Dias de Garantia
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
