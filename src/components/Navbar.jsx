import { Link } from "react-router-dom";
import "/src/App.css";
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
          <Link
            key={index}
            to={item.link}
            className="dropdown-link"
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}
export default function Navbar() {
  return (
    <div
      className="navbar"
      style={{
        height: "55px",
        fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
        backgroundColor: "rgb(50, 50, 50)",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "0 20px",
      }}
    >
      <div className="logo" style={{ display: "block", paddingRight: "20px" }}>
        <img
          src="https://logosandtypes.com/wp-content/uploads/2020/08/xbox-old.svg"
          height={50}
          width={50}
          alt="logo"
        />
      </div>
      <div
        className="links"
        style={{
          display: "flex",
          gap: "20px",
          color: "white",
          textDecoration: "none",
          fontWeight: "500",
        }}
      >
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
