import axios from "axios";

const instance = axios.create({
  baseURL: "https://bds-web-server.herokuapp.com",
});

// instance.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   config.headers["token"] = token;
//   return config;
// });

export default instance;
