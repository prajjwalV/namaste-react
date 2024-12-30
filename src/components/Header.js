import { LOGO_URL } from "../utils/constants";
import About from "./About";
import Body from "./Body";
import Contact from "./Contact";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between shadow-lg m-2">
      <div className="logo-container w-28 h-28 overflow-hidden rounded-lg relative group">
        <img className="w-full h-full object-cover scale-150" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="p-4">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="p-4">Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
