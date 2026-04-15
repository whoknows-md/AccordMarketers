import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { isDark } = useTheme();

  const contactInfo = [
    {
      icon: <Mail size={32} />,
      title: "Email",
      content: "contact@accordmarketers.com",
      link: "mailto:contact@accordmarketers.com",
    },
    {
      icon: <Phone size={32} />,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin size={32} />,
      title: "Address",
      content: "123 Business St, New York",
      link: "#",
    },
    {
      icon: <Clock size={32} />,
      title: "Business Hours",
      content: "Mon - Fri, 9AM - 6PM",
      link: "#",
    },
  ];

  return (
    <section
      className={`pt-32 pb-20 min-h-screen transition-colors duration-500 ${
        isDark ? "bg-[#060f23]" : "bg-gray-50"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className={`text-sm tracking-widest font-semibold mb-4 block uppercase ${
              isDark ? "text-blue-400" : "text-blue-600"
            }`}
          >
            Connect With Us
          </span>

          <h1
            className={`text-5xl font-bold mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Contact Information
          </h1>

          <p
            className={`text-xl max-w-2xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            We're here to help. Reach out to us through any of the channels
            below and we'll be happy to assist you.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`rounded-3xl p-8 text-center group transition-all duration-300 ${
                isDark
                  ? "bg-[#0f1b3d] border border-[#1e2a4a] hover:border-blue-500"
                  : "bg-white border border-gray-100 hover:border-blue-200 shadow-lg hover:shadow-2xl"
              }`}
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 transition-all duration-300 ${
                  isDark
                    ? "bg-[#1e2a4a] text-blue-400 group-hover:bg-blue-500 group-hover:text-white"
                    : "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                } group-hover:scale-110`}
              >
                {info.icon}
              </div>

              <h3
                className={`text-xl font-bold mb-3 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {info.title}
              </h3>

              <p
                className={`font-medium break-words text-center ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {info.content}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
