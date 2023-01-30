import axios from "axios";


const register = async (userData) => {
  const response = await axios.post("http://localhost:3000/signup", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const login = async (userData) => {
  const response = await axios.post("http://localhost:3000/login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
    window.location.reload();
  }

  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
  window.location.reload();
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
