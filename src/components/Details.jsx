import { useParams, Link, useNavigate } from "react-router-dom";
import { games } from "./Games.jsx";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../App.css";
import { useEffect, useState } from "react";

export function BuyNow() {
  const navigate = useNavigate();
  const [Hovered, setHovered] = useState(false);
  const handleBuyNow = () => {
    const authenticated = localStorage.getItem('authenticated');
    if (!authenticated) {
      navigate('/login');
    } else {
      navigate('/orderinfo');
    }
  };

  return (
    <button
      className="buynow"
      onMouseEnter={()=> setHovered(true)}
      onMouseLeave={()=> setHovered(false)}
      style={{ backgroundColor: Hovered ? "white":"transparent",
        color: Hovered? "black" : "white",
        borderColor: "white",
        padding: "15px 32px",
        textAlign: "center",
        fontSize: "18px",
        fontWeight: "700",
        margin: "4px 2px",
        cursor: "pointer",
        borderRadius: "12px",
        transition: "background-color 0.3s ease-in-out",
        height: "70px",
        width: "200px",
        textTransform: "uppercase",}}
      onClick={handleBuyNow}
    >
      Buy Now
    </button>
  );
}
export function Details() {
  const { title } = useParams();

  const game = games
    .flatMap((category) => category.titles)
    .find((game) => game.name === title);

  const [isHovered, setIsHovered] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const handleMouseEnter = () => {
    setHoverTimeout(
      setTimeout(() => {
        setIsHovered(true);
      }, 500)
    );
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout);
    setIsHovered(false);
  };

  return (
    <div
      style={{
        backgroundColor: "#0d1117",
        fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
        color: "#f1f1f1",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar className="navbar" />
      <div
        style={{
          padding: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <h1
          style={{ fontSize: "40px", marginBottom: "20px", color: "#ffffff" }}
        >
          {game.name}
        </h1>
        <div
          className="details"
          style={{
            display: "flex",
            gap: "40px",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <img
            src={game.img}
            alt={game.name}
            className="cover-art"
            style={{
              width: "300px",
              height: "400px",
              borderRadius: "10px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
            }}
          />
          <div className="game-info" style={{ flex: 1 }}>
            <p
              style={{ fontSize: "18px", lineHeight: "1.6", color: "#e1e1e1" }}
            >
              {game.description}
            </p>
            <p style={{ fontSize: "18px", color: "#aaa", marginTop: "20px" }}>
              <strong>Developers:</strong> {game.developers}
            </p>
            <BuyNow />
          </div>
        </div>
        <div
          className="trailer"
          style={{
            marginTop: "110px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            marginBottom:"110px"
          }}
        >
          <h2
            style={{
              fontSize: "25px",
              color: "#ffffff",
              textAlign: "center",
              lineHeight: "1.1",
              transform: "scaleY(1.8) scaleX(1.7)",
            }}
          >
            TRAILER
          </h2>
          <iframe
            width="70%"
            height="400"
            src={
              isHovered
                ? `${game.trailer}?playsinline=1&iv_load_policy=3&rel=0&showinfo=0&controls=1&fs=0&start=0&autoplay=1&enablejsapi=1&widgetid=1`
                : game.trailer
            }
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              borderRadius: "10px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
            }}
          ></iframe>
        </div>
      </div>
      <Footer className="footer" />
    </div>
  );
}

export default function Info() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`details ${isLoading ? "loading" : ""}`}>
      <Details />
    </div>
  );
}
