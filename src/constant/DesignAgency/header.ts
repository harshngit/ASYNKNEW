export interface MenuData {
  label: string;
  href?: string;
  children?: MenuData[];
}

export interface HeaderData {
  logo: string;
  offcanvasIcon: string;
  menu: MenuData[];
}

const headerData = {
  logo: "/assets/imgs/logo/logo.png",
  offcanvasIcon: "/assets/imgs/icon/bar.svg",
  menu: [
    { label: "About Us", href: "/design-agency/about" },
    { label: "Service", href: "/design-agency/services" },
    { label: "Portfolio", href: "/design-agency/portfolio" },
    { label: "Contact", href: "/design-agency/contact" },
  ],
};

export default headerData;
