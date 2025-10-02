import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/CreativeAgency/common/Breadcrumb";
import WorkSection from "@/components/CreativeAgency/WorkSection";
import Footer from "@/components/CreativeAgency/Footer";
import Header from "@/components/CreativeAgency/Header";
import SmoothScroll from "@/components/CreativeAgency/Animation/SmoothScroll";

// all data 
import workData from "@/constant/CreativeAgency/work";
import headerData from "@/constant/CreativeAgency/header";

export const metadata: Metadata = {
  title: "Portfolio || Asynk - IT & Marketing Agency",
  description:
    "Explore Asynk’s portfolio of IT & Marketing projects. Designed to highlight case studies and achievements with a modern, responsive, and SEO-friendly Next.js layout.",
  keywords: [
    "Asynk portfolio page",
    "NextJS portfolio template",
    "creative portfolio website",
    "project showcase",
    "responsive portfolio design",
    "SEO optimized portfolio",
    "digital agency portfolio",
    "startup portfolio",
    "professional portfolio layout",
    "case studies showcase",
    "frontend developer portfolio",
    "creative work display",
    "NextJS personal portfolio",
    "modern portfolio website",
    "portfolio landing page",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Portfolio Page",
  },
};

const Home = (): ReactElement => {
  return (
    <div className="body-wrapper body-inner-page">
      <Header data={headerData} />
      <SmoothScroll>
        <main>
          <Breadcrumb
            title="AGENCY"
            subTitle="Portfolio"
            pageName="AGENCY PORTFOLIO"
          />
          <WorkSection pageInner={true} data={workData} />
        </main>
        <Footer />
      </SmoothScroll>
    </div>
  );
};
export default Home;
