import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";

const API_URL = "https://api.unsplash.com/search/photos";
const API_KEY = "DNjz_WmDfP4R6Lavo-0pe3nO3flY5cDFdXY_l6ZaDV0";
const IMAGES_PER_PAGE = 20;

function App({ query }) {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await axios.get(
          `${API_URL}?query=${query}&page=1&per_page=${IMAGES_PER_PAGE}&client_id=${API_KEY}`
        );
        setPhotos(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getImages();
  }, []);

  const handleSearch = (searchQuery) => {
    console.log(searchQuery);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />;
      <ImageGallery />;
    </div>
  );
}

export default App;
