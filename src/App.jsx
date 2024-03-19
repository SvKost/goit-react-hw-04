import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { Loader } from "./components/Loader/Loader";
import { fetchImagesByQuery } from "./services/api";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [loadMoreBtn, setLoadMoreBtn] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [imgInfo, setImgInfo] = useState({});
  const [imgModalIsOpen, setImgModalIsOpen] = useState(false);
  const per_page = 12;

  const handleSearch = (query) => {
    if (query !== "" && query !== searchQuery) {
      setSearchQuery(query);
      setImages([]);
    }
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        setLoadMoreBtn(false);
        const response = await fetchImagesByQuery(
          currentPage,
          per_page,
          searchQuery
        );

        if (response.total === 0) {
          setImages([]);
          setIsError(true);
          setErrorMessage(
            "Sorry, nothing was found for your request! Please try something else!"
          );
        } else {
          setImages((prevImages) => [...prevImages, ...response.results]);

          {
            currentPage < response.total_pages
              ? setLoadMoreBtn(true)
              : setLoadMoreBtn(false);
          }
        }
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (searchQuery !== "") fetchImages();
  }, [searchQuery, currentPage]);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleOnImgClick = (image) => {
    setImgInfo(image);
    openImgModal();
  };

  const openImgModal = () => {
    setImgModalIsOpen(true);
  };

  const closeImgModal = () => {
    setImgModalIsOpen(false);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {isError && <ErrorMessage message={errorMessage} />}
      {images.length > 0 && (
        <ImageGallery images={images} onImgClick={handleOnImgClick} />
      )}
      {isLoading && <Loader />}
      {searchQuery !== "" && loadMoreBtn && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}
      {
        <ImageModal
          onImgModalOpen={imgModalIsOpen}
          onImgModalClose={closeImgModal}
          {...imgInfo}
        />
      }
    </div>
  );
}

export default App;
