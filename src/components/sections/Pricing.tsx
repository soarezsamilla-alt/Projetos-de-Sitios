
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Check, X, Timer, Sparkles, ShieldCheck } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const STORAGE_KEY = 'sitio_countdown_end';
const DURATION_MS = 24 * 60 * 60 * 1000;
const UPSELL_TIMER_MS = 15 * 60 * 1000;

export function Pricing() {
  const [timeLeft, setTimeLeft] = useState({ hours: '00', mins: '00', secs: '00' });
  const [showUpsell, setShowUpsell] = useState(false);
  const [upsellTime, setUpsellTime] = useState(UPSELL_TIMER_MS);

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

  useEffect(() => {
    if (showUpsell && upsellTime > 0) {
      const timer = setInterval(() => {
        setUpsellTime(prev => prev - 1000);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [showUpsell, upsellTime]);

  const formatUpsellTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const planBasicImg = PlaceHolderImages.find(img => img.id === 'plan-basic');
  const planProImg = PlaceHolderImages.find(img => img.id === 'plan-pro');

  return (
    <section className="bg-gradient-to-b from-background to-[#0d1f10] py-24 border-t border-primary/40 scroll-mt-20" id="pricing">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-foreground">
            Garanta Agora Com <span className="text-primary">Preço Especial</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ambas opções incluem acesso vitalício e 7 dias de garantia total.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-5xl mx-auto items-start">
          {/* Basic Plan Card */}
          <div className="bg-card border border-border p-5 md:p-6 rounded-sm flex flex-col relative group hover:border-muted-foreground/50 transition-all">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-muted text-muted-foreground px-6 py-1.5 rounded-sm text-[10px] font-black tracking-widest uppercase border border-border">
              Plano Básico
            </div>
            
            <h3 className="text-2xl font-black mb-1 font-headline text-center">Básico</h3>
            <p className="text-muted-foreground text-xs mb-4 text-center">Tudo que você precisa para planejar seu sítio do zero.</p>
            
            <div className="mb-4 pb-4 border-b border-border text-center">
              <span className="text-muted-foreground line-through text-xs block mb-1">De R$ 97,00 por</span>
              <div className="flex items-start justify-center text-foreground">
                <span className="text-xl font-black mt-1 mr-1">R$</span>
                <span className="text-6xl font-black font-headline">9</span>
                <span className="text-xl font-black mt-1">,90</span>
              </div>
              <p className="text-muted-foreground text-[9px] mt-1 tracking-widest uppercase">Pagamento único · Acesso vitalício</p>
            </div>

            <div className="relative mb-4 text-center flex justify-center">
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

            <ul className="space-y-3 flex-grow mb-6">
              <li className="flex items-center gap-2 text-xs"><Check className="text-primary flex-shrink-0" size={14} /> <strong>+100 projetos completos</strong></li>
              <li className="flex items-center gap-2 text-xs"><Check className="text-primary flex-shrink-0" size={14} /> Acesso imediato após compra</li>
              <li className="flex items-center gap-2 text-xs"><Check className="text-primary flex-shrink-0" size={14} /> Garantia de 7 dias</li>
              <li className="flex items-center gap-2 text-xs text-muted-foreground opacity-50"><X className="text-muted-foreground flex-shrink-0" size={14} /> 6 Bônus Estratégicos</li>
            </ul>
            <Button 
              variant="outline" 
              onClick={() => setShowUpsell(true)}
              className="pulse-attention w-full h-auto py-3 font-black uppercase tracking-[0.2em] rounded-sm hover:bg-foreground hover:text-black transition-all text-xs"
            >
              Garantir Básico
            </Button>
          </div>

          {/* Pro Plan Card */}
          <div className="bg-gradient-to-b from-card to-[#0d1f10] border-2 border-primary p-5 md:p-6 rounded-sm flex flex-col relative transform scale-105 shadow-2xl shadow-primary/20 hover:scale-[1.07] transition-all">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 gold-gradient-bg text-black px-6 py-2 rounded-sm text-[10px] font-black tracking-widest uppercase shadow-lg shadow-primary/30">
              ★ MAIS ESCOLHIDO ★
            </div>

            <h3 className="text-2xl font-black mb-1 font-headline gold-gradient-text text-center">Pro</h3>
            <p className="text-muted-foreground text-xs mb-4 text-center">O material completo + 6 bônus exclusivos.</p>

            <div className="bg-accent/10 border border-primary/30 p-2.5 rounded-sm mb-4 shine-effect">
              <span className="text-[9px] font-black tracking-widest uppercase text-foreground/70 mb-1.5 block text-center">⚡ Oferta Expira Em:</span>
              <div className="flex justify-center gap-2">
                {[
                  { val: timeLeft.hours, label: 'Horas' },
                  { val: timeLeft.mins, label: 'Min' },
                  { val: timeLeft.secs, label: 'Seg' }
                ].map((unit, i) => (
                  <div key={i} className="bg-black/80 border border-primary/50 w-12 py-1 rounded-sm text-center">
                    <span className="text-lg font-black font-headline text-primary block leading-none">{unit.val}</span>
                    <span className="text-[7px] tracking-tighter uppercase text-muted-foreground font-bold">{unit.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4 pb-4 border-b border-border text-center">
              <span className="text-muted-foreground line-through text-xs block mb-1">De R$ 197,00 por</span>
              <div className="flex items-start justify-center gold-gradient-text">
                <span className="text-xl font-black mt-1 mr-1">R$</span>
                <span className="text-6xl font-black font-headline">27</span>
                <span className="text-xl font-black mt-1">,90</span>
              </div>
              <p className="text-muted-foreground text-[9px] mt-1 tracking-widest uppercase">Pagamento único · Acesso vitalício + Bônus</p>
            </div>

            <div className="relative mb-4 text-center flex justify-center">
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

            <ul className="space-y-1.5 flex-grow mb-5">
              <li className="flex items-center gap-2 text-xs font-bold text-foreground"><Check className="text-primary flex-shrink-0" size={14} /> Tudo do Plano Básico</li>
              <li className="flex items-center gap-2 text-xs"><Check className="text-primary flex-shrink-0" size={14} /> <strong>BÔNUS 1:</strong> Construções Rurais</li>
              <li className="flex items-center gap-2 text-xs"><Check className="text-primary flex-shrink-0" size={14} /> <strong>BÔNUS 2:</strong> Planilha ROI Editável</li>
              <li className="flex items-center gap-2 text-xs"><Check className="text-primary flex-shrink-0" size={14} /> <strong>BÔNUS 3:</strong> Plantas Companheiras</li>
              <li className="flex items-center gap-2 text-xs"><Check className="text-primary flex-shrink-0" size={14} /> <strong>BÔNUS 4:</strong> Energia Solar Rural</li>
              <li className="flex items-center gap-2 text-xs"><Check className="text-primary flex-shrink-0" size={14} /> <strong>BÔNUS 5:</strong> Criação de Animais</li>
              <li className="flex items-center gap-2 text-xs"><Check className="text-primary flex-shrink-0" size={14} /> <strong>BÔNUS 6:</strong> Água e Irrigação Rural</li>
              <li className="flex items-center gap-2 text-xs"><Check className="text-primary flex-shrink-0" size={14} /> Atualizações gratuitas semanal</li>
              <li className="flex items-center gap-2 text-xs"><Check className="text-primary flex-shrink-0" size={14} /> Acesso prioritário a novos projetos</li>
              <li className="flex items-center gap-2 text-xs"><Check className="text-primary flex-shrink-0" size={14} /> Suporte prioritário via WhatsApp</li>
            </ul>
            <Button asChild className="shine-effect pulse-attention gold-gradient-bg text-black font-black uppercase tracking-[0.2em] h-auto py-3.5 text-xs rounded-sm shadow-2xl shadow-primary/40 hover:scale-105 transition-all w-full">
              <a href="https://pay.wiapy.com/sOZisMvvt9">Quero o Plano Pro</a>
            </Button>
            <p className="text-[10px] text-primary font-black uppercase tracking-widest text-center mt-2.5 animate-pulse">
              Você NÃO vai encontrar esse preço depois.
            </p>
          </div>
        </div>

        <Dialog open={showUpsell} onOpenChange={setShowUpsell}>
          <DialogContent className="max-w-[95vw] md:max-w-[420px] bg-card border-2 border-primary p-0 overflow-hidden">
            <div className="relative p-8 md:p-10">
              <DialogHeader className="mb-4 text-center">
                <div className="flex justify-center mb-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Sparkles className="text-primary animate-pulse" size={24} />
                  </div>
                </div>
                <DialogTitle className="text-xl font-black uppercase tracking-tight leading-tight">
                  ESPERE! <span className="text-primary">OFERTA ÚNICA</span>
                </DialogTitle>
                <DialogHeader className="text-foreground font-medium text-xs mt-2 leading-tight">
                  Por que levar apenas o básico se você pode ter o <span className="font-black text-primary">Plano Pro Completo</span> por um valor simbólico de upgrade?
                </DialogHeader>
              </DialogHeader>

              <div className="bg-accent/10 border border-primary/30 py-2 px-4 rounded-sm flex items-center justify-center gap-2 mb-6">
                <Timer size={14} className="text-primary animate-bounce" />
                <span className="text-[9px] font-black uppercase tracking-widest text-foreground">A oferta expira em:</span>
                <span className="font-mono text-primary font-black text-base">{formatUpsellTime(upsellTime)}</span>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-[10px] text-muted-foreground text-center italic leading-tight">
                  O Plano Pro (Regular: R$ 27,90) é a escolha de 92% das pessoas. Aproveite o desconto de upgrade agora!
                </p>
                <ul className="space-y-2 bg-background/50 p-4 rounded-sm border border-border">
                  <li className="flex items-center gap-2 text-[10px] font-bold text-foreground">
                    <Check className="text-primary flex-shrink-0" size={12} /> Tudo do Plano Básico
                  </li>
                  <li className="flex items-center gap-2 text-[10px] font-bold">
                    <Check className="text-primary flex-shrink-0" size={12} /> <strong>6 BÔNUS INCLUSOS</strong> (Pack Rural, ROI, Irrigação e +)
                  </li>
                  <li className="flex items-center gap-2 text-[10px] font-bold">
                    <Check className="text-primary flex-shrink-0" size={12} /> Suporte prioritário via WhatsApp
                  </li>
                </ul>
              </div>

              <div className="text-center mb-6">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest">Upgrade do Plano Pro:</span>
                  <span className="text-muted-foreground line-through text-xs">De R$ 27,90</span>
                  <div className="flex items-center justify-center gap-1 gold-gradient-text">
                    <span className="text-base font-black mt-1">POR APENAS R$</span>
                    <span className="text-4xl font-black font-headline">19</span>
                    <span className="text-base font-black mt-1">,90</span>
                  </div>
                  <span className="text-[8px] uppercase font-black tracking-tighter text-primary animate-pulse mt-1">Economia de R$ 8,00 extra hoje!</span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Button asChild className="w-full gold-gradient-bg text-black font-black uppercase tracking-widest h-12 shine-effect shadow-xl shadow-primary/20 text-xs">
                  <a href="https://pay.wiapy.com/MowpM6rdLB">
                    QUERO O PLANO PRO POR R$ 19,90
                  </a>
                </Button>
                <a 
                  href="https://pay.wiapy.com/rtXyisd1bF"
                  className="text-[10px] text-muted-foreground hover:text-foreground transition-colors uppercase font-bold tracking-widest underline decoration-dotted text-center block"
                >
                  Não, obrigado. Prefiro o Plano Básico de R$ 9,90
                </a>
              </div>
              
              <div className="mt-6 flex items-center justify-center gap-2 opacity-50 border-t border-border pt-4">
                <ShieldCheck size={12} />
                <span className="text-[8px] font-black uppercase">Garantia Blindada de 7 Dias</span>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <p className="text-center mt-16 text-muted-foreground text-[9px] tracking-[0.2em] uppercase">
          🔒 Pagamento 100% seguro  ⚡ Acesso imediato
        </p>
      </div>
    </section>
  );
}
