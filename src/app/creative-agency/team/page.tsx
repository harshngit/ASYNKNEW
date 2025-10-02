import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/CreativeAgency/common/Breadcrumb";
import TeamSection from "@/components/CreativeAgency/TeamSection";
import ProcessSection from "@/components/CreativeAgency/ProcessSection";
import Footer from "@/components/CreativeAgency/Footer";
import Header from "@/components/CreativeAgency/Header";
import SmoothScroll from "@/components/CreativeAgency/Animation/SmoothScroll";


// all data 
import teamData from "@/constant/CreativeAgency/teams";
import processData from "@/constant/CreativeAgency/process";
import headerData from "@/constant/CreativeAgency/header";


export const metadata: Metadata = {
  title: "Team || Asynk - IT & Marketing Agency",
  description:
    "Meet the talented professionals behind Asynk. Perfect for showcasing team members, their roles, and expertise in a modern, responsive, and SEO-friendly layout.",
  keywords: [
    "Asynk team page",
    "NextJS team template",
    "agency team showcase",
    "team member profiles",
    "responsive team layout",
    "SEO optimized team page",
    "digital agency team",
    "startup team introduction",
    "professional team presentation",
    "team expertise",
    "business team template",
    "modern team page",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Team Page",
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
            subTitle="Members"
            pageName="AGENCY MEMBERS"
          />
          <TeamSection all={true} type="v2" data={teamData} />
          <ProcessSection data={processData} />
        </main>
        <Footer />
      </SmoothScroll>
    </div>
  );
};
export default Home;
