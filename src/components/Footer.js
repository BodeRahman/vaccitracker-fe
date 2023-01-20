import React from "react";
import logo from "../assets/img/vaccitracker-logo-footer.png";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <footer className="">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <img className="img-fluid mt-3" src={logo} alt="" />
        </ul>
        <p className="text-center text-muted">&copy; 2022 Company, Inc</p>
      </footer>
    </div>
  );
};

export default Footer;
