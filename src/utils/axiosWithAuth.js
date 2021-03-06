import axios from "axios";

//http://44.233.184.65:3334
export const axiosWithAuth = () => {
  return axios.create({
    //   dev mode
    // baseURL: "http://127.0.0.1:5000/api/v1",
    baseURL: "https://natoursbe.herokuapp.com/api/v1",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
