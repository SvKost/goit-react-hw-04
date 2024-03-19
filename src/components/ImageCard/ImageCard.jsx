import css from "./ImageCard.module.css";

const ImageCard = ({
  image: { urls, description, likes, user },
  onImgClick,
}) => {
  const imgInfo = {
    srcImgModal: urls.regular,
    description: description,
    likes: likes,
    author: user.name,
  };

  return (
    <div className={css.imageCard}>
      <img
        onClick={() => onImgClick(imgInfo)}
        width="400"
        src={urls.small}
        alt={description}
      />
    </div>
  );
};

export default ImageCard;
