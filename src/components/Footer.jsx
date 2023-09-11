import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className=" my-5">
        <footer
          className="text-center text-lg-start text-white"
          style={{ background: "#181314" }}
        >
          <div className="container p-4 pb-0">
            <section className="">
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">KFC</h6>
                  <p>
                    In the United States, KFC is owned by Yum! and currently
                    uses Oracle's MICROS RES POS system. This is a highly
                    intelligent system which has helped to enhance customer
                    experience, and speed up transactions across KFC's
                    restaurants.
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Items
                  </h6>
                  <p>
                    <a className="text-white">Burgers</a>
                  </p>
                  <p>
                    <a className="text-white">family deals</a>
                  </p>
                  <p>
                    <a className="text-white">chicken piece</a>
                  </p>
                  <p>
                    <a className="text-white">ALL Drinks</a>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    About US
                  </h6>
                  <p>
                    <a className="text-white">Mito bhook</a>
                  </p>
                  <p>
                    <a className="text-white">Mihao Bhook- scholarships</a>
                  </p>
                  <p>
                    <a className="text-white">Privecy plolcy</a>
                  </p>
                  <p>
                    <a className="text-white">career</a>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Contact
                  </h6>
                  <p>
                    <i className="fas fa-home mr-3"></i> Stor
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i> Traking your order
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> + 92 334 567 88
                  </p>
                  <p>
                    <i className="fas fa-print mr-3"></i> + 92 334 567 89
                  </p>
                </div>
              </div>
            </section>

            <hr className="my-3" />

            <section className="p-3 pt-0">
              <div className="row d-flex align-items-center">
                <div className="col-md-7 col-lg-8 text-center text-md-start">
                  <div className="p-3">
                    © 2023 Copyright:
                    <a className="text-white" href="https://mdbootstrap.com/">
                      <span>&nbsp;</span> kfc.pakistan.com
                    </a>
                  </div>
                </div>

                <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                  <a
                    className="btn btn-outline-light btn-floating m-1"
                    className="text-white"
                    role="button"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>

                  <a
                    className="btn btn-outline-light btn-floating m-1"
                    className="text-white"
                    role="button"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>

                  <a
                    className="btn btn-outline-light btn-floating m-1"
                    className="text-white"
                    role="button"
                  >
                    <i className="fab fa-google"></i>
                  </a>

                  <a
                    className="btn btn-outline-light btn-floating m-1"
                    className="text-white"
                    role="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </footer>
      </div>
    </div>
  );
}
