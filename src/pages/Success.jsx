/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import check from "../assets/img/check.png";

const Success = () => {
  return (
    <>
        <div className="container gilroy-light">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                    <div className="card my-5">
                        <div className="card-body p-5">
                            <div className="d-flex justify-content-center">
                                <img  src={check} />
                            </div>
                            <div className="d-flex justify-content-center mt-2 fs-4">
                                Reminders has been successfully <br /> set for all vaccinations.
                            </div>
                            <div className="d-flex justify-content-center mt-2" style={{Padding: "6px 20px 6px 20px"}}>
                                <button className="btn-flat" type="submit">
                                    Okay
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Success