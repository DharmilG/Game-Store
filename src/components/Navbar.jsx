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

function Dropdown() {
  return (
    <div>
      {dropdown_menu.map((item, index) => {
        return (
          <Link key={index} to={item.link} className="dropdown-link">
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}

function Navbar() {
  return (
    <div
      className="navbar"
      style={{
        height: "55px",
        fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
        backgroundColor: "rgb(10, 10, 10)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
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
          flex: 1,
        }}
      >
        <Link to="/">Home</Link>
        <div className="dropdown">
          <Link to="/">Categories</Link>
          <Dropdown />
        </div>
        <Link to="/">Contact</Link>
      </div>
      <div
        className="search-bar"
        style={{
          display: "flex",
          flex: 1,
        }}
      >
        <input type="search" placeholder="Search" />
      </div>
      <div
        className="right-navbar"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          padding: "0 20px",
          gap: "10px",
        }}
      >
        <div className="login-div">
          <Link to="/login">
          <button className="login-button">LOG IN</button>
          </Link>
        </div>
        <div className="signin-div">
        <Link to="/signin">
          <button className="signin-button">SIGN IN</button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export { Dropdown };
export default Navbar;
