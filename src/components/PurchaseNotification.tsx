
"use client";

import React, { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';

const purchases = [
  { name: 'Ricardo S.', city: 'Uberlândia - MG' },
  { name: 'Ana Paula M.', city: 'Petrolina - PE' },
  { name: 'Carlos H.', city: 'Cascavel - PR' },
  { name: 'Fernanda L.', city: 'Goiânia - GO' },
  { name: 'Marcos T.', city: 'Ribeirão Preto - SP' },
  { name: 'Juliana O.', city: 'Feira de Santana - BA' },
  { name: 'Roberto F.', city: 'Curitiba - PR' },
  { name: 'Sandra P.', city: 'Cuiabá - MT' },
];

export function PurchaseNotification() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Delay inicial de 6 segundos para a primeira aparição
    const initialTimer = setTimeout(() => {
      setHasStarted(true);
      setVisible(true);
    }, 6000);

    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const interval = setInterval(() => {
      setVisible(false);
      
      // Pequeno delay para a animação de saída antes de trocar o nome e reaparecer
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % purchases.length);
        setVisible(true);
      }, 1000);
    }, 10000); // Aparece a cada 10 segundos

    return () => clearInterval(interval);
  }, [hasStarted]);

  if (!hasStarted) return null;

  const current = purchases[index];

  return (
    <div 
      className={`fixed bottom-4 left-4 z-[100] transition-all duration-700 transform ${
        visible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-card border border-primary/30 p-3.5 rounded-sm shadow-2xl flex items-center gap-3.5 max-w-[280px] backdrop-blur-sm">
        <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
          <ShoppingCart className="text-primary" size={18} />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-black uppercase tracking-tight text-foreground">
            {current.name}
          </span>
          <span className="text-[9px] text-muted-foreground leading-tight">
            de {current.city}
          </span>
          <span className="text-[10px] font-bold text-primary mt-0.5 leading-tight">
            Acabou de garantir o Plano Pro!
          </span>
        </div>
      </div>
    </div>
  );
}
