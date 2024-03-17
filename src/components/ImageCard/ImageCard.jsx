import css from "./ImageCard.module.css";

const ImageCard = ({ imgUrl, altText, description, likes, author }) => {
  return (
    <div className={css.imageCard}>
      <img width={250} src={imgUrl} alt={altText} />
      <p>{description}</p>
      <p>Likes: {likes}</p>
      <p>Author: {author}</p>
    </div>
  );
};

export default ImageCard;
