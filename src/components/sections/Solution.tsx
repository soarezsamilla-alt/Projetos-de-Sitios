
"use client";

import React from 'react';
import Image from 'next/image';
import { Lightbulb } from 'lucide-react';

export function Solution() {
  return (
    <section className="bg-[#fdf9f0] py-20 border-t border-border overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Coluna da Esquerda: Conteúdo de Texto */}
          <div className="lg:w-1/2 space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="inline-flex items-center gap-2 bg-[#f1e6d0] border border-[#d4a84b]/20 text-[#922709] px-4 py-1.5 rounded-full font-black text-[10px] tracking-[0.2em] uppercase shadow-sm">
              <Lightbulb size={14} className="fill-[#922709]/20" />
              A SOLUÇÃO
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-[#1a1713] leading-[1.1] font-headline">
              O Projeto que a Sua<br />
              <span className="text-[#922709]">Terra Estava Esperando</span>
            </h2>
            
            <div className="space-y-6 text-[#4a443f] text-lg leading-relaxed">
              <p>
                O Rural Planner não é curso, não é livro, não é consultoria. <span className="font-black text-[#1a1713]">É um artefato executável.</span> Um projeto visual com medidas reais, zonas identificadas e layouts profissionais — pronto para você olhar, entender e executar no campo.
              </p>
              <p>
                Você não precisa aprender, estudar ou interpretar. Pega o projeto, olha as medidas e começa a fazer. Como se um agrônomo experiente tivesse visitado o seu sítio — por <span className="font-bold text-[#1a1713]">R$ 9,90 em vez de R$ 15.000.</span>
              </p>
            </div>
            
            <div className="bg-white border-l-[6px] border-[#922709] p-6 rounded-r-xl shadow-lg shadow-black/5 max-w-xl">
              <p className="text-[#1a1713] font-bold text-xl leading-snug">
                “Não é teoria. É um mapa. Com medidas. Pronto para executar.”
              </p>
            </div>
          </div>
          
          {/* Coluna da Direita: Imagem e Badge de Exemplo */}
          <div className="lg:w-1/2 relative group animate-in fade-in slide-in-from-right-8 duration-1000">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border-8 border-white">
              <Image 
                src="https://www.image2url.com/r2/default/images/1777314500499-28a7bc78-e06d-4b72-9ac3-e978958f98f6.blob" 
                alt="Exemplo de Projeto Rural"
                width={1000}
                height={750}
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                unoptimized
              />
              
              {/* Overlay do Badge de Exemplo */}
              <div className="absolute bottom-6 left-6 bg-[#0d1f10] text-white p-4 rounded-xl border border-primary/20 shadow-2xl backdrop-blur-md">
                <span className="block text-[9px] font-black uppercase tracking-[0.3em] text-primary mb-1.5">EXEMPLO</span>
                <span className="text-sm font-bold tracking-tight">Agrofloresta • 5ha • Mata Atlântica</span>
              </div>
            </div>
            
            {/* Elementos decorativos de fundo */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/20 rounded-full blur-3xl opacity-50 -z-10" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-accent/20 rounded-full blur-3xl opacity-50 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
