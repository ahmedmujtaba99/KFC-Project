import React from 'react'
import "./Header.css";
export default function Header({cartCounter}) {
    return (
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a
            className="navbar-brand kfc"
            href="#"
            > KFC</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <button className="styled-button">
                    <i className="fa fa-star"></i>
                    DELIVERY
                  </button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <button className="styled-button">
                    <i className="fa fa-star"></i> PICKUP
                  </button>
                </a>
              </li>
            </ul>
            <button
              className="btn zigzag-button"
              type="submit"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              Cart ({cartCounter})
            </button>
           
          </div>
        </div>
      </nav>
    );
}
