import React from "react";

const ContactItem = ({ label, value, href, icon }) => {
  const isLink = Boolean(href);

  return (
    <div className="flex items-start space-x-3">
      <span className="text-xl mt-1" role="img" aria-label={label}>
        {icon}
      </span>
      <div>
        <p className="text-lg font-semibold text-gray-700">{label}:</p>
        {isLink ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
            aria-label={`Link to ${label}`}
          >
            {value}
          </a>
        ) : (
          <p className="text-gray-600">{value}</p>
        )}
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col bg-gray-100 py-16"
    >
      <div className="container mx-auto px-4 flex justify-center items-center flex-1">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full sm:max-w-lg md:max-w-xl">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Contact
          </h2>
          <div className="space-y-6">
            <ContactItem label="Name" value="Aditya Ram" icon="🧑" />
            <ContactItem
              label="Email"
              value="aditya@example.com"
              href="mailto:aditya@example.com"
              icon="✉️"
            />
            <ContactItem label="Phone" value="+1 (123) 456-7890" icon="📞" />
            <ContactItem
              label="GitHub"
              value="github.com/aditya-ram"
              href="https://github.com/aditya-ram"
              icon="💻"
            />
            <ContactItem
              label="LinkedIn"
              value="linkedin.com/in/aditya-ram"
              href="https://linkedin.com/in/aditya-ram"
              icon="🔗"
            />
            <ContactItem
              label="X"
              value="x.com/aditya_ram"
              href="https://x.com/aditya_ram"
              icon="🐦"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
