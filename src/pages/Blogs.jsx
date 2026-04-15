import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from "../context/ThemeContext" // ✅ ADDED
import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'
import blog3 from '../assets/blog3.webp'

const Blogs = () => {
  const { isDark } = useTheme() // ✅ ADDED

  const blogs = [
    {
      id: 1,
      title: "AI Marketing Strategy Guide",
      excerpt: "Learn how to leverage AI for your marketing campaigns and maximize ROI.",
      date: "March 2024",
      category: "Strategy",
      image: blog1
    },
    {
      id: 2,
      title: "SEO Optimization Tips",
      excerpt: "Discover the latest SEO techniques to improve your website rankings.",
      date: "February 2024",
      category: "SEO",
      image: blog2
    },
    {
      id: 3,
      title: "Social Media Trends",
      excerpt: "Stay ahead with the latest social media marketing trends and tactics.",
      date: "January 2024",
      category: "Social Media",
      image: blog3
    }
  ]

  return (
    <section className={`pt-20 py-20 min-h-screen ${isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className={`text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
            Latest Blog Posts
          </h1>
          <p className={`text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Insights and tips on digital marketing, AI, and business growth
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className={`${isDark ? "bg-gray-800 text-white border-gray-700" : "bg-white text-gray-900 border-gray-100"} rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border`}
            >
              <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover" />

              <div className="p-6">

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                  <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                    {blog.date}
                  </span>
                </div>

                <h3 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
                  {blog.title}
                </h3>

                <p className={`mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                  {blog.excerpt}
                </p>

                <Link
                  to={`/blogs/${blog.category.toLowerCase().replace(' ', '-')}`}
                  className="text-blue-600 font-semibold hover:text-blue-800 transition"
                >
                  Read More →
                </Link>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Blogs