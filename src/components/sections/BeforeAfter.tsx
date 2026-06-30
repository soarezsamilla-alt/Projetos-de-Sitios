
"use client";

import React from 'react';
import { X, Check, ArrowRight, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function BeforeAfter() {
  return (
    <section className="bg-background py-8 md:py-10 border-t border-border overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-black mb-2 text-foreground leading-tight">
            A Diferença Entre <span className="text-primary">Improvisar</span> e Ter um Projeto
          </h2>
          <p className="text-muted-foreground text-xs max-w-lg mx-auto">
            Veja a transformação real que acontece quando você para de adivinhar e começa a planejar com precisão.
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto">
          {/* Layout de Colunas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 items-stretch">
            
            {/* Coluna ANTES */}
            <div className="bg-[#1a1a1a] border border-border md:border-r-0 rounded-t-lg md:rounded-l-lg md:rounded-tr-none flex flex-col overflow-hidden">
              <div className="relative w-full h-[140px] md:h-[160px] bg-muted/5 flex items-center justify-center border-b border-border">
                <Image 
                  src="https://www.image2url.com/r2/default/images/1779499904808-30352e5d-a0c6-40f1-a386-085153e8c875.png"
                  alt="Terra improdutiva e desorganizada"
                  fill
                  className="object-cover grayscale opacity-40"
                  unoptimized
                />
              </div>
              
              <div className="p-4 md:p-5 flex flex-col flex-grow">
                <div className="mb-3">
                  <span className="bg-muted text-muted-foreground px-3 py-0.5 rounded-sm text-[8px] font-black tracking-[0.2em] uppercase">
                    ANTES
                  </span>
                </div>
                
                <h3 className="text-sm font-bold mb-3 text-muted-foreground uppercase tracking-widest">O Caos da Improvisação</h3>
                
                <ul className="space-y-1.5 flex-grow">
                  {[
                    "Terra parada sem saber o que plantar",
                    "Áreas inteiras desperdiçadas",
                    "Dinheiro gasto adivinhando o layout",
                    "Renda dependendo de uma única fonte",
                    "Informação rasa sem medidas reais"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground/70 text-[10px]">
                      <X className="text-accent flex-shrink-0 mt-0.5" size={12} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Seta Central - Desktop */}
            <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-background border-2 border-primary w-10 h-10 rounded-full items-center justify-center shadow-[0_0_15px_rgba(212,168,75,0.2)] pulse-attention">
              <ArrowRight className="text-primary" size={20} />
            </div>

            {/* Seta Central - Mobile */}
            <div className="md:hidden flex justify-center -my-3 relative z-20">
              <div className="bg-background border-2 border-primary w-8 h-8 rounded-full flex items-center justify-center shadow-xl pulse-attention">
                <ArrowDown className="text-primary" size={16} />
              </div>
            </div>

            {/* Coluna DEPOIS */}
            <div className="bg-[#0d1f10] border-2 border-primary rounded-b-lg md:rounded-r-lg md:rounded-bl-none flex flex-col shadow-2xl shadow-primary/10 overflow-hidden">
              <div className="relative w-full h-[140px] md:h-[160px] bg-primary/5 flex items-center justify-center border-b border-primary/20">
                <Image 
                  src="https://www.image2url.com/r2/default/images/1779499755869-73770c33-1891-40f4-b543-6a79b90aa238.blob"
                  alt="Sítio Próspero com Projeto"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              <div className="p-4 md:p-5 flex flex-col flex-grow">
                <div className="mb-3">
                  <span className="bg-primary text-black px-3 py-0.5 rounded-sm text-[8px] font-black tracking-[0.2em] uppercase">
                    DEPOIS
                  </span>
                </div>
                
                <h3 className="text-sm font-bold mb-3 gold-gradient-text uppercase tracking-widest">Sítio Próspero</h3>

                <ul className="space-y-1.5 flex-grow">
                  {[
                    "Projeto profissional pronto para executar",
                    "Cada metro da terra produzindo lucro",
                    "Medidas exatas, sem desperdício",
                    "Múltiplas fontes de renda diversificadas",
                    "Plantas técnicas com padrão profissional"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-foreground text-[10px]">
                      <Check className="text-primary flex-shrink-0 mt-0.5" size={12} />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Frase de Impacto e CTA */}
        <div className="mt-8 text-center">
          <p className="text-xs md:text-sm italic text-muted-foreground mb-6">
            A única diferença entre as duas situações é um <span className="text-primary font-black not-italic border-b-2 border-primary/30">PROJETO PROFISSIONAL</span>.
          </p>
          
          <Button 
            asChild
            size="lg"
            className="shine-effect pulse-attention gold-gradient-bg hover:scale-105 transition-transform duration-300 text-black font-black uppercase tracking-[0.2em] h-auto py-3 px-6 md:py-3.5 md:px-8 text-xs md:text-sm shadow-2xl shadow-primary/30"
          >
            <a href="#pricing">Quero Meu Projeto por R$ 9,90</a>
          </Button>
          
          <p className="mt-4 text-[8px] text-muted-foreground uppercase tracking-widest">
            Acesso Vitalício · Download Imediato
          </p>
        </div>
      </div>
    </section>
  );
}
