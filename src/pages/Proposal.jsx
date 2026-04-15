import React, { useState } from "react";
import { CheckCircle2, TrendingUp, Users, Zap } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { supabase } from "../context/supabaseClient";

const Proposal = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const { isDark } = useTheme();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.company.trim() ||
      !formData.message.trim()
    ) {
      alert("Please fill all required fields!");
      return;
    }

    setLoading(true);
    console.log("Form submitted:", formData);

    try {
      const { error } = await supabase.from("proposals").insert([
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      alert("Proposal submitted successfully!");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting:", error.message);
      alert("Error submitting proposal. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className={`pt-32 pb-20 min-h-screen ${isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-sm tracking-widest text-blue-600 font-semibold mb-4 block uppercase">
            Let's Talk Growth
          </span>
          <h1
            className={`text-5xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
          >
            Get Your Custom Proposal
          </h1>
          <p
            className={`text-xl leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            Tell us about your project and we'll create a tailored, AI-driven
            marketing strategy.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* LEFT */}
          <div className="w-full lg:w-5/12 space-y-8">
            <div
              className={`rounded-3xl p-10 shadow-2xl relative overflow-hidden ${isDark ? "bg-gray-800 text-white" : "bg-gradient-to-br from-[#0B1B3B] to-blue-900 text-white"}`}
            >
              <h2 className="text-3xl font-bold mb-6 relative z-10">
                Why Partner With Us?
              </h2>

              <ul className="space-y-6 relative z-10">
                <li className="flex gap-4">
                  <TrendingUp className="text-blue-400" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Data-Driven Strategies
                    </h3>
                    <p className="text-blue-200 text-sm">
                      AI-driven results, no guesswork.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <Users className="text-blue-400" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Expert Team</h3>
                    <p className="text-blue-200 text-sm">
                      Dedicated professionals.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <Zap className="text-blue-400" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Fast Execution
                    </h3>
                    <p className="text-blue-200 text-sm">
                      Quick and efficient results.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div
              className={`${isDark ? "bg-gray-800 text-white border-gray-700" : "bg-white text-gray-900 border-gray-100"} rounded-3xl p-8 border shadow-lg`}
            >
              <h3 className="text-xl font-bold mb-6">What happens next?</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span>Review within 24 hours.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span>Schedule a call.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span>Custom strategy proposal.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* FORM */}
          <div className="w-full lg:w-7/12">
            <div
              className={`${isDark ? "bg-gray-800 text-white border-gray-700" : "bg-white text-gray-900 border-gray-100"} rounded-3xl shadow-xl p-8 md:p-12 border`}
            >
              <form onSubmit={handleSubmit} className="space-y-6 ">
                <input
                  className={`w-full p-4 focus:outline-none focus:border-none rounded-xl border ${isDark ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-50 border-gray-200"}`}
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  className={`w-full p-4 focus:outline-none focus:border-none rounded-xl border ${isDark ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-50 border-gray-200"}`}
                  placeholder="Company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />

                <input
                  className={`w-full p-4 focus:outline-none focus:border-none rounded-xl border ${isDark ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-50 border-gray-200"}`}
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />

                <input
                  className={`w-full p-4 focus:outline-none focus:border-none rounded-xl border ${isDark ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-50 border-gray-200"}`}
                  placeholder="Phone No"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />

                <textarea
                  className={`w-full p-4 focus:outline-none focus:border-none rounded-xl border ${isDark ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-50 border-gray-200"}`}
                  placeholder="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>

                <button
                  disabled={loading}
                  className="w-full bg-blue-600 text-white p-4 rounded-xl font-bold"
                >
                  {loading ? "Sending..." : "Submit"}{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proposal;
