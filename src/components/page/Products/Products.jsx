import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "../../ui/button";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL;
      const response = await axios.get(`${backendUrl}/get/products`);
      setProducts(response.data);
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Failed to fetch products. Please try again later.");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4 my-2 text-center">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <p className="max-w-3xl mx-auto text-gray-700 mb-6">
        From automation tools to premium support packages, we’ve got something
        for everyone. Click on “View Details” to learn more, or hit “Buy
        Service” to get started right away.
      </p>

      {error ? (
        <p className="text-red-500">{error}</p>
      ) : products.length > 0 ? (
        <div className="flex flex-wrap justify-center items-center gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col gap-2 border text-start max-w-sm p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              {product.thumbnail && (
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-80 object-cover rounded mb-4"
                />
              )}
              <h2 className="text-lg font-semibold">{product.title}</h2>

              {/* Redirect to the product details page */}
              <Button
                variant="outline"
                className="rounded-full"
                onClick={() => navigate(`/product/${product.uuid}`)}
              >
                View Details
              </Button>
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
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
};

export default Products;
