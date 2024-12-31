import { Component } from "react";

export function GTAV() {
  return (
    <div>
      <h1>GTAV</h1>
      <h2>Best selling game of all time is back again.</h2>
      <p>
        When a young street hustler, a retired bank robber, and a terrifying
        psychopath find themselves entangled with some of the most frightening
        and deranged elements of the criminal underworld, the U.S. government,
        and the entertainment industry, they must pull off a series of dangerous
        heists to survive in a ruthless city in which they can trust nobody —
        least of all each other.
      </p>
    </div>
  );
}

class Video extends Component {
  render() {
    return (
      <div>
        <video
          src={
            "../../assets/trailers/Grand Theft Auto V_ The Official Trailer.mp4"
          }
          controls
        />
      </div>
    );
  }
}

export default function GrandTheftAutoV() {
  return (
    <div>
      <GTAV />
      <Video />
    </div>
  );
}
