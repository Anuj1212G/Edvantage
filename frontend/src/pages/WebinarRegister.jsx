import { useParams } from "react-router-dom";
import { useState } from "react";

const API_BASE = "https://edvantage-pryf.onrender.com"; // 🔥 change this

const WebinarRegister = () => {
  const { webinarId } = useParams();

  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(
        `${API_BASE}/api/webinars/register/${webinarId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      setStatus("success");

// save registration flag
localStorage.setItem(
  `webinar_registered_${webinarId}`,
  "true"
);

// redirect back after 1.2s
setTimeout(() => {
  window.location.href = "/webinars";
}, 1200);

      setMessage("You are successfully registered! 🎉");
    } catch (err) {
      setStatus("error");
      setMessage(err.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-2">
          Webinar Registration
        </h1>

        <p className="text-center text-slate-500 mb-6">
          Webinar ID: <span className="font-semibold">{webinarId}</span>
        </p>

        {status === "success" ? (
          <div className="text-green-600 text-center font-semibold">
            {message}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-3"
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-3"
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
            >
              {status === "loading" ? "Registering..." : "Register"}
            </button>

            {status === "error" && (
              <p className="text-red-500 text-sm text-center">{message}</p>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default WebinarRegister;
