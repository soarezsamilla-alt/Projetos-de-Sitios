
"use client";

import React from 'react';
import { Hero } from './sections/Hero';
import { Problem } from './sections/Problem';
import { ProductShowcase } from './sections/ProductShowcase';
import { Samples } from './sections/Samples';
import { ContentBreakdown } from './sections/ContentBreakdown';
import { Bonus } from './sections/Bonus';
import { Testimonials } from './sections/Testimonials';
import { Pricing } from './sections/Pricing';
import { Guarantee } from './sections/Guarantee';
import { FAQ } from './sections/FAQ';
import { FinalCTA } from './sections/FinalCTA';
import { Footer } from './sections/Footer';

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Urgency Bar */}
      <div className="shine-effect bg-gradient-to-r from-[#b8902f] via-[#d4a84b] to-[#b8902f] py-3 text-center text-xs font-bold tracking-widest text-black uppercase">
        ★ OFERTA DE LANÇAMENTO · EDIÇÃO LIMITADA 2026 ★
      </div>

      <Hero />
      
      <Problem />
      <Samples />
      <ProductShowcase />
      <ContentBreakdown />
      <Bonus />
      <Testimonials />
      <Pricing />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
