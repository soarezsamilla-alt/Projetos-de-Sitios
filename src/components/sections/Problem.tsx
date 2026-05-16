
"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const problems = [
  {
    id: 'problem-1',
    title: 'Terra Subutilizada',
    desc: 'Você tem espaço, mas áreas inteiras ficam paradas porque você não sabe o que fazer com elas.'
  },
  {
    id: 'problem-2',
    title: 'Renda Vulnerável',
    desc: 'Depender de uma única fonte de produção é arriscado — mas diversificar exige planejamento que você não tem.'
  },
  {
    id: 'problem-3',
    title: 'Consultoria Cara',
    desc: 'Contratar um agrônomo para fazer o projeto do zero custa milhares de reais. E mesmo assim vem genérico.'
  },
  {
    id: 'problem-4',
    title: 'Informação Dispersa',
    desc: 'Você busca referência no YouTube, fóruns e grupos — mas o que acha é raso, sem medidas e sem clareza.'
  }
];

export function Problem() {
  return (
    <section className="bg-card/30 py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Sua Terra Merece Um <span className="text-primary">Projeto Profissional</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A maior parte dos pequenos produtores rurais no Brasil opera muito abaixo do potencial por falta de um mapa claro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {problems.map((prob, idx) => {
            const imgData = PlaceHolderImages.find(img => img.id === prob.id);
            return (
              <div 
                key={idx} 
                className="bg-white dark:bg-card border border-border rounded-[12px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 group flex flex-col"
              >
                <div className="relative w-full h-[200px] md:h-[240px] overflow-hidden">
                   {imgData ? (
                     <Image 
                       src={imgData.imageUrl} 
                       alt={imgData.description}
                       width={600}
                       height={400}
                       className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                       data-ai-hint={imgData.imageHint}
                     />
                   ) : (
                     <div className="w-full h-full bg-muted flex items-center justify-center">
                       <span className="text-[10px] uppercase tracking-widest text-muted-foreground italic">Ilustração indisponível</span>
                     </div>
                   )}
                </div>
                <div className="p-6 md:p-[24px] flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-black dark:text-foreground font-body leading-tight">
                    {prob.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {prob.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
