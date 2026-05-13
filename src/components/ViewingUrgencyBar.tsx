
"use client";

import React, { useState, useEffect } from 'react';
import { Users } from 'lucide-react';

export function ViewingUrgencyBar() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // Inicializa com um número entre 14 e 20
    const initial = Math.floor(Math.random() * (20 - 14 + 1)) + 14;
    setCount(initial);

    // Flutua o número a cada 5-8 segundos
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev === null) return null;
        
        // Chance de subir ou descer, mantendo entre 11 e 24
        const change = Math.random() > 0.5 ? 1 : -1;
        const next = prev + change;
        
        if (next > 24) return 23;
        if (next < 11) return 12;
        return next;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  if (count === null) {
    return (
      <div className="bg-gradient-to-r from-[#b8902f] via-[#d4a84b] to-[#b8902f] py-3 text-center text-xs font-bold tracking-widest text-black uppercase h-[42px]">
        VERIFICANDO ACESSOS...
      </div>
    );
  }

  return (
    <div className="shine-effect bg-gradient-to-r from-[#b8902f] via-[#d4a84b] to-[#b8902f] py-3 text-center text-[10px] md:text-xs font-bold tracking-widest text-black uppercase flex items-center justify-center gap-2">
      <Users size={14} className="animate-pulse" />
      <span>{count} PESSOAS ESTÃO ACESSANDO ESSE SITE AGORA</span>
    </div>
  );
}
