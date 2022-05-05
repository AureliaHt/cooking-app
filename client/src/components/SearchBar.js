import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
    return (
        <div className="searchbar_container">
            <input type="text" placeholder="Que recherchez-vous ?" />
            <button type="submit">< BsSearch /></button>
        </div>
    );
};

export default SearchBar;