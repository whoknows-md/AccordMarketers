import React, { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Globe,
  MapPin,
  Phone,
  ChevronDown,
} from "lucide-react";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openSection, setOpenSection] = useState(null);

  const handleSectionClick = (sectionId) => {
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const handleHomeClick = () => {
    navigate("/");
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
  };

  const handleAboutClick = () => {
    navigate("/about");
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
  };

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const siteMapLinks = [
    { label: "Home", action: handleHomeClick },
    { label: "About", action: handleAboutClick },
    { label: "Services", action: () => handleSectionClick("services") },
    { label: "Blogs", to: "/blogs" },
    { label: "Contact", to: "/contact" },
    { label: "FAQ", action: () => handleSectionClick("faq") },
  ];

  const serviceLinks = [
    { label: "AI-Powered SEO", to: "/services/ai-powered-seo" },
    { label: "Performance Marketing", to: "/services/performance-marketing" },
    {
      label: "Social Media Automation",
      to: "/services/social-media-automation",
    },
    {
      label: "Marketing Analytics & Insights",
      to: "/services/marketing-analytics-insights",
    },
    {
      label: "AI-Powered Content Marketing",
      to: "/services/ai-powered-content-marketing",
    },
    { label: "Website Development", to: "/services/website-development" },
    {
      label: "Conversion Rate Optimization",
      to: "/services/conversion-rate-optimization",
    },
    {
      label: "Marketing Strategy & Brand Positioning",
      to: "/services/marketing-strategy-brand-positioning",
    },
  ];

  const socials = [
    {
      icon: <Linkedin size={17} />,
      href: "#",
      hover: "hover:bg-blue-600",
      label: "LinkedIn",
    },
    {
      icon: <Instagram size={17} />,
      href: "#",
      hover: "hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-400",
      label: "Instagram",
    },
    {
      icon: <Facebook size={17} />,
      href: "#",
      hover: "hover:bg-blue-500",
      label: "Facebook",
    },
    {
      icon: <Twitter size={17} />,
      href: "#",
      hover: "hover:bg-sky-500",
      label: "Twitter",
    },
    {
      icon: <Mail size={17} />,
      href: "mailto:hello@accordmarketers.com",
      hover: "hover:bg-emerald-600",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-[#0B1B3B] text-gray-400 pt-16 pb-8 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] bg-blue-700/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        {/* ===== Top Divider Label ===== */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-xs tracking-[0.2em] text-blue-400 font-semibold uppercase">
            Accord Marketers
          </span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* ===== DESKTOP & TABLET: 4-column grid (md+) ===== */}
        <div className=" md:grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">
          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <NavLink to="/" className="flex items-center gap-2 shrink-0">
              <img
                src="https://accordmarketers.com/wp-content/uploads/2025/07/Accord_Logo_Black-removebg-preview.png"
                alt="Accord Marketers"
                className="h-10 w-auto"
               
              />
            </NavLink>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Redefining digital growth through artificial intelligence,
              performance strategy, and human creativity.
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-2 mb-8">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className={`bg-white/10 p-2.5 rounded-full transition-all duration-300 ${s.hover} hover:text-white hover:scale-110`}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Contact snippet */}
            <div className="space-y-2.5 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <Mail size={14} className="text-blue-400 shrink-0" />
                <span>hello@accordmarketers.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone size={14} className="text-blue-400 shrink-0" />
                <span>+91 00000 00000</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={14} className="text-blue-400 shrink-0" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Col 2 — Site Map */}
          <div>
            <h3 className="text-white text-xs font-bold mb-5 tracking-[0.15em] uppercase border-b border-white/10 pb-3">
              Site Map
            </h3>
            <ul className="space-y-3">
              {siteMapLinks.map((item) => (
                <li key={item.label}>
                  {item.to ? (
                    <Link
                      to={item.to}
                      className="text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition" />
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      onClick={item.action}
                      className="text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5 group bg-transparent border-none cursor-pointer p-0"
                    >
                      <span className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition" />
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services (split into two mini-columns on lg) */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-xs font-bold mb-5 tracking-[0.15em] uppercase border-b border-white/10 pb-3">
              Our Services
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-3">
              {serviceLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition shrink-0" />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ===== MOBILE: Accordion layout ===== */}
        <div className="md:hidden mb-10 space-y-0">
          {/* Brand — always visible on mobile */}
          <div className="mb-8 pb-8 border-b border-white/10">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <Globe size={16} className="text-white" />
              </div>
              <h2 className="text-base font-bold text-white">
                Accord Marketers
              </h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Redefining digital growth through AI, performance strategy, and
              human creativity.
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className={`bg-white/10 p-2.5 rounded-full transition-all duration-300 ${s.hover} hover:text-white`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <Mail size={13} className="text-blue-400 shrink-0" />
                <span>hello@accordmarketers.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone size={13} className="text-blue-400 shrink-0" />
                <span>+91 00000 00000</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={13} className="text-blue-400 shrink-0" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Accordion — Site Map */}
          <div className="border-b border-white/10">
            <button
              onClick={() => toggleSection("sitemap")}
              className="w-full flex justify-between items-center py-4 text-white font-semibold text-sm tracking-widest uppercase bg-transparent border-none cursor-pointer"
            >
              Site Map
              <ChevronDown
                size={16}
                className={`text-blue-400 transition-transform duration-300 ${openSection === "sitemap" ? "rotate-180" : ""}`}
              />
            </button>
            {openSection === "sitemap" && (
              <ul className="pb-5 space-y-3 pl-1">
                {siteMapLinks.map((item) => (
                  <li key={item.label}>
                    {item.to ? (
                      <Link
                        to={item.to}
                        className="text-sm text-gray-400 hover:text-white transition block"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        onClick={item.action}
                        className="text-sm text-gray-400 hover:text-white transition bg-transparent border-none cursor-pointer p-0 text-left"
                      >
                        {item.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Accordion — Services */}
          <div className="border-b border-white/10">
            <button
              onClick={() => toggleSection("services")}
              className="w-full flex justify-between items-center py-4 text-white font-semibold text-sm tracking-widest uppercase bg-transparent border-none cursor-pointer"
            >
              Our Services
              <ChevronDown
                size={16}
                className={`text-blue-400 transition-transform duration-300 ${openSection === "services" ? "rotate-180" : ""}`}
              />
            </button>
            {openSection === "services" && (
              <ul className="pb-5 space-y-3 pl-1">
                {serviceLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="text-sm text-gray-400 hover:text-white transition block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* ===== CTA Strip ===== */}
        <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <p className="text-sm text-gray-300 text-center sm:text-left">
            Ready to scale your business?{" "}
            <span className="text-white font-semibold">
              Let's build something great.
            </span>
          </p>
          <Link
            to="/get-proposal"
            className="shrink-0 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105"
          >
            Get Free Proposal →
          </Link>
        </div>

        {/* ===== Bottom Bar ===== */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <span>© 2026 Accord Marketers. All rights reserved.</span>
          <span className="hidden sm:block text-white/20">·</span>
          <span className="italic text-gray-600">
            Precision in every pixel.
          </span>
          <div className="flex gap-5">
            <Link
              to="/privacy-policy"
              className="hover:text-gray-300 transition"
            >
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-gray-300 transition">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
