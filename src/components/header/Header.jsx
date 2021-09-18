import "./Header.css";
import sunLogo from "../../images/icon-sun.svg";
import darkLogo from "../../images/icon-moon.svg";
const Header = ({ dark, setDark }) => {
  return (
    <div className="header">
      <div className="title">
        <h1>TODO</h1>
      </div>
      <div className="theme" onClick={() => setDark(!dark)}>
        <img
          src={dark === true ? sunLogo : darkLogo}
          alt={dark === true ? "darkLogo" : "sunLogo"}
        />
      </div>
    </div>
  );
};

export default Header;
