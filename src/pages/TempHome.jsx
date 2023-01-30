import React from 'react'

import Sidebar from '../components/Sidebar';
import avatar from '../assets/img/child-pic.png'
import vacci1 from '../assets/img/measles.png'
import vacci2 from '../assets/img/pvv.png'


const TempHome = () => {
  return (
    <>
      <div className="row gilroy">
        <div className="col-sm-5 col-md-3">
          <Sidebar />
        </div>
        <div className="col-sm-7 col-md-9">
          <div className="row">
            <div className="col-sm-6 col-md-7">
              <div className="mt-5 d-flex justify-content-between" style={{color: '#032F5B;'}}>
                <p className="fs-5 fw-bold">Upcoming vaccinations</p>
                <a href='/Reminders' className="text-decoration-none mt-2 text-dark">See all</a>
              </div>
              <div className="row mt-2">
                <div className="col-md-6 mt-3">
                  <div className="card card-deet">
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
                          <p className="card-subtitle fs-6 fw-bolder">
                            Destiny Tunde
                          </p>
                          <p className="card-text fw-light">
                            BCG , OPV and Pediatric Hepatitis B vaccines
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 mt-3">
                  <div className="card card-deet">
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
                          <p className="card-subtitle fs-6 fw-bolder">
                            Destiny Tunde
                          </p>
                          <p className="card-text fw-light">
                            BCG , OPV and Pediatric Hepatitis B vaccines
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 mt-3">
                  <div className="card card-deet">
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
                          <p className="card-subtitle fs-6 fw-bolder">
                            Destiny Tunde
                          </p>
                          <p className="card-text fw-light">
                            BCG , OPV and Pediatric Hepatitis B vaccines
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 mt-3">
                  <div className="card card-deet">
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
                          <p className="card-subtitle fs-6 fw-bolder">
                            Destiny Tunde
                          </p>
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

            <div className="col-sm- col-md-4">
              <div className="mt-5 d-flex justify-content-between" style={{color: '#032F5B'}}>
                <p className="fs-5 fw-bold">Children and wards</p>
                <a href='/children' className="text-decoration-none mt-2 text-dark" >See all</a>
              </div>
              <div className="col-md-12 mt-4">
                <div
                  className="card text-white"
                  style={{ background: "#2F659D" }}
                >
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
                        <p className="card-title fw-bold">
                          Name: Destiny Tunde
                        </p>
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

              <div className="col-md-12 mt-4">
                <div
                  className="card text-white"
                  style={{ background: "#2F659D" }}
                >
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
                        <p className="card-title fw-bold">
                          Name: Destiny Tunde
                        </p>
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

            <div className="col-sm-6 col-md-11">
              <div className="mt-5 d-flex justify-content-between" style={{color: '#032F5B;'}}>
                <p className="fs-5 fw-bold">Vaccination wiki</p>
                <a href='/vaccination-wiki' className="text-decoration-none mt-2 text-dark">See all</a>
              </div>
              <div className="row mt-2">
                <div className="col-md-6 my-3">
                  <div className="card ">
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
                            Measles Vaccine
                          </h5>
                          <p className="card-subtitle fs-6 fw-bolder">
                            Measles can be prevented with MMR vaccine. The
                            vaccine protects against diseases, mumps, and
                            rubella.
                          </p>
                          <p className="card-text fw-bold mt-2">
                            Read more
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 my-3">
                  <div className="card">
                    <div className="row">
                      <div className="col-3 m-2 mt-5">
                        <img
                          className="rounded-circle card-img-left"
                          src={vacci2}
                          style={{ width: "72px" }}
                          alt="avatar1"
                        />
                      </div>
                      <div className="col-8">
                        <div className="card-body">
                          <h5 className="card-title fw-bold">PCV-10 Vaccine</h5>
                          <p className="card-subtitle fs-6 fw-bolder">
                            Measles can be prevented with MMR vaccine. The
                            vaccine protects against diseases, mumps, and
                            rubella.
                          </p>
                          <p className="card-text fw-bold mt-2">
                            Read more
                          </p>
                        </div>
                      </div>
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
}

export default TempHome