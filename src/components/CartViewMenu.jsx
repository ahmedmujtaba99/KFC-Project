import React from "react";
import Swal from "sweetalert2";
import { useState } from "react";

export default function CartViewMenu({
  product,
  addToCart,
  // increaseQuantity,
  // decreaseQuantity,
}) {
  const handleAddAlert = () => {
    Swal.fire(
      "Product is added",
      "Your product is added into the cart",
      "success"
    );
  };

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    // Increase the quantity by 1
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    // Decrease the quantity by 1, but not below 1
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  // const calculatePrice = (p) => {
  //   return p.price * quantity;
  // };
  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="cartviewoffcanvasRight-1"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            product details
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body" style={{ background: "#181314" }}>
          {product.length ? (
            product.map((p) => (
              <p>
                <div className="col">
                  <div style={{ width: "18rem" }}>
                    <img
                      src={p.image}
                      className="card-img-top"
                      alt="kfc card"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{p.title}</h5>
                      <p className="card-text">
                        {p.description}

                        <div className="d-flex align-items-center">
                          <button
                            className="btn btn-sm btn-secondary me-2"
                            onClick={decreaseQuantity}
                          >
                            -
                          </button>
                          <span className="me-2">{quantity}</span>
                          <button
                            className="btn btn-sm btn-secondary me-2"
                            onClick={increaseQuantity}
                          >
                            +
                          </button>
                          <span className="badge text-bg-info">
                            Rs. {quantity * p.price}
                          </span>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>

                <br></br>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    addToCart(p);
                    handleAddAlert();
                  }}
                  // data-bs-toggle="offcanvas"
                  data-bs-dismiss="offcanvas"
                  id="liveToastBtn"
                >
                  Add to Cart
                </button>
              </p>
            ))
          ) : (
            <p>Cart is Empty</p>
          )}
        </div>
      </div>
    </>
  );
}






