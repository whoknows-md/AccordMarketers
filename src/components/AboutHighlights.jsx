import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const AboutHighlights = () => {
  const { isDark } = useTheme();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      className={`py-28 transition-colors duration-500 ${
        isDark ? "bg-[#060f23] text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <p
            className={`text-sm tracking-widest font-semibold mb-4 ${
              isDark ? "text-blue-400" : "text-blue-600"
            }`}
          >
            WHY ACCORD MARKETERS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How We Do Marketing Right
          </h2>

          <p
            className={`text-lg max-w-3xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            In an era of digital world, clarity becomes supreme. We combine creativity with intelligence, technology with planning, and vision with success.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 mb-20"
        >
          {/* Card 1 */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className={`p-8 rounded-3xl shadow-lg transition-all duration-500 ${
              isDark
                ? "bg-white/5 border border-white/10"
                : "bg-white border border-transparent"
            }`}
          >
            <h3 className="text-2xl font-bold mb-6">
              Our Process: Audit, Execute, Optimize
            </h3>

            <div className="space-y-4">
              <p className={isDark ? "text-gray-300" : "text-gray-600"}>
                <span className="font-semibold text-blue-500">1. Audit:</span> We analyze your current data and market position
              </p>

              <p className={isDark ? "text-gray-300" : "text-gray-600"}>
                <span className="font-semibold text-blue-500">2. Execute:</span> Automated, high-precision campaigns powered by AI
              </p>

              <p className={isDark ? "text-gray-300" : "text-gray-600"}>
                <span className="font-semibold text-blue-500">3. Optimize:</span> Real-time adjustments that deliver continuous improvement
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className={`p-8 rounded-3xl shadow-lg transition-all duration-500 ${
              isDark
                ? "bg-white/5 border border-white/10"
                : "bg-white border border-transparent"
            }`}
          >
            <h3 className="text-2xl font-bold mb-6">
              AI-Powered Capabilities
            </h3>

            <div className="space-y-4">
              <p className={isDark ? "text-gray-300" : "text-gray-600"}>
                <span className="font-semibold text-blue-500">• Predictive Targeting:</span> Reach the right audience at the right time
              </p>

              <p className={isDark ? "text-gray-300" : "text-gray-600"}>
                <span className="font-semibold text-blue-500">• Real-time Optimization:</span> Campaigns that adapt and improve constantly
              </p>

              <p className={isDark ? "text-gray-300" : "text-gray-600"}>
                <span className="font-semibold text-blue-500">• Automation at Scale:</span> Efficiency without sacrificing quality
              </p>

              <p className={isDark ? "text-gray-300" : "text-gray-600"}>
                <span className="font-semibold text-blue-500">• Rapid Testing:</span> Fast iteration to find what works best
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer text */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className={isDark ? "text-gray-300 text-lg" : "text-gray-600 text-lg"}>
            When you partner with Accord Marketers, you don't just hire an agency — you gain a growth ally committed to long-term success.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutHighlights;