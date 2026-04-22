
"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
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
import { AIRecommender } from './ai-recommender';

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Urgency Bar */}
      <div className="shine-effect bg-gradient-to-r from-[#b8902f] via-[#d4a84b] to-[#b8902f] py-3 text-center text-xs font-bold tracking-widest text-black uppercase">
        ★ OFERTA DE LANÇAMENTO · EDIÇÃO LIMITADA 2026 ★
      </div>

      <Hero />
      
      <div className="container mx-auto px-6 py-12">
        <AIRecommender />
      </div>

      <Problem />
      <ProductShowcase />
      <Samples />
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
