import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Menu",
    links: [
      { name: "Accueil", href: "#hero" },
      { name: "Catégories", href: "#features" },
      { name: "A Propos", href: "#about" },
      { name: "Contact", href: "#contact" },
    ],
  },
  {
    title: "App",
    links: [
      { name: "App", href: "/app" },
      { name: "Carte", href: "/app/map" },
    ]
  }
];

const defaultSocialLinks = [
  {
    icon: <FaInstagram className="size-5" />,
    href: "#",
    label: "Instagram",
    description:
      "Suivez-nous pour des contenus exclusifs et l’actualité en temps réel.",
  },
  {
    icon: <FaFacebook className="size-5" />,
    href: "#",
    label: "Facebook",
    description:
      "Rejoignez notre communauté engagée et partagez vos expériences.",
  },
  {
    icon: <FaTwitter className="size-5" />,
    href: "#",
    label: "Twitter",
    description:
      "Restez connecté aux dernières tendances et annonces importantes.",
  },
  {
    icon: <FaLinkedin className="size-5" />,
    href: "#",
    label: "LinkedIn",
    description:
      "Découvrez nos opportunités professionnelles et notre réseau d’experts.",
  },
];

const defaultLegalLinks = [
  {
    name: "Terms and Conditions",
    href: "#",
    description:
      "Les conditions générales qui encadrent l’utilisation de nos services.",
  },
  {
    name: "Privacy Policy",
    href: "#",
    description:
      "Votre sécurité et confidentialité sont au cœur de nos priorités.",
  },
];

export const Footer = ({
  logo = {
    url: "/",
    src: "/logo.svg",
    alt: "logo",
    title: "Lyon & Lumières",
  },
  sections = defaultSections,
  description = "Lyon & Lumières est une plateforme innovante qui vous plonge au cœur de la magie nocturne de Lyon.",
  socialLinks = defaultSocialLinks,
  copyright = "© 2025 Lyon & Lumières. All rights reserved.",
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  return (
    <section className="pt-32 px-4 lg:px-16">
      <div className="container">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
                <a href={logo.url}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="h-8 invert-0 dark:invert"
                />
                </a>
              <h2 className="text-xl font-semibold">{logo.title}</h2>
            </div>
            <p className="max-w-[70%] text-sm text-muted-foreground">
              {description}
            </p>
            <ul className="flex items-center space-x-6 text-muted-foreground">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-primary">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-primary">
                <a href={link.href}> {link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
