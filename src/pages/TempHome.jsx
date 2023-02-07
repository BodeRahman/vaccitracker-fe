import React from 'react'

import Sidebar from '../components/Sidebar';
import avatar from '../assets/img/child-pic.png'
import vacci1 from '../assets/img/measles.png'
import Vaccinations from '../components/Vaccinations';


const TempHome = () => {
  const displayedVaccinations = Vaccinations.slice(0, 2);
  return (
    <>
      <div className="row gilroy-light">
        <div className="col- col-sm-6 col-md-3">
          <Sidebar />
        </div>
        <div className="col-12 col-sm-12 col-md-9 ">
          <div className="row">
            <div className="col-11 col-sm-11 col-md-7 mx-1 justify-content-center">
              <div className="mt-5 d-flex justify-content-between">
                <p className="title-head">Upcoming vaccinations</p>
                <a href='/reminder-log' className="see-all text-decoration-none mt-3 text-dark">See all</a>
              </div>
              <div className="row mt-2">
                <div className="col-12 col-sm-6 col-md-6 mt-3">
                  <div className="card" id="card-deet">
                    <div className="row">
                      <div className="col-3 m-2 mt-5">
                        <img
                          className="rounded-circle card-img-left"
                          src={avatar}
                          style={{ width: "72px" }}
                          alt="avatar1"
                        />
                      </div>
                      <div className="col-8">
                        <div className="card-body">
                          <h5 className="card-title fw-bold">1 Jan, 2023</h5>
                          <h6 className="card-title fw-bold">
                            Destiny Tunde
                          </h6>
                          <p className="card-text fw-light">
                            BCG , OPV and Pediatric Hepatitis B vaccines
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-6 mt-3">
                  <div className="card" id="card-deet">
                    <div className="row">
                      <div className="col-3 m-2 mt-5">
                        <img
                          className="rounded-circle card-img-left"
                          src={avatar}
                          style={{ width: "72px" }}
                          alt="avatar1"
                        />
                      </div>
                      <div className="col-8">
                        <div className="card-body">
                          <h5 className="card-title fw-bold">1 Jan, 2023</h5>
                          <h6 className="card-title fw-bold">
                            Destiny Tunde
                          </h6>
                          <p className="card-text fw-light">
                            BCG , OPV and Pediatric Hepatitis B vaccines
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ccol-12 col-sm-6 col-md-6 mt-3">
                  <div className="card" id="card-deet">
                    <div className="row">
                      <div className="col-3 m-2 mt-5">
                        <img
                          className="rounded-circle card-img-left"
                          src={avatar}
                          style={{ width: "72px" }}
                          alt="avatar1"
                        />
                      </div>
                      <div className="col-8">
                        <div className="card-body">
                          <h5 className="card-title fw-bold">1 Jan, 2023</h5>
                          <h6 className="card-title fw-bold">
                            Destiny Tunde
                          </h6>
                          <p className="card-text fw-light">
                            BCG , OPV and Pediatric Hepatitis B vaccines
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-6 mt-3">
                  <div className="card" id="card-deet">
                    <div className="row">
                      <div className="col-3 m-2 mt-5">
                        <img
                          className="rounded-circle card-img-left"
                          src={avatar}
                          style={{ width: "72px" }}
                          alt="avatar1"
                        />
                      </div>
                      <div className="col-8">
                        <div className="card-body">
                          <h5 className="card-title fw-bold">1 Jan, 2023</h5>
                          <h6 className="card-title fw-bold">
                            Destiny Tunde
                          </h6>
                          <p className="card-text fw-light">
                            BCG , OPV and Pediatric Hepatitis B vaccines
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-11 col-sm-11 col-md-4 mx-2">
              <div className="mt-5 d-flex justify-content-between">
                <p className="title-head">My Children</p>
                <a href='/children' className="see-all text-decoration-none mt-3 text-dark" >See all</a>
              </div>
              <div className="col-md-12 mt-4">
                <div
                  className="card transi"
                >
                  <div className="row">
                    <div className="col-4" style={{ background: "#2F659D" }}>
                      <img
                        className="rounded-circle card-img-left m-2 my-5"
                        src={avatar}
                        style={{ width: "72px" }}
                        alt="avatar1"
                      />
                    </div>
                    <div className="col-8" >
                      <div className="card-body">
                        <h6 className="card-title fw-bold">
                          Name:  Destiny Tunde
                        </h6>
                        <p className="card-subtitle fs-6 fw-bolder">
                          DOB:  23 February, 2022
                        </p>
                        <p className="card-text fw-light">Gender:  Male</p>
                        <p className="card-subtitle fs-6 fw-bolder">
                          Country:  Nigeria
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12 mt-4">
                <div
                  className="card transi"
                >
                  <div className="row">
                    <div className="col-4" style={{ background: "#2F659D" }}>
                      <img
                        className="rounded-circle card-img-left m-2 my-5 "
                        src={avatar}
                        style={{ width: "72px" }}
                        alt="avatar1"
                      />
                    </div>
                    <div className="col-8">
                      <div className="card-body">
                        <h6 className="card-title fw-bold">
                          Name:  Destiny Tunde
                        </h6>
                        <p className="card-subtitle fs-6 fw-bolder">
                          DOB:  23 February, 2022
                        </p>
                        <p className="card-text fw-light">Gender:  Male</p>
                        <p className="card-subtitle fs-6 fw-bolder">
                          Country:  Nigeria
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-11 col-sm-11 col-md-11 mx-2">
              <div className="mt-5 d-flex justify-content-between">
                <p className="title-head">Vaccination wiki</p>
                <a href='/vaccination-wiki' className="see-all text-decoration-none mt-3 text-dark">See all</a>
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
                          <button type="button" className="btn card-text fw-bold mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Read More
                          </button>

                          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h1 className="modal-title fs-5" id="exampleModalLabel">Measles Vaccine</h1>
                                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                  {vaccination.description}
                                </div>
                                <div className="modal-footer">
                                  <button type="button" className="btn btn-flat" data-bs-dismiss="modal">Close</button>
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
}

export default TempHome