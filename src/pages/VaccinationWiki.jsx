import React from 'react'
import Sidebar from "../components/Sidebar";
import Vaccinations from '../components/Vaccinations';
import vacci1 from '../assets/img/measles.png'

const VaccinationWiki = () => {
  const displayedVaccinations = Vaccinations.slice(0, 2);
  return (
    <>
      <div className="row gilroy-light">
        <div className="col- col-sm-6 col-md-3">
          <Sidebar />
        </div>
        <div className="col-12 col-sm-12 col-md-9">
          <div className="row">
            <div className="col-11 col-sm-11 col-md- mx-1 justify-content-center">
              <div className="mt-5 d-flex justify-content-between">
                <p className="title-head">Vaccination wiki</p>
              </div>
              <div className="row mt-2">
                {displayedVaccinations.map((vaccination) => (
                  <div key={vaccination.id} className="col-12 col-sm-6 col-md-6 mt-3">
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
                            {vaccination.name}
                          </h5>
                          <p className="card-subtitle fs-6 fw-bolder">
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
  )
}

export default VaccinationWiki