import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/CreativeAgency/common/Breadcrumb";
import ProcessSection from "@/components/CreativeAgency/ProcessSection";
import ServiceSection from "@/components/CreativeAgency/ServicesSection";
import ChooseUsSection from "@/components/CreativeAgency/common/ChooseUsSection";
import TestimonialSection from "@/components/CreativeAgency/Testimonial";
import Footer from "@/components/CreativeAgency/Footer";
import Header from "@/components/CreativeAgency/Header";
import SmoothScroll from "@/components/CreativeAgency/Animation/SmoothScroll";

// all data
import processData from "@/constant/CreativeAgency/process";
import serviceData from "@/constant/CreativeAgency/services";
import chooseUsData from "@/constant/CreativeAgency/common/choose-us";
import testimonialData from "@/constant/CreativeAgency/testimonial";
import headerData from "@/constant/CreativeAgency/header";

export const metadata: Metadata = {
  title: "Services || Asynk - IT & Marketing Agency",
  description:
    "Discover our IT & Marketing services at Asynk. Designed to present offerings clearly and attractively, optimized for performance and SEO in Next.js.",
  keywords: [
    "Asynk services page",
    "NextJS services template",
    "agency services overview",
    "service offerings",
    "responsive services layout",
    "SEO optimized services page",
    "digital agency services",
    "startup services showcase",
    "professional service presentation",
    "service features",
    "business services template",
    "modern services page",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Services Page",
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
            subTitle="Services"
            pageName="AGENCY SERVICES"
          />
          <ProcessSection data={processData} />
          <ServiceSection type="v2" data={serviceData} />
          <ChooseUsSection data={chooseUsData} />
          <TestimonialSection data={testimonialData} />
        </main>
        <Footer />
      </SmoothScroll>
    </div>
  );
};
export default Home;
