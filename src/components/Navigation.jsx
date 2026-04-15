import React, { useEffect, useState, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, setIsDark } = useTheme();
  const [servicesHovered, setHovered] = useState(false);
  const hoverTimer = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // ── Theme Sync ──────────────────────────────────────────────────
  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
      document.body.style.backgroundColor = "#060f23";
      document.body.style.color = "#e2e8f0";
    } else {
      html.classList.remove("dark");
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#0f172a";
    }
  }, [isDark]);

  // ── Scroll Shadow ───────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Navigation Logic ───────────────────────────────────────────
  useEffect(() => {
    setMenuOpen(false);
    setHovered(false);
  }, [location]);

  const handleSectionClick = (sectionId) => {
    setMenuOpen(false);
    if (location.pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  const onServicesEnter = () => {
    clearTimeout(hoverTimer.current);
    setHovered(true);
  };
  const onServicesLeave = () => {
    hoverTimer.current = setTimeout(() => setHovered(false), 200);
  };

  // ── Data ────────────────────────────────────────────────────────
  const serviceLinks = [
    { label: "AI-Powered SEO", to: "/services/ai-powered-seo", dot: "bg-blue-500" },
    { label: "Performance Marketing", to: "/services/performance-marketing", dot: "bg-emerald-500" },
    { label: "Social Media Automation", to: "/services/social-media-automation", dot: "bg-pink-500" },
    { label: "Marketing Analytics & Insights", to: "/services/marketing-analytics-insights", dot: "bg-indigo-500" },
    { label: "AI-Powered Content Marketing", to: "/services/ai-powered-content-marketing", dot: "bg-amber-500" },
    { label: "Website Development", to: "/services/website-development", dot: "bg-teal-500" },
    { label: "Conversion Rate Optimization (CRO)", to: "/services/conversion-rate-optimization", dot: "bg-cyan-500" },
    { label: "Marketing Strategy & Brand Positioning", to: "/services/marketing-strategy-brand-positioning", dot: "bg-purple-500" },
  ];

  const navItems = [
    { type: "route", path: "/", label: "Home" },
    { type: "route", path: "/about", label: "About" },
    { type: "section", id: "services", label: "Services" },
    { type: "route", path: "/blogs", label: "Blog" },
    { type: "route", path: "/contact", label: "Contact" },
  ];

  // ── Styles ──────────────────────────────────────────────────────
  const navBg = scrolled
    ? isDark
      ? "bg-[#060f23]/90 backdrop-blur-md shadow-2xl border-white/5"
      : "bg-white/90 backdrop-blur-md shadow-sm border-gray-100"
    : "bg-transparent border-transparent";

  return (
    <>
      <style>{`
        @keyframes menuPop {
          from { opacity: 0; transform: translateY(-10px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-menu-pop { animation: menuPop 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

        nav { transition: background-color 0.4s ease, border-color 0.4s ease; }
        .nav-link { transition: all 0.2s ease; }
      `}</style>

      <nav className={`fixed top-0 left-0 w-full z-[100] border-b ${navBg}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* LOGO */}
          <NavLink to="/" className="relative z-10 shrink-0">
            <img
              src="https://accordmarketers.com/wp-content/uploads/2025/07/Accord_Logo_Black-removebg-preview.png"
              alt="Logo"
              className="h-12 w-auto"
              style={{
                filter: isDark ? "brightness(0) invert(1)" : "brightness(0)",
              }}
            />
          </NavLink>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-2">
              {navItems.map((item) => (
                <li key={item.label} className="relative">
                  {item.type === "section" ? (
                    <div onMouseEnter={onServicesEnter} onMouseLeave={onServicesLeave}>
                      <button
                        onClick={() => handleSectionClick(item.id)}
                        className={`nav-link cursor-pointer flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-bold ${
                          isDark
                            ? "text-gray-400 hover:text-white"
                            : "text-gray-600 hover:text-blue-600"
                        }`}
                      >
                        {item.label}
                        <ChevronDown size={14} className={servicesHovered ? "rotate-180" : ""} />
                      </button>

                      {servicesHovered && (
                        <div className={`animate-menu-pop absolute top-full left-0 mt-2 w-64 p-2 rounded-2xl border shadow-2xl ${
                          isDark ? "bg-[#0d172d] border-white/10" : "bg-white border-gray-100"
                        }`}>
                          {serviceLinks.map((s) => (
                            <NavLink
                              key={s.to}
                              to={s.to}
                              className={`flex items-center gap-3 p-3 rounded-xl text-[13px] font-semibold nav-link ${
                                isDark ? "hover:bg-white/5 text-gray-300" : "hover:bg-blue-50 text-gray-600"
                              }`}
                            >
                              <span className={`w-2 h-2 rounded-full ${s.dot}`} />
                              {s.label}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `nav-link px-4 py-2 rounded-xl text-sm font-bold ${
                          isActive
                            ? "text-blue-600"
                            : isDark
                            ? "text-gray-400 hover:text-white"
                            : "text-gray-600 hover:text-blue-600"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>

            {/* 🌗 DESKTOP TOGGLE */}
            <button
              onClick={() => setIsDark(!isDark)}
              className={`relative w-14 h-7 flex items-center rounded-full px-1 cursor-pointer transition-all duration-300 ${
                isDark ? "bg-[#1e293b]" : "bg-gray-300"
              }`}
            >
              <div
                className={`absolute w-6 h-6 rounded-full flex items-center justify-center shadow-md transform transition-all duration-300 ${
                  isDark ? "translate-x-7 bg-[#0f172a]" : "translate-x-0 bg-white"
                }`}
              >
                {isDark ? <Sun size={14} className="text-yellow-400" /> : <Moon size={14} className="text-blue-600" />}
              </div>
            </button>

            <NavLink
              to="/get-proposal"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-2xl text-sm font-black shadow-lg shadow-blue-500/20 active:scale-95 transition-all"
            >
              Get Proposal
            </NavLink>
          </div>

          {/* MOBILE */}
          <div className="flex md:hidden items-center gap-4">

            {/* 🌗 MOBILE TOGGLE */}
            <button
              onClick={() => setIsDark(!isDark)}
              className={`relative w-12 h-6 flex items-center rounded-full px-1 cursor-pointer transition-all duration-300 ${
                isDark ? "bg-[#1e293b]" : "bg-gray-300"
              }`}
            >
              <div
                className={`absolute w-5 h-5 rounded-full flex items-center justify-center shadow-md transform transition-all duration-300 ${
                  isDark ? "translate-x-6 bg-[#0f172a]" : "translate-x-0 bg-white"
                }`}
              >
                {isDark ? <Sun size={12} className="text-yellow-400" /> : <Moon size={12} className="text-blue-600" />}
              </div>
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={isDark ? "text-white" : "text-gray-900"}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU (unchanged) */}
        {menuOpen && (
          <div className="md:hidden absolute top-[85px] inset-x-4 z-50">
            <div className={`animate-menu-pop p-6 rounded-3xl border shadow-2xl backdrop-blur-xl ${
              isDark ? "bg-[#0b1b3b]/95 border-white/10" : "bg-white/95 border-gray-100"
            }`}>
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() =>
                      item.type === "section"
                        ? handleSectionClick(item.id)
                        : navigate(item.path)
                    }
                    className={`text-left px-4 py-3 rounded-xl text-lg font-bold ${
                      isDark ? "text-white hover:bg-white/5" : "text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className={`h-[1px] my-2 ${isDark ? "bg-white/10" : "bg-gray-100"}`} />
                <NavLink
                  to="/get-proposal"
                  onClick={() => setMenuOpen(false)}
                  className="w-full bg-blue-600 text-white py-4 rounded-2xl text-center font-black shadow-lg shadow-blue-500/25"
                >
                  Get Started Now
                </NavLink>
              </div>
            </div>
            <div className="fixed inset-0 -z-10 bg-black/20" onClick={() => setMenuOpen(false)} />
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;