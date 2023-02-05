import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import avatar from "../assets/img/child-pic.png";
import axios from "../config/axios";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchVaccines } from "../features/vaccination/vaccineSlice";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const ChildrenVaccination = () => {
  const [selectedChild, setSelectedChild] = useState({});
  const [vaccines, setVaccines] = useState({});
  const [checkbox1, setCheckbox1] = useState(false);
  const [filter, setFilter] = useState("All");
  // const [checkbox2, setCheckbox2] = useState(false);
  // const [checkbox3, setCheckbox3] = useState(false);
  const { id } = useParams();

  console.log(vaccines)

  useEffect(() => {
    async function fetchChild() {
      const response = await axios.get(`/ward/${id}`);
      setSelectedChild(response.data);
    }

    async function fetchVaccines() {
      const response = await axios.get(
        `/vaccines?filter=${filter}&ward_id=${id}`
      );
      setVaccines(response.data);
    }
    fetchChild();
    fetchVaccines();
  }, [filter, id]);
  


  const handleCheckbox1Change = (event) => {
    setCheckbox1(event.target.checked);
  };

  // const handleCheckbox2Change = (event) => {
  //   setCheckbox2(event.target.checked);
  // };

  // const handleCheckbox3Change = (event) => {
  //   setCheckbox3(event.target.checked);
  // };

  if (!selectedChild) {
    return <Spinner />;
  }

  if (!vaccines) {
    return <Spinner />;
  }

  return (
    <>
      <div className="container gilroy">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="d-flex justify-content-center mt-5">
              <img
                className="rounded-circle"
                src={
                  selectedChild.avatar_url ? selectedChild.avatar_url : avatar
                }
                style={{ width: "72px" }}
                alt="avatar"
              />
            </div>
            <div className="d-flex justify-content-center">
              <p className="fs-4">
                {selectedChild.first_name + " " + selectedChild.last_name}
              </p>
            </div>
            <select
              className="form-select form-select-lg custom-select"
              onChange={(e) => {
                setFilter(e.target.value);
              }}
              aria-label=".form-select-lg example"
              style={{ backgroundColor: "#054689" }}
            >
              <option value="All">All</option>
              <option value="Completed">Completed</option>
              <option value="Upcoming">Upcoming</option>
              <option value="Due">Due</option>
            </select>

            <Accordion className="my-3 accordion" id="accordionExample">
              {Object.keys(vaccines).map((vaccinationDate) => {
                const date = new Date(vaccinationDate);
                const options = {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                };
                const formattedDate = new Intl.DateTimeFormat(
                  "en-US",
                  options
                ).format(date);
                return (
                  <Accordion.Item
                    eventKey={vaccinationDate}
                    key={vaccinationDate}
                    className="my-3 custom-accordion"
                  >
                    <Accordion.Header>{formattedDate}</Accordion.Header>
                    <Accordion.Body>
                      {vaccines[vaccinationDate].map((vaccine) => (
                        <div
                          key={vaccine.id}
                          className="form-check form-check-reverse d-flex justify-content-between my-2"
                          style={{
                            backgroundColor: checkbox1
                              ? "#E8FFE0"
                              : "rgba(253, 224, 204, 0.6)",
                            padding: "12px 57px 12px 24px",
                          }}
                        >
                          <label
                            className="form-check-label"
                            htmlFor={`checkbox${vaccine.id}`}
                          >
                            {vaccine.name}
                          </label>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id={`checkbox${vaccine.id}`}
                            onChange={handleCheckbox1Change}
                          />
                        </div>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                ); 
              })}
              {/* <Accordion.Item eventKey="1" className="custom-accordion">
                <Accordion.Header>1 January 2023</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item> */}
              {/* <Accordion.Item eventKey="2" className="custom-accordion">
                <Accordion.Header>3 February 2023</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item> */}
              {/* <Accordion.Item eventKey="3" className="custom-accordion">
                <Accordion.Header>20 March 2023</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item> */}
              {/* <Accordion.Item eventKey="4" className="custom-accordion">
                <Accordion.Header>20 April 2023</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item> */}
              {/* <Accordion.Item eventKey="5" className="custom-accordion">
                <Accordion.Header>17 June 2023</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item> */}
              {/* <Accordion.Item eventKey="6" className="custom-accordion">
                <Accordion.Header>21 July 2023</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item> */}
              {/* <Accordion.Item eventKey="7" className="custom-accordion">
                <Accordion.Header>20 September 2023</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item> */}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChildrenVaccination;
