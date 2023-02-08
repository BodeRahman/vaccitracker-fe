import React from 'react'
import Sidebar from '../components/Sidebar';
import avatar from '../assets/img/child-pic.png'
const ReminderLog = () => {
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
                            <p className="title-head">Upcoming vaccinations</p>
                        </div>
                        <a href='/reminders' className="rem">Set reminders</a>
                        <div className="row mt-2">
                            <div className="col-12 col-sm-6 col-md-4 mt-3">
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

                            <div className="col-12 col-sm-6 col-md-4 mt-3">
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

                            <div className="col-12 col-sm-6 col-md-4 mt-3">
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
                </div>
            </div>
        </div>
    </>
  )
}

export default ReminderLog