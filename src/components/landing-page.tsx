
"use client";

import {Hero} from './sections/Hero';
import {Problem} from './sections/Problem';
import {ProductShowcase} from './sections/ProductShowcase';
import {Samples} from './sections/Samples';
import {ContentBreakdown} from './sections/ContentBreakdown';
import {CreatorAndDelivery} from './sections/CreatorAndDelivery';
import {Bonus} from './sections/Bonus';
import {Testimonials} from './sections/Testimonials';
import {Pricing} from './sections/Pricing';
import {Guarantee} from './sections/Guarantee';
import {FAQ} from './sections/FAQ';
import {Footer} from './sections/Footer';
import {BeforeAfter} from './sections/BeforeAfter';
import {PurchaseNotification} from './PurchaseNotification';
import {ViewingUrgencyBar} from './ViewingUrgencyBar';

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Urgency Bar Dinâmica */}
      <ViewingUrgencyBar />

      <Hero />
      
      <Problem />
      <Samples />
      <BeforeAfter />
      <ProductShowcase />
      <Testimonials />
      <ContentBreakdown />
      <Bonus />
      <Pricing />
      <CreatorAndDelivery />
      <Guarantee />
      <FAQ />
      <Footer />

      {/* Social Proof Notifications */}
      <PurchaseNotification />
    </div>
  );
}
