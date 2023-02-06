import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import avatar from "../assets/img/child-pic.png";
import axios from "../config/axios";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const ChildrenVaccination = () => {
  // const dispatch = useDispatch();
  const [selectedChild, setSelectedChild] = useState({});
  const [vaccines, setVaccines] = useState({});
  const [filter, setFilter] = useState("All");
  const { id } = useParams();

  // const Toast = Swal.mixin({
  //   toast: true,
  //   position: "top-end",
  //   showConfirmButton: false,
  //   timer: 5000,
  //   timerProgressBar: true,
  //   didOpen: (toast) => {
  //     toast.addEventListener("mouseenter", Swal.stopTimer);
  //     toast.addEventListener("mouseleave", Swal.resumeTimer);
  //   },
  // });

  const handleUpdateVaccine = (vaccineId, vaccineData) => {
    try {
      const response = axios.patch(
        `/ward/${id}/vaccine/${vaccineId}`,
        vaccineData
      );
      window.location.reload();
      Swal.fire("Confirmed!", "Vaccine Completed!", "success");
      setVaccines((prevVaccines) => {
      const updatedVaccines = { ...prevVaccines };
      const vaccineIndex = updatedVaccines[response.data.vaccination_date].findIndex(
        (v) => v.id === vaccineId
      );
      updatedVaccines[response.data.vaccination_date][vaccineIndex] = response.data;
      return updatedVaccines;
    });
    } catch (error) {
      console.log(error);
    }
  };

  

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
  

  if (!selectedChild) {
    return <Spinner />;
  }

  if (!vaccines) {
    return <Spinner />;
  }

  // if (isLoading) {
  //   return <Spinner />;
  // }

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
                            backgroundColor: vaccine.completed
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
                            checked={vaccine.completed}
                            value=""
                            id={`checkbox${vaccine.id}`}
                            onChange={(e) => handleUpdateVaccine(vaccine.id, {
                              completed: e.target.checked})}
                          />
                        </div>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                ); 
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChildrenVaccination;
