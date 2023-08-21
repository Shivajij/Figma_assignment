import React, { useState } from "react";
import LazyLoad from "react-lazyload";
import { BsFillCartPlusFill } from "react-icons/bs";
import { GiSelfLove } from "react-icons/gi";
import { FiShare2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./PoductCard.css";

function ProductCard({ image, price, name, size, onAddToCart }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: Date.now(),
      image,
      name,
      price,
    };
    onAddToCart(cartItem);
  };

  return (
    <div
      className="col-md-3 col-sm-6 mb-4 product-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`card ${hovered ? "hovered" : ""}`}
        style={{ height: "100%", position: "relative" }}
      >
        <LazyLoad height={200} offset={100} once>
          <img
            className="card-img-top product-image"
            src={image}
            alt="Product"
          />
        </LazyLoad>
        {hovered && (
          <div className="icon-container">
            <Link to="/cart" className="nav-link icon-link">
              <div className="icon-box">
                <BsFillCartPlusFill
                  size={20}
                  onClick={handleAddToCart}
                  color="black"
                />
              </div>
            </Link>
            <Link to="/like" className="nav-link icon-link">
              <div className="icon-box">
                <GiSelfLove size={20} />
              </div>
            </Link>
            <Link to="/share" className="nav-link icon-link">
              <div className="icon-box">
                <FiShare2 size={20} color="black" />
              </div>
            </Link>
          </div>
        )}
        <div className="card-body">
          <p className="card-title product-name">{name}</p>
          <p className="card-text product-price">{price}</p>
          <div className="size-container">
            {size.map((ele, index) => (
              <p key={index} className="size-box">
                {ele}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
