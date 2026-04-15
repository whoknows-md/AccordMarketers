// import React, { useEffect } from "react";
// import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
// import { Helmet } from "react-helmet-async";
// import { useTheme } from "../context/ThemeContext";
// import {
//   BarChart3,
//   Search,
//   Code2,
//   Cpu,
//   PenTool,
//   Video,
//   Megaphone,
//   Globe,
//   ArrowLeft,
//   CheckCircle,
// } from "lucide-react";

// // Convert title to slug
// const titleToSlug = (title) => {
//   return title
//     .toLowerCase()
//     .replace(/[&()]/g, "")
//     .replace(/\s+/g, "-")
//     .replace(/-+/g, "-");
// };

// const servicesDetails = [
//   {
//     slug: "ai-powered-seo",
//     icon: <BarChart3 size={40} className="text-blue-600" />,
//     title: "AI-Powered SEO",
//     image:
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&h=600&auto=format&fit=crop",
//     desc: "Data-driven keyword strategy and automated optimization to improve rankings, increase visibility, and attract high-intent traffic.",
//     longDesc:
//       "Our AI-Powered SEO goes beyond traditional search engine optimization. We utilize advanced machine learning models to analyze search intent, discover high-value keywords with lower competition, and optimize your site architecture automatically.",
//     metaDescription:
//       "Boost your online visibility with AI-powered SEO strategies.",
//     features: [
//       "Advanced keyword research & competitor analysis",
//       "AI-driven on-page & technical SEO optimization",
//       "Automated site architecture improvements",
//       "Real-time ranking tracking & reporting",
//     ],
//     color: "blue",
//   },
//   {
//     slug: "performance-marketing",
//     icon: <Search size={40} className="text-emerald-500" />,
//     title: "Performance Marketing",
//     image:
//       "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=1200&auto=format&fit=crop",
//     desc: "AI-optimized Google and social ad campaigns designed to maximize conversions and deliver measurable ROI.",
//     longDesc:
//       "Maximize every dollar of your ad spend with our Performance Marketing strategies. We build, manage, and scale complex campaigns across Google, Facebook, LinkedIn, and more.",
//     metaDescription: "Maximize ROI with AI-optimized performance marketing.",
//     features: [
//       "Google Ads & Shopping campaign management",
//       "Social media advertising (Facebook, LinkedIn, Instagram)",
//       "Continuous A/B testing & creative optimization",
//       "Real-time budget allocation & performance tracking",
//     ],
//     color: "emerald",
//   },
//   {
//     slug: "social-media-automation",
//     icon: <Video size={40} className="text-pink-500" />,
//     title: "Social Media Automation",
//     image:
//       "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&h=600&auto=format&fit=crop",
//     desc: "Smart content scheduling, targeted audience engagement, and performance tracking across all major platforms.",
//     longDesc:
//       "Consistency is key in social media, but managing it manually is time-consuming. We use smart automation tools to schedule content at optimal times and analyze engagement metrics.",
//     metaDescription:
//       "Automate your social media strategy with intelligent scheduling.",
//     features: [
//       "Optimal posting time scheduling",
//       "Multi-platform content distribution",
//       "Engagement metrics & analytics",
//       "Community management automation",
//     ],
//     color: "pink",
//   },
//   {
//     slug: "marketing-analytics-insights",
//     icon: <Cpu size={40} className="text-indigo-500" />,
//     title: "Marketing Analytics & Insights",
//     image:
//       "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1200&auto=format&fit=crop",
//     desc: "Real-time dashboards and advanced analytics that turn data into strategic, results-focused decisions.",
//     longDesc:
//       "Data without interpretation is useless. We build custom, real-time dashboards that consolidate data from all your marketing channels into one cohesive view.",
//     metaDescription:
//       "Transform marketing data into actionable insights with custom dashboards.",
//     features: [
//       "Custom real-time dashboards",
//       "Multi-channel data consolidation",
//       "Attribution modeling & analysis",
//       "Predictive analytics & forecasting",
//     ],
//     color: "indigo",
//   },
//   {
//     slug: "ai-powered-content-marketing",
//     icon: <PenTool size={40} className="text-amber-500" />,
//     title: "AI-Powered Content Marketing",
//     image:
//       "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&h=600&auto=format&fit=crop",
//     desc: "SEO-driven content creation backed by audience intelligence to build authority and drive consistent conversions.",
//     longDesc:
//       "Engage your audience with content they actually want to read. Our AI tools help outline, draft, and optimize articles that build brand authority.",
//     metaDescription: "Create SEO-optimized content that drives conversions.",
//     features: [
//       "AI-assisted content creation & optimization",
//       "Audience intelligence & persona analysis",
//       "SEO-optimized article planning",
//       "Editorial calendar management",
//     ],
//     color: "amber",
//   },
//   {
//     slug: "website-development",
//     icon: <Globe size={40} className="text-teal-500" />,
//     title: "Website Development",
//     image:
//       "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&h=600&auto=format&fit=crop",
//     desc: "Custom, high-performance websites and web apps built with modern technologies.",
//     longDesc:
//       "Your website is your most powerful sales tool. We design and develop custom, high-performance websites and web applications tailored to your brand.",
//     metaDescription:
//       "Get a custom, high-performance website built for speed, SEO, and conversions.",
//     features: [
//       "Custom UI/UX design tailored to your brand",
//       "Responsive, mobile-first development",
//       "Performance optimization — Core Web Vitals",
//       "SEO-ready architecture",
//     ],
//     color: "teal",
//   },
//   {
//     slug: "conversion-rate-optimization",
//     icon: <Code2 size={40} className="text-cyan-500" />,
//     title: "Conversion Rate Optimization (CRO)",
//     image:
//       "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&h=600&auto=format&fit=crop",
//     desc: "Continuous testing and funnel optimization to transform traffic into leads and sales.",
//     longDesc:
//       "Getting traffic is only half the battle. We analyze user flow, identify drop-off points, and run rigorous multivariate testing on your landing pages.",
//     metaDescription:
//       "Increase conversions with data-driven CRO. A/B testing and funnel optimization.",
//     features: [
//       "Advanced A/B & multivariate testing",
//       "Funnel analysis & drop-off detection",
//       "User behavior heatmapping",
//       "Landing page optimization",
//     ],
//     color: "cyan",
//   },
//   {
//     slug: "marketing-strategy-brand-positioning",
//     icon: <Megaphone size={40} className="text-purple-600" />,
//     title: "Marketing Strategy & Brand Positioning",
//     image:
//       "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&h=600&auto=format&fit=crop",
//     desc: "Develop data-backed marketing roadmaps and brand positioning frameworks.",
//     longDesc:
//       "Your brand is your most valuable asset. We work with you to develop a robust brand positioning framework and a long-term marketing roadmap.",
//     metaDescription:
//       "Build a powerful brand strategy with positioning frameworks.",
//     features: [
//       "Brand positioning & messaging framework",
//       "Competitive landscape analysis",
//       "Target persona development",
//       "Long-term marketing roadmap creation",
//     ],
//     color: "purple",
//   },
// ];

// const ServiceDetails = () => {
//   const { slug } = useParams();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const { isDark } = useTheme(); // ✅ ADDED

//   // Find the service by slug
//   const service = servicesDetails.find((s) => s.slug === slug);

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [slug]);

//   // Handle back to services section
//   const handleBackToServices = () => {
//     if (location.pathname === "/") {
//       const element = document.getElementById("services");
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     } else {
//       navigate("/");
//       setTimeout(() => {
//         const element = document.getElementById("services");
//         if (element) {
//           element.scrollIntoView({ behavior: "smooth" });
//         }
//       }, 100);
//     }
//   };

//   // If service not found, show 404
//   if (!service) {
//     return (
//       <section
//         className={`pt-32 pb-20 min-h-screen ${isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
//       >
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
//           <p className="text-xl mb-8">
//             The service you're looking for doesn't exist.
//           </p>
//           <Link
//             to="/"
//             className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
//           >
//             <ArrowLeft size={20} />
//             Back to Home
//           </Link>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <>
//       <Helmet>
//         <title>
//           {service.title} | Accord Marketers - Digital Marketing Services
//         </title>
//         <meta name="description" content={service.metaDescription} />
//         <meta
//           name="keywords"
//           content={`${service.title}, digital marketing, AI marketing, ${service.title.toLowerCase()}`}
//         />
//         <meta
//           property="og:title"
//           content={`${service.title} | Accord Marketers`}
//         />
//         <meta property="og:description" content={service.metaDescription} />
//         <meta property="og:type" content="website" />
//         <meta
//           property="og:url"
//           content={`https://accordmarketers.com/services/${slug}`}
//         />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta
//           name="twitter:title"
//           content={`${service.title} | Accord Marketers`}
//         />
//         <meta name="twitter:description" content={service.metaDescription} />
//         <link
//           rel="canonical"
//           href={`https://accordmarketers.com/services/${slug}`}
//         />
//       </Helmet>

//       <section
//         className={`pt-32 pb-20 min-h-screen ${isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
//       >
//         <div className="max-w-7xl mx-auto px-6">
//           {/* Back Button */}
//           <button
//             onClick={handleBackToServices}
//             className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors mb-8"
//           >
//             <ArrowLeft size={20} />
//             Back to Services
//           </button>

//           {/* Hero Section */}
//           <div className="mb-20">
//             <div className="flex items-center gap-4 mb-6">
//               <div className="inline-flex items-center justify-center p-4 bg-gray-50 rounded-2xl">
//                 {service.icon}
//               </div>
//               <span className="text-sm tracking-widest text-blue-600 font-semibold uppercase">
//                 Professional Service
//               </span>
//             </div>

//             <h1
//               className={`text-5xl md:text-6xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
//             >
//               {service.title}
//             </h1>

//             <p
//               className={`text-2xl leading-relaxed mb-8 border-l-4 border-blue-600 pl-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}
//             >
//               {service.desc}
//             </p>
//           </div>

//           {/* Image Section */}
//           <div className="mb-20">
//             <div className="rounded-3xl overflow-hidden shadow-2xl relative">
//               <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent z-10"></div>
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
//               />
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
//             {/* Left Column - Detailed Description */}
//             <div className="md:col-span-2 space-y-6">
//               <h2 className="text-3xl font-bold text-gray-900">
//                 Comprehensive {service.title} Solution
//               </h2>

//               <p
//                 className={`text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
//               >
//                 {service.longDesc}
//               </p>

//               <div
//                 className={`${isDark ? "bg-gray-800" : "bg-gradient-to-br from-blue-50 to-purple-50"} p-8 rounded-2xl`}
//               >
//                 <h3 className="text-xl font-bold text-gray-900 mb-6">
//                   Key Features & Benefits
//                 </h3>
//                 <ul className="space-y-4">
//                   {service.features.map((feature, index) => (
//                     <li key={index} className="flex items-start gap-4">
//                       <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
//                       <span className="text-gray-700 text-lg">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             {/* Right Column - CTA and Info */}
//             <div className="space-y-6">
//               <div
//                 className={`${isDark ? "bg-gray-800 text-white" : "bg-gradient-to-br from-[#0B1B3B] to-blue-900 text-white"} rounded-3xl p-8`}
//               >
//                 <h3 className="text-2xl font-bold mb-4">
//                   Ready to get started?
//                 </h3>
//                 <p className="text-blue-100 mb-8">
//                   Let's discuss how {service.title.toLowerCase()} can transform
//                   your business.
//                 </p>
//                 <Link
//                   to="/get-proposal"
//                   className="inline-block w-full bg-white text-blue-900 font-bold py-3 px-6 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
//                 >
//                   Get Free Proposal
//                 </Link>

//                 <div className="mt-8 pt-8 border-t border-blue-700 space-y-4">
//                   <div>
//                     <p className="text-xs text-blue-200 uppercase tracking-wider">
//                       Response Time
//                     </p>
//                     <p className="text-lg font-semibold">24 Hours</p>
//                   </div>
//                   <div>
//                     <p className="text-xs text-blue-200 uppercase tracking-wider">
//                       Commitment
//                     </p>
//                     <p className="text-lg font-semibold">Results-Focused</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Related Sales Point */}
//               <div className="bg-gray-50 p-6 rounded-2xl">
//                 <h4 className="font-bold text-gray-900 mb-3">Expert Team</h4>
//                 <p className="text-gray-600 text-sm">
//                   Our specialists have years of experience delivering measurable
//                   results with {service.title.toLowerCase()}.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Bottom CTA */}
//           <div className="bg-gradient-to-br from-[#0B1B3B] to-blue-900 rounded-3xl p-12 text-center text-white shadow-2xl mb-20">
//             <h2 className="text-4xl font-bold mb-6">Need more information?</h2>
//             <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
//               Contact our team to discuss how {service.title} can be customized
//               for your specific business needs.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link
//                 to="/get-proposal"
//                 className="inline-block bg-white text-blue-900 font-bold py-4 px-10 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
//               >
//                 Get Your Proposal
//               </Link>
//               <Link
//                 to="/contact"
//                 className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-800 hover:scale-105 transition-all duration-300 border border-white/20"
//               >
//                 Contact Us
//               </Link>
//             </div>
//           </div>

//           {/* Other Services */}
//           <div>
//             <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
//               Explore Our Other Services
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {servicesDetails
//                 .filter((s) => s.slug !== slug)
//                 .slice(0, 3)
//                 .map((otherService) => (
//                   <Link
//                     key={otherService.slug}
//                     to={`/services/${otherService.slug}`}
//                     className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-blue-500"
//                   >
//                     <div className="mb-4 group-hover:scale-110 transition duration-300">
//                       {otherService.icon}
//                     </div>
//                     <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">
//                       {otherService.title}
//                     </h4>
//                     <p className="text-gray-600 text-sm line-clamp-2">
//                       {otherService.desc}
//                     </p>
//                     <div className="mt-4 text-blue-600 font-semibold group-hover:translate-x-2 transition">
//                       Learn More →
//                     </div>
//                   </Link>
//                 ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ServiceDetails;

import React, { useEffect } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence
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
  ArrowLeft,
  CheckCircle,
} from "lucide-react";

const servicesDetails = [
  {
    slug: "ai-powered-seo",
    icon: <BarChart3 size={40} className="text-blue-600" />,
    title: "AI-Powered SEO",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&h=600&auto=format&fit=crop",
    desc: "Data-driven keyword strategy and automated optimization to improve rankings, increase visibility, and attract high-intent traffic.",
    longDesc:
      "In contrast to conventional SEO services, our AI-Powered SEO service offers a holistic approach that involves using sophisticated machine learning algorithms to understand search intent, identify lucrative yet less competitive keywords, and automate website architecture optimization.",
    metaDescription:
      "Boost your online visibility with AI-powered SEO strategies.",
    features: [
      "Advanced keyword research & competitor analysis",
      "AI-driven on-page & technical SEO optimization",
      "Automated site architecture improvements",
      "Real-time ranking tracking & reporting",
    ],
    color: "blue",
  },
  {
    slug: "performance-marketing",
    icon: <Search size={40} className="text-emerald-500" />,
    title: "Performance Marketing",
    image:
      "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=1200&auto=format&fit=crop",
    desc: "AI-optimized Google and social ad campaigns designed to maximize conversions and deliver measurable ROI.",
    longDesc:
      "Maximize every dollar of your ad spend with our Performance Marketing strategies. We build, manage, and scale complex campaigns across Google, Facebook, LinkedIn, and more.",
    metaDescription: "Maximize ROI with AI-optimized performance marketing.",
    features: [
      "Google Ads & Shopping campaign management",
      "Social media advertising (Facebook, LinkedIn, Instagram)",
      "Continuous A/B testing & creative optimization",
      "Real-time budget allocation & performance tracking",
    ],
    color: "emerald",
  },
  {
    slug: "social-media-automation",
    icon: <Video size={40} className="text-pink-500" />,
    title: "Social Media Automation",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&h=600&auto=format&fit=crop",
    desc: "Smart content scheduling, targeted audience engagement, and performance tracking across all major platforms.",
    longDesc:
      "Consistency is key in social media, but managing it manually is time-consuming. We use smart automation tools to schedule content at optimal times and analyze engagement metrics.",
    metaDescription:
      "Automate your social media strategy with intelligent scheduling.",
    features: [
      "Optimal posting time scheduling",
      "Multi-platform content distribution",
      "Engagement metrics & analytics",
      "Community management automation",
    ],
    color: "pink",
  },
  {
    slug: "marketing-analytics-insights",
    icon: <Cpu size={40} className="text-indigo-500" />,
    title: "Marketing Analytics & Insights",
    image:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1200&auto=format&fit=crop",
    desc: "Real-time dashboards and advanced analytics that turn data into strategic, results-focused decisions.",
    longDesc:
      "Data without interpretation is useless. We build custom, real-time dashboards that consolidate data from all your marketing channels into one cohesive view.",
    metaDescription:
      "Transform marketing data into actionable insights with custom dashboards.",
    features: [
      "Custom real-time dashboards",
      "Multi-channel data consolidation",
      "Attribution modeling & analysis",
      "Predictive analytics & forecasting",
    ],
    color: "indigo",
  },
  {
    slug: "ai-powered-content-marketing",
    icon: <PenTool size={40} className="text-amber-500" />,
    title: "AI-Powered Content Marketing",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&h=600&auto=format&fit=crop",
    desc: "SEO-driven content creation backed by audience intelligence to build authority and drive consistent conversions.",
    longDesc:
      "Engage your audience with content they actually want to read. Our AI tools help outline, draft, and optimize articles that build brand authority.",
    metaDescription: "Create SEO-optimized content that drives conversions.",
    features: [
      "AI-assisted content creation & optimization",
      "Audience intelligence & persona analysis",
      "SEO-optimized article planning",
      "Editorial calendar management",
    ],
    color: "amber",
  },
  {
    slug: "website-development",
    icon: <Globe size={40} className="text-teal-500" />,
    title: "Website Development",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&h=600&auto=format&fit=crop",
    desc: "Custom, high-performance websites and web apps built with modern technologies.",
    longDesc:
      "Your website is your most powerful sales tool. We design and develop custom, high-performance websites and web applications tailored to your brand.",
    metaDescription:
      "Get a custom, high-performance website built for speed, SEO, and conversions.",
    features: [
      "Custom UI/UX design tailored to your brand",
      "Responsive, mobile-first development",
      "Performance optimization — Core Web Vitals",
      "SEO-ready architecture",
    ],
    color: "teal",
  },
  {
    slug: "conversion-rate-optimization",
    icon: <Code2 size={40} className="text-cyan-500" />,
    title: "Conversion Rate Optimization (CRO)",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&h=600&auto=format&fit=crop",
    desc: "Continuous testing and funnel optimization to transform traffic into leads and sales.",
    longDesc:
      "Getting traffic is only half the battle. We analyze user flow, identify drop-off points, and run rigorous multivariate testing on your landing pages.",
    metaDescription:
      "Increase conversions with data-driven CRO. A/B testing and funnel optimization.",
    features: [
      "Advanced A/B & multivariate testing",
      "Funnel analysis & drop-off detection",
      "User behavior heatmapping",
      "Landing page optimization",
    ],
    color: "cyan",
  },
  {
    slug: "marketing-strategy-brand-positioning",
    icon: <Megaphone size={40} className="text-purple-600" />,
    title: "Marketing Strategy & Brand Positioning",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&h=600&auto=format&fit=crop",
    desc: "Develop data-backed marketing roadmaps and brand positioning frameworks.",
    longDesc:
      "Your brand is your most valuable asset. We work with you to develop a robust brand positioning framework and a long-term marketing roadmap.",
    metaDescription:
      "Build a powerful brand strategy with positioning frameworks.",
    features: [
      "Brand positioning & messaging framework",
      "Competitive landscape analysis",
      "Target persona development",
      "Long-term marketing roadmap creation",
    ],
    color: "purple",
  },
];

const ServiceDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { isDark } = useTheme();

  const service = servicesDetails.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  const handleBackToServices = () => {
    if (location.pathname === "/") {
      const element = document.getElementById("services");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById("services");
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  // Animation variants for reusability
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  if (!service) {
    return (
      <section
        className={`pt-32 pb-20 min-h-screen ${isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full"
          >
            <ArrowLeft size={20} /> Back to Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={slug} // Key ensures animation re-runs when service changes
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0 }}
      >
        <Helmet>
          <title>{service.title} | Accord Marketers</title>
          <meta name="description" content={service.metaDescription} />
        </Helmet>

        <section
          className={`pt-32 pb-20 min-h-screen ${isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            {/* Back Button */}
            <motion.button
              variants={fadeInUp}
              onClick={handleBackToServices}
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors mb-8"
            >
              <ArrowLeft size={20} /> Back to Services
            </motion.button>

            {/* Hero Section */}
            <motion.div variants={fadeInUp} className="mb-20">
              <div className="flex items-center gap-4 mb-6">
                <div className="inline-flex items-center justify-center p-4 bg-blue-50 dark:bg-gray-800 rounded-2xl">
                  {service.icon}
                </div>
                <span className="text-sm tracking-widest text-blue-600 font-semibold uppercase">
                  Professional Service
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                {service.title}
              </h1>
              <p className="text-2xl leading-relaxed mb-8 border-l-4 border-blue-600 pl-6 opacity-80">
                {service.desc}
              </p>
            </motion.div>

            {/* Image Section - Zoom transition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-20 rounded-3xl overflow-hidden shadow-2xl relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent z-10"></div>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[500px] object-cover transition-transform duration-1000 hover:scale-105"
              />
            </motion.div>

            {/* Content Grid */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20"
            >
              <motion.div
                variants={fadeInUp}
                className="md:col-span-2 space-y-6"
              >
                <h2 className="text-3xl font-bold">
                   {service.title} - Comprehensive Solution
                </h2>
                <p className="text-lg leading-relaxed opacity-80">
                  {service.longDesc}
                </p>

                <div
                  className={`${isDark ? "bg-gray-800" : "bg-gradient-to-br from-blue-50 to-purple-50"} p-8 rounded-2xl`}
                >
                  <h3 className="text-xl font-bold mb-6">
                    Key Features & Benefits
                  </h3>
                  <ul className="space-y-4">
                    {service.features.map((feature, index) => (
                      <motion.li
                        variants={fadeInUp}
                        key={index}
                        className="flex items-start gap-4"
                      >
                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-lg">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Sidebar CTA */}
              <motion.div variants={fadeInUp} className="space-y-6">
                <div
                  className={`${isDark ? "bg-gray-800" : "bg-[#0B1B3B] text-white"} rounded-3xl p-8 shadow-xl`}
                >
                  <h3 className="text-2xl font-bold mb-4">
                    Ready to get started?
                  </h3>
                  <p className="opacity-80 mb-8">
                    Let's discuss how {service.title} can transform your
                    business.
                  </p>
                  <Link
                    to="/get-proposal"
                    className="block w-full bg-blue-600 text-white text-center font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition-all"
                  >
                    Get Free Proposal
                  </Link>
                  <div className="mt-8 pt-8 border-t border-blue-700 space-y-4">
                    <div>
                      <p className="text-xs text-blue-200 uppercase tracking-wider">
                        Response Time
                      </p>
                      <p className="text-lg font-semibold">24 Hours</p>
                    </div>

                    <div>
                      <p className="text-xs text-blue-200 uppercase tracking-wider">
                        Commitment
                      </p>
                      <p className="text-lg font-semibold">Results-Focused</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Other Services - Horizontal Stagger */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-3xl font-bold mb-8 text-center">
                Explore Our Other Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {servicesDetails
                  .filter((s) => s.slug !== slug)
                  .slice(0, 3)
                  .map((other) => (
                    <motion.div key={other.slug} whileHover={{ y: -10 }}>
                      <Link
                        to={`/services/${other.slug}`}
                        className={`block p-8 rounded-2xl border ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} hover:border-blue-500 transition-all shadow-sm hover:shadow-xl`}
                      >
                        <div className="mb-4">{other.icon}</div>
                        <h4 className="text-xl font-bold mb-3">
                          {other.title}
                        </h4>
                        <div className="text-blue-600 font-semibold">
                          Learn More →
                        </div>
                      </Link>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </AnimatePresence>
  );
};

export default ServiceDetails;
