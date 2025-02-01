"use client";

import Brands from "@/components/landing-page/Brands";
import CTA from "@/components/landing-page/CTA";
import Features from "@/components/landing-page/Features";
import Footer from "@/components/landing-page/Footer";
import Hero from "@/components/landing-page/Hero";
import Pricing from "@/components/landing-page/Pricing";
import Testimonial from "@/components/landing-page/Testimonial";

import { ReactLenis } from "lenis/dist/lenis-react";

export default function Home() {
  return (
    <ReactLenis root>
      <div className="home-page-bg bg-body bg-cover bg-no-repeat">
        <Hero />
        <Brands />
        <Features />
        <Pricing />
        <Testimonial />
        <CTA />
        <Footer />
      </div>
    </ReactLenis>
  );
}
