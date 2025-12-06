import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",   // or smtp.office365.com / smtp.zoho.com etc.
  port: 587,
  secure: false, // TLS

  auth: {
    user: process.env.EMAIL_USER, // your email
    pass: process.env.EMAIL_PASS, // app password
  },
});
