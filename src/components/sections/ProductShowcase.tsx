"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle2 } from 'lucide-react';

const features = [
  'QUANTIDADE/PRODUTO (+100 projetos)',
  'APLICABILIDADE (0,5 a 5 hectares)',
  'DIVERSIDADE (7 vocações)',
  'ABRANGÊNCIA (5 biomas)',
  'VALOR ECONÔMICO (economiza R$ 5-15k)',
  'LUCRO (projeção de renda)'
];

export function ProductShowcase() {
  const productMockup = PlaceHolderImages.find(img => img.id === 'product-mockup');

  return (
    <section className="bg-gradient-to-b from-background to-[#0d1f10] py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-xs tracking-[0.4em] uppercase mb-4 block">A Solução</span>
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Conheça o <span className="text-primary">Pack +100 Projetos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Não é um curso. Não é um manual teórico. É uma biblioteca visual completa de projetos prontos para você escolher, imprimir e executar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/10 rounded-lg blur-2xl group-hover:bg-primary/20 transition duration-500" />
            <div className="relative aspect-[6/7] bg-gradient-to-br from-card to-[#0d1f10] border-2 border-dashed border-primary/40 rounded-lg p-12 flex flex-col items-center justify-center text-center">
              {productMockup ? (
                <Image 
                  src={productMockup.imageUrl} 
                  alt={productMockup.description}
                  width={600}
                  height={700}
                  className="object-contain w-full h-full shadow-2xl"
                  data-ai-hint="open book"
                />
              ) : (
                <span className="text-primary text-sm uppercase tracking-widest">📚 MOCKUP DO EBOOK</span>
              )}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-black text-foreground leading-tight">
              Projetos <span className="text-primary">Dimensionados</span>,<br />Não Ideias Vagas
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Cada um dos +100 projetos foi desenhado como uma planta profissional — com medidas reais em metros, divisão das zonas produtivas, posicionamento de casa, galpões, tanques, cultivos e animais.
            </p>
            <ul className="space-y-4">
              {features.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-foreground text-lg border-b border-border pb-4 last:border-0">
                  <div className="w-8 h-8 rounded-full border border-primary flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-primary" size={18} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
