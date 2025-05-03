import React from "react";

const Contact = () => {
  return (
    <div className="relative">
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Get in Touch with Our Experts
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Ready to transform your business with automation? Fill out the form
            below, and let's build something incredible together.
          </p>
        </div>
        <div className="mt-16 mx-auto max-w-4xl">
          <iframe
            src="https://n8n-k1i8.onrender.com/form/38f0bc43-1a61-49a0-8bb9-fc49d4cc86d4"
            title="Contact Form"
            className="w-full h-[600px] border rounded-lg shadow-md"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
