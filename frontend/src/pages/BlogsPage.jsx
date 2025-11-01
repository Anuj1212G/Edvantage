import React from "react";
import { Link } from "react-router-dom";
import { blogsData } from "../data/blogsData";

export default function BlogsPage() {
  return (
     <section className="bg-white pt-8 pb-20 sm:pt-10 sm:pb-24">

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold text-gray-900">Learning Corner</h2>
          <p className="text-lg text-gray-600 mt-4">
            Explore insights, case studies, and trends shaping the future of oil, gas, and energy.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogsData.map((blog) => (
            <div
              key={blog.slug}
              className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-52 w-full object-cover"
              />
              <div className="p-6 flex flex-col justify-between h-[14rem]">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">{blog.date}</p>
                  <p className="text-gray-600 mt-3 text-sm line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>

                <Link
                  to={`/blog/${blog.slug}`}
                  className="mt-4 inline-flex text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  Read Article →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
