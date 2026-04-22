
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

        <h1 className="text-[26px] font-black mb-6 leading-[1.1]">
          <span className="gold-gradient-text block mb-2">
            +100 Projetos de Sítios Produtivos
          </span>
          que transformam terra parada em fonte de renda
        </h1>

        <p className="text-muted-foreground text-[16px] max-w-4xl mx-auto mb-10 leading-relaxed font-light">
          A maior biblioteca de plantas de sítios do Brasil com +100 projetos profissionais com medidas reais, divisões estratégicas e layouts prontos para executar, mesmo que você nunca tenha planejado nada rural na vida.
        </p>

        <div className="relative mx-auto max-w-3xl mb-12">
          {heroMockup && (
            <Image 
              src={heroMockup.imageUrl} 
              alt={heroMockup.description}
              width={1200}
              height={800}
              className="w-full h-auto drop-shadow-[0_20px_50px_rgba(212,168,75,0.15)]"
              priority
            />
          )}
        </div>

        <div className="flex flex-col items-center gap-4">
          <Button 
            asChild
            size="lg"
            className="shine-effect gold-gradient-bg hover:scale-105 transition-transform duration-300 text-black font-black uppercase tracking-[0.2em] h-auto py-3 px-6 md:py-3.5 md:px-8 text-xs md:text-sm shadow-2xl shadow-primary/30"
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
