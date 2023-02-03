import axios from "./axios";

export async function fetchAuthorizedUser(setForm, error) {
  axios
    .get("/authorized")
    .then((response) => {
      setForm({ ...response.data, password: "", confirm_password: "" });
    })
    .catch((e) => {
      error(e.response.data.error);
    });
}

const updateProfile = async (data) => axios.patch("/user/update", data);

export default updateProfile;