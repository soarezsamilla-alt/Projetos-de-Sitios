
import React from 'react';
import { X } from 'lucide-react';

const problems = [
  {
    title: 'Terra Subutilizada',
    desc: 'Você tem espaço, mas áreas inteiras ficam paradas porque você não sabe o que fazer com elas.'
  },
  {
    title: 'Renda Vulnerável',
    desc: 'Depender de uma única fonte de produção é arriscado — mas diversificar exige planejamento que você não tem.'
  },
  {
    title: 'Consultoria Cara',
    desc: 'Contratar um agrônomo para fazer o projeto do zero custa milhares de reais. E mesmo assim vem genérico.'
  },
  {
    title: 'Informação Dispersa',
    desc: 'Você busca referência no YouTube, fóruns e grupos — mas o que acha é raso, sem medidas e sem clareza.'
  }
];

export function Problem() {
  return (
    <section className="bg-card/30 py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-xs tracking-[0.4em] uppercase mb-4 block">O Problema Real</span>
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Sua Terra Merece Um <span className="text-primary">Projeto Profissional</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A maior parte dos pequenos produtores rurais no Brasil opera muito abaixo do potencial por falta de um mapa claro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((prob, idx) => (
            <div key={idx} className="bg-card border border-border border-l-4 border-l-accent p-6 rounded-sm hover:-translate-y-2 transition-all duration-300 group hover:border-l-primary flex flex-col">
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <X className="text-accent group-hover:text-primary transition-colors" size={16} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground font-body leading-tight">{prob.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{prob.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
