
"use client";

import React from 'react';
import Image from 'next/image';
import { Lightbulb } from 'lucide-react';

export function Solution() {
  return (
    <section className="bg-[#0d1f10] py-20 border-t border-primary/20 overflow-hidden relative">
      {/* Elementos decorativos de fundo para profundidade */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Coluna da Esquerda: Conteúdo de Texto */}
          <div className="lg:w-1/2 space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-1.5 rounded-full font-black text-[10px] tracking-[0.2em] uppercase shadow-sm">
              <Lightbulb size={14} className="animate-pulse" />
              A SOLUÇÃO
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-foreground leading-[1.1] font-headline">
              O Projeto que a Sua<br />
              <span className="gold-gradient-text">Terra Estava Esperando</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                O Rural Planner não é curso, não é livro, não é consultoria. <span className="font-black text-foreground border-b-2 border-primary/30">É um artefato executável.</span> Um projeto visual com medidas reais, zonas identificadas e layouts profissionais — pronto para você olhar, entender e executar no campo.
              </p>
            </div>
            
            <div className="bg-card border-l-[6px] border-primary p-4 rounded-r-xl shadow-2xl shadow-black/20 max-w-md">
              <p className="text-foreground font-bold text-lg leading-snug italic">
                “Não é teoria. É um mapa. Com medidas. Pronto para executar.”
              </p>
            </div>
          </div>
          
          {/* Coluna da Direita: Imagem e Badge de Exemplo */}
          <div className="lg:w-1/2 relative group animate-in fade-in slide-in-from-right-8 duration-1000">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border-4 border-primary/20 bg-card">
              <Image 
                src="https://www.image2url.com/r2/default/images/1782780560710-53c5afee-0f8f-4bd9-9b67-ef2d7670583f.jpg" 
                alt="Exemplo de Projeto Rural"
                width={1000}
                height={750}
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                unoptimized
              />
              
              {/* Overlay do Badge de Exemplo (Minimalista) */}
              <div className="absolute bottom-3 left-3 bg-background/95 text-white p-2 rounded-md border border-primary/30 shadow-2xl backdrop-blur-md">
                <span className="block text-[6px] font-black uppercase tracking-[0.3em] text-primary mb-0.5">EXEMPLO REAL</span>
                <span className="text-[8px] font-bold tracking-tight">Agrofloresta • 5ha • Mata Atlântica</span>
              </div>
            </div>
            
            {/* Elementos decorativos adicionais */}
            <div className="absolute -top-6 -right-6 w-12 h-12 border-t-2 border-r-2 border-primary/40 rounded-tr-xl" />
            <div className="absolute -bottom-6 -left-6 w-12 h-12 border-b-2 border-l-2 border-primary/40 rounded-bl-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
