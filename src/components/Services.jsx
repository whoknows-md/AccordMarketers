import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import {
  BarChart3,
  Search,
  Code2,
  Cpu,
  PenTool,
  Video,
  Megaphone,
  Globe,
} from "lucide-react";

const services = [
  {
    slug: "ai-powered-seo",
    icon: <BarChart3 size={36} />,
    title: "AI-Powered SEO",
    desc: "Data-driven keyword strategy and automated optimization to improve rankings, increase visibility, and attract high-intent traffic.",
  },
  {
    slug: "performance-marketing",
    icon: <Search size={36} />,
    title: "Performance Marketing",
    desc: "AI-optimized Google and social ad campaigns designed to maximize conversions and deliver measurable ROI.",
  },
  {
    slug: "social-media-automation",
    icon: <Video size={36} />,
    title: "Social Media Automation",
    desc: "Smart content scheduling, targeted audience engagement, and performance tracking across all major platforms.",
  },
  {
    slug: "marketing-analytics-insights",
    icon: <Cpu size={36} />,
    title: "Marketing Analytics & Insights",
    desc: "Real-time dashboards and advanced analytics that turn data into strategic, results-focused decisions.",
  },
  {
    slug: "ai-powered-content-marketing",
    icon: <PenTool size={36} />,
    title: "AI-Powered Content Marketing",
    desc: "SEO-driven content creation backed by audience intelligence to build authority and drive consistent conversions.",
  },
  {
    slug: "website-development",
    icon: <Globe size={36} />,
    title: "Website Development",
    desc: "Custom, high-performance websites and web apps built with modern technologies.",
  },
  {
    slug: "conversion-rate-optimization",
    icon: <Code2 size={36} />,
    title: "Conversion Rate Optimization (CRO)",
    desc: "Continuous testing and funnel optimization to transform traffic into leads and sales.",
  },
  {
    slug: "marketing-strategy-brand-positioning",
    icon: <Megaphone size={36} />,
    title: "Marketing Strategy & Brand Positioning",
    desc: "Develop data-backed marketing roadmaps that define your market presence and long-term growth.",
  },
];

const Services = () => {
  const { isDark } = useTheme();

  // Stagger animation
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <motion.section
      id="services"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`py-28 transition-colors duration-500 ${
        isDark ? "bg-[#060f23] text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p
            className={`text-sm tracking-widest font-semibold mb-4 ${
              isDark ? "text-blue-400" : "text-blue-600"
            }`}
          >
            OUR SERVICES
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Complete Digital Growth Ecosystem
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.97 }}
              transition={{
                duration: 0.4,
                type: "spring",
                stiffness: 120,
              }}
              className={`group p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 border cursor-pointer ${
                isDark
                  ? "bg-white/5 border-white/10 hover:border-blue-400"
                  : "bg-white border-transparent hover:border-blue-500"
              }`}
            >
              <Link to={`/services/${service.slug}`} className="block">

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className={`mb-5 transition duration-500 ${
                    isDark
                      ? "text-blue-400 group-hover:text-blue-300"
                      : "text-blue-600 group-hover:text-blue-700"
                  }`}
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <h3
                  className={`text-xl font-bold mb-3 transition ${
                    isDark
                      ? "text-white group-hover:text-blue-300"
                      : "text-gray-900 group-hover:text-blue-600"
                  }`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {service.desc}
                </p>

                {/* Animated Line */}
                <motion.div
                  initial={{ width: 40 }}
                  whileHover={{ width: 64 }}
                  transition={{ duration: 0.3 }}
                  className={`h-1 mt-6 rounded-full ${
                    isDark
                      ? "bg-gradient-to-r from-blue-400 to-purple-500"
                      : "bg-gradient-to-r from-blue-600 to-purple-600"
                  }`}
                ></motion.div>

              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Services;