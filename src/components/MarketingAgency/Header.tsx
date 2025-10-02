"use client";
import Link from "next/link";
import Sidebar from "@/components/MarketingAgency/SideBar/SideBar";
import SearchModal from "@/components/MarketingAgency/common/SearchModal";
import { useState } from "react";
import useStickyHeader from "@/Hook/useStickyHeader";

// --- TYPE DEFINITIONS ---
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
  nav: MenuItem[];
  cta: {
    href: string;
    label: string;
  };
}

// --- TYPED DATA OBJECT ---

const headerData: HeaderData = {
  logo: {
    src: "/assets/imgs/logo/logo-light.png",
    alt: "Site Logo",
    href: "/marketing-agency/",
  },
  nav: [
    { title: "About Us", href: "/marketing-agency/about" },
    { title: "Service", href: "/marketing-agency/services" },
    { title: "Portfolio", href: "/marketing-agency/portfolio" },
    { title: "Contact", href: "/marketing-agency/contact" },
  ],
  cta: {
    href: "/marketing-agency/contact",
    label: "Let’s Connect",
  },
};
const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleSidebar = () => setIsOpen((prev) => !prev);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const closeModal = () => setIsOpenModal(false);
  const openModal = () => setIsOpenModal(true);
  useStickyHeader();

  // Recursive menu builder
  const renderMenu = (items: MenuItem[]): JSX.Element[] =>
    items.map((item, index) => (
      <li key={index}>
        <Link href={item?.href || "#0"}>{item?.title}</Link>
      </li>
    ));

  return (
    <>
      <SearchModal isOpenModal={isOpenModal} closeModal={closeModal} />
      <Sidebar isOpen={isOpen} handleSidebar={handleSidebar} />
      <header className="header-area-5">
        <div className="header-main header-sticky">
          <div className="container large">
            <div className="header-area-5-inner">
              {/* Logo */}
              <div className="header-logo">
                <Link href={headerData?.logo?.href}>
                  <img
                    src={headerData?.logo?.src}
                    alt={headerData?.logo?.alt}
                    className="normal-logo"
                  />
                </Link>
              </div>

              {/* Navigation */}
              <div className="header-nav">
                <nav className="main-menu d-none d-xl-block">
                  <ul>{renderMenu(headerData?.nav)}</ul>
                </nav>
              </div>

              {/* Optional search icon */}
              <div className="search-icon" onClick={openModal}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>

              {/* CTA Buttons */}
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
                    href={headerData.cta.href}
                    className="t-btn t-btn-circle"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>

              {/* Sidebar toggle */}
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
