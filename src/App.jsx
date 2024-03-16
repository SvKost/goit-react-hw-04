import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { ThreeDots } from "react-loader-spinner";

const API_URL = "https://api.unsplash.com/search/photos";
const API_KEY = "DNjz_WmDfP4R6Lavo-0pe3nO3flY5cDFdXY_l6ZaDV0";
// const IMAGES_PER_PAGE = 20;

function App() {
  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getImages() {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://api.unsplash.com/photos?client_id=DNjz_WmDfP4R6Lavo-0pe3nO3flY5cDFdXY_l6ZaDV0"
        );
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
      {isError && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {isLoading && (
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      )}
      <ul>
        {images !== null &&
          images.map((image) => {
            return (
              <li key={image.id}>
                <img
                  width={250}
                  src={image.urls.small}
                  alt={image.alt_description}
                />
                <p>likes: {image.likes}</p>
                <p>author: {image.user.username}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default App;

{
  /* <div> (ImageCard)
  imgUrl={image.urls.small}
  altText={image.alt_description}
  description={image.description}
  likes={image.likes}
  author={image.user.username}
</div>; */
}
