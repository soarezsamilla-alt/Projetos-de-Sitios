
"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  { id: 'testimonial-1' },
  { id: 'testimonial-2' },
  { id: 'testimonial-3' },
  { id: 'testimonial-4' },
  { id: 'testimonial-5' },
  { id: 'testimonial-6' }
];

export function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  return (
    <section className="bg-card/30 py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-xs tracking-[0.4em] uppercase mb-4 block">Prova Social</span>
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Quem Já <span className="text-primary">Adquiriu Recomenda</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Veja o que produtores rurais que já acessaram o pack estão falando sobre o material.
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
              {testimonials.map((t, idx) => {
                const imgData = PlaceHolderImages.find(img => img.id === t.id);
                return (
                  <CarouselItem key={idx} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <div className="relative aspect-[4/5] bg-card border border-border rounded-sm overflow-hidden shadow-2xl group h-full">
                       <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors z-10" />
                       {imgData ? (
                         <Image 
                           src={imgData.imageUrl} 
                           alt={`Depoimento ${idx + 1}`}
                           fill
                           className="object-cover"
                           data-ai-hint="testimonial screenshot"
                           unoptimized={true}
                         />
                       ) : (
                         <div className="w-full h-full bg-muted flex items-center justify-center text-[10px] uppercase tracking-widest">
                           Depoimento {idx + 1}
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
      </div>
    </section>
  );
}
