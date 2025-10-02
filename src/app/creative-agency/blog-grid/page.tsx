import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/CreativeAgency/common/Breadcrumb";
import BlogGridSection from "@/components/CreativeAgency/Blog/BlogGridSection";
import Footer from "@/components/CreativeAgency/Footer";
import Header from "@/components/CreativeAgency/Header";
import SmoothScroll from "@/components/CreativeAgency/Animation/SmoothScroll";

// all data 
import blogListData from "@/constant/CreativeAgency/blog/BlogGridData";
import headerData from "@/constant/CreativeAgency/header";

export const metadata: Metadata = {
  title: "Blog Grid || Asynk - IT & Marketing Agency",
  description:
    "Explore a modern blog grid layout showcasing the latest articles, design trends, and development insights from Asynk.",
  keywords: [
    "Asynk blog grid",
    "NextJS blog listing",
    "blog grid layout",
    "agency blog design",
    "modern blog page",
    "responsive blog grid",
    "NextJS blog template",
    "digital agency blog",
    "frontend blog layout",
    "creative blog design",
    "startup blog grid",
    "blog post grid",
    "web development blog",
    "SEO friendly blog",
    "blog overview page",
    "NextJS blog listing page",
    "Asynk website blog",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Blog Grid Page",
  },
};

const Home = (): ReactElement => {
  return (
    <div className="body-wrapper body-inner-page">
      <Header data={headerData} />
      <SmoothScroll>
        <main>
          <Breadcrumb title="BLOGS" subTitle="Grid" pageName="BLOGS GRID" />
          <BlogGridSection data={blogListData} />
        </main>
        <Footer />
      </SmoothScroll>
    </div>
  );
};
export default Home;
