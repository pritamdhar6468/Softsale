// src/components/ContactForm.jsx
import React, { useState } from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"; // Importing Icons

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "Software License",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Frontend form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        company: "",
        licenseType: "Software License",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <section className="py-16 px-4 md:px-16 sm:px-10 lg:px-32 bg-gray-50">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center ">
        {/* Left Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Get In Touch</h2>
          <p className="text-gray-700 mb-6">
            Have questions or need assistance? Reach out to us using the form. Our team is here to help you.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 w-full bg-white p-6 rounded-3xl shadow-2xl "
        >
          <div className="mb-4">
            <label className="block font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Pritam Dhar"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-1.5 border-b-1 shadow focus:outline-none "
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="example12@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-1.5 border-b-1 shadow focus:outline-none  "
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>

           <div className="mb-4">
            <label className="block font-semibold mb-2">Company</label>
            <input
              type="text"
              name="company"
              placeholder="Microsoft"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-1.5 border-b-1 shadow focus:outline-none "
            />
            {errors.company && <p className="text-red-600 text-sm mt-1">{errors.company}</p>}
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2">License Type</label>
            <select
              name="licenseType"
              value={formData.licenseType}
              onChange={handleChange}
              className="w-full p-1.5 border-b-1 shadow rounded focus:outline-none"
            >
              <option value="Software License">Software License</option>
              <option value="Cloud License">Cloud License</option>
              <option value="Mobile App License">Mobile App License</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Write a message"
              className="w-full p-1.5 border-b-1 shadow focus:outline-none"
            />
            {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white p-3 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
