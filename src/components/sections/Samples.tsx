
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
  { id: 'sample-1', label: 'AMOSTRA 01', desc: 'Sítio 2ha café e animais' },
  { id: 'sample-2', label: 'AMOSTRA 02', desc: 'Sítio 1ha hortifruti comercial' },
  { id: 'sample-3', label: 'AMOSTRA 03', desc: 'Projeto amazônico açaí/cupuaçu' },
  { id: 'sample-4', label: 'AMOSTRA 04', desc: 'Capa de divisória de seção' },
  { id: 'sample-5', label: 'AMOSTRA 05', desc: 'Sumário organizado' },
  { id: 'sample-6', label: 'AMOSTRA 06', desc: 'Projeto semiárido com cisternas' }
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
              {samples.map((sample) => {
                const imgData = PlaceHolderImages.find(img => img.id === sample.id);
                return (
                  <CarouselItem key={sample.id} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <div className="relative overflow-hidden bg-card border border-border aspect-[3/4] rounded-sm p-0 flex flex-col items-center justify-center text-center">
                      {imgData ? (
                        <Image 
                          src={imgData.imageUrl} 
                          alt={sample.desc}
                          width={600}
                          height={800}
                          className="object-cover w-full h-full"
                          data-ai-hint="farm blueprint"
                        />
                      ) : (
                        <div className="bg-muted w-full h-full flex items-center justify-center">
                          <span className="text-muted-foreground text-[10px] uppercase tracking-widest">Carregando Amostra...</span>
                        </div>
                      )}
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12 border-primary/30 text-primary hover:bg-primary/10 hover:text-primary" />
              <CarouselNext className="-right-12 border-primary/30 text-primary hover:bg-primary/10 hover:text-primary" />
            </div>
          </Carousel>
        </div>

        <div className="mt-12 p-8 bg-[#0d1f10] border-l-4 border-primary rounded-sm shadow-xl">
          <div className="flex items-center gap-3 mb-2">
            <Star className="text-primary fill-primary" size={18} />
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm">Observação Importante</h4>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Todos os +100 projetos seguem o mesmo padrão editorial premium que você vê nas amostras acima — com medidas visíveis, zonas identificadas, elementos produtivos bem posicionados e legendas profissionais.
          </p>
        </div>
      </div>
    </section>
  );
}
