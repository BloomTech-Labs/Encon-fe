import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("AUTH_TOKEN");
  return axios.create({
    baseURL: "http://localhost:3300/api",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};
