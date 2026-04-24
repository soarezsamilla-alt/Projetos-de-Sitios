"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const bonuses = [
  {
    id: 'bonus-1',
    tag: 'BÔNUS 01',
    title: 'Pack de Construções Rurais',
    desc: '10 plantas prontas de galinheiros, chiqueiros e tanques com medidas e materiais necessários para construção.',
    val: '97,00'
  },
  {
    id: 'bonus-2',
    tag: 'BÔNUS 02',
    title: 'Planilha de ROI Produtivo',
    desc: 'Calculadora editável que mostra o retorno financeiro estimado de cada zona do seu sítio. Editável no Excel.',
    val: '77,00'
  },
  {
    id: 'bonus-3',
    tag: 'BÔNUS 03',
    title: 'Guia de Plantas Companheiras',
    desc: 'Saiba o que plantar junto para aumentar produtividade naturalmente. Pares ideais para café, frutas e hortaliças.',
    val: '67,00'
  },
  {
    id: 'bonus-4',
    tag: 'BÔNUS 04',
    title: 'Manual de Energia Solar Rural',
    desc: 'Dimensione sistemas solares para casas rurais, poços artesianos e irrigação. Cálculos passo a passo.',
    val: '87,00'
  }
];

export function Bonus() {
  return (
    <section className="bg-background py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-xs tracking-[0.4em] uppercase mb-4 block">Exclusivo do Plano Pro</span>
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Bônus <span className="text-primary">Premium Inclusos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Quem garantir o Plano Pro leva também estes 4 bônus estratégicos que complementam os +100 projetos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bonuses.map((bonus) => {
            const imgData = PlaceHolderImages.find(img => img.id === bonus.id);
            return (
              <div key={bonus.id} className="relative bg-card border border-border rounded-sm overflow-hidden group hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-400 flex flex-col">
                <div className="absolute top-4 right-4 bg-primary text-black font-black text-[10px] px-3 py-1.5 rounded-sm z-10 tracking-widest">
                  {bonus.tag}
                </div>
                <div className="aspect-[4/3] bg-gradient-to-br from-[#0d1f10] to-card border-2 border-dashed border-primary/20 m-4 rounded-sm flex items-center justify-center p-6 text-center group-hover:border-primary/40 transition-colors">
                  {imgData ? (
                    <Image 
                      src={imgData.imageUrl} 
                      alt={bonus.title}
                      width={400}
                      height={300}
                      className="object-contain w-full h-full shadow-lg"
                      data-ai-hint={imgData.imageHint}
                    />
                  ) : (
                    <div className="flex flex-col gap-2">
                       <span className="text-primary text-xs font-black uppercase tracking-widest">{bonus.tag}</span>
                       <span className="text-muted-foreground text-[10px] leading-tight">{bonus.title}</span>
                    </div>
                  )}
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-lg font-black mb-4 leading-tight">{bonus.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">{bonus.desc}</p>
                  <div className="pt-4 border-t border-border flex items-baseline gap-2">
                    <span className="text-muted-foreground line-through text-xs font-semibold">R$ {bonus.val}</span>
                    <span className="text-primary font-black text-sm uppercase tracking-widest">GRÁTIS</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}