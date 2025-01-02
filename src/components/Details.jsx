import { useParams } from "react-router-dom";
import { games } from "./Games.jsx";
import Navbar from "./Navbar";
import Footer from "./Footer";
import '../App.css';
import { useEffect, useState } from "react";

export function Details() {
  const { title } = useParams();

  const game = games
    .flatMap((category) => category.titles)
    .find((game) => game.name === title);

  return (
    <div className="loading"
      style={{
        backgroundColor: "#000",
        fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
        color: "#f1f1f1",
      }}
    >
      <Navbar className="navbar"/>
      <div style={{ padding: "20px" }}>
        <h1>{game.name}</h1>
        <div  className="details" 
          style={{ display: "flex", gap: "40px", alignItems: "center" }}>
          <img
            src={game.img}
            alt={game.name}
            style={{ width: "300px", height: "400px", borderRadius: "10px" }}
          />
          <div className="game-info">
            <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
              {game.description}
            </p>
            <p style={{ fontSize: "16px", color: "#aaa" }}>
              Developers: {game.developers}
            </p>
          </div>
        </div>
        <div className="trailer" style={{ marginTop: "40px" }}>
          <h2>Trailer</h2>
          <iframe
            width="560"
            height="315"
            src={game.trailer}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <Footer className="footer"/>
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
