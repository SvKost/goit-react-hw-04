import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = ({ onSearch }) => {
  const notify = () =>
    toast("Please enter your query!", {
      position: "top-right",
    });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const query = form.elements.query.value.trim();

    {
      !query ? notify() : onSearch(query);
    }

    form.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          <IoSearchOutline />
        </button>
      </form>
      <Toaster />
    </header>
  );
};
export default SearchBar;
