import React from "react";
import "./KfcCard.css";
export default function KfcCard({ item, addToCart, showProduct }) {
  return (
    <div className="col">
      <div className="card container" style={{ width: "20rem" }}>
        <img src={item.image} className="card-img-top" alt="kfc card" />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">
            {item.desc}
          </p>
          <h3 className="card-price">Rs. {item.price}</h3>

          <button
            className="btn card-btn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#cartviewoffcanvasRight-1"
            aria-controls="offcanvasRight"
            onClick={() => {
              showProduct(item);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
