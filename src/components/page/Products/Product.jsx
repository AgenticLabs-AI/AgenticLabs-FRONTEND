import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "../../ui/button";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  const fetchProduct = async () => {
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL;
      const response = await axios.get(`${backendUrl}/get/products/${id}`);
      setProduct(response.data);
    } catch (err) {
      console.error("Error fetching product:", err);
      setError("Failed to fetch product details. Please try again later.");
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-lg">Loading product details...</p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="p-8 max-w-7xl mx-auto my-20">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Product Image */}
          <div className="flex-1">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-auto max-h-[800px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {product.title}
            </h1>
            <Button
              className="bg-primary my-4 text-white px-6 py-3 rounded-full shadow hover:bg-primary-dark transition"
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
            <p
              className="text-gray-600 text-lg leading-relaxed mb-6"
              dangerouslySetInnerHTML={{ __html: product.desc }}
            ></p>

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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
