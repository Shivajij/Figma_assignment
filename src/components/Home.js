import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import CustomPagination from "./Pagination";
import Sidebar from "../navbar/Sidebar";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortByPrice, setSortByPrice] = useState(false); // Add sorting state
  const productsPerPage = window.innerWidth <= 768 ? 4 : 8;

  useEffect(() => {
    axios
      .get("https://mockserver-ms30.onrender.com/products")
      .then((response) => {
        let sortedProducts = response.data;

        if (sortByPrice) {
          sortedProducts = sortedProducts.slice().sort((a, b) => a.price - b.price);
        }

        setProducts(sortedProducts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, [sortByPrice]);

  const handleAddToCart = (product) => {
    const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    const updatedCartItems = [...existingCartItems, product];

    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

    console.log("Adding to cart:", product);
  };
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className="container">
      <h3 className="text-center mt-3">Product Listing</h3>
      <div className="row">
        {loading ? (
          <div>Loading...</div>
        ) : (
          currentProducts.map((product) => (
            <ProductCard
              image={product.image}
              name={product.name}
              price={product.price}
              key={product.id}
              size={product.size}
              onAddToCart={handleAddToCart}
            />
          ))
        )}
      </div>
      <CustomPagination
        totalPages={Math.ceil(products.length / productsPerPage)}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
     <Sidebar setSortByPrice={setSortByPrice} sortByPrice={sortByPrice} />

    </div>
  );
}

export default Home;
