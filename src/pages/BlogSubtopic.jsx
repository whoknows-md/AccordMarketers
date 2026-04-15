import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import blogpg1 from "../assets/blogpg1.webp";
import blogpg2 from "../assets/blogpg2.webp";
import blogpg3 from "../assets/blogpg3.webp";

const BlogSubtopic = () => {
  const { subtopic } = useParams();
  const { isDark } = useTheme();

  // Helper to format subtopic nicely
  const formatSubtopic = (str) => {
    return str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const formattedTitle = formatSubtopic(subtopic || "topic");

  const getBackgroundImage = (topic) => {
    if (topic === "strategy") return blogpg1;
    if (topic === "seo") return blogpg2;
    if (topic === "social-media") return blogpg3;
    return blogpg1;
  };

  const backgroundImage = getBackgroundImage(subtopic);

  // Some mock SEO optimized content for different subtopics based on Blogs.jsx
  const getContent = (topic) => {
    if (topic === "strategy") {
      return (
        <>
          <h2
            className={`text-3xl font-bold mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            AI Marketing Strategy Mastery
          </h2>

          <p
            className={`text-lg mb-4 ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            In the current era of rapid technological advancements, having an AI marketing strategy is no longer a choice; rather, it is a necessity. Through AI, companies will be able to automate their operations, provide personalized services to customers, and perform in-depth analysis of massive amounts of data.
          </p>

          <p
            className={`text-lg mb-4 ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Through predictive analytics, businesses can predict the future actions of their customers, whereas through machine learning algorithms, businesses can optimize their budgets by distributing ad dollars across various channels.
          </p>

          <ul
            className={`text-lg mb-4 ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <li>1. Customer segmentation automation</li>
            <li>2. Behavior prediction modeling</li>
            <li>3. Dynamic pricing strategies</li>
          </ul>
        </>
      );
    } else if (topic === "seo") {
      return (
        <>
          <h2
            className={`text-3xl font-bold mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            The Future of SEO Optimization
          </h2>

          <p
            className={`text-lg mb-4 ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            SEO technology is evolving fast. The search engines are now utilizing AI algorithms to understand user intentions, meaning that keyword stuffing will not yield expected results. Semantic searching and NLP are the way forward.
          </p>

          <p
            className={`text-lg mb-4 ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            With our innovative approach towards optimizing websites using AI-powered SEO tools, we emphasize creating top-tier, authoritative, and coherent content while ensuring topic clustering and intent match. You can achieve a top listing position on search engines and receive lasting traffic.
          </p>

          <ul
            className={`text-lg mb-4 ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <li>1. Intent-based keyword research</li>
            <li>2. AI-assisted content gap analysis</li>
            <li>3. Automated technical SEO auditing</li>
          </ul>
        </>
      );
    } else if (topic === "social-media") {
      return (
        <>
          <h2
            className={`text-3xl font-bold mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Next-Generation Social Media Strategies
          </h2>

          <p
            className={`text-lg mb-4 ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            With the growing sophistication of algorithms used by social media sites, companies must have social media campaigns with a high level of intelligence to be able to react to current trends and audience behavior in real time.
          </p>

          <p
            className={`text-lg mb-4 ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Using AI technology, we calculate the best times for posting, create engaging content, and provide personalized interactions, leading to a better sense of community and conversion of followers into customers.
          </p>

          <ul
            className={`text-lg mb-4 ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <li>1. Algorithmic posting of content</li>
            <li>2. Analysis of sentiment about brands</li>
            <li>3. Automatic social listening</li>
          </ul>
        </>
      );
    }

    // Default fallback
    return (
      <>
        <h2
          className={`text-3xl font-bold mb-6 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Exploring {formattedTitle}
        </h2>

        <p
          className={`text-lg mb-4 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Dive deep into our comprehensive guides and insights on{" "}
          {formattedTitle}.
        </p>

        <p
          className={`text-lg mb-4 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Stay ahead of the curve by understanding the nuances of how artificial
          intelligence is reshaping the landscape of {formattedTitle}.
        </p>
      </>
    );
  };

  return (
    <section
      className={`pt-32 pb-20 min-h-screen ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/blogs"
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
          >
            ← Back to all blogs
          </Link>
        </div>

        {/* Header */}
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-full mb-4 inline-block uppercase tracking-wider">
            {formattedTitle}
          </span>

          <h1
            className={`text-5xl font-bold mt-4 mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Complete Guide to {formattedTitle}
          </h1>

          <p
            className={`text-xl ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Discover actionable insights and advanced AI strategies to
            revolutionize your approach to {formattedTitle}.
          </p>
        </div>
      </div>

      {/* Mid-page Background Portion */}
      <div
        className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[500px] md:h-[500px] mb-12 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-label={`${formattedTitle} visual background`}
      />

      <div className="max-w-4xl mx-auto px-6">
        {/* Article Content */}
        <article
          className={`p-8 md:p-12 rounded-3xl shadow-lg border ${
            isDark
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-100"
          }`}
        >
          <div
            className={`prose prose-lg max-w-none ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {getContent(subtopic)}

            <div
              className={`mt-12 p-8 rounded-2xl border ${
                isDark
                  ? "bg-gray-700 border-gray-600"
                  : "bg-blue-50 border-blue-100"
              }`}
            >
              <h3
                className={`text-2xl font-bold mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Ready to implement these strategies?
              </h3>

              <p className="mb-6">
                Our team of experts can help you build a custom plan tailored to
                your business needs.
              </p>

              <Link
                to="/get-proposal"
                className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300"
              >
                Get a Custom Proposal
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default BlogSubtopic;