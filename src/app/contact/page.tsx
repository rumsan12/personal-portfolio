"use client";

import React, { useState } from "react";
import "./style.css";
import ContactFormFields from "../../components/ContactFormFields";
import { formFields } from "../../utils/formConfig";
import { sendEmail } from "../../utils/emailSender";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError("Please fill all the fields.");
    } else if (!form.email.includes("@")) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      try {
        await sendEmail(form);
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } catch (error) {
        console.error("Email send failed:", error);
        alert("Failed to send message. Please try again.");
      }
    }
  };

  return (
    <div className="contact-card">
      <h1 className="contact-title">Contact</h1>
      <div className="title-underline"></div>

      <a href="mailto:asalpoudel9@gmail.com" className="email-link">
        asalpoudel9@gmail.com
      </a>
      <p className="subtext">
        Feel free to contact me with any inquiries or questions!
      </p>

      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

      <form className="contact-form" onSubmit={handleSubmit}>
        <ContactFormFields
          form={form}
          formFields={formFields}
          handleChange={handleChange}
        />
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
