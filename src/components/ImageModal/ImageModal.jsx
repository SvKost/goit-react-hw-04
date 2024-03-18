import css from "./ImageModal.module.css";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

const ImageModal = ({
  onImgModalOpen,
  onImgModalClose,
  srcImgModal,
  alt_description,
  likes,
  author,
}) => {
  return (
    <ReactModal
      className={css.imgModal}
      overlayClassName={css.Overlay}
      isOpen={onImgModalOpen}
      onRequestClose={onImgModalClose}
    >
      <img className={css.imgModal} src={srcImgModal} alt={alt_description} />
      <div className={css.imgDescription}>
        <p>{alt_description}</p>
        <div className={css.imgInfo}>
          <p>Likes: {likes}</p>
          <p>Author: {author}</p>
        </div>
      </div>
    </ReactModal>
  );
};

export default ImageModal;
