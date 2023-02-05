import React, {useEffect} from "react";

import Sidebar from "../components/Sidebar";
import avatar from "../assets/img/child-pic.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectChildren, fetchChildren } from "../features/child/childSlice";
// import { fetchChildren } from "./features/child/childSlice";
import { Plus, Edit2 } from "react-feather";

const Children = () => {
  const dispatch = useDispatch();
  const children = useSelector(selectChildren);

  useEffect(() => {
    dispatch(fetchChildren());
  }, [dispatch]);

  return (
    <>
      <div className="row gilroy">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-8 mx-3 justify-content-center align-items-center">
          <div
            className="mt-5 d-flex justify-content-between"
            style={{ color: "#032F5B" }}
          >
            <p className="fs-5 fw-bold">Children and wards</p>
          </div>
          <div className="row">
            {children.map((child) => {
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
                  to={`/vaccinations/${child.id}`}
                  key={child.id}
                  className="col-sm- col-md-6 mt-4 text-decoration-none"
                >
                  <div>
                    <div
                      className="card text-white"
                      style={{ background: "#2F659D" }}
                    >
                      <div className="row">
                        <div className="col-3 m-2 mt-3">
                          <img
                            className="rounded-circle card-img-left "
                            src={
                              child.avatar_url !== null
                                ? child.avatar_url
                                : avatar
                            }
                            style={{ width: "72px" }}
                            alt="avatar"
                          />
                        </div>
                        <div className="col-8">
                          <div className="card-body">
                            <span className=" card-title fs-5 fw-bold">
                              {child.first_name + " " + child.last_name}
                            </span>
                            <span className="">
                              <Link to={`/editChild/${child.id}`}>
                                <button className="btn text-white mx-4">
                                  <Edit2 />
                                </button>
                              </Link>
                            </span>
                            <p className="card-subtitle fs-6 fw-bolder">
                              DOB: {formattedDate}
                            </p>
                            <p className="card-text fw-light">
                              Gender: {child.gender}
                            </p>
                            {/* <div className="">
                        <div className="row">
                          <div className="col">
                            <p>Given</p>
                            <p className="text-center">0</p>
                          </div>
                          <div className="col">
                            <p className="mx-3">Due</p>
                            <p className="text-center">20</p>
                          </div>
                          <div className="col">
                            <p>Upcoming</p>
                            <p className="text-center">0</p>
                          </div>
                        </div>
                      </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
            
          </div>
          <div className="d-flex flex-row-reverse">
            <Link to="/addChildren">
              <button className="btn add-btn my-4 text-white">
                <Plus />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Children;
