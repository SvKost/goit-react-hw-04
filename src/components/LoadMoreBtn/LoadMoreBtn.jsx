import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <button className={css.loadMoreBtn} type="button" onClick={onLoadMore}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
