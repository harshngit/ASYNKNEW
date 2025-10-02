import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/CreativeAgency/common/Breadcrumb";
import WorkSection from "@/components/CreativeAgency/WorkTwoSection";
import Footer from "@/components/CreativeAgency/Footer";
import TestimonialSection from "@/components/CreativeAgency/Testimonial";
import Header from "@/components/CreativeAgency/Header";
import SmoothScroll from "@/components/CreativeAgency/Animation/SmoothScroll";

// all data 
import workData from "@/constant/CreativeAgency/workTwo";
import testimonialData from "@/constant/CreativeAgency/testimonial";
import headerData from "@/constant/CreativeAgency/header";

export const metadata: Metadata = {
  title: "Portfolio Slider || Asynk - IT & Marketing Agency",
  description:
    "Display projects in an interactive and sleek slider format with Asynk. A dynamic, responsive, and SEO-friendly presentation of our work.",
  keywords: [
    "Asynk portfolio slider",
    "NextJS portfolio slider template",
    "creative portfolio slider",
    "responsive portfolio slider",
    "SEO optimized portfolio slider",
    "digital agency portfolio slider",
    "startup portfolio showcase",
    "interactive project slider",
    "professional portfolio slider",
    "modern portfolio presentation",
    "frontend developer portfolio",
    "creative work slider",
    "NextJS project slider",
    "slider based portfolio",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Portfolio Slider Page",
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
            subTitle="Portfolio Slider"
            pageName="AGENCY PORTFOLIO"
          />
          <WorkSection pageInnerSlider={true} data={workData} />
          <TestimonialSection type="v2" data={testimonialData} />
        </main>
        <Footer />
      </SmoothScroll>
    </div>
  );
};
export default Home;
