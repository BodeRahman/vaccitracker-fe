import axios from "../config/axios";


const register = async (userData) => {
  const response = await axios.post('/signup', userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const login = async (userData) => {
  const response = await axios.post('/login', userData);

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
