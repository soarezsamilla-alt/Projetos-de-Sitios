
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
  'LUCRO (projeção de renda)',
  'SEGURANÇA (medidas testadas)',
  'FACILIDADE (passo a passo)',
  'ACESSO (imediato + vitalício)',
  'GARANTIA (7 dias)'
];

export function ProductShowcase() {
  const productMockup = PlaceHolderImages.find(img => img.id === 'product-mockup');

  return (
    <section className="bg-gradient-to-b from-background to-[#0d1f10] py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Conheça o <span className="text-primary">Material +100 Projetos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Não é um curso. Não é um manual teórico. É uma biblioteca visual completa de projetos prontos para você escolher, imprimir e executar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center items-center">
            {productMockup && (
              <Image 
                src={productMockup.imageUrl} 
                alt={productMockup.description}
                width={600}
                height={700}
                className="w-full h-auto max-w-[500px] drop-shadow-[0_20px_50px_rgba(212,168,75,0.2)]"
                data-ai-hint="open book"
              />
            )}
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-black text-foreground leading-tight text-center lg:text-left">
              Projetos <span className="text-primary">Altamente Dimensionados</span>,<br />Não Ideias Vagas
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed text-center lg:text-left">
              Cada um dos +100 projetos foi desenhado como uma planta profissional, com medidas reais em metros, divisão das zonas produtivas, posicionamento de casa, galpões, tanques, cultivos e animais.
            </p>
            <ul className="space-y-3">
              {features.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-foreground text-base border-b border-border pb-3 last:border-0">
                  <div className="w-6 h-6 rounded-full border border-primary flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-primary" size={14} />
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
