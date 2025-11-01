import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogsData } from "../data/blogsData";

export default function BlogPage() {
  const { slug } = useParams();
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-700">Blog not found</h2>
        <Link to="/blogs" className="text-blue-600 hover:underline">
          Go back to blogs
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto py-20 px-6">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-80 object-cover rounded-2xl mb-10"
      />
      <h1 className="text-4xl font-bold mb-4 text-gray-900">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-8">{blog.date}</p>

      <div
        className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

      <Link
        to="/blogs"
        className="mt-12 inline-block text-blue-600 font-semibold hover:text-blue-800"
      >
        ← Back to Learning Corner
      </Link>
    </article>
  );
}
