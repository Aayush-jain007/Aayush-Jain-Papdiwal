import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom/";
import "./index.css";

const Header = () => {
  const history = useHistory();

  const handleSearchClick = () => {
    history.push("/search");
  };

  return (
    <div className="card">
      <h2 className="search-text">Search</h2>
      <div className="options">
        <p className="options-text">Stars</p>
        <p className="options-text">Planets</p>
        <p className="options-text">Astronomy</p>
        <p className="options-text">Notifications</p>
        <button
          type="button"
          onClick={handleSearchClick}
          className="buttonBackground"
        >
          <FaSearch size={16} />
        </button>
      </div>
    </div>
  );
};
export default Header;
