"use client";

import React from 'react';
import { User, Mail, ShieldCheck, Download, RefreshCw } from 'lucide-react';

export function CreatorAndDelivery() {
  return (
    <section className="bg-[#0d1f10] py-16 border-t border-border">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-10">
          <span className="text-primary font-bold text-[10px] tracking-[0.4em] uppercase mb-3 block">
            ★ CONHEÇA O CRIADOR ★
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-foreground">
            Quem está por trás do <span className="text-primary">Rural Planner</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Sobre o Criador */}
          <div className="bg-[#F5F0E1] rounded-2xl p-6 md:p-8 border-t-4 border-primary shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group">
            <span className="text-primary font-black text-[10px] tracking-[0.2em] uppercase mb-1">
              SOBRE O CRIADOR
            </span>
            <div className="w-12 h-[1px] bg-primary/30 mb-6" />

            {/* Foto Placeholder */}
            <div className="relative w-[160px] h-[160px] mb-4">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1B4D2E] to-[#C9A961] border-[3px] border-primary shadow-[0_8px_20px_rgba(201,169,97,0.3)] flex flex-col items-center justify-center overflow-hidden">
                <User size={60} className="text-white/60 mb-1" />
                <span className="text-white text-[8px] font-black tracking-widest uppercase text-center px-2">FOTO DO CRIADOR</span>
              </div>
            </div>

            <h3 className="text-xl font-black text-[#1B4D2E] font-headline mb-0.5">
              Ricardo Almeida
            </h3>
            <p className="text-primary font-medium text-[13px] italic mb-4">
              Fundador & Criador do Pack +100 Projetos
            </p>

            <p className="text-[#4A4A4A] text-[13px] leading-relaxed mb-6 flex-grow">
              Engenheiro agrônomo com mais de 15 anos de experiência em planejamento rural no Brasil. 
              Já visitou mais de 3.000 sítios em todos os estados e atendeu pessoalmente mais de 12 mil 
              produtores. Sua missão é democratizar o conhecimento rural profissional.
            </p>

            {/* Mini Stats */}
            <div className="w-full pt-4 border-t border-primary/20 grid grid-cols-3 gap-2">
              <div className="flex flex-col">
                <span className="text-primary font-black text-lg font-headline">15+</span>
                <span className="text-[#6B6B6B] text-[8px] uppercase font-bold tracking-tighter">anos exp.</span>
              </div>
              <div className="flex flex-col">
                <span className="text-primary font-black text-lg font-headline">3.000+</span>
                <span className="text-[#6B6B6B] text-[8px] uppercase font-bold tracking-tighter">sítios</span>
              </div>
              <div className="flex flex-col">
                <span className="text-primary font-black text-lg font-headline">12 mil</span>
                <span className="text-[#6B6B6B] text-[8px] uppercase font-bold tracking-tighter">produtores</span>
              </div>
            </div>
          </div>

          {/* Card 2: Como Você Recebe */}
          <div className="bg-[#F5F0E1] rounded-2xl p-6 md:p-8 border-t-4 border-primary shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center md:items-start md:text-left group">
            <span className="text-primary font-black text-[10px] tracking-[0.2em] uppercase mb-1">
              COMO VOCÊ RECEBE
            </span>
            <div className="w-12 h-[1px] bg-primary/30 mb-4" />
            <h3 className="text-xl font-black text-[#1B4D2E] font-headline mb-6 w-full">
              Acesso Rápido e Garantido
            </h3>
            
            <div className="w-full flex justify-center mb-6">
              <div className="bg-primary/10 p-4 rounded-full">
                <Mail size={40} className="text-primary" />
              </div>
            </div>

            <div className="space-y-4 flex-grow w-full">
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
                <div key={step.id} className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs shadow-lg shadow-primary/20">
                    {step.id}
                  </div>
                  <div>
                    <h4 className="font-black text-[#1B4D2E] text-[13px] uppercase mb-0.5 leading-tight">{step.title}</h4>
                    <p className="text-[#6B6B6B] text-[11px] leading-tight">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-primary/20 w-full text-center">
              <div className="inline-flex items-center gap-1.5 text-primary font-black text-[9px] tracking-widest uppercase">
                <ShieldCheck size={12} />
                Compra Segura · 7 Dias de Garantia
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
