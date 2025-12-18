import React, { useState, useId } from 'react';

export default function RequestInfo() {
  const id = useId();
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [info, setInfo] = useState(null);
  const [sending, setSending] = useState(false);

  const validators = {
    name: (v) => (v.trim() ? '' : 'Please enter your name.'),
    email: (v) => {
      if (!v.trim()) return 'Please enter your email.';
      return /^\S+@\S+\.\S+$/.test(v) ? '' : 'Enter a valid email.';
    },
    phone: (v) => {
      if (!v.trim()) return 'Please enter your phone number.';
      return /^[0-9+\-\s()]{6,20}$/.test(v) ? '' : 'Enter a valid phone number.';
    },
    message: (v) => {
      if (!v.trim()) return 'Please write a short message.';
      return v.trim().length >= 10 ? '' : 'Message must be at least 10 characters.';
    },
  };

  const validate = () => {
    const e = {};
    Object.entries(form).forEach(([key, value]) => {
      const msg = validators[key](value);
      if (msg) e[key] = msg;
    });
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setInfo(null);
  };

  const handleSubmit = async (ev) => {
  ev.preventDefault();
  setInfo(null);

  if (!validate()) return;

  setSending(true);
  setInfo('Sending...');

  try {
    const res = await fetch('http://localhost:5000/api/request-info/submit', {
      // ⬆⬆⬆ CHANGE URL HERE FOR LOCAL TESTING
      // for production:
      // 'https://your-railway-url.up.railway.app/api/request-info/submit'

      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok && data.success) {
      setInfo('Your request has been sent successfully!');
      setForm({ name: '', phone: '', email: '', message: '' });
      setErrors({});
    } else {
      setInfo(data.message || 'Failed to send. Please try again.');
    }
  } catch (err) {
    setInfo('Network error! Please try again later.');
  }

  setSending(false);
};


  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden md:grid md:grid-cols-2">
        
        {/* LEFT PANEL */}
        <aside className="p-8 bg-gradient-to-b from-sky-700 via-teal-600 to-emerald-500 text-white">
          <h2 className="text-3xl font-bold mb-3">Request Information</h2>
          <p className="opacity-90 mb-6">Fill out the form and we’ll get back to you soon.</p>

          <p className="font-semibold">📧 Email</p>
          <p className="opacity-90 mb-4">info@edvantage.org.in</p>

          <p className="font-semibold">📞 Phone</p>
          <p className="opacity-90 mb-4">+91 6200261265</p>

          <p className="text-xs opacity-80 mt-6">
            We reply within 24 hours. Your data is safe with us.
          </p>
        </aside>

        {/* RIGHT PANEL */}
        <div className="p-8">
          <form onSubmit={handleSubmit} noValidate className="space-y-5">

            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Full Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 w-full border rounded-lg px-3 py-2"
                />
                {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label className="text-sm font-medium">Phone</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="mt-1 w-full border rounded-lg px-3 py-2"
                />
                {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="mt-1 w-full border rounded-lg px-3 py-2"
              />
              {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
            </div>

            {/* Message */}
            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                className="mt-1 w-full border rounded-lg px-3 py-2"
              ></textarea>
              {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
            </div>

            {/* Info message */}
            {info && <div className="p-3 bg-gray-100 rounded border">{info}</div>}

            {/* Submit */}
            <button
              type="submit"
              disabled={sending}
              className="w-full py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
            >
              {sending ? 'Sending...' : 'Send Request'}
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}
