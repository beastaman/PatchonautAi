import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HeroSection } from '@/components/landing/hero-section';
import { FeatureSection } from '@/components/landing/feature-section';
import { TestimonialSection } from '@/components/landing/testimonial-section';
import { FooterSection } from '@/components/landing/footer-section';
import { HowItWorksSection } from '@/components/landing/how-it-works-section';
import { IntegrationSection } from '@/components/landing/integration-section';
import { CaseStudiesSection } from '@/components/landing/case-studies-section';
import { PricingSection } from '@/components/landing/pricing-section';
import { InvestorSection } from '@/components/landing/investor-section';
import { FAQSection } from '@/components/landing/faq-section';
import { CTASection } from '@/components/landing/cta-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeatureSection />
      <HowItWorksSection />
      <IntegrationSection />
      <CaseStudiesSection />
      <TestimonialSection />
      <PricingSection />
      <InvestorSection />
      <FAQSection />
      <CTASection />
      <FooterSection />
    </div>
  );
}