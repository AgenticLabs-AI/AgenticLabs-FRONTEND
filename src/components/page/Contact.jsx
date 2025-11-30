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
        <div className="mt-16 mx-auto max-w-4xl grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
          <div className="p-6 bg-gray-50 rounded-2xl">
            <h3 className="text-lg font-semibold text-gray-900">Email</h3>
            <p className="mt-2 text-gray-600">
              <a href="mailto:agenticlabs.ai@gmail.com">
                agenticlabs.ai@gmail.com
              </a>
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl">
            <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
            <p className="mt-2 text-gray-600">
              <a href="tel:+919537527143">+91 9537527143</a>
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl">
            <h3 className="text-lg font-semibold text-gray-900">Office</h3>
            <p className="mt-2 text-gray-600">Ahmedabad, Gujarat</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
