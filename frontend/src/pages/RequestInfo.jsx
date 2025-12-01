// RequestInfo.jsx
// Tailwind CSS based React component (clean, accessible, responsive)
// Includes improved UI, animations, better validation UX and aria attributes.

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
    Object.entries(form).forEach(([k, v]) => {
      const msg = validators[k](v);
      if (msg) e[k] = msg;
    });
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: undefined }));
    setInfo(null);
  };

  const resetForm = () => {
    setForm({ name: '', phone: '', email: '', message: '' });
    setErrors({});
    setInfo(null);
    setSending(false);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setInfo(null);

    if (!validate()) return;

    setSending(true);
    setInfo('Sending...');

    try {
      const res = await fetch('/api/request-info', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data?.ok) {
        setInfo('Your request has been sent successfully!');
        setForm({ name: '', phone: '', email: '', message: '' });
        setErrors({});
      } else {
        setInfo(data?.message || 'Failed to send. Please try again.');
      }
    } catch (err) {
      setInfo('Network error! Please try again later.');
    }

    setSending(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-start justify-center py-12 px-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="md:grid md:grid-cols-2">

          {/* Left info panel */}
          <aside className="p-8 bg-gradient-to-b from-sky-700 via-teal-600 to-emerald-500 text-white">
            <div className="max-w-md">
              <h2 className="text-3xl font-extrabold tracking-tight mb-2">Request Information</h2>
              <p className="opacity-90 mb-6">Fill out this form and our team will contact you shortly.</p>

              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="font-semibold flex items-center gap-2">📧 Email</dt>
                  <dd className="opacity-90">hello@edvantagelearning.com</dd>
                </div>

                <div>
                  <dt className="font-semibold flex items-center gap-2">📞 Phone</dt>
                  <dd className="opacity-90">+91 XXXXXXXXXX</dd>
                </div>

                <div className="mt-4 text-xs opacity-80">
                  You will receive a reply within <strong>24 hours</strong>. We respect your privacy — your details won't be shared.
                </div>
              </dl>

              <div className="mt-6">
                <p className="text-xs opacity-90">Tip: include your preferred contact times in the message so we can reach you conveniently.</p>
              </div>
            </div>
          </aside>

          {/* Right form panel */}
          <div className="p-8">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor={`name-${id}`} className="text-sm font-medium block">Full name</label>
                  <input
                    id={`name-${id}`}
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    autoComplete="name"
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? `name-err-${id}` : undefined}
                    className={`mt-1 block w-full rounded-lg border px-3 py-2 text-sm shadow-sm transition focus:outline-none focus:ring-2 focus:ring-teal-400 ${errors.name ? 'border-red-400' : 'border-gray-200'}`}
                    placeholder="Your full name"
                    required
                  />
                  {errors.name && <p id={`name-err-${id}`} className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor={`phone-${id}`} className="text-sm font-medium block">Phone number</label>
                  <input
                    id={`phone-${id}`}
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    aria-invalid={errors.phone ? 'true' : 'false'}
                    aria-describedby={errors.phone ? `phone-err-${id}` : undefined}
                    className={`mt-1 block w-full rounded-lg border px-3 py-2 text-sm shadow-sm transition focus:outline-none focus:ring-2 focus:ring-teal-400 ${errors.phone ? 'border-red-400' : 'border-gray-200'}`}
                    placeholder="+91 98765 43210"
                    required
                  />
                  {errors.phone && <p id={`phone-err-${id}`} className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor={`email-${id}`} className="text-sm font-medium block">Email</label>
                <input
                  id={`email-${id}`}
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  autoComplete="email"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? `email-err-${id}` : undefined}
                  className={`mt-1 block w-full rounded-lg border px-3 py-2 text-sm shadow-sm transition focus:outline-none focus:ring-2 focus:ring-teal-400 ${errors.email ? 'border-red-400' : 'border-gray-200'}`}
                  placeholder="you@example.com"
                  required
                />
                {errors.email && <p id={`email-err-${id}`} className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor={`message-${id}`} className="text-sm font-medium block">Your message</label>
                <textarea
                  id={`message-${id}`}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? `msg-err-${id}` : undefined}
                  className={`mt-1 block w-full rounded-lg border px-3 py-2 text-sm shadow-sm transition focus:outline-none focus:ring-2 focus:ring-teal-400 ${errors.message ? 'border-red-400' : 'border-gray-200'}`}
                  placeholder="Tell us how we can help you..."
                  required
                />
                {errors.message && <p id={`msg-err-${id}`} className="text-xs text-red-500 mt-1">{errors.message}</p>}
              </div>

              {/* Status message */}
              {info && (
                <div className="rounded-md bg-gray-50 p-3 text-sm text-gray-700 border">
                  {info}
                </div>
              )}

              {/* Buttons */}
              <div className="flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-100 transition"
                >
                  Reset
                </button>

                <button
                  type="submit"
                  disabled={sending}
                  className={`ml-auto inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm text-white font-medium transition ${sending ? 'bg-teal-300 cursor-not-allowed' : 'bg-teal-600 hover:bg-teal-700 shadow'}`}
                >
                  {sending ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
                      Sending...
                    </>
                  ) : (
                    'Send request'
                  )}
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}


/* ---------------------------
   Example Next.js API Route using nodemailer
   Save as: /pages/api/request-info.js (Next.js) or /api/request-info (your backend)
   Make sure you add environment variables:
   - SMTP_HOST
   - SMTP_PORT
   - SMTP_USER
   - SMTP_PASS
   - RECEIVER_EMAIL (where form messages should land)

   This example uses nodemailer and returns JSON { ok: true } on success.
   --------------------------- */

/*
// pages/api/request-info.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, message: 'Method not allowed' });

  const { name, email, phone, message } = req.body || {};
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ ok: false, message: 'Missing required fields' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `Website Contact <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New request from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone}</p><hr/><p>${message.replace(/\n/g, '<br/>')}</p>`,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('mail error', err);
    return res.status(500).json({ ok: false, message: 'Failed to send email' });
  }
}
*/

/* ---------------------------
   Notes & Tailwind tips
   - This component is fully Tailwind-first. If you don't use Tailwind, let me know and I will provide a plain CSS version.
   - For better UX you can throttle validation or validate on blur only. I kept instant clearing of field errors on change.
   - Add environment variables for nodemailer before deploying (Vercel/Netlify/Heroku support secure env vars).
   - You can style the left panel background with an image: use `bg-[url('/img/bg.jpg')]` plus an overlay.

   Want additional variations?
   - Dark-mode friendly variant
   - A version that integrates hCaptcha/reCAPTCHA before sending
   - A plain CSS (no Tailwind) responsive version

   Tell me which one and I'll update it.
*/
