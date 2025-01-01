import { Link } from "react-router-dom";
import '/src/App.css';
const dropdown_menu = [
  { name: "Action", link: "/" },
  { name: "Adventure", link: "/" },
  { name: "Sports", link: "/" },
  { name: "RPG", link: "/" },
  { name: "FPS", link: "/" },
  { name: "Racing", link: "/" },
  { name: "Open World", link: "/" },
];

export function Dropdown() {
  return (
    <div>
      {dropdown_menu.map((item, index) => {
        return (
          <a key={index} href={item.link}>
            {item.name}
          </a>
        );
      })}
    </div>
  );
}
export default function Navbar() {
  return (
    <div className="navbar" style={{ height: "55px" }}>
      <div className="logo">
        <img
          src="https://logosandtypes.com/wp-content/uploads/2020/08/xbox-old.svg"
          height={50}
          width={50}
          alt="logo"
        />
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <div className="dropdown">
          <Link to="/">Categories</Link>
          <Dropdown />
        </div>
        <Link to="/">Contact</Link>
      </div>
    </div>
  );
}
