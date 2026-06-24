"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import { companyInfo } from "@/data/content";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const response = await fetch("https://formspree.io/f/xaqgyeey", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitted(true);
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="bg-arc-dark py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-arc-dark via-arc-blue/80 to-arc-dark" />
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-arc-orange" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-0.5 w-10 bg-arc-gold" />
              <span className="text-arc-gold text-sm font-semibold tracking-widest uppercase">
                Reach Out
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-white">
              Contact Us
            </h1>
            <p className="text-gray-300 mt-4 max-w-xl text-lg">
              Have a project in mind? We'd love to hear from you. Get in touch
              and let's build something great together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Email */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-arc-blue rounded-lg flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-white" />
                  </div>
                  <h3 className="font-bold text-arc-blue">Email</h3>
                </div>

                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-gray-500 text-sm hover:text-arc-gold transition-colors duration-200 break-all"
                >
                  {companyInfo.email}
                </a>
              </motion.div>

              {/* Faisalabad */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-arc-blue rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <h3 className="font-bold text-arc-blue">Faisalabad Office</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  P-286, Zeeshan Road, T-Street, Khayaban Colony #2, Madina
                  Town, Faisalabad.
                </p>
                <div className="space-y-2">
                  <a
                    href="tel:0092418755112"
                    className="flex items-center gap-2 text-gray-500 text-sm hover:text-arc-gold transition-colors duration-200"
                  >
                    <Phone size={14} className="text-arc-gold" />
                    0092-41-8755112
                  </a>
                  <a
                    href="tel:03004327821"
                    className="flex items-center gap-2 text-gray-500 text-sm hover:text-arc-gold transition-colors duration-200"
                  >
                    <Phone size={14} className="text-arc-gold" />
                    0300-4327821
                  </a>
                </div>
              </motion.div>

              {/* Lahore */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-arc-blue rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <h3 className="font-bold text-arc-blue">Lahore Office</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  7/1, Shan Arcade, Barkat Market, New Garden Town, Lahore.
                </p>
                <div className="space-y-2">
                  <a
                    href="tel:009242323191521"
                    className="flex items-center gap-2 text-gray-500 text-sm hover:text-arc-gold transition-colors duration-200"
                  >
                    <Phone size={14} className="text-arc-gold" />
                    0092-42-32319152
                  </a>
                  <a
                    href="tel:03006127821"
                    className="flex items-center gap-2 text-gray-500 text-sm hover:text-arc-gold transition-colors duration-200"
                  >
                    <Phone size={14} className="text-arc-gold" />
                    0300-6127821
                  </a>
                  <a
                    href="https://wa.me/923008885367"
                    className="flex items-center gap-2 text-gray-500 text-sm hover:text-arc-gold transition-colors duration-200"
                  >
                    <MessageCircle size={14} className="text-arc-gold" />
                    0300-8885367
                  </a>
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={18} className="text-arc-gold" />
                  <h3 className="font-bold text-arc-blue">Working Hours</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Mon - Sat</span>
                    <span className="text-arc-gold font-medium">
                      9:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Sunday</span>
                    <span className="text-arc-gold font-medium">Closed</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10">
                <h2 className="text-3xl font-black text-arc-blue mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-500 mb-8">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="text-6xl mb-4">✅</div>
                    <h3 className="text-2xl font-black text-arc-blue mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-500">
                      Thank you for reaching out. We'll get back to you shortly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          subject: "",
                          message: "",
                        });
                      }}
                      className="mt-6 text-arc-gold hover:text-arc-orange font-semibold transition-colors duration-200"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-arc-blue focus:ring-2 focus:ring-arc-blue/10 transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-arc-blue focus:ring-2 focus:ring-arc-blue/10 transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="0300-0000000"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-arc-blue focus:ring-2 focus:ring-arc-blue/10 transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Project Inquiry"
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-arc-blue focus:ring-2 focus:ring-arc-blue/10 transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        rows={6}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-arc-blue focus:ring-2 focus:ring-arc-blue/10 transition-all duration-200 resize-none"
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      className="w-full bg-arc-gold hover:bg-arc-orange text-white font-semibold py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-base"
                    >
                      Send Message
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
