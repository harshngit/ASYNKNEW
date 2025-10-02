import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/CreativeAgency/common/Breadcrumb";
import FaqSection from "@/components/CreativeAgency/Faq/FaqSection";
import ContactSection from "@/components/CreativeAgency/Contact/ContactSection";
import Footer from "@/components/CreativeAgency/Footer";
import Header from "@/components/CreativeAgency/Header";
import SmoothScroll from "@/components/CreativeAgency/Animation/SmoothScroll";

// all data 
import contactData from "@/constant/CreativeAgency/Contact/contact";
import faqData from "@/constant/CreativeAgency/faq/faq-data";
import headerData from "@/constant/CreativeAgency/header";

export const metadata: Metadata = {
  title: "FAQ || Asynk - IT & Marketing Agency",
  description:
    "Find answers to frequently asked questions about Asynk, our Next.js website, and services. Get quick support and clear information to help you make the most of our solutions.",
  keywords: [
    "Asynk FAQ page",
    "NextJS FAQ template",
    "agency frequently asked questions",
    "customer support FAQ",
    "digital agency FAQ",
    "startup FAQ page",
    "common questions",
    "template support",
    "NextJS support page",
    "responsive FAQ design",
    "professional FAQ layout",
    "help and support",
    "template information",
    "client questions",
    "FAQ page design",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "FAQ Page",
  },
};

const Home = (): ReactElement => {
  return (
    <div className="body-wrapper body-inner-page">
      <Header data={headerData} />
      <SmoothScroll>
        <main>
          <Breadcrumb title="AGENCY" subTitle="FAQ’s" pageName="AGENCY FAQ’s" />
          <FaqSection data={faqData} />
          <ContactSection data={contactData} />
          <FaqSection type={2} imageSrc={2} data={faqData} />
        </main>
        <Footer />
      </SmoothScroll>
    </div>
  );
};
export default Home;
