import axios from "axios";

const instance = axios.create({
  baseURL: "https://antran2123153.github.io/bds-web-server",
});

// instance.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   config.headers["token"] = token;
//   return config;
// });

export default instance;
