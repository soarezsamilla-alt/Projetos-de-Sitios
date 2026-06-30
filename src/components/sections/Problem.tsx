
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
    <section className="bg-background py-20 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Você Conhece Bem Essa Sensação...
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A maior parte dos pequenos produtores rurais no Brasil opera muito abaixo do potencial por falta de um mapa claro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((prob) => {
            const imgData = PlaceHolderImages.find(img => img.id === prob.id);
            return (
              <div 
                key={prob.id} 
                className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 group flex flex-col"
              >
                <div className="relative w-full h-[140px] md:h-[180px] overflow-hidden bg-muted/5">
                   {imgData ? (
                     <Image 
                       src={imgData.imageUrl} 
                       alt={imgData.description}
                       width={600}
                       height={400}
                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 relative z-10"
                       data-ai-hint={imgData.imageHint}
                       unoptimized={true}
                       priority
                     />
                   ) : (
                     <div className="w-full h-full flex items-center justify-center">
                       <span className="text-[10px] uppercase tracking-widest text-muted-foreground italic">Ilustração indisponível</span>
                     </div>
                   )}
                </div>
                <div className="p-5 md:p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold mb-2 text-foreground font-body leading-tight">
                    {prob.title}
                  </h3>
                  <p className="text-muted-foreground text-[12px] leading-relaxed">
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
