import React from "react";
import { Button } from "../../ui/button";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Email organiser automation",
      description: "Streamline your inbox with intelligent sorting and automated responses.",
      thumbnail: "https://cdn.sanity.io/images/6vjqkf6t/marketing-prod/e903c82c9f467a47472fee36bd37631df0cfefa9-3000x1532.jpg?w=1472&fm=webp",
    },
    {
      id: 2,
      title: "Deep research",
      description: "Comprehensive data analysis and market research powered by AI.",
      thumbnail: "https://www.eesel.ai/_next/image?url=https%3A%2F%2Fwebsite-cms.eesel.ai%2Fwp-content%2Fuploads%2F2025%2F10%2F01-Agentforce-Deep-Research.png&w=1680&q=100",
    },
    {
      id: 3,
      title: "HR Automation system",
      description: "Automate recruitment, onboarding, and employee management workflows.",
      thumbnail: "https://cdn.sanity.io/images/w441h7ie/production/c403e58d06879f90b02ab1b872d12d85037b2f7e-1080x579.jpg?w=3840&q=75&fit=clip&auto=format",
    },
  ];

  return (
    <div className="p-4 my-2 text-center">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <p className="max-w-3xl mx-auto text-gray-700 mb-6">
        From automation tools to premium support packages, we’ve got something
        for everyone. Click on “View Details” to learn more, or hit “Buy
        Service” to get started right away.
      </p>

      <div className="flex flex-wrap justify-center items-center gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col gap-2 border text-start max-w-sm p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-80 object-cover rounded mb-4"
            />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-600 text-sm mb-2">{product.description}</p>

            <Button
              className="bg-primary text-white px-6 py-3 rounded-full shadow hover:bg-primary-dark transition"
              onClick={() => {
                const subject = encodeURIComponent(
                  `Inquiry about ${product.title}`
                );
                const body = encodeURIComponent(
                  `Hello,\n\nI am interested in learning more about the service "${product.title}". Please provide additional details.\n\nThank you.`
                );
                window.location.href = `mailto:agenticlabs.ai@gmail.com?subject=${subject}&body=${body}`;
              }}
            >
              Buy Service
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
