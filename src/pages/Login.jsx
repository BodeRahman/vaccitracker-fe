/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom';
import SignUpButton from '../components/SignUpButton';
import LoginButton from '../components/LoginButton';

function Login() {
  return (
    <>
      <Navbar/>
      <section className="">
        
          <div className="container gilroy">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card my-5">
                  <div className="card-body p-5">


                    <form>

                      <div className="form-outline mb-3">
                        <label className="form-label" htmlFor="email">Email Address</label>
                        <input type="email" id="email" className="form-control form-control-lg" />
                      </div>

                      <div className="form-outline mb-3">
                        <label className="form-label" htmlFor="form3Example4cg">Password</label>
                        <input type="password" id="form3Example4cg" className="form-control form-control-lg" />
                      </div>

                      <div className="form-outline mb-3">
                        <Link className="text-decoration-none">
                          <div className="d-grid col-12">
                            <SignUpButton
                              className="btn"
                              text="Login"
                              type="submit"
                            ></SignUpButton>
                          </div>
                          
                        </Link>
                      </div>

                      <p className="text-center text-muted mt-3 mb-0"><a href="#!"
                          className="login fw-bold text-decoration-none">Reset Password?</a></p>
                      <hr className="hr" />
                      <div className="d-flex justify-content-center mb-1">
                        <Link to="/signup">
                          <LoginButton text="Create Account"></LoginButton>
                        </Link>
                      </div>

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

export default Login;
