import React from "react";
import "./Product.css";

// Import your local image
import TshirtImage from "../img/tshirt.jpg"; // Put your image in src/assets/
import JeansImage from "../img/Jeans.jpg";
import SneakersImage from "../img/Sneakers.jpg";
import JacketImage from "../img/Jacket.jpg";
import HatImage from "../img/Hat.jpg";

function Product({ product, addToCart }) {
  // You can map the product id to specific images if needed
  const productImages = {
    1: TshirtImage,
    2: JeansImage,
    3: SneakersImage,
    4: JacketImage,
    5: HatImage,
    // Add more images for other products
    // 2: JeansImage,
    // 3: JacketImage,
  };

  const imageSrc = productImages[product.id] || product.image; // fallback to URL

  return (
    <div className="product-card">
      <img src={imageSrc} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default Product;
