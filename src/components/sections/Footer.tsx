import React from 'react';

export function Footer() {
  return (
    <footer className="bg-background py-20 border-t border-border text-center">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-primary font-headline text-2xl font-black mb-6 uppercase tracking-widest">
          RURAL PLANNER
        </div>
        <p className="text-muted-foreground text-sm mb-6">Edição Premium 2026 · Todos os direitos reservados</p>
        
        <div className="pt-10 border-t border-border">
          <p className="text-[10px] text-muted-foreground/50 max-w-3xl mx-auto leading-relaxed uppercase tracking-tighter">
            Este site não é afiliado ao Facebook, Instagram, Google ou qualquer outra plataforma. Os resultados apresentados dependem do esforço e aplicação prática do cliente. A compra inclui apenas os materiais digitais descritos nesta página.
          </p>
        </div>
      </div>
    </footer>
  );
}
