import css from "./ImageModal.module.css";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

const ImageModal = ({
  onImgModalOpen,
  onImgModalClose,
  srcImgModal,
  description,
  likes,
  author,
}) => {
  return (
    <ReactModal
      className={css.Modal}
      overlayClassName={css.Overlay}
      isOpen={onImgModalOpen}
      onRequestClose={onImgModalClose}
    >
      <img className={css.imgModal} src={srcImgModal} alt="" />
      <div className={css.imgDescription}>
        <p>{description}</p>
        <div className={css.imgInfo}>
          <p>Likes: {likes}</p>
          <p>Author: {author}</p>
        </div>
      </div>
    </ReactModal>
  );
};

export default ImageModal;
