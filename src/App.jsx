import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { Loader } from "./components/Loader/Loader";
import { fetchImages } from "./services/api";

function App() {
  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getImages() {
      try {
        setIsLoading(true);
        const response = await fetchImages();
        setImages(response.data);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getImages();
  }, []);

  // const handleSubmit = (searchQuery) => {
  //   console.log(searchQuery);
  // };

  return (
    <div>
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      <ImageGallery images={images} />
    </div>
  );
}

export default App;
