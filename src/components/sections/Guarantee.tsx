
import React from 'react';

export function Guarantee() {
  return (
    <section className="bg-background py-32 border-t border-border">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="relative bg-gradient-to-br from-card to-[#0d1f10] border border-primary/50 p-12 md:p-20 rounded-lg text-center shadow-2xl">
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 gold-gradient-bg border-4 border-background rounded-full flex flex-col items-center justify-center text-black font-headline font-black shadow-xl">
             <span className="text-5xl leading-none">7</span>
             <span className="text-[10px] font-body font-black uppercase tracking-widest mt-1">Dias</span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-black text-primary mb-6 mt-4">Garantia Incondicional</h3>
          <p className="text-foreground text-lg leading-relaxed mb-0">
            Acesse o pack agora. Veja todos os 115 projetos, folheie as páginas, analise a qualidade do material. Se em até 7 dias você achar que não vale o investimento, devolvemos <strong className="text-primary">100% do seu dinheiro</strong>. Sem perguntas. Sem burocracia. O risco é todo nosso.
          </p>
        </div>
      </div>
    </section>
  );
}
