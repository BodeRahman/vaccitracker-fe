import React from "react";
import { selectChildren } from "../features/child/childSlice";
import { selectUpcoming } from "../features/child/upcomingSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import vacci1 from "../assets/img/measles.png";
import avatar from "../assets/img/child-pic.png";
import Vaccinations from "../components/Vaccinations";

const TempHome = () => {
  const children = useSelector(selectChildren);
  const immunizations = useSelector(selectUpcoming);
  const displayedChildren = children.slice(0, 2);
  const displayedVaccinations = Vaccinations.slice(0, 2);
  const sortedImmunizations = [...immunizations].sort((a, b) => {
    const dateA = new Date(a.immunization.vaccination_date);
    const dateB = new Date(b.immunization.vaccination_date);
    return dateA - dateB;
  });
  const displayedUpcoming = sortedImmunizations.slice(0, 4);

  return (
    <>
      <div className="row gilroy-light">
        <div className="col-sm-6 col-md-3">
          <Sidebar />
        </div>
        <div className="col-sm-12 col-md-9">
          <div className="row">
            <div className="col-11 col-sm-11 col-md-7 mx-1 justify-content-center">
              <div
                className="mt-5 d-flex justify-content-between"
                style={{ color: "#032F5B;" }}
              >
                <p className="title-head">Upcoming vaccinations</p>
                {immunizations.length > 0 && (
                  <Link to="/upcoming" className="text-decoration-none see-all mt-3">
                    See all
                  </Link>
                )}
              </div>
              <div className="row mt-2">
                {immunizations.length === 0 && (
                  <div className="col-md-12">
                    <h3 className="home-place-color">
                      No upcoming Vaccinations
                    </h3>
                  </div>
                )}
                {displayedUpcoming.map((vaccination) => {
                  const date = new Date(
                    vaccination.immunization.vaccination_date
                  );
                  const options = {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  };
                  const formattedDate = new Intl.DateTimeFormat(
                    "en-US",
                    options
                  ).format(date);
                  return (
                    <div
                      key={vaccination.immunization.id}
                      className="col-12 col-sm-6 col-md-6 mt-3"
                    >
                      <div className="card" id="card-deet">
                        <div className="row">
                          <div className="col-3 m-2 mt-5">
                            <img
                              className="rounded-circle card-img-left"
                              src={
                                vaccination.avatar_url !== null
                                  ? vaccination.avatar_url
                                  : avatar
                              }
                              style={{ width: "72px" }}
                              alt="avatar1"
                            />
                          </div>
                          <div className="col-8">
                            <div className="card-body">
                              <h5 className="card-title fw-bold">
                                {formattedDate}
                              </h5>
                              <p className="card-title fw-bold">
                                {vaccination.ward.first_name +
                                  " " +
                                  vaccination.ward.last_name}
                              </p>
                              <p className="card-text fw-light">
                                {vaccination.immunization.name}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="col-11 col-sm-11 col-md-4 mx-2">
              <div
                className="mt-5 d-flex justify-content-between"
                style={{ color: "#032F5B" }}
              >
                <p className="title-head">My Children</p>
                {children.length > 2 && (
                  <Link
                    to="/children"
                    className="text-decoration-none mt-3 see-all"
                  >
                    See all
                  </Link>
                )}
              </div>
              {children.length === 0 && (
                <div className="col-md-12">
                  <Link to="/addChildren" className="text-decoration-none">
                    <h3 className="home-add-btn">
                      Add a child <span>+</span>
                    </h3>
                  </Link>
                </div>
              )}
              {displayedChildren.map((child) => {
                const date = new Date(child.date_of_birth);
                const options = {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                };
                const formattedDate = new Intl.DateTimeFormat(
                  "en-US",
                  options
                ).format(date);
                return (
                  <Link
                    key={child.id}
                    to={`/vaccinations/${child.id}`}
                    className="text-decoration-none text-dark"
                  >
                    <div className="col-md-12 mt-4">
                      <div className="card transi">
                        <div className="row">
                          <div
                            className="col-4"
                            style={{ background: "#2F659D" }}
                          >
                            <img
                              className="rounded-circle card-img-left m-2 my-5"
                              src={child.avatar_url ? child.avatar_url : avatar}
                              style={{ width: "72px" }}
                              alt="avatar1"
                            />
                          </div>
                          <div className="col-8">
                            <div className="card-body">
                              <h6 className="card-title fw-bold">
                                Name: {child.first_name + " " + child.last_name}
                              </h6>
                              <p className="card-subtitle fs-6 fw-bolder">
                                DOB: {formattedDate}
                              </p>
                              <p className="card-text fw-light">
                                Gender: {child.gender}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="col-11 col-sm-11 col-md-11 mx-2">
              <div className="mt-5 d-flex justify-content-between">
                <p className="title-head">Vaccination wiki</p>
                <a
                  href="/vaccination-wiki"
                  className="see-all text-decoration-none mt-3"
                >
                  See all
                </a>
              </div>
              <div className="row mt-2">
                {displayedVaccinations.map((vaccination) => (
                  <div key={vaccination.id} className="col-md-6 my-3">
                    <div className="card">
                      <div className="row">
                        <div className="col-3 m-2 mt-5">
                          <img
                            className="rounded-circle card-img-left"
                            src={vacci1}
                            style={{ width: "72px" }}
                            alt="avatar1"
                          />
                        </div>
                        <div className="col-8">
                          <div className="card-body">
                            <h5 className="card-title fw-bold">
                              {vaccination.name}
                            </h5>
                            <p className="card-subtitle gilroy-light">
                              {vaccination.home}
                            </p>
                            <button
                              type="button"
                              className="btn card-text fw-bold mt-2"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              Read More
                            </button>

                            <div
                              className="modal fade"
                              id="exampleModal"
                              tabIndex="-1"
                              aria-labelledby="exampleModalLabel"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h1
                                      className="modal-title fs-5"
                                      id="exampleModalLabel"
                                    >
                                      {vaccination.name}
                                    </h1>
                                    <button
                                      type="button"
                                      className="btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    ></button>
                                  </div>
                                  <div className="modal-body">
                                    {vaccination.description}
                                  </div>
                                  <div className="modal-footer">
                                    <button
                                      type="button"
                                      className="btn btn-flat"
                                      data-bs-dismiss="modal"
                                    >
                                      Close
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TempHome;
