import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import avatar from "../assets/img/child-pic.png";
import Spinner from "../components/Spinner";
import { selectUpcoming } from "../features/child/upcomingSlice";
import { fetchUpcoming } from "../features/child/upcomingSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Upcoming = () => {
  const dispatch = useDispatch();
   const upcoming = useSelector(selectUpcoming);
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchUpcoming());
    setLoading(false);
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  };

  return (
    <>
      <div className="row gilroy-light mb-4 wrapper">
        <div className="col- col-sm-6 col-md-3">
          <Sidebar />
        </div>
        <div className="col-12 col-sm-12 col-md-9">
          <div className="row">
            <div className="col-12 col-sm-11 justify-content-center">
              <div className="mt-5 d-flex justify-content-between">
                <p className="title-head">Upcoming vaccinations</p>
              </div>
              <Link to="/reminders" className="text-decoration-none see-all">
                Set reminders
              </Link>
              <div className="row mt-2">
                {upcoming.length === 0 && (
                  <div className="col-md-12">
                    <h3 className="home-place-color">
                      No upcoming vaccinations
                    </h3>
                  </div>
                )}
                {upcoming.map((vaccination) => {
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
                      className="col-12 col-sm-6 col-md-4 mt-3"
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
                              <p className="card-subtitle fs-6 fw-bolder">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Upcoming;
