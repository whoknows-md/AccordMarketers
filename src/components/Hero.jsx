import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { ArrowRight, BarChart, Zap, Target } from "lucide-react";

const Hero = () => {
  const { isDark } = useTheme();
  const navigate = useNavigate();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-8 pt-20 transition-colors duration-500">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div
          className={`absolute top-[-150px] left-[20%] w-[600px] h-[600px] blur-[180px] rounded-full ${isDark ? "bg-blue-700/20" : "bg-blue-300/30"}`}
        />
        <div
          className={`absolute bottom-[-150px] right-[10%] w-[600px] h-[600px] blur-[180px] rounded-full ${isDark ? "bg-purple-700/20" : "bg-pink-300/30"}`}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-14 items-center relative z-10">
        {/* LEFT CONTENT */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6 text-center lg:text-left"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 backdrop-blur-md"
          >
            <Zap size={14} className="text-blue-500" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500">
              🚀 AI-Powered Marketing Agency
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight"
          >
            Accord 
            <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Marketers
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0"
          >
            We combine SEO, paid ads, and AI-driven strategies to help your
            business attract, convert, and retain customers effortlessly.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <div className="flex  flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => navigate("/get-proposal")}
                className="w-full cursor-pointer sm:w-auto flex items-center justify-center gap-2 px-8 py-4 text-white bg-gradient-to-r from-blue-600 to-purple-600  font-bold rounded-2xl hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/30 transition-all active:scale-95"
              >
                Get Started Now <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>

          {/* STATS */}
          <motion.div
            variants={fadeUp}
            className="flex justify-center lg:justify-start gap-10 pt-4"
          >
            {[
              { value: "500+", label: "Clients" },
              { value: "1M+", label: "Leads Generated" },
              { value: "98%", label: "Success Rate" },
            ].map((item, i) => (
              <div key={i}>
                <h3
                  className="text-2xl font-black 
text-gray-900 dark:text-white 
drop-shadow-sm"
                >
                  {item.value}
                </h3>
                <p className="text-sm text-gray-900 dark:text-gray-200">
                  {item.label}
                </p>{" "}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main Visual Composition */}
          <div className="relative aspect-square sm:aspect-video lg:aspect-square max-w-[500px] mx-auto">
            {/* Background "Ghost" Image */}
            <div className="absolute top-10 right-10 w-full h-full rounded-[3rem] bg-slate-100 dark:bg-white/5 -rotate-6 transition-colors" />
                <div className="absolute inset-0 rounded-[3rem] overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
                    alt="Digital Strategy"
                    className="w-full h-full object-cover"
                  />
                  {/* Image Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                  {/* Dynamic Content on Image */}
                </div>
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[10px] font-bold text-blue-400 uppercase">
                    Current Performance
                  </p>
                  <h4 className="text-xl font-black text-white">
                    Live Data Stream
                  </h4>
                </div>
                <BarChart className="text-white" />
              </div>
            </div>
          </div>
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 sm:-right-10 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-white/5 z-20"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-500/10 rounded-lg">
                <Target className="text-emerald-500" size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">
                  Targeting
                </p>
                <p className="text-sm font-black text-slate-900 dark:text-white">
                  99.9% Precision
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
