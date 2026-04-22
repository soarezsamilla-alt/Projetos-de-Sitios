
"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

export function Hero() {
  const heroMockup = PlaceHolderImages.find(img => img.id === 'hero-mockup');

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0d1f10] to-background pt-20 pb-24 border-b border-primary/30">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-900/40 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center max-w-5xl">
        <div className="inline-flex items-center gap-4 bg-gradient-to-br from-primary to-[#b8902f] text-black px-8 py-2.5 rounded-sm font-bold text-[10px] tracking-[0.3em] uppercase mb-8 shadow-xl shadow-primary/20">
          <div className="w-8 h-[1px] bg-black/50" />
          Edição Premium 2026
          <div className="w-8 h-[1px] bg-black/50" />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.05]">
          A Coleção Definitiva de<br />
          <span className="gold-gradient-text block mt-2 text-5xl md:text-7xl lg:text-8xl">
            +100 Projetos
          </span>
          de Sítios Produtivos
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          A maior biblioteca de plantas de sítios do Brasil — +100 projetos dimensionados com medidas, divisões e layouts prontos para executar. De 0,5 a 5 hectares.
        </p>

        <div className="relative mx-auto max-w-4xl mb-12 group">
          <div className="absolute -inset-1 bg-primary/20 rounded-lg blur-lg group-hover:bg-primary/30 transition duration-500" />
          <div className="relative border-2 border-dashed border-primary/50 rounded-lg overflow-hidden bg-card/50 p-6 md:p-12 aspect-[16/10] flex items-center justify-center">
            {heroMockup && (
              <Image 
                src={heroMockup.imageUrl} 
                alt={heroMockup.description}
                width={1200}
                height={800}
                className="object-contain w-full h-full"
                data-ai-hint="ebook mockup"
              />
            )}
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Button 
            asChild
            size="lg"
            className="shine-effect gold-gradient-bg hover:scale-105 transition-transform duration-300 text-black font-black uppercase tracking-[0.2em] h-auto py-5 px-12 text-lg shadow-2xl shadow-primary/30"
          >
            <a href="#pricing">Garantir Meu Acesso</a>
          </Button>
          <span className="text-muted-foreground text-xs tracking-widest uppercase">
            ★ Acesso imediato · 7 dias de garantia ★
          </span>
        </div>
      </div>
    </section>
  );
}
