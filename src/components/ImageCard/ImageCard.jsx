import css from "./ImageCard.module.css";

const ImageCard = ({
  image: { urls, alt_description, likes, user },
  onImgClick,
}) => {
  const imgInfo = {
    srcImgModal: urls.regular,
    description: alt_description,
    likes: likes,
    author: user.name,
  };

  return (
    <div className={css.imageCard} onClick={() => onImgClick(imgInfo)}>
      <img width="400" src={urls.small} alt={alt_description} />
    </div>
  );
};

export default ImageCard;
