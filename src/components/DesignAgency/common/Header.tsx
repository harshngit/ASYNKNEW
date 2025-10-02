"use client";
import Link from "next/link";
import Sidebar from "@/components/DesignAgency/SideBar/SideBar";
import React, { ReactNode, useState } from "react";
import useStickyHeader from "@/Hook/useStickyHeader";

interface MenuItem {
  title: string;
  href?: string;
  children?: MenuItem[];
}

interface HeaderData {
  logo: {
    src: string;
    alt: string;
    href: string;
  };
  menuItems: MenuItem[];
  cta: {
    href: string;
    label: string;
  };
}

const headerData: HeaderData = {
  logo: {
    src: "/assets/imgs/logo/logo.png",
    alt: "Site Logo",
    href: "/design-agency/",
  },
  menuItems: [
    {
      title: "Home",
      children: [
        { title: "Creative Agency", href: "/creative-agency" },
        { title: "Design Agency", href: "/design-agency" },
        { title: "Digital Agency", href: "/digital-agency" },
        { title: "AI Agency", href: "/ai-agency" },
        { title: "Marketing Agency", href: "/marketing-agency" },
      ],
    },
    { title: "About Us", href: "/design-agency/about" },
    {
      title: "Service",
      children: [
        { title: "Services", href: "/design-agency/services" },
        { title: "Service Details", href: "/design-agency/service-details" },
      ],
    },
    {
      title: "Pages",
      children: [
        { title: "About Us", href: "/design-agency/about" },
        {
          title: "Service",
          children: [
            { title: "Services", href: "/design-agency/services" },
            { title: "Service Details", href: "/design-agency/service-details" },
          ],
        },
        {
          title: "Portfolio Pages",
          children: [
            { title: "Portfolio", href: "/design-agency/portfolio" },
            { title: "Portfolio Grid", href: "/design-agency/portfolio-grid" },
            { title: "Portfolio Slider", href: "/design-agency/portfolio-slider" },
            { title: "Portfolio Details", href: "/design-agency/portfolio-details" },
          ],
        },
        { title: "Team", href: "/design-agency/team" },
        {
          title: "Blog Pages",
          children: [
            { title: "Blog", href: "/design-agency/blog" },
            { title: "Blog Grid", href: "/design-agency/blog-grid" },
            { title: "Blog Details", href: "/design-agency/blog-details" },
          ],
        },
        { title: "FAQ", href: "/design-agency/faq" },
        { title: "Contact", href: "/design-agency/contact" },
      ],
    },
    {
      title: "Blog",
      children: [
        { title: "Blog", href: "/design-agency/blog" },
        { title: "Blog Grid", href: "/design-agency/blog-grid" },
        { title: "Blog Details", href: "/design-agency/blog-details" },
      ],
    },
    { title: "Contact", href: "/design-agency/contact" },
  ],
  cta: {
    href: "/design-agency/contact",
    label: "Let’s Connect",
  },
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleSidebar = () => setIsOpen((prev) => !prev);
  useStickyHeader();

  const renderMenu = (items: MenuItem[]): ReactNode[] =>
    items?.map((item, i) => (
      <li key={i} className={item?.children ? "menu-item-has-children" : ""}>
        {item?.href ? (
          <Link href={item?.href}>{item?.title}</Link>
        ) : (
          <Link href="#0">{item?.title}</Link>
        )}
        {item?.children && (
          <ul className="dp-menu">{renderMenu(item?.children)}</ul>
        )}
      </li>
    ));

  return (
    <>
      <Sidebar isOpen={isOpen} handleSidebar={handleSidebar} />
      <header className="header-area-2">
        <div className="header-main header-sticky">
          <div className="container large">
            <div className="header-area-2-inner">
              <div className="header-logo">
                <Link href={headerData?.logo?.href}>
                  <img
                    src={headerData?.logo?.src}
                    alt={headerData?.logo?.alt}
                    className="normal-logo"
                  />
                </Link>
              </div>
              <div className="header-nav pos-center">
                <nav className="main-menu d-none d-xl-block">
                  <ul>{renderMenu(headerData?.menuItems)}</ul>
                </nav>
              </div>
              <div className="header-button">
                <div className="t-btn-group">
                  <Link
                    href={headerData?.cta?.href}
                    className="t-btn t-btn-circle"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <Link
                    href={headerData?.cta?.href}
                    className="t-btn t-btn-primary"
                  >
                    {headerData?.cta?.label}
                  </Link>
                  <Link
                    href={headerData?.cta?.href}
                    className="t-btn t-btn-circle"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="header-offcanvas d-xl-none">
                <button className="side-toggle" onClick={handleSidebar}>
                  <i className="fa-solid fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
