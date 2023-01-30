/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const AddChildren = () => {
  return (
    <>
        <section className="">
            <div className="container gilroy">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div className="card my-5">
                            <div className="card-body p-5">
                                <h2 className="text-uppercase text-center mb-4">
                                    Add Child
                                </h2>
                                <form>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-outline mb-3">
                                            <label className="form-label" htmlFor="first-name">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                id="first_name"
                                                name="first_name"
                                                className="form-control form-control-lg"
                                            />
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-outline mb-3">
                                            <label className="form-label" htmlFor="last-name">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                id="last_name"
                                                name="last_name"
                                                className="form-control form-control-lg"
                                            />
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-outline mb-3">
                                            <label className="form-label" htmlFor="first-name">
                                                Date of birth
                                            </label>
                                            <input
                                                type="text"
                                                id="DOB"
                                                name="DOB"
                                                className="form-control form-control-lg"
                                            />
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="gender">
                                                    Gender
                                                </label>
                                                <div className="form-outline d-grid">
                                                    <button
                                                    className="btn btn-secondary btn-lg bg-light text-dark dropdown-toggle"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                    >
                                                    Select Gender
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a className="dropdown-item" href="#">
                                                            Male
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#">
                                                            Female
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-outline mb-3">
                                            <label className="form-label" htmlFor="height">
                                                Height (cm)
                                            </label>
                                            <input
                                                type="text"
                                                id="height"
                                                name="height"
                                                className="form-control form-control-lg"
                                            />
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-outline mb-3">
                                            <label className="form-label" htmlFor="weight">
                                                Weight (Kg)
                                            </label>
                                            <input
                                                type="text"
                                                id="weight"
                                                name="weight"
                                                className="form-control form-control-lg"
                                            />
                                            </div>
                                        </div>

                                        <div className="form-outline mb-3">
                                            <div className="d-grid col-12">
                                                <button className="btn-flat" type="submit">
                                                    Add Child
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>       
                </div>      
            </div>
        </section>
    </>
  )
}

export default AddChildren