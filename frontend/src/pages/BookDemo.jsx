import React, { useState } from "react";

const BookDemo = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for booking a demo! We’ll contact you soon.");
    setForm({ name: "", email: "", phone: "", company: "", message: "" });
  };

  return (
   <div className="min-h-screen bg-blue-50 flex justify-center items-center px-6">
  <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-full">
    <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
      Book a Demo
    </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {["name", "email", "phone", "company"].map((field) => (
            <div key={field}>
              <label className="block text-sm font-semibold text-gray-700 capitalize">
                {field}
              </label>
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={form[field]}
                onChange={handleChange}
                required
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="3"
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tell us about your requirements..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookDemo;
