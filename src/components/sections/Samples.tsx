
"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const samples = [
  { id: 'sample-new-6', label: 'AMOSTRA 01', desc: 'Planta de Divisão de Pastagem' },
  { id: 'sample-new-7', label: 'AMOSTRA 02', desc: 'Layout Técnico Rural' },
  { id: 'sample-new-1', label: 'AMOSTRA 03', desc: 'Projeto Detalhado de Sítio Premium' },
  { id: 'sample-new-2', label: 'AMOSTRA 04', desc: 'Planta de Layout Rural Produtivo' },
  { id: 'sample-new-3', label: 'AMOSTRA 05', desc: 'Layout Estratégico Rural' },
  { id: 'sample-new-4', label: 'AMOSTRA 06', desc: 'Planta Profissional de Sítio' },
  { id: 'sample-new-5', label: 'AMOSTRA 07', desc: 'Dimensionamento de Áreas' },
  { id: 'sample-3', label: 'AMOSTRA 08', desc: 'Projeto amazônico açaí/cupuaçu' },
  { id: 'sample-4', label: 'AMOSTRA 09', desc: 'Capa de divisória de seção' },
  { id: 'sample-5', label: 'AMOSTRA 10', desc: 'Sumário organizado' },
  { id: 'sample-6', label: 'AMOSTRA 11', desc: 'Projeto semiárido com cisternas' }
];

export function Samples() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <section className="bg-card/20 py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-xs tracking-[0.4em] uppercase mb-4 block">Veja Por Dentro</span>
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Amostras do <span className="text-primary">Material Premium</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Veja abaixo exemplos reais das páginas que você vai receber — cada projeto entregue com padrão editorial profissional.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto px-4">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-4">
              {samples.map((sample, idx) => {
                const imgData = PlaceHolderImages.find(img => img.id === sample.id);
                return (
                  <CarouselItem key={sample.id} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <div className="relative aspect-[3/4] flex items-center justify-center p-0 overflow-hidden bg-card/50 rounded-sm">
                      {imgData ? (
                        <Image 
                          src={imgData.imageUrl} 
                          alt={sample.desc}
                          width={600}
                          height={800}
                          className="object-contain w-full h-full"
                          data-ai-hint="farm blueprint"
                          unoptimized={true}
                          priority={idx < 6}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-muted-foreground text-[10px] uppercase tracking-widest italic">Amostra indisponível</span>
                        </div>
                      )}
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:-left-12 bg-background/80 border-primary/30 text-primary hover:bg-primary/20 transition-all z-20" />
            <CarouselNext className="right-0 md:-right-12 bg-background/80 border-primary/30 text-primary hover:bg-primary/20 transition-all z-20" />
          </Carousel>
        </div>

        <div className="mt-12 p-8 bg-[#0d1f10] border-l-4 border-primary rounded-sm shadow-xl">
          <div className="flex items-center gap-3 mb-2">
            <Star className="text-primary fill-primary" size={18} />
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm">Observação Importante</h4>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Todos os +100 projetos seguem o mesmo padrão editorial premium que você vê nas amostras acima — com medidas visíveis, zonas identificadas e layouts profissionais.
          </p>
        </div>
      </div>
    </section>
  );
}
