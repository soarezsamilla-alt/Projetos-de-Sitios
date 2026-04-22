"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';

const STORAGE_KEY = 'sitio_countdown_end';
const DURATION_MS = 24 * 60 * 60 * 1000;

export function Pricing() {
  const [timeLeft, setTimeLeft] = useState({ hours: '00', mins: '00', secs: '00' });

  useEffect(() => {
    let endTime = localStorage.getItem(STORAGE_KEY);
    if (!endTime || parseInt(endTime) < Date.now()) {
      endTime = (Date.now() + DURATION_MS).toString();
      localStorage.setItem(STORAGE_KEY, endTime);
    }

    const timer = setInterval(() => {
      const distance = parseInt(endTime!) - Date.now();
      if (distance < 0) {
        const newEndTime = (Date.now() + DURATION_MS).toString();
        localStorage.setItem(STORAGE_KEY, newEndTime);
        return;
      }

      const h = Math.floor(distance / (1000 * 60 * 60));
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        hours: String(h).padStart(2, '0'),
        mins: String(m).padStart(2, '0'),
        secs: String(s).padStart(2, '0')
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const planBasicImg = PlaceHolderImages.find(img => img.id === 'plan-basic');
  const planProImg = PlaceHolderImages.find(img => img.id === 'plan-pro');

  return (
    <section className="bg-gradient-to-b from-background to-[#0d1f10] py-24 border-t border-primary/40 scroll-mt-20" id="pricing">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-xs tracking-[0.4em] uppercase mb-4 block">Escolha Seu Plano</span>
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Acesso Imediato ao <span className="text-primary">Pack Completo</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ambas opções incluem acesso vitalício e 7 dias de garantia total.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-48 max-w-7xl mx-auto items-start">
          {/* Plan Basic */}
          <div className="bg-card border border-border p-6 md:p-8 rounded-sm flex flex-col relative group hover:border-muted-foreground/50 transition-all">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-muted text-muted-foreground px-6 py-1.5 rounded-sm text-[10px] font-black tracking-widest uppercase border border-border">
              Plano Básico
            </div>
            <div className="relative mb-6 text-center flex justify-center">
              {planBasicImg ? (
                <Image 
                  src={planBasicImg.imageUrl} 
                  alt="Plano Básico" 
                  width={600} 
                  height={450} 
                  className="w-full h-auto max-w-full drop-shadow-[0_10px_30px_rgba(212,168,75,0.1)] transition-transform group-hover:scale-105" 
                  data-ai-hint="book cover" 
                />
              ) : (
                <div className="aspect-video bg-gradient-to-br from-[#0d1f10] to-card border-2 border-dashed border-primary/20 rounded-sm w-full flex items-center justify-center">
                  <span className="text-primary text-[10px] font-black uppercase tracking-widest">Capa Plano Básico</span>
                </div>
              )}
            </div>
            <h3 className="text-2xl font-black mb-1 font-headline">Básico</h3>
            <p className="text-muted-foreground text-xs mb-6">Tudo que você precisa para planejar seu sítio do zero.</p>
            <div className="mb-6 pb-6 border-b border-border">
              <span className="text-muted-foreground line-through text-xs block mb-1">De R$ 97,00 por</span>
              <div className="flex items-start text-foreground">
                <span className="text-xl font-black mt-1 mr-1">R$</span>
                <span className="text-6xl font-black font-headline">9</span>
                <span className="text-xl font-black mt-1">,90</span>
              </div>
              <p className="text-muted-foreground text-[9px] mt-1 tracking-widest uppercase">Pagamento único · Acesso vitalício</p>
            </div>
            <ul className="space-y-3 flex-grow mb-8">
              <li className="flex items-center gap-2 text-xs"><Check className="text-primary flex-shrink-0" size={14} /> <strong>+100 projetos completos</strong></li>
              <li className="flex items-center gap-2 text-xs"><Check className="text-primary flex-shrink-0" size={14} /> Acesso imediato após compra</li>
              <li className="flex items-center gap-2 text-xs"><Check className="text-primary flex-shrink-0" size={14} /> Garantia de 7 dias</li>
              <li className="flex items-center gap-2 text-xs text-muted-foreground opacity-50"><X className="text-muted-foreground flex-shrink-0" size={14} /> 4 Bônus Estratégicos</li>
            </ul>
            <Button variant="outline" className="w-full h-auto py-3 font-black uppercase tracking-[0.2em] rounded-sm hover:bg-foreground hover:text-black transition-all text-xs">
              Garantir Básico
            </Button>
          </div>

          {/* Plan Pro */}
          <div className="bg-gradient-to-b from-card to-[#0d1f10] border-2 border-primary p-6 md:p-8 rounded-sm flex flex-col relative transform scale-105 shadow-2xl shadow-primary/20 hover:scale-[1.07] transition-all">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 gold-gradient-bg text-black px-6 py-2 rounded-sm text-[10px] font-black tracking-widest uppercase shadow-lg shadow-primary/30">
              ★ MAIS ESCOLHIDO ★
            </div>

            {/* Countdown Box */}
            <div className="bg-accent/10 border border-primary/30 p-3 rounded-sm mb-6 shine-effect">
              <span className="text-[9px] font-black tracking-widest uppercase text-foreground/70 mb-2 block text-center">⚡ Oferta Expira Em:</span>
              <div className="flex justify-center gap-2">
                {[
                  { val: timeLeft.hours, label: 'Horas' },
                  { val: timeLeft.mins, label: 'Min' },
                  { val: timeLeft.secs, label: 'Seg' }
                ].map((unit, i) => (
                  <div key={i} className="bg-black/80 border border-primary/50 w-14 py-1.5 rounded-sm text-center">
                    <span className="text-xl font-black font-headline text-primary block leading-none">{unit.val}</span>
                    <span className="text-[7px] tracking-tighter uppercase text-muted-foreground font-bold">{unit.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mb-6 text-center flex justify-center">
              {planProImg ? (
                <Image 
                  src={planProImg.imageUrl} 
                  alt="Plano Pro" 
                  width={600} 
                  height={450} 
                  className="w-full h-auto max-w-full drop-shadow-[0_10px_30px_rgba(212,168,75,0.3)] transition-transform group-hover:scale-105" 
                />
              ) : (
                <div className="aspect-video bg-gradient-to-br from-background to-card border-2 border-dashed border-primary/40 rounded-sm w-full flex items-center justify-center">
                   <span className="text-primary text-[10px] font-black uppercase tracking-widest">Capa Plano Pro</span>
                </div>
              )}
            </div>
            <h3 className="text-2xl font-black mb-1 font-headline gold-gradient-text">Pro</h3>
            <p className="text-muted-foreground text-xs mb-6">O pack completo + 4 bônus exclusivos.</p>
            <div className="mb-6 pb-6 border-b border-border">
              <span className="text-muted-foreground line-through text-xs block mb-1">De R$ 197,00 por</span>
              <div className="flex items-start gold-gradient-text">
                <span className="text-xl font-black mt-1 mr-1">R$</span>
                <span className="text-6xl font-black font-headline">24</span>
                <span className="text-xl font-black mt-1">,90</span>
              </div>
              <p className="text-muted-foreground text-[9px] mt-1 tracking-widest uppercase">Pagamento único · Acesso vitalício + Bônus</p>
            </div>
            <ul className="space-y-2.5 flex-grow mb-8">
              <li className="flex items-center gap-2 text-xs font-bold text-foreground"><Check className="text-primary flex-shrink-0" size={14} /> Tudo do Básico</li>
              <li className="flex items-center gap-2 text-xs"><Check className="text-primary flex-shrink-0" size={14} /> <strong>BÔNUS 1:</strong> Construções Rurais</li>
              <li className="flex items-center gap-2 text-xs"><Check className="text-primary flex-shrink-0" size={14} /> <strong>BÔNUS 2:</strong> Planilha ROI Editável</li>
              <li className="flex items-center gap-2 text-xs"><Check className="text-primary flex-shrink-0" size={14} /> <strong>BÔNUS 3:</strong> Plantas Companheiras</li>
              <li className="flex items-center gap-2 text-xs"><Check className="text-primary flex-shrink-0" size={14} /> <strong>BÔNUS 4:</strong> Energia Solar Rural</li>
            </ul>
            <Button className="shine-effect gold-gradient-bg text-black font-black uppercase tracking-[0.2em] h-auto py-3.5 text-xs rounded-sm shadow-2xl shadow-primary/40 hover:scale-105 transition-all w-full">
              Quero o Plano Pro
            </Button>
          </div>
        </div>

        <p className="text-center mt-16 text-muted-foreground text-[9px] tracking-[0.2em] uppercase">
          🔒 Pagamento 100% seguro  ⚡ Acesso imediato
        </p>
      </div>
    </section>
  );
}
