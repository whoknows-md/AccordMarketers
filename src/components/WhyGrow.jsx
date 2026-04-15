import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/analyticimage.png";
import { useTheme } from "../context/ThemeContext";

const WhyGrow = () => {
  const { isDark } = useTheme();

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      className={`py-24 relative overflow-hidden transition-colors duration-500 ${
        isDark ? "bg-[#060f23] text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.p
            variants={fadeUp}
            className={`text-sm tracking-widest font-semibold ${
              isDark ? "text-blue-400" : "text-blue-600"
            }`}
          >
            WHY GROW WITH US
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-4xl font-bold leading-tight"
          >
            Growing with <br /> the Intelligence
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className={`leading-relaxed ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Accord Marketers does not rely on intuition. However, we measure our progress by means of AI-driven marketing movement, automation, and data analysis.

          </motion.p>

          <motion.ul
            variants={fadeUp}
            className={`space-y-4 ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <li>1. AI-Driven Marketing Campaigns</li>
            <li>2. Optimization Based on Performance</li>
            <li>3. Intelligence Through Data Analysis</li>
          </motion.ul>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src={logo}
            alt="AI Marketing Analytics Dashboard"
            className="rounded-3xl shadow-xl hover:scale-105 transition duration-500"
          />

          {/* Glow */}
          <div
            className={`absolute -top-6 -right-6 w-24 h-24 blur-3xl rounded-full ${
              isDark ? "bg-blue-700/20" : "bg-blue-300/30"
            }`}
          ></div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyGrow;