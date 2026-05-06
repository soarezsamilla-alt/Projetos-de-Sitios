
"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const showcaseCards = [
  {
    number: '+100',
    title: 'PROJETOS COMPLETOS',
    description: 'Plantas técnicas dimensionadas prontas pra você executar',
    imageUrl: 'https://www.image2url.com/r2/default/images/1778110068677-a8cd60cb-9894-4bcf-85d7-48e4bb87ae3a.blob'
  },
  {
    number: '0,5-5',
    title: 'HECTARES COBERTOS',
    description: 'Tem projeto pro seu tamanho de terreno, não importa qual seja',
    imageUrl: 'https://www.image2url.com/r2/default/images/1778110983390-45235305-c8fe-41eb-a78d-1886fd6ac7f2.blob'
  },
  {
    number: '7',
    title: 'VOCAÇÕES PRODUTIVAS',
    description: 'Café, hortifruti, pecuária, piscicultura, agrofloresta e mais',
    imageUrl: 'https://www.image2url.com/r2/default/images/1778111072878-00a5ccee-823c-40ec-8025-1fee7c0555df.blob'
  },
  {
    number: '5',
    title: 'BIOMAS BRASILEIROS',
    description: 'Adaptados pra Cerrado, Mata Atlântica, Caatinga, Amazônia e Pampa'
  },
  {
    number: 'R$ 15K',
    title: 'ECONOMIZADOS',
    description: 'Equivalente ao que cobraria um arquiteto rural particular'
  },
  {
    number: 'R$ 14K',
    title: 'RENDA MENSAL POSSÍVEL',
    description: 'Projeção realista baseada em cases validados de produtores reais'
  },
  {
    number: '100%',
    title: 'MEDIDAS TESTADAS',
    description: 'Validadas em campo por mais de 12 mil produtores brasileiros'
  },
  {
    number: 'PASSO',
    title: 'A PASSO CLARO',
    description: 'Não precisa ser técnico, é só seguir as plantas e aplicar'
  },
  {
    number: '∞',
    title: 'ACESSO VITALÍCIO',
    description: 'Imediato após compra + receba atualizações futuras gratuitas'
  }
];

export function ProductShowcase() {
  const productMockup = PlaceHolderImages.find(img => img.id === 'product-mockup');

  return (
    <section className="bg-gradient-to-b from-background to-[#0d1f10] py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-0">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Conheça o <span className="text-primary">Material +100 Projetos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Não é um curso. Não é um manual teórico. É uma biblioteca visual completa de projetos prontos para você escolher, imprimir e executar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center mb-16">
          <div className="flex justify-center items-center py-0">
            {productMockup && (
              <div className="relative w-full flex justify-center py-0">
                <Image 
                  src={productMockup.imageUrl} 
                  alt={productMockup.description}
                  width={600}
                  height={700}
                  className="w-full h-auto max-w-[420px] md:max-w-[500px] drop-shadow-[0_20px_50px_rgba(212,168,75,0.3)] floating-effect"
                  data-ai-hint="product showcase"
                />
              </div>
            )}
          </div>

          <div className="space-y-6 pt-8 lg:pt-0">
            <h3 className="text-3xl md:text-4xl font-black text-foreground leading-tight text-center lg:text-left">
              Projetos <span className="text-primary">Altamente Dimensionados</span>,<br />Não Ideias Vagas
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed text-center lg:text-left">
              Cada um dos +100 projetos foi desenhado como uma planta profissional, com medidas reais em metros, divisão das zonas produtivas, posicionamento de casa, galpões, tanques, cultivos e animais.
            </p>
          </div>
        </div>

        {/* 9 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {showcaseCards.map((card, i) => (
            <div 
              key={i} 
              className="group bg-[#0F2F1E] border border-primary/50 rounded-[16px] overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-[0_10px_30px_rgba(201,169,97,0.15)] h-full"
            >
              {/* Image Area (60%) */}
              <div className="relative aspect-video w-full bg-gradient-to-br from-primary/20 to-[#0F2F1E] flex items-center justify-center overflow-hidden border-b border-primary/20">
                {card.imageUrl ? (
                  <Image 
                    src={card.imageUrl}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <span className="text-primary/40 font-black uppercase tracking-[0.2em] text-[10px] animate-pulse">
                    Imagem em Breve
                  </span>
                )}
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Text Area (40%) */}
              <div className="p-6 flex flex-col items-center justify-center text-center flex-grow">
                <div className="font-headline font-bold text-primary text-4xl md:text-[48px] mb-4 drop-shadow-[0_2px_4px_rgba(201,169,97,0.3)] leading-none">
                  {card.number}
                </div>
                <h4 className="font-bold text-white text-base tracking-[1px] uppercase mb-3">
                  {card.title}
                </h4>
                <p className="text-white/75 text-sm leading-relaxed max-w-[240px]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
