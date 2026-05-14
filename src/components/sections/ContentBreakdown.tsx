
import React from 'react';

const breakdown = [
  {
    num: '50',
    title: 'Por Tamanho de Terreno',
    desc: 'Projetos dimensionados para 0,5ha, 1ha, 2ha, 3ha e 5ha — 10 projetos para cada tamanho.'
  },
  {
    num: '35',
    title: 'Por Vocação Produtiva',
    desc: 'Café, hortifruti, piscicultura, pecuária leiteira, agrofloresta, avicultura, suínos e apicultura.'
  },
  {
    num: '20',
    title: 'Por Bioma Brasileiro',
    desc: 'Cerrado, Mata Atlântica/Sul, Semiárido/Nordeste e Amazônia/Norte — adaptados ao seu clima.'
  },
  {
    num: '10',
    title: 'Projetos Especiais',
    desc: 'Orgânico certificado, permacultura, agroturismo, agroindústria caseira, energia renovável e mais.'
  },
  {
    num: '04',
    title: 'Bônus Estratégicos',
    desc: 'Construções Rurais, Planilha ROI, Guia de Plantas Companheiras e Manual de Energia Solar.'
  }
];

export function ContentBreakdown() {
  return (
    <section className="bg-gradient-to-b from-[#0d1f10] to-background py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            O Que Você <span className="text-primary">Vai Receber Hoje</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            +100 projetos organizados e bônus estratégicos para você encontrar exatamente o que precisa, seja qual for o seu tamanho, vocação ou região.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {breakdown.map((item, idx) => (
            <div key={idx} className="group relative bg-card border border-border p-6 text-center rounded-sm overflow-hidden hover:-translate-y-2 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 via-primary to-primary/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="gold-gradient-text text-6xl font-black font-headline mb-3 leading-none">
                {item.num}
              </div>
              <h3 className="text-foreground font-bold text-xs tracking-widest uppercase mb-3 leading-tight">{item.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
