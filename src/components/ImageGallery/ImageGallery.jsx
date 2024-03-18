import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImgClick }) => {
  return (
    <div>
      <ul className={css.imgGallery}>
        {images.map((image) => {
          return (
            <li key={image.id}>
              <ImageCard image={image} onImgClisk={onImgClick} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ImageGallery;
