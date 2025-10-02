import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/CreativeAgency/common/Breadcrumb";
import BlogSingle from "@/components/CreativeAgency/Blog/BlogSingle";
import Footer from "@/components/CreativeAgency/Footer";
import Header from "@/components/CreativeAgency/Header";
import SmoothScroll from "@/components/CreativeAgency/Animation/SmoothScroll";


// all data 
import { blogSingleData, comments } from "@/constant/CreativeAgency/blog/blogSingleData";
import headerData from "@/constant/CreativeAgency/header";

export const metadata: Metadata = {
  title: "Blog Details || Asynk - IT & Marketing Agency",
  description:
    "Read detailed insights and expert articles on web development, Next.js, design trends, and digital strategies from Asynk.",
  keywords: [
    "Asynk blog details",
    "NextJS blog post",
    "web development article",
    "agency blog details",
    "developer insights",
    "NextJS SEO blog",
    "blog post template",
    "creative agency article",
    "frontend development tips",
    "digital strategy blog",
    "startup blog post",
    "detailed blog content",
    "technology article",
    "responsive blog page",
    "Asynk blog",
    "NextJS article page",
    "professional blog design",
    "blog post layout",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Blog Details Page",
  },
};

const Home = (): ReactElement => {
  return (
    <div className="body-wrapper body-inner-page">
      <Header data={headerData} />
      <SmoothScroll>
        <main>
          <Breadcrumb
            title="BLOGS"
            subTitle="Details"
            pageName="BLOGS DETAILS"
          />
          <BlogSingle post={blogSingleData} comments={comments} />
        </main>
        <Footer />
      </SmoothScroll>
    </div>
  );
};
export default Home;
