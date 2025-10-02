"use client";
import Link from "next/link";
import Sidebar from "@/components/AiAgency/SideBar/SideBar";
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
    href: "/",
  },
  menuItems: [
    { title: "About Us", href: "/about" },
    { title: "Service", href: "/services" },
    { title: "Portfolio", href: "/portfolio" },
    { title: "Contact", href: "/contact" },
  ],
  cta: {
    href: "/creative-agency/contact",
    label: "Let’s Connect",
  },
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleSidebar = () => setIsOpen((prev) => !prev);
  useStickyHeader();

  const renderMenu = (items: MenuItem[]): ReactNode[] =>
    items?.map((item, i) => (
      <li key={i}>
        <Link href={item?.href || "#0"}>{item?.title}</Link>
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
