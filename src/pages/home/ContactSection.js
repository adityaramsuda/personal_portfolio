import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Contact</h2>
        <p className="text-lg mb-4 text-center">
          Reach out via email at{" "}
          <a
            href="mailto:aditya@example.com"
            className="text-blue-600 hover:underline"
          >
            aditya@example.com
          </a>
          .
        </p>
        <div className="max-w-md mx-auto mt-6">
          <form
            action="https://formspree.io/f/your-form-id"
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-2 border rounded"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-2 border rounded"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Send
            </button>
          </form>
        </div>
        <div className="flex justify-center space-x-4 mt-6">
          <a
            href="https://github.com/aditya-ram"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/aditya-ram"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
