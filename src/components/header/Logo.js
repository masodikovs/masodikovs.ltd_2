import { Link } from "react-router-dom";
import "./style.css";
const Logo = () => {
  return (
    <div className="logo">
      <Link to="/" className="logotxt">
        <img src="./logo.svg" className="logoimg" />
      </Link>
      <Link to="/" className="logotxt">
        masodikovs.ltd
      </Link>
    </div>
  );
};
export default Logo;
