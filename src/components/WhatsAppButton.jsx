import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const phoneNumber = "91XXXXXXXXXX";

  const handleSend = () => {
    if (!inputValue.trim()) return;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(inputValue)}`;
    window.open(whatsappLink, "_blank");
    setInputValue("");
  };

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="mb-4 w-72 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="bg-[#25D366] p-3 flex items-center gap-3 text-white">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold">
                A
              </div>
              <div>
                <p className="text-sm font-bold">Accord Marketers</p>
                <p className="text-[10px] opacity-90">
                  Typically replies in minutes
                </p>
              </div>
            </div>

            {/* Chat */}
            <div className="p-4 bg-[#f0f2f5] min-h-[80px]">
              <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm text-[13px] text-gray-700 max-w-[90%]">
                Hello! How can we help you today?
              </div>
            </div>

            {/* Input */}
            <div className="p-2 bg-white flex items-center gap-2 border-t">
              <input
                type="text"
                placeholder="Type a message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 p-2 bg-gray-100 rounded-full text-xs dark:text-black focus:outline-none"
              />
              <button onClick={handleSend} className="text-[#25D366] p-1">
                <IoSend size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)} // 🔥 KEY CHANGE
        whileTap={{ scale: 0.9 }}
        className="bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center relative"
      >
        <FaWhatsapp size={32} />

        {/* Notification */}
        <span className="absolute top-0 right-0 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
      </motion.button>
    </div>
  );
};

export default WhatsAppButton;
