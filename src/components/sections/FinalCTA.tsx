
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Zap, Lock } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="bg-gradient-to-b from-[#0d1f10] to-background py-24 border-t border-primary/40 text-center">
      <div className="container mx-auto px-6 max-w-4xl">
        <span className="text-primary font-bold text-xs tracking-[0.4em] uppercase mb-6 block">Última Chamada</span>
        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
          Transforme Sua Terra em<br />
          Um <span className="text-primary">Sítio Produtivo de Verdade</span>
        </h2>
        <p className="text-muted-foreground text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          +100 projetos profissionais. Medidas reais. Layouts prontos. A decisão mais inteligente que você pode tomar hoje pela sua propriedade.
        </p>

        <Button 
          asChild
          size="lg"
          className="shine-effect gold-gradient-bg text-black font-black uppercase tracking-[0.2em] h-auto py-6 px-16 text-xl rounded-sm shadow-2xl shadow-primary/30 hover:scale-105 transition-all"
        >
          <a href="#pricing">Ver Planos e Garantir Acesso</a>
        </Button>

        <div className="flex flex-wrap justify-center gap-10 mt-16 opacity-60">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-muted-foreground">
            <ShieldCheck size={16} className="text-primary" />
            7 Dias de Garantia
          </div>
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-muted-foreground">
            <Zap size={16} className="text-primary" />
            Acesso Imediato
          </div>
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-muted-foreground">
            <Lock size={16} className="text-primary" />
            Pagamento Seguro
          </div>
        </div>
      </div>
    </section>
  );
}
