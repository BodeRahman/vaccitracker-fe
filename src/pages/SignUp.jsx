/* eslint-disable jsx-a11y/anchor-is-valid */
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// import SignUpButton from "../components/SignUpButton";
import { register, reset } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";

function Signup() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    relationship: "",
    password: "",
    password2: "",
  });

  const { first_name, last_name, email, relationship, password, password2 } =
    formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/home");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        first_name,
        last_name,
        email,
        relationship,
        password,
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Navbar />
      <section className="">
        <div className="container gilroy">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card my-5">
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-4">
                    Create New account
                  </h2>

                  <form onSubmit={handleSubmit}>
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
                            value={first_name}
                            onChange={onChange}
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
                            value={last_name}
                            onChange={onChange}
                            className="form-control form-control-lg"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-outline mb-3">
                      <label className="form-label" htmlFor="email">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div className="form-outline mb-3">
                      <label className="form-label" htmlFor="email">
                        Relationship
                      </label>
                      <input
                        type="text"
                        id="relationship"
                        name="relationship"
                        value={relationship}
                        onChange={onChange}
                        className="form-control form-control-lg"
                        placeholder="e.g. Father, Mother"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label" htmlFor="location">
                        Location
                      </label>
                      <div className="form-outline d-grid col-12">
                        <button
                          className="btn btn-secondary btn-lg bg-light text-dark dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Nigeria
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Nigeria
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              More to come..
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="form-outline mb-3">
                      <label className="form-label" htmlFor="form3Example4cg">
                        Password
                      </label>
                      <input
                        type="password"
                        id="form3Example4cg"
                        name="password"
                        value={password}
                        onChange={onChange}
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div className="form-outline mb-3">
                      <label className="form-label" htmlFor="form3Example4cdg">
                        Repeat your password
                      </label>
                      <input
                        type="password"
                        id="form3Example4cdg"
                        name="password2"
                        value={password2}
                        onChange={onChange}
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div className="form-outline mb-3">
                      <div className="d-grid col-12">
                        <button className="btn" type="submit">
                          SignUp
                        </button>
                      </div>
                    </div>

                    <p className="text-center text-muted mt-3 mb-0">
                      Have an account?{" "}
                      <a
                        href="#!"
                        className="sign-in fw-bold text-decoration-none"
                      >
                        Login here
                      </a>
                    </p>
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
