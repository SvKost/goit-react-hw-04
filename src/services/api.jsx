import axios from "axios";

const API_URL = "https://api.unsplash.com/photos";
const API_KEY = "DNjz_WmDfP4R6Lavo-0pe3nO3flY5cDFdXY_l6ZaDV0";
// const IMAGES_PER_PAGE = 20;

export const getImages = async () => {
  const response = axios.get(`${API_URL}?client_id=${API_KEY}`);
  return response.data;
};
