"use client";

import React from 'react';
import { User, Mail, Download, RefreshCw, ShieldCheck, CheckCircle2 } from 'lucide-react';

export function CreatorAndDelivery() {
  return (
    <section className="bg-[#0d1f10] py-20 border-t border-border">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-[10px] tracking-[0.4em] uppercase mb-4 block">
            ★ CONHEÇA O CRIADOR ★
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground">
            Quem está por trás do <span className="text-primary">Rural Planner</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Sobre o Criador */}
          <div className="bg-[#F5F0E1] rounded-2xl p-8 md:p-10 border-t-4 border-primary shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
            <span className="text-primary font-black text-[10px] tracking-[0.2em] uppercase mb-2">
              SOBRE O CRIADOR
            </span>
            <div className="w-16 h-[1px] bg-primary/30 mb-8" />

            {/* Placeholder Foto */}
            <div className="relative w-[200px] h-[200px] mb-6">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1B4D2E] to-[#C9A961] border-[3px] border-primary shadow-[0_10px_30px_rgba(201,169,97,0.3)] flex flex-col items-center justify-center overflow-hidden">
                <User size={80} className="text-white/60 mb-2" />
                <span className="text-white text-[10px] font-black tracking-widest uppercase">FOTO DO CRIADOR</span>
              </div>
            </div>

            <h3 className="text-2xl font-black text-[#1B4D2E] font-headline mb-1">
              Ricardo Almeida
            </h3>
            <p className="text-primary font-medium text-sm italic mb-6">
              Fundador & Criador do Pack +100 Projetos
            </p>

            <p className="text-[#4A4A4A] text-sm leading-relaxed mb-10 flex-grow">
              Engenheiro agrônomo com mais de 15 anos de experiência em planejamento rural no Brasil. 
              Já visitou mais de 3.000 sítios em todos os estados e atendeu pessoalmente mais de 12 mil 
              produtores. Sua missão é democratizar o conhecimento rural profissional, tornando 
              acessível o que antes custava fortunas com consultorias especializadas.
            </p>

            {/* Mini Stats */}
            <div className="w-full pt-6 border-t border-primary/20 grid grid-cols-3 gap-2">
              <div className="flex flex-col">
                <span className="text-primary font-black text-xl font-headline">15+</span>
                <span className="text-[#6B6B6B] text-[9px] uppercase font-bold tracking-tighter">anos de exp.</span>
              </div>
              <div className="flex flex-col">
                <span className="text-primary font-black text-xl font-headline">3.000+</span>
                <span className="text-[#6B6B6B] text-[9px] uppercase font-bold tracking-tighter">sítios visitados</span>
              </div>
              <div className="flex flex-col">
                <span className="text-primary font-black text-xl font-headline">12 mil</span>
                <span className="text-[#6B6B6B] text-[9px] uppercase font-bold tracking-tighter">produtores</span>
              </div>
            </div>
          </div>

          {/* Card 2: Como Você Recebe */}
          <div className="bg-[#F5F0E1] rounded-2xl p-8 md:p-10 border-t-4 border-primary shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col text-center md:text-left">
            <div className="flex flex-col items-center mb-6">
              <span className="text-primary font-black text-[10px] tracking-[0.2em] uppercase mb-2">
                COMO VOCÊ RECEBE
              </span>
              <div className="w-16 h-[1px] bg-primary/30 mb-6" />
              <h3 className="text-2xl font-black text-[#1B4D2E] font-headline mb-4">
                Acesso Rápido e Garantido
              </h3>
              <div className="bg-primary/10 p-5 rounded-full mb-8">
                <Mail size={48} className="text-primary" />
              </div>
            </div>

            <div className="space-y-6 flex-grow">
              <div className="flex gap-4 items-start group">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-primary/20">
                  1
                </div>
                <div>
                  <h4 className="font-black text-[#1B4D2E] text-sm uppercase mb-1">Pagamento Confirmado</h4>
                  <p className="text-[#6B6B6B] text-xs leading-relaxed">Após confirmar a compra, você recebe acesso imediato ao material.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-primary/20">
                  2
                </div>
                <div>
                  <h4 className="font-black text-[#1B4D2E] text-sm uppercase mb-1">E-mail Com Acesso</h4>
                  <p className="text-[#6B6B6B] text-xs leading-relaxed">Receba no seu e-mail o link da área de membros com seu login e senha exclusivos.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-primary/20">
                  3
                </div>
                <div>
                  <h4 className="font-black text-[#1B4D2E] text-sm uppercase mb-1">Acesso Vitalício</h4>
                  <p className="text-[#6B6B6B] text-xs leading-relaxed">Baixe todos os PDFs em alta resolução. Acesse pelo celular, tablet ou computador.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-primary/20">
                  4
                </div>
                <div>
                  <h4 className="font-black text-[#1B4D2E] text-sm uppercase mb-1">Atualizações Gratuitas</h4>
                  <p className="text-[#6B6B6B] text-xs leading-relaxed">Receba novos projetos e atualizações futuras sem pagar nada a mais por isso.</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-primary/20 text-center">
              <div className="inline-flex items-center gap-2 text-primary font-black text-[10px] tracking-widest uppercase">
                <ShieldCheck size={14} />
                Compra 100% segura · Garantia de 7 dias
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
