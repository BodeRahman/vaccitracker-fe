import axios from "../../config/axios";

const updateVaccine = async (vaccineData, wardId, id) => {
  const response = await axios.patch(`/ward/${wardId}/vaccine/${id}`, vaccineData);
  return response.data;
}

const vaccineService = {
  updateVaccine,
};

export default vaccineService;