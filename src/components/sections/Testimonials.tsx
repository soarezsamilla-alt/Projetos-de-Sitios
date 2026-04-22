
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    initials: 'JC',
    name: 'João Carlos Menezes',
    role: 'Produtor rural — MG',
    text: 'Eu tinha 2 hectares praticamente parados há 3 anos. Com o projeto certo em mãos, consegui planejar tudo em um final de semana. O material vale muito mais do que o preço cobrado.'
  },
  {
    initials: 'MR',
    name: 'Maria Rita Oliveira',
    role: 'Agricultora familiar — PE',
    text: 'A quantidade de projetos me impressionou. Eu esperava uns 20, mas são 115 plantas diferentes. A parte de projetos por bioma foi o que mais me ajudou aqui no nordeste.'
  },
  {
    initials: 'PS',
    name: 'Pedro Santana',
    role: 'Engenheiro agrônomo — PR',
    text: 'Comprei pensando em ser apenas referência, acabou virando meu principal guia de planejamento. Já replicamos 3 projetos diferentes na propriedade da família em etapas.'
  },
  {
    initials: 'AL',
    name: 'Antônio Lima',
    role: 'Pecuarista — GO',
    text: 'O que mais me surpreendeu foi o nível de detalhe nas medidas. Não é só uma imagem bonita. Tem medida real que você consegue pegar e aplicar no terreno com trena.'
  },
  {
    initials: 'LF',
    name: 'Luiz Ferreira',
    role: 'Aposentado — SP',
    text: 'Consegui a aposentadoria e queria um projeto para o sítio que comprei no interior. Encontrei exatamente o modelo "aposentadoria no campo" e foi transformador.'
  },
  {
    initials: 'CM',
    name: 'Cláudia Mendes',
    role: 'Técnica agrícola — BA',
    text: 'Eu sou técnica agrícola e uso o material como apoio visual nas consultorias que presto. Ajuda muito na hora de explicar aos clientes como organizar o terreno deles.'
  }
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
          {testimonials.map((t, idx) => (
            <div key={idx} className="relative bg-gradient-to-b from-card to-background border border-border p-10 rounded-sm hover:-translate-y-2 transition-all duration-300">
               <div className="absolute top-4 left-6 text-primary/10 text-8xl font-black font-headline select-none">"</div>
               <div className="flex gap-1 mb-6 relative z-10">
                 {[...Array(5)].map((_, i) => (
                   <Star key={i} className="text-primary fill-primary" size={14} />
                 ))}
               </div>
               <p className="text-foreground text-base italic leading-relaxed mb-8 relative z-10">
                 {t.text}
               </p>
               <div className="flex items-center gap-4 pt-6 border-t border-border relative z-10">
                 <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-[#b8902f] text-black font-black flex items-center justify-center text-xl">
                    {t.initials}
                 </div>
                 <div>
                   <h4 className="text-foreground font-black text-sm uppercase tracking-widest">{t.name}</h4>
                   <p className="text-muted-foreground text-xs">{t.role}</p>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
