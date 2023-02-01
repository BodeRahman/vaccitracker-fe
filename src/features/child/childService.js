import axios from "../../config/axios";

const addChild = async (childData) => {
  const response = await axios.post("/ward", childData);
  return response.data;
}

const childService = {
  addChild,
};

export default childService;