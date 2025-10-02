import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/CreativeAgency/common/Breadcrumb";
import ServiceSection from "@/components/CreativeAgency/ServiceDetails/ServiceSection";
import ProcessSection from "@/components/CreativeAgency/ProcessSection";
import ServiceDetailsSection from "@/components/CreativeAgency/ServiceDetails/ServiceDetailsSection";
import TextSliderSection from "@/components/CreativeAgency/TextSliderSection";
import FaqSection from "@/components/CreativeAgency/Faq/FaqSection";
import Footer from "@/components/CreativeAgency/Footer";
import Header from "@/components/CreativeAgency/Header";
import SmoothScroll from "@/components/CreativeAgency/Animation/SmoothScroll";


// all data 
import processData from "@/constant/CreativeAgency/process";
import serviceDetailsData from "@/constant/CreativeAgency/service-details/service-details-data";
import serviceData from "@/constant/CreativeAgency/service-details/service-section-data";
import textSliderData from "@/constant/CreativeAgency/textSlider";
import faqData from "@/constant/CreativeAgency/faq/faq-data";
import headerData from "@/constant/CreativeAgency/header";

export const metadata: Metadata = {
  title: "Service Details || Asynk - IT & Marketing Agency",
  description:
    "Explore detailed information about Asynk services. Perfect for showcasing features, benefits, and case studies with SEO-friendly design.",
  keywords: [
    "Asynk service details",
    "NextJS service details template",
    "agency service page",
    "service features showcase",
    "responsive service details",
    "SEO optimized service page",
    "digital agency services",
    "startup service details",
    "professional service layout",
    "service benefits",
    "case studies",
    "service description",
    "modern service page",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Service Details Page",
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
            subTitle="Service Details"
            pageName="AGENCY SERVICES"
          />
          <ServiceSection data={serviceData} />
          <ProcessSection data={processData} />
          <ServiceDetailsSection data={serviceDetailsData} />
          <TextSliderSection data={textSliderData} />
          <FaqSection type={2} data={faqData} />
        </main>
        <Footer />
      </SmoothScroll>
    </div>
  );
};
export default Home;
