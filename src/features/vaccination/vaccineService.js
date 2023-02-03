import axios from "../../config/axios";

const fetchVaccines = async (filter, wardId) => {
  const response = await axios.get(`/vaccines?filter=${filter}&wardId=${wardId}`);
  return response.data;
}

const updateVaccine = async (vaccineData, wardId, id) => {
  const response = await axios.patch(`/ward/${wardId}/vaccine/${id}`, vaccineData);
  return response.data;
}

const vaccineService = {
  fetchVaccines,
  updateVaccine,
};

export default vaccineService;