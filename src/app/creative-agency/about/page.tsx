import { ReactElement } from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/CreativeAgency/common/Breadcrumb";
import AboutSection from "@/components/CreativeAgency/AboutSection";
import VideoSection from "@/components/CreativeAgency/About/VideoSection";
import BrandSection from "@/components/CreativeAgency/BrandSection";
import Footer from "@/components/CreativeAgency/Footer";
import Header from "@/components/CreativeAgency/Header";
import SmoothScroll from "@/components/CreativeAgency/Animation/SmoothScroll";

// component data
import aboutData from "@/constant/CreativeAgency/about";
import videoData from "@/constant/CreativeAgency/About/video";
import brandData from "@/constant/CreativeAgency/brands";
import headerData from "@/constant/CreativeAgency/header";

export const metadata: Metadata = {
  title: "About Us || Asynk - IT & Marketing Agency",
  description:
    "Explore the About Us page of Asynk – an IT & Marketing agency website built with Next.js. Meet the team, learn our mission, and discover why Asynk is trusted by businesses.",
  keywords: [
    "Asynk About Us",
    "NextJS about page",
    "agency template",
    "digital agency",
    "creative team template",
    "business website template",
    "responsive NextJS template",
    "modern agency design",
    "SEO friendly template",
    "professional web agency",
    "agency team page",
    "company profile",
    "NextJS clean UI",
    "startup website",
    "web design agency",
    "agency portfolio",
    "fast NextJS website",
    "customizable template",
    "about page design",
    "Asynk website",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "About Page",
  },
};

const AboutPage = (): ReactElement => {
  return (
    <div className="body-wrapper body-inner-page">
      <Header data={headerData} />
      <SmoothScroll>
        <main>
          <Breadcrumb title="ABOUT" subTitle="Agency" pageName="ABOUT AGENCY" />
          <AboutSection type="v2" data={aboutData} />
          <VideoSection data={videoData} />
          <BrandSection data={brandData} />
        </main>
        <Footer />
      </SmoothScroll>
    </div>
  );
};
export default AboutPage;
