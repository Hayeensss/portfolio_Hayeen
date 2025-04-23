"use client";

import { rsend } from "@/app/actions/send";
import { motion } from "framer-motion";
import { useState, useTransition } from "react";
import { toast } from "sonner";

export default function ContactForm({ introText }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    startTransition(async () => {
      try {
        const result = await rsend(formData);

        if (result.success) {
          toast.success("Your message has been sent successfully.");
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          throw new Error(result.error || "Failed to send message");
        }
      } catch (error) {
        toast.error(
          error.message || "Something went wrong. Please try again later."
        );
      }
    });
  };

  return (
    <div className="bg-gray-50 dark:bg-gradient-to-br dark:from-[#1E293B] dark:to-[#2D3748] rounded-xl p-6 md:p-8 shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
        Send Me a Message
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm md:text-base">
        {introText}
      </p>

      <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white dark:bg-[#0F172A] border border-gray-300 dark:border-gray-700 rounded-md p-2 md:p-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#b08047] dark:focus:ring-[#015eb4] text-sm"
              disabled={isPending}
              aria-required="true"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white dark:bg-[#0F172A] border border-gray-300 dark:border-gray-700 rounded-md p-2 md:p-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#b08047] dark:focus:ring-[#015eb4] text-sm"
              disabled={isPending}
              aria-required="true"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            placeholder="How can I help you?"
            value={formData.subject}
            onChange={handleChange}
            className="w-full bg-white dark:bg-[#0F172A] border border-gray-300 dark:border-gray-700 rounded-md p-2 md:p-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#b08047] dark:focus:ring-[#015eb4] text-sm"
            disabled={isPending}
            aria-required="true"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Your Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-white dark:bg-[#0F172A] border border-gray-300 dark:border-gray-700 rounded-md p-2 md:p-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#b08047] dark:focus:ring-[#015eb4] text-sm"
            disabled={isPending}
            aria-required="true"
          ></textarea>
        </div>

        <motion.div
          whileHover={{ scale: isPending ? 1 : 1.02 }}
          whileTap={{ scale: isPending ? 1 : 0.98 }}
        >
          <button
            type="submit"
            disabled={isPending}
            className="w-full rounded-full px-5 py-3 text-sm font-medium text-[#b08047] dark:text-[#38BDF8] bg-transparent border-2 border-[#b08047] dark:border-[#38BDF8] hover:bg-[#b08047] dark:hover:bg-[#38BDF8] hover:text-white dark:hover:text-white transition-all duration-300 flex items-center justify-center"
            aria-live="polite"
          >
            {isPending ? "SENDING..." : "SEND MESSAGE"}
          </button>
        </motion.div>
      </form>
    </div>
  );
}
