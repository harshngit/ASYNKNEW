export interface MenuItem {
  label: string;
  href?: string;
  children?: MenuItem[];
}

export interface HeaderData {
  logo: string;
  menu: MenuItem[];
  offcanvasIcon: string;
}

const header: HeaderData = {
  logo: "/assets/imgs/logo/logoasynk.png",
  menu: [
    { label: "About Us", href: "/about" },
    { label: "Service", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ],
  offcanvasIcon: "/assets/imgs/icon/icon-4.webp",
};

export default header;
