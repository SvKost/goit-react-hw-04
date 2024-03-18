import axios from "axios";

const API_URL = "https://api.unsplash.com/search";
const API_KEY = "DNjz_WmDfP4R6Lavo-0pe3nO3flY5cDFdXY_l6ZaDV0";
// const IMAGES_PER_PAGE = 20;

export const fetchImagesByQuery = async (query) => {
  const response = await axios.get(
    `${API_URL}/photos?client_id=${API_KEY}?query=${query}`
  );

  return response.data;
};
