
"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Zap, ShieldCheck, Check } from 'lucide-react';

export function Hero() {
  const heroMockup = PlaceHolderImages.find(img => img.id === 'hero-mockup');

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0d1f10] to-background pt-20 pb-24 border-b border-primary/30">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-900/40 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-2 md:px-6 text-center max-w-6xl">
        <div className="shine-effect inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-5 py-1.5 rounded-full font-black text-[9px] tracking-[0.2em] uppercase mb-10 shadow-lg shadow-primary/5 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Edição Premium 2026
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        </div>

        <h1 className="text-4xl md:text-7xl font-black mb-6 leading-[1.1]">
          <span className="gold-gradient-text block mb-2">
            +100 Projetos de Sítios Produtivos
          </span>
          que transforma sua terra parada em fonte de renda
        </h1>

        <p className="text-muted-foreground text-[16px] max-w-4xl mx-auto mb-10 leading-relaxed font-light">
          A maior biblioteca de plantas de sítios do Brasil com +100 projetos profissionais com medidas reais, divisões estratégicas e layouts prontos para executar, mesmo que você nunca tenha planejado nada rural na vida.
        </p>

        <div className="relative mx-auto max-w-7xl mb-12 px-0">
          {heroMockup && (
            <div className="relative w-full scale-105 md:scale-110">
              <Image 
                src={heroMockup.imageUrl} 
                alt={heroMockup.description}
                width={1400}
                height={933}
                className="w-full h-auto drop-shadow-[0_20px_60px_rgba(212,168,75,0.2)] floating-subtle"
                priority
              />
            </div>
          )}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mt-8 opacity-80">
          <div className="flex items-center gap-1.5 text-primary font-bold text-[9px] md:text-[10px] tracking-widest uppercase">
            <Zap size={12} className="text-primary" />
            <span>Acesso imediato</span>
          </div>
          <div className="flex items-center gap-1.5 text-primary font-bold text-[9px] md:text-[10px] tracking-widest uppercase">
            <ShieldCheck size={12} className="text-primary" />
            <span>Garantia de 7 dias</span>
          </div>
          <div className="flex items-center gap-1.5 text-primary font-bold text-[9px] md:text-[10px] tracking-widest uppercase">
            <Check size={12} className="text-primary" />
            <span>A partir de R$ 9,90</span>
          </div>
        </div>
      </div>
    </section>
  );
}
