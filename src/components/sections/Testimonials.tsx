
import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  { id: 'testimonial-1' },
  { id: 'testimonial-2' },
  { id: 'testimonial-3' },
  { id: 'testimonial-4' },
  { id: 'testimonial-5' },
  { id: 'testimonial-6' }
];

export function Testimonials() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => {
            const imgData = PlaceHolderImages.find(img => img.id === t.id);
            return (
              <div key={idx} className="relative aspect-[4/5] bg-card border border-border rounded-sm overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-2xl group">
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
