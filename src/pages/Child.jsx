import React from "react";

import Sidebar from "../components/Sidebar";
import avatar from "../assets/img/child-pic.png";

const Children = () => {
  return (
    <>
      <div className="row gilroy">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-sm- col-md-8">
          <div
            className="mt-5 d-flex justify-content-between"
            style={{ color: "#032F5B" }}
          >
            <p className="fs-5 fw-bold">Children and wards</p>
            <a href="/children" className="text-decoration-none mt-2 text-dark">
              See all
            </a>
          </div>
          <div className="row row-cols-2">
            <div className="col-md-6 mt-4">
              <div className="card text-white" style={{ background: "#2F659D" }}>
                <div className="row">
                  <div className="col-3 m-2 mt-5">
                    <img
                      className="rounded-circle card-img-left "
                      src={avatar}
                      style={{ width: "72px" }}
                      alt="avatar1"
                    />
                  </div>
                  <div className="col-8">
                    <div className="card-body">
                      <p className="card-title fw-bold">Name: Destiny Tunde</p>
                      <p className="card-subtitle fs-6 fw-bolder">
                        DOB: 23 February, 2022
                      </p>
                      <p className="card-text fw-light">Gender: Male</p>
                      <p className="card-subtitle fs-6 fw-bolder">
                        Country: Nigeria
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 mt-4">
              <div className="card text-white" style={{ background: "#2F659D" }}>
                <div className="row">
                  <div className="col-3 m-2 mt-5">
                    <img
                      className="rounded-circle card-img-left "
                      src={avatar}
                      style={{ width: "72px" }}
                      alt="avatar1"
                    />
                  </div>
                  <div className="col-8">
                    <div className="card-body">
                      <p className="card-title fw-bold">Name: Destiny Tunde</p>
                      <p className="card-subtitle fs-6 fw-bolder">
                        DOB: 23 February, 2022
                      </p>
                      <p className="card-text fw-light">Gender: Male</p>
                      <p className="card-subtitle fs-6 fw-bolder">
                        Country: Nigeria
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 mt-4">
              <div className="card text-white" style={{ background: "#2F659D" }}>
                <div className="row">
                  <div className="col-3 m-2 mt-5">
                    <img
                      className="rounded-circle card-img-left "
                      src={avatar}
                      style={{ width: "72px" }}
                      alt="avatar1"
                    />
                  </div>
                  <div className="col-8">
                    <div className="card-body">
                      <p className="card-title fw-bold">Name: Destiny Tunde</p>
                      <p className="card-subtitle fs-6 fw-bolder">
                        DOB: 23 February, 2022
                      </p>
                      <p className="card-text fw-light">Gender: Male</p>
                      <p className="card-subtitle fs-6 fw-bolder">
                        Country: Nigeria
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 mt-4">
              <div className="card text-white" style={{ background: "#2F659D" }}>
                <div className="row">
                  <div className="col-3 m-2 mt-5">
                    <img
                      className="rounded-circle card-img-left "
                      src={avatar}
                      style={{ width: "72px" }}
                      alt="avatar1"
                    />
                  </div>
                  <div className="col-8">
                    <div className="card-body">
                      <p className="card-title fw-bold">Name: Destiny Tunde</p>
                      <p className="card-subtitle fs-6 fw-bolder">
                        DOB: 23 February, 2022
                      </p>
                      <p className="card-text fw-light">Gender: Male</p>
                      <p className="card-subtitle fs-6 fw-bolder">
                        Country: Nigeria
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Children;
