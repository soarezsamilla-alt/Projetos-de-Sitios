
"use client";

import dynamic from 'next/dynamic';
import {Hero} from './sections/Hero';
import {ViewingUrgencyBar} from './ViewingUrgencyBar';

// Carregamento dinâmico de seções abaixo da dobra para otimizar o tempo inicial de carregamento
const Problem = dynamic(() => import('./sections/Problem').then(mod => mod.Problem));
const Samples = dynamic(() => import('./sections/Samples').then(mod => mod.Samples));
const BeforeAfter = dynamic(() => import('./sections/BeforeAfter').then(mod => mod.BeforeAfter));
const Testimonials = dynamic(() => import('./sections/Testimonials').then(mod => mod.Testimonials));
const ContentBreakdown = dynamic(() => import('./sections/ContentBreakdown').then(mod => mod.ContentBreakdown));
const Bonus = dynamic(() => import('./sections/Bonus').then(mod => mod.Bonus));
const Pricing = dynamic(() => import('./sections/Pricing').then(mod => mod.Pricing));
const CreatorAndDelivery = dynamic(() => import('./sections/CreatorAndDelivery').then(mod => mod.CreatorAndDelivery));
const Guarantee = dynamic(() => import('./sections/Guarantee').then(mod => mod.Guarantee));
const FAQ = dynamic(() => import('./sections/FAQ').then(mod => mod.FAQ));
const Footer = dynamic(() => import('./sections/Footer').then(mod => mod.Footer));
const PurchaseNotification = dynamic(() => import('./PurchaseNotification').then(mod => mod.PurchaseNotification), { ssr: false });

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ViewingUrgencyBar />

      <Hero />
      
      <Problem />
      <Samples />
      <BeforeAfter />
      <Testimonials />
      <ContentBreakdown />
      <Bonus />
      <Pricing />
      <CreatorAndDelivery />
      <Guarantee />
      <FAQ />
      <Footer />

      <PurchaseNotification />
    </div>
  );
}
