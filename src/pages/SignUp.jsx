/* eslint-disable jsx-a11y/anchor-is-valid */
import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom';
import SignUpButton from '../components/SignUpButton';
function Signup() {
  return (
    <>
      <Navbar/>
      <section className="">
        
          <div className="container gilroy">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card my-5">
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-4">Create New account</h2>

                    <form>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-outline mb-3">
                            <label className="form-label" htmlFor="first-name">First Name</label>
                            <input type="text" id="first-name" className="form-control form-control-lg" />
                          </div>
                        </div>
                        
                        <div className="col-sm-6">
                          <div className="form-outline mb-3">
                            <label className="form-label" htmlFor="last-name">Last Name</label>
                            <input type="text" id="last-name" className="form-control form-control-lg" />
                          </div>
                        </div>
                      </div>

                      <div className="form-outline mb-3">
                        <label className="form-label" htmlFor="email">Your Email</label>
                        <input type="email" id="email" className="form-control form-control-lg" />
                      </div>

                      <div className="mb-3">
                        <div className="form-outline d-grid col-12">
                          <button className="btn btn-secondary btn-lg bg-light text-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Country
                          </button>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Nigeria</a></li>
                            <li><a className="dropdown-item" href="#">More to come..</a></li>
                          </ul>
                        </div>
                      </div>

                      <div className="form-outline mb-3">
                        <label className="form-label" htmlFor="form3Example4cg">Password</label>
                        <input type="password" id="form3Example4cg" className="form-control form-control-lg" />
                      </div>

                      <div className="form-outline mb-3">
                      <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label>
                        <input type="password" id="form3Example4cdg" className="form-control form-control-lg" />
                      </div>

                      <div className="form-outline mb-3">
                        <Link className="text-decoration-none">
                          <div className="d-grid col-12">
                            <SignUpButton
                              className="btn"
                              text="CREATE ACCOUNT"
                              type="submit"
                            ></SignUpButton>
                          </div>
                          
                        </Link>
                      </div>

                      <p className="text-center text-muted mt-3 mb-0">Have an account? <a href="#!"
                          className="login fw-bold text-decoration-none">Login here</a></p>

                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </section>
    </>
  );
}

export default Signup;
