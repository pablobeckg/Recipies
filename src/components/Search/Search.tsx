import { useSearchTermContext } from "../../context/SearchTermContext";
import "./Search.css";

const Search = () => {
  const { searchTerm, setSearchTerm } = useSearchTermContext();

  return (
    <section className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Suche Rezept"
        id="search"
      />
    </section>
  );
};

export default Search;
