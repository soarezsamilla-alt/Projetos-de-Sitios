
"use client";

import React from 'react';
import { X, Check, ArrowRight, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function BeforeAfter() {
  return (
    <section className="bg-background py-10 md:py-12 border-t border-border overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-black mb-3 text-foreground leading-tight">
            A Diferença Entre <span className="text-primary">Improvisar</span> e Ter um Projeto
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            Veja a transformação real que acontece quando você para de adivinhar e começa a planejar com precisão.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Layout de Colunas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 items-stretch">
            
            {/* Coluna ANTES */}
            <div className="bg-[#1a1a1a] border border-border md:border-r-0 p-4 md:p-6 rounded-t-lg md:rounded-l-lg md:rounded-tr-none flex flex-col">
              <div className="mb-4">
                <span className="bg-muted text-muted-foreground px-3 py-0.5 rounded-sm text-[9px] font-black tracking-[0.2em] uppercase">
                  ANTES
                </span>
              </div>
              
              <div className="text-4xl mb-3 opacity-40 grayscale">🌾</div>
              
              <h3 className="text-base font-bold mb-3 text-muted-foreground uppercase tracking-widest">O Caos da Improvisação</h3>
              
              <ul className="space-y-2 flex-grow">
                {[
                  "Terra parada sem saber o que plantar",
                  "Áreas inteiras desperdiçadas",
                  "Dinheiro gasto adivinhando o layout",
                  "Renda dependendo de uma única fonte",
                  "Informação rasa sem medidas reais"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground/70 text-[11px]">
                    <X className="text-accent flex-shrink-0 mt-0.5" size={14} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Seta Central - Desktop */}
            <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-background border-2 border-primary w-10 h-10 rounded-full items-center justify-center shadow-[0_0_15px_rgba(212,168,75,0.2)]">
              <ArrowRight className="text-primary" size={20} />
            </div>

            {/* Seta Central - Mobile */}
            <div className="md:hidden flex justify-center -my-3 relative z-20">
              <div className="bg-background border-2 border-primary w-8 h-8 rounded-full flex items-center justify-center shadow-xl">
                <ArrowDown className="text-primary" size={16} />
              </div>
            </div>

            {/* Coluna DEPOIS */}
            <div className="bg-[#0d1f10] border-2 border-primary p-4 md:p-6 rounded-b-lg md:rounded-r-lg md:rounded-bl-none flex flex-col shadow-2xl shadow-primary/10">
              <div className="mb-4">
                <span className="bg-primary text-black px-3 py-0.5 rounded-sm text-[9px] font-black tracking-[0.2em] uppercase">
                  DEPOIS
                </span>
              </div>

              <div className="text-4xl mb-3">🏡</div>
              
              <h3 className="text-base font-bold mb-3 gold-gradient-text uppercase tracking-widest">Sítio Próspero e Organizado</h3>

              <ul className="space-y-2 flex-grow">
                {[
                  "Projeto profissional pronto para executar",
                  "Cada metro da terra produzindo lucro",
                  "Medidas exatas, sem desperdício",
                  "Múltiplas fontes de renda diversificadas",
                  "Plantas técnicas com padrão profissional"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-foreground text-[11px]">
                    <Check className="text-primary flex-shrink-0 mt-0.5" size={14} />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Frase de Impacto e CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm md:text-base italic text-muted-foreground mb-6">
            A única diferença entre as duas situações é um <span className="text-primary font-black not-italic border-b-2 border-primary/30">PROJETO PROFISSIONAL</span>.
          </p>
          
          <Button 
            asChild
            size="lg"
            className="shine-effect pulse-attention gold-gradient-bg hover:scale-105 transition-transform duration-300 text-black font-black uppercase tracking-[0.2em] h-auto py-3 px-6 md:py-3.5 md:px-8 text-xs md:text-sm shadow-2xl shadow-primary/30"
          >
            <a href="#pricing">Quero Meu Projeto por R$ 9,90</a>
          </Button>
          
          <p className="mt-4 text-[9px] text-muted-foreground uppercase tracking-widest">
            Acesso Vitalício · Download Imediato
          </p>
        </div>
      </div>
    </section>
  );
}
