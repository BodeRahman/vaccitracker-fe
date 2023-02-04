import React from "react";
import Sidebar from "../components/Sidebar";
import profileImage from "../assets/img/child.png";

const Profile = () => {
  return (
    <>
      <div className="row gilroy">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-8 my-5 justify-content-center align-items-center">
          <div className="my-3 d-flex justify-content-center">
            <img
              className=""
              src={profileImage}
              style={{}}
              alt="profile avatar"
            />
          </div>
          <div className="d-flex justify-content-center">
            <p className="fs-4">Samuel Tunde</p>
          </div>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-8 col-md-8 col-lg-7 col-xl-6">
              <form>
                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="first-name">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value=""
                    onChange=""
                    className="form-control form-control-lg"
                  />
                </div>

                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="last-name">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value=""
                    onChange=""
                    className="form-control form-control-lg"
                  />
                </div>

                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value=""
                    onChange=""
                    className="form-control form-control-lg"
                  />
                </div>

                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value=""
                    onChange=""
                    className="form-control form-control-lg"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
