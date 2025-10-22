// components/ProductCard.jsx
import { useState } from "react";

export default function ProductCard({ product }) {
  const [wish, setWish] = useState(false);

  return (
    <article className="product-card">
      <div className="img-box">
        <button
          className={`wish ${wish ? "active" : ""}`}
          onClick={() => setWish((v) => !v)}
          aria-label="Toggle wishlist"
        >
          ♥
        </button>
        <img src={product.image} alt={product.title} />
      </div>

      <h4 title={product.title}>{product.title}</h4>
      <p>${product.price.toFixed(2)}</p>
      <p className="caption">
        <a href="#">Sign in</a> or Create an account to see pricing
      </p>
    </article>
  );
}
