import { Metadata } from "next";
import { ReactElement } from "react";
import Breadcrumb from "@/components/DigitalAgency/common/Breadcrumb";
import WorkSection from "@/components/DigitalAgency/WorkSection";
import FooterSection from "@/components/DigitalAgency/FooterSection";
import Header from "@/components/DigitalAgency/common/Header";
import SmoothScroll from "@/components/DigitalAgency/Animation/SmoothScroll";


// all data 
import workData from "@/constant/DigitalAgency/work";
import footerData from "@/constant/DigitalAgency/footer";

export const metadata: Metadata = {
  title: "Portfolio Grid || Averto - Creative Digital Agency NextJS Template",
  description:
    "Showcase your projects in a clean and organized grid layout with the Averto Portfolio Grid template. Designed for creative professionals to display work with a modern, responsive, and SEO-friendly Next.js structure.",
  keywords: [
    "Averto portfolio grid",
    "NextJS portfolio grid template",
    "creative portfolio grid",
    "responsive portfolio layout",
    "SEO optimized portfolio grid",
    "digital agency portfolio grid",
    "startup portfolio showcase",
    "project gallery",
    "professional portfolio grid",
    "modern portfolio display",
    "frontend developer portfolio",
    "creative work grid",
    "NextJS project grid",
    "grid based portfolio",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Portfolio Grid Page",
  },
};

const Home = (): ReactElement => {
  return (
    <div className="body-wrapper body-inner-page">
      <Header />
      <SmoothScroll>
        <main>
          <Breadcrumb
            title="AGENCY"
            subTitle="Portfolio Grid"
            pageName="AGENCY PORTFOLIO"
          />
          <WorkSection pageInner={true} type={7} data={workData}/>
        </main>
        <FooterSection data={footerData}/>
      </SmoothScroll>
    </div>
  );
};
export default Home;
