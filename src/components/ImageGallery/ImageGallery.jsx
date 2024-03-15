import { ImageCard } from "../../components/ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = () => {
  return (
    <ul className={css.gallery}>
      {/* Набір елементів списку із зображеннями */}
      <li className={css.galleryList}>
        <ImageCard />
      </li>
    </ul>
  );
};

export default ImageGallery;
