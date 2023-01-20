import React from "react";
import SignUpButton from "../components/SignUpButton";
import child from "../assets/img/child.png";
import injection from "../assets/img/injection.png";
import bro from "../assets/img/bro.png";
import articles from "../assets/img/articles.png";
import reminders from "../assets/img/reminders.png";
import management from "../assets/img/management.png";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          <div className="row rounded-3">
            <div className="col-md-6 mt-3 py-5">
              <h3 className="display-5 fw-bold">
                Remember your child’s Immunization appointments with
                Vaccitracker
              </h3>
              <p className="fs-5">
                Track your child’s immunization schedule with ease, get email
                reminders before the date.
              </p>
              <Link to="/signup">
                <SignUpButton
                  class="btn"
                  text="Get started for free"
                  type="submit"
                ></SignUpButton>
              </Link>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col mt-4">
                  <img className="img-fluid mt-3" src={child} alt="" />
                </div>
                <div className="col mt-5">
                  <img className="img-fluid mt-5" src={injection} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img className="img-fluid mt-3" src={bro} alt="" />
            </div>

            <div className="col-md-6 mt-5 py-5">
              <h3 className="display-5 fw-normal">
                Add your spouse to help keep track of immunization schedules
              </h3>
              <p className="fw-light fs-4">
                Remember your child’s Immunization appointments with
                Vaccitracker
              </p>
            </div>
          </div>
        </div>
        <section>
          <div className="album py-5 ">
            <div className="container">
              <div className="row">
                <div className="col">
                  <img className="img-fluid mt-2" src={articles} alt="" />
                  <h5 className="fw-normal">
                    Add your spouse to help keep track of immunization schedules
                  </h5>
                  <p className="fw-light fs-4">
                    Remember your child’s Immunization appointments with
                    Vaccitracker
                  </p>
                </div>
                <div className="col">
                  <img className="img-fluid mt-2" src={reminders} alt="" />
                </div>
                <div className="col">
                  <img className="img-fluid mt-2" src={management} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
