import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: {
    maxResults: "50",
  },
  // headers: {
  //   "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  //   "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  // },
  headers: {
    "X-RapidAPI-Key": "87751f7267msh52191df51357b35p169a2ajsncd47955cb8ee",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
