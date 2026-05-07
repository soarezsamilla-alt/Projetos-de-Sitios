
"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const showcaseCards = [
  {
    number: '+100',
    title: 'PROJETOS COMPLETOS',
    description: 'Plantas técnicas dimensionadas prontas pra você executar',
    imageUrl: 'https://www.image2url.com/r2/default/images/1778114621743-4a3463dc-62bf-4bed-9a04-cea15123eedc.blob'
  },
  {
    number: '0,5-5',
    title: 'HECTARES COBERTOS',
    description: 'Tem projeto pro seu tamanho de terreno, não importa qual seja',
    imageUrl: 'https://www.image2url.com/r2/default/images/1778115303412-c4496425-75d6-4729-9f56-09ca187e3617.blob'
  },
  {
    number: '7',
    title: 'VOCAÇÕES PRODUTIVAS',
    description: 'Café, hortifruti, pecuária, piscicultura, agrofloresta e more',
    imageUrl: 'https://www.image2url.com/r2/default/images/1778116512790-b6ed1167-0822-4610-ac4e-1cfd11ed51cb.blob'
  },
  {
    number: '5',
    title: 'BIOMAS BRASILEIROS',
    description: 'Adaptados pra Cerrado, Mata Atlântica, Caatinga, Amazônia e Pampa',
    imageUrl: 'https://www.image2url.com/r2/default/images/1778116942584-8bc9436a-50a7-442e-b361-a663e8b33aab.blob'
  },
  {
    number: 'R$ 15K',
    title: 'ECONOMIZADOS',
    description: 'Equivalente ao que cobraria um arquiteto rural particular',
    imageUrl: 'https://www.image2url.com/r2/default/images/1778117419921-c3480325-a950-49e5-a644-5266477d4d20.blob'
  },
  {
    number: 'R$ 14K',
    title: 'RENDA MENSAL POSSÍVEL',
    description: 'Projeção realista baseada em cases validados de produtores reais',
    imageUrl: 'https://www.image2url.com/r2/default/images/1778118031226-22b98363-3814-4ed9-8d20-180df897d7d3.blob'
  },
  {
    number: '100%',
    title: 'MEDIDAS TESTADAS',
    description: 'Validadas em campo por mais de 12 mil produtores brasileiros',
    imageUrl: 'https://www.image2url.com/r2/default/images/1778118243634-9da61190-1bdd-4095-b0d9-d9c93ab79b22.blob'
  },
  {
    number: 'PASSO',
    title: 'A PASSO CLARO',
    description: 'Não precisa ser técnico, é só seguir as plantas e aplicar',
    imageUrl: 'https://www.image2url.com/r2/default/images/1778119122838-644b596c-cff4-47d7-b0c1-bb7a789518df.blob'
  },
  {
    number: '∞',
    title: 'ACESSO VITALÍCIO',
    description: 'Imediato após compra + receba atualizações futuras gratuitas',
    imageUrl: 'https://www.image2url.com/r2/default/images/1778119172029-b5d17258-2e77-4116-a6eb-f9978a69592b.blob'
  }
];

export function ProductShowcase() {
  const productMockup = PlaceHolderImages.find(img => img.id === 'product-mockup');
  const autoScrollRef = React.useRef(
    AutoScroll({ speed: 1, stopOnInteraction: false, stopOnMouseEnter: true })
  );

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

        <div className="w-full max-w-7xl mx-auto">
          <Carousel
            plugins={[autoScrollRef.current]}
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {showcaseCards.map((card, i) => (
                <CarouselItem key={i} className="pl-6 basis-[85%] sm:basis-1/2 lg:basis-1/3">
                  <div 
                    className="group bg-[#0F2F1E] border border-primary/50 rounded-[16px] overflow-hidden flex flex-col transition-all duration-300 hover:border-primary hover:shadow-[0_10px_30px_rgba(201,169,97,0.15)] h-full"
                  >
                    <div className="relative aspect-video w-full bg-gradient-to-br from-primary/20 to-[#0F2F1E] flex items-center justify-center overflow-hidden border-b border-primary/20">
                      {card.imageUrl ? (
                        <Image 
                          src={card.imageUrl}
                          alt={card.title}
                          fill
                          className="object-contain group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <span className="text-primary/40 font-black uppercase tracking-[0.2em] text-[10px] animate-pulse">
                          Imagem em Breve
                        </span>
                      )}
                      <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors" />
                    </div>

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
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
