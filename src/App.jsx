import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const handleSearch = (searchQuery) => {
    console.log(searchQuery);
  };

  return <SearchBar onSearch={handleSearch} />;
}

export default App;
