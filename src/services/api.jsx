import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/search";
const API_KEY = "vbrwsheIr5-Me-cqCbtmtVPDVb0qTBVGN40WfGoHfxI";

export const fetchImagesByQuery = async (
  currentPage,
  per_page,
  searchQuery
) => {
  const response = await axios.get(
    `/photos?client_id=${API_KEY}&page=${currentPage}&per_page=${per_page}&query=${searchQuery}`
  );

  return response.data;
};
