import React from 'react'
import Sidebar from "../components/Sidebar";
import { Bell } from 'react-feather';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';

const Reminders = () => {
  return (
    <>
      <div className="row gilroy">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-8 my-5 justify-content-center align-items-center">
          <div className="mt-4 d-flex justify-content-center">
            <p className="reminder-head">Set Reminders for all vaccinations</p>
          </div>
          <div className="d-flex justify-content-center ">
            <hr className="divider" />
          </div>
          <div className="mb-2 ml-4 d-flex justify-content-center">
            <span className="mx-4"><Bell fill='#F76600' className="bell"/></span>
            <span>
              <input type="number" min="0" step="1" className="form-control" id="amountInput" style={{backgroundColor: "#E1E1E1", borderRadius: "4px", padding: "5px 24px;"}} />
            </span>
            <span>
              <select className="form-select form-control mx-4" aria-label=".form-select-lg example" style={{backgroundColor: "#E1E1E1", borderRadius: "4px", padding: "5px 24px;"}}>
                <option  selected>Minutes</option>
                <option value="1">Hours</option>
                <option value="2">Days</option>
                <option value="3">Weeks</option>
              </select>
            </span>
          </div>
          <div className="d-flex justify-content-center ">
            <hr className="divider" />
          </div>
          <div className="mb-3 d-flex justify-content-center ">
            <PrimaryButton
              className=""
              text="Set Reminder"
              type="submit"
              style={{ padding: "21px, 29px, 21px, 29px", borderRadius: "4px"}}
            ></PrimaryButton>
          </div>
          <div className="d-flex justify-content-center ">
            <SecondaryButton
              className=""
              text="Cancel"
              type="submit"
              style={{ padding: "21px, 29px, 21px, 29px", borderRadius: "4px"}}
            ></SecondaryButton>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reminders