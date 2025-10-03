import { ReactElement } from "react";
import type { Metadata } from "next";
import Header from "@/components/CreativeAgency/Header";
import Footer from "@/components/CreativeAgency/Footer";
import Testimonial from "@/components/CreativeAgency/Testimonial";
import BrandSection from "@/components/CreativeAgency/BrandSection";
import ServiceSection from "@/components/CreativeAgency/ServicesSection";
import ProcessSection from "@/components/CreativeAgency/ProcessSection";
import AboutSection from "@/components/CreativeAgency/AboutSection";
import Hero from "@/components/CreativeAgency/HeroSection";
import WorkSection from "@/components/CreativeAgency/WorkSection";
import SmoothScroll from "@/components/CreativeAgency/Animation/SmoothScroll";

// constant data
import headerData from "@/constant/CreativeAgency/header";
import heroData from "@/constant/CreativeAgency/hero";
import aboutData from '@/constant/CreativeAgency/about';
import processData from '@/constant/CreativeAgency/process';
import servicesData from "@/constant/CreativeAgency/services";
import workData from "@/constant/CreativeAgency/work";
import testimonialsData from "@/constant/CreativeAgency/brands";
import testimonialData from "@/constant/CreativeAgency/testimonial";

export const metadata: Metadata = {
  title: "Asynk - IT & Marketing Agency",
  description:
    "Asynk is a modern and responsive Next.js website for an IT & Marketing agency. Featuring a sleek design, fast performance, and SEO optimization, Asynk provides a strong foundation for building a high-quality website.",
  keywords: [
    "NextJS template",
    "agency website template",
    "business website template",
    "responsive web design",
    "SEO optimized template",
    "modern NextJS template",
    "agency website design",
    "high-performance website template",
    "web development",
    "business template NextJS",
    "Asynk website",
    "digital agency template",
    "corporate website template",
    "startup website template",
    "clean website design",
    "modern business template",
    "customizable NextJS template",
    "business landing page template",
    "professional web design template",
    "NextJS portfolio template",
    "creative agency website template",
    "landing page template",
    "NextJS website themes",
    "responsive business templates",
    "NextJS for agencies",
    "SEO friendly web template",
    "business site design template",
    "fast website template",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
  },
};


const CreativeAgencyPage = (): ReactElement => {
  return (
    <div className="body-wrapper body-creative-agency">
      <Header data={headerData} />
      <SmoothScroll>
        <main>
          <Hero data={heroData} />
          <AboutSection data={aboutData} />
          <ProcessSection data={processData} />
          <ServiceSection data={servicesData} />
          <WorkSection data={workData} />
          <BrandSection data={testimonialsData} />
          <Testimonial data={testimonialData} />
        </main>
        <Footer />
      </SmoothScroll>
    </div>
  );
}

export default CreativeAgencyPage;