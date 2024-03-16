import ImageCard from "../../components/ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <div>
      <ul>
        {images !== null &&
          images.map((image) => {
            return (
              <li key={image.id}>
                <ImageCard
                  imgUrl={image.urls.small}
                  altText={image.alt_description}
                  description={image.description}
                  likes={image.likes}
                  author={image.user.username}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ImageGallery;
