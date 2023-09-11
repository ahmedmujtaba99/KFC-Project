import React from "react";
import Swal from "sweetalert2";

export default function CartViewOffCanvas({
  cartItems,
  handleRemoveItem,
}) {
  const handleRemoveAlert = () => {
    Swal.fire(
      "Product is Removed",
      "Your product is removed from the cart",
      "warning"
    );
  };
  
  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Cart Items
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body" style={{ background: "#181314" }}>
          {cartItems.length ? (
            // Display cart items when cart is not empty
            cartItems.map((c) => (
              <div key={c.id}>
                <h5 className="card-title">{c.title}</h5>
                <span className="badge text-bg-info">Rs. {c.price}</span>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => {
                    handleRemoveItem(c);
                    handleRemoveAlert();
                  }}
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            // Display a message when cart is empty
            <div>No items in the cart</div>
          )}
        </div>
      </div>
    </>
  );
          }