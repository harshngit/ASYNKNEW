export interface SidebarMenu {
  label: string;
  href?: string;
  children?: SidebarMenu[];
}

export interface SidebarCTA {
  text: string;
  href: string;
}

export interface SidebarContactItem {
  text: string;
  href: string;
}

export interface SidebarContact {
  phone: SidebarContactItem;
  email: SidebarContactItem;
  address: string;
}

export interface SidebarSocial {
  label: string;
  href: string;
}

export interface SidebarData {
  logo: string;
  menus: SidebarMenu[];
  closeIcon: string;
  title: string;
  description: string;
  cta: SidebarCTA;
  ctaIcon: string;
  gallery: string[];
  contact: SidebarContact;
  social: SidebarSocial[];
  footerLogo: string;
}

const sidebar: SidebarData = {

  logo: "/assets/imgs/logo/logo.png",
  menus: [
    { label: "About Us", href: "/ai-agency/about" },
    { label: "Service", href: "/ai-agency/services" },
    { label: "Portfolio", href: "/ai-agency/portfolio" },
    { label: "Contact", href: "/ai-agency/contact" },
  ],
  closeIcon: "fas fa-times",
  title: "Hello There!",
  description:
    "We offer comprehensive range of services to help your business thrive.",
  cta: {
    text: "Let’s Connect",
    href: "/ai-agency/contact",
  },
  ctaIcon: "fa-solid fa-arrow-right",
  gallery: [
    "/assets/imgs/gallery/image-48.webp",
    "/assets/imgs/gallery/image-49.webp",
    "/assets/imgs/gallery/image-50.webp",
    "/assets/imgs/gallery/image-51.webp",
  ],
  contact: {
    phone: { text: "+2230 6965 119", href: "tel:+22306965119" },
    email: { text: "averto@gmail.com", href: "mailto:averto@gmail.com" },
    address: "Avenue de Roma 1588, Lisboa",
  },
  social: [
    { label: "FB", href: "#" },
    { label: "LN", href: "#" },
    { label: "IN", href: "#" },
    { label: "BE", href: "#" },
  ],
  footerLogo: "/assets/imgs/logo/logo-6.png",
};

export default sidebar;
