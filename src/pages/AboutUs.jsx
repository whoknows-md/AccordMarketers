import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import Footer from "../components/Footer";

/* SMOOTH ANIMATION CONFIG */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 60, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const AboutUs = () => {
  const { isDark } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`pt-20 min-h-screen transition-colors duration-500 ${
        isDark ? "bg-[#050a1a] text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* HERO */}
      <section
        className={`relative py-24 overflow-hidden ${
          isDark ? "bg-white/5" : "bg-white"
        }`}
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center"
        >
          {/* TEXT */}
          <motion.div variants={item}>
            <p
              className={`text-sm tracking-widest font-semibold uppercase mb-4 ${
                isDark ? "text-blue-400" : "text-blue-600"
              }`}
            >
              About Accord Marketers
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Leading the Way in {" "}
              <span className={isDark ? "text-blue-400" : "text-blue-600"}>
                AI Marketing Solutions
              </span>
            </h1>

            <p
              className={`text-lg leading-relaxed ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Introducing <strong>Accord Marketers</strong>, where concepts become solutions. Through the use of advanced technologies such as artificial intelligence, data analysis, and automation, we make your dreams come true by ensuring your success.
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80"
              alt="Digital Marketing"
              className="rounded-3xl shadow-2xl"
            />

            <div
              className={`absolute -bottom-8 -right-8 w-40 h-40 blur-3xl rounded-full ${
                isDark ? "bg-blue-500/20" : "bg-blue-400/20"
              }`}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12"
        >
          {/* MISSION */}
          <motion.div
            variants={item}
            whileHover={{
              y: -10,
              transition: { duration: 0.4 },
            }}
            className={`p-10 rounded-3xl shadow-lg ${
              isDark ? "bg-white/5 border border-white/10" : "bg-white"
            }`}
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-500">
              Our Mission
            </h2>

            <p
              className={`text-lg leading-relaxed ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Our mission is to empower businesses by connecting them with
              intelligent, AI-powered marketing strategies tailored exactly to
              their goals. We build scalable growth engines that adapt and
              evolve, combining creativity with data-driven execution to ensure
              sustainable growth.
            </p>
          </motion.div>

          {/* VISION */}
          <motion.div
            variants={item}
            whileHover={{
              y: -10,
              transition: { duration: 0.4 },
            }}
            className={`p-10 rounded-3xl shadow-lg ${
              isDark ? "bg-white/5 border border-white/10" : "bg-white"
            }`}
          >
            <h2 className="text-3xl font-bold mb-4 text-cyan-500">
              Our Vision
            </h2>

            <p
              className={`text-lg leading-relaxed ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              We envision a world where every business — big or small — can
              leverage AI to achieve marketing clarity and growth. Accord
              Marketers aims to become the global growth partner for
              forward-thinking brands.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* WHY US */}
      <section className={`py-20 ${isDark ? "bg-white/5" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Why Partner with Accord Marketers?
              </h2>

              <p
                className={`text-xl ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Precision, automation, and measurable impact define our AI-first
                approach.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "Data-Driven Precision",
                  desc: "AI analyzes user behavior to predict trends and maximize ROI.",
                },
                {
                  title: "Intelligent Automation",
                  desc: "Automated campaigns that optimize performance 24/7.",
                },
                {
                  title: "Measurable Impact",
                  desc: "Transparent reporting with clear business results.",
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  whileHover={{
                    y: -12,
                    scale: 1.03,
                    transition: { duration: 0.4 },
                  }}
                  className={`p-8 rounded-2xl shadow-lg transition ${
                    isDark
                      ? "bg-white/5 hover:bg-white/10"
                      : "bg-gray-50 hover:shadow-xl"
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-4 text-blue-500">
                    {feature.title}
                  </h3>
                  <p className={isDark ? "text-gray-300" : "text-gray-600"}>
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutUs;
