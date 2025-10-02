import { ReactElement } from "react";
import { Metadata } from "next";
import SmoothScroll from "@/components/CreativeAgency/Animation/SmoothScroll";
import Breadcrumb from "@/components/CreativeAgency/common/Breadcrumb";
import Header from "@/components/CreativeAgency/Header";
import Footer from "@/components/CreativeAgency/Footer";
import PortfolioDetails from "@/components/CreativeAgency/PortfolioDetails/PortfolioDetails";
import PortfolioSliderSection from "@/components/CreativeAgency/PortfolioDetails/PortfolioSliderSection";
import portfolioSliderData from "@/constant/CreativeAgency/PortfolioDetails/portfolio-data";

// all data
import portfolioDetailsData from "@/constant/CreativeAgency/PortfolioDetails/portfolio-details-data";
import headerData from "@/constant/CreativeAgency/header";

export const metadata: Metadata = {
  title:
    "Portfolio Details || Asynk - IT & Marketing Agency",
  description:
    "Dive into detailed case studies and project insights from Asynk. Showcasing process, technologies used, and results with SEO and performance in mind.",
  keywords: [
    "Asynk portfolio details",
    "NextJS portfolio details template",
    "project case study",
    "detailed portfolio page",
    "creative project insights",
    "responsive portfolio details",
    "SEO optimized project page",
    "digital agency portfolio details",
    "startup project showcase",
    "professional portfolio layout",
    "frontend developer case study",
    "technology showcase",
    "creative process display",
    "modern portfolio details page",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Portfolio Details Page",
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
            subTitle="Portfolio details"
            pageName="PORTFOLIO DETAILS"
          />
          <PortfolioDetails data={portfolioDetailsData} />
          <PortfolioSliderSection data={portfolioSliderData} />
        </main>
        <Footer />
      </SmoothScroll>
    </div>
  );
};
export default Home;
