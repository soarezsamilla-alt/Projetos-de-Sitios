
"use client";

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: 'Como recebo o pack após a compra?',
    a: 'O acesso é liberado automaticamente após a confirmação do pagamento. Você recebe um email com o link e pode baixar tudo em formato PDF. No PIX, a liberação é em até 5 minutos. Em cartão, quase instantâneo.'
  },
  {
    q: 'Qual a diferença entre o Essencial e o Pro?',
    a: 'Ambos os planos incluem os 115 projetos completos. A diferença está nos 4 bônus exclusivos do plano Pro: Pack de Construções Rurais, Planilha de ROI, Guia de Plantas Companheiras e Manual de Energia Solar Rural.'
  },
  {
    q: 'Preciso ter experiência em agricultura para usar?',
    a: 'Não. Cada projeto foi feito para ser compreendido por qualquer pessoa — mostra visualmente onde fica cada área, com medidas exatas e legendas claras. Você usa o projeto literalmente como um mapa do seu sítio.'
  },
  {
    q: 'Os projetos servem para qualquer região do Brasil?',
    a: 'Sim. Temos 20 projetos especificamente adaptados aos 4 biomas brasileiros: Cerrado, Mata Atlântica/Sul, Semiárido/Nordeste e Amazônia/Norte.'
  },
  {
    q: 'Em que formato o material é entregue?',
    a: 'Todos os 115 projetos são entregues em PDF de alta qualidade, formato A4. Você pode visualizar no celular, tablet, computador ou imprimir. Os bônus do Plano Pro vêm em PDF e Excel.'
  },
  {
    q: 'E se eu tiver um terreno de tamanho diferente?',
    a: 'Os 50 projetos por tamanho cobrem de 0,5 a 5 hectares. Os layouts são modulares e você pode adaptar ou combinar elementos de diferentes tamanhos para o seu caso específico.'
  }
];

export function FAQ() {
  return (
    <section className="bg-card/20 py-24 border-t border-border">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-xs tracking-[0.4em] uppercase mb-4 block">Dúvidas Frequentes</span>
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="bg-card border border-border px-8 rounded-sm overflow-hidden hover:border-primary/50 transition-colors">
              <AccordionTrigger className="text-lg font-bold hover:no-underline py-6 font-body text-foreground text-left">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-8">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
