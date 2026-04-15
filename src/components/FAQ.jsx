import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const faqs = [
  {
    question: "What is an AI digital marketing agency?",
    answer:
      "An AI digital marketing agency uses artificial intelligence, automation, and advanced data analytics to plan, execute, and optimize marketing campaigns. Instead of relying only on manual strategies, AI tools analyze customer behavior, predict trends, and continuously improve campaign performance to maximize ROI.",
  },
  {
    question: "How can an AI marketing agency help my business grow?",
    answer: `An AI marketing agency helps your business grow by:
Identifying high-converting audiences
Optimizing ad spend in real time
Personalizing customer experiences
Predicting buying behavior
Improving lead quality
This results in better engagement, higher conversion rates, and measurable revenue growth.`,
  },
  {
    question: "Is AI digital marketing suitable for startups and small businesses?",
    answer: `Yes. AI-powered marketing is especially beneficial for startups and small businesses because it:
Reduces wasted ad spend
Automates repetitive tasks
Provides data-backed insights
Scales marketing efforts efficiently
With the right strategy, AI allows smaller businesses to compete with larger brands.`,
  },
  {
    question: "How does an AI marketing company increase ecommerce sales?",
    answer: `AI increases ecommerce sales by:
Personalizing product recommendations
Running smart retargeting campaigns
Optimizing pricing strategies
Analyzing customer purchase patterns
Improving checkout conversion rates
This leads to higher average order value and repeat purchases.`,
  },
  {
    question: "Can an AI digital marketing agency help B2B companies?",
    answer: `Absolutely. For B2B companies, AI marketing can:
Identify high-value prospects
Automate lead nurturing
Improve LinkedIn and email targeting
Predict sales cycles
Enhance account-based marketing strategies
This improves lead quality and shortens the sales cycle.`,
  },
];

const FAQ = () => {
  const { isDark } = useTheme();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className={`py-28 transition-colors duration-500 ${
        isDark ? "bg-[#060f23] text-white" : "bg-[#EDEAF3] text-gray-900"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-2xl overflow-hidden transition-all duration-500 border ${
                isDark
                  ? "bg-white/5 border-white/10"
                  : "bg-white border-transparent shadow-md"
              }`}
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-8 py-6 text-left"
              >
                <span className="text-lg font-semibold">
                  {faq.question}
                </span>

                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={isDark ? "text-blue-400" : "text-blue-600"}
                >
                  <ChevronDown size={22} />
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className={`px-8 pb-6 leading-relaxed whitespace-pre-line ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;