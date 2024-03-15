import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const notify = () =>
    toast("Please enter your query!", {
      position: "top-right",
    });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const query = form.elements["query"].value;

    if (query) {
      onSearch({ query: query });
    } else {
      notify();
    }

    form.reset();
  };

  return (
    <header>
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
          Search
        </button>
        <Toaster />
      </form>
    </header>
  );
};

export default SearchBar;
