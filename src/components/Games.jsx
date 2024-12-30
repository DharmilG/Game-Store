const games = [
    {
      genre: 'Action', 
      titles: [
        { name: 'Grand Theft Auto V', img: 'https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png' },
        { name: 'Red Dead Redemption 2', img: 'https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg' },
        { name: 'Devil May Cry 5', img: 'https://upload.wikimedia.org/wikipedia/en/c/cb/Devil_May_Cry_5.jpg' },
        { name: 'God of War', img: 'https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg' },
        { name: 'Spider-Man: Miles Morales', img: 'https://upload.wikimedia.org/wikipedia/en/a/a3/Spider-Man_Miles_Morales.jpeg' }
      ]
    },
    { 
      genre: 'RPG', 
      titles: [
        { name: 'The Witcher 3: Wild Hunt', img: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg' },
        { name: 'Elden Ring', img: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg' },
        { name: 'Final Fantasy XVI', img: 'https://upload.wikimedia.org/wikipedia/en/0/00/Final_Fantasy_XVI_cover_art.png' },
        { name: 'Cyberpunk 2077', img: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg' },
        { name: 'Skyrim', img: 'https://upload.wikimedia.org/wikipedia/en/1/15/The_Elder_Scrolls_V_Skyrim_cover.png' }
      ]
    },
    { 
      genre: 'FPS', 
      titles: [
        { name: 'Call of Duty: Modern Warfare II', img: 'https://upload.wikimedia.org/wikipedia/en/4/4a/Call_of_Duty_Modern_Warfare_II_Key_Art.jpg' },
        { name: 'DOOM Eternal', img: 'https://upload.wikimedia.org/wikipedia/en/9/9d/Cover_Art_of_Doom_Eternal.png' },
        { name: 'Battlefield 2042', img: 'https://upload.wikimedia.org/wikipedia/en/e/ec/Battlefield_2042_cover_art.jpg' },
        { name: 'Apex Legends', img: 'https://upload.wikimedia.org/wikipedia/en/d/db/Apex_legends_cover.jpg' },
        { name: 'Counter-Strike 2', img: 'https://upload.wikimedia.org/wikipedia/en/f/f2/CS2_Cover_Art.jpg' }
      ]
    },
    { 
      genre: 'Open World', 
      titles: [
        { name: 'The Legend of Zelda: Breath of the Wild', img: 'https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg' },
        { name: 'Assassin\'s Creed Valhalla', img: 'https://upload.wikimedia.org/wikipedia/en/f/ff/Assassin%27s_Creed_Valhalla_cover.jpg' },
        { name: 'Horizon Forbidden West', img: 'https://upload.wikimedia.org/wikipedia/en/6/69/Horizon_Forbidden_West_cover_art.jpg' },
        { name: 'No Man\'s Sky', img: 'https://upload.wikimedia.org/wikipedia/en/6/67/No_Man%27s_Sky.jpg' },
        { name: 'Far Cry 6', img: 'https://upload.wikimedia.org/wikipedia/en/3/35/Far_cry_6_cover.jpg' }
      ]
    },
    { 
      genre: 'Adventure', 
      titles: [
        { name: 'Uncharted 4: A Thief\'s End', img: 'https://upload.wikimedia.org/wikipedia/en/1/1a/Uncharted_4_box_artwork.jpg' },
        { name: 'Life is Strange: True Colors', img: 'https://upload.wikimedia.org/wikipedia/en/e/e4/Life_Is_Strange_-_True_Colors.png' },
        { name: 'The Last of Us Part II', img: 'https://m.media-amazon.com/images/I/41698lMLxLL._SX300_SY300_QL70_FMwebp_.jpg' },
        { name: 'Tomb Raider (2013 reboot)', img: 'https://upload.wikimedia.org/wikipedia/en/f/f1/TombRaider2013.jpg' },
        { name: 'Journey', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/64/Journey_Title_Poster.png/330px-Journey_Title_Poster.png' }
      ]
    },
    { 
      genre: 'Racing', 
      titles: [
        { name: 'Forza Horizon 5', img: 'https://upload.wikimedia.org/wikipedia/en/8/86/Forza_Horizon_5_cover_art.jpg' },
        { name: 'Gran Turismo 7', img: 'https://upload.wikimedia.org/wikipedia/en/1/14/Gran_Turismo_7_cover_art.jpg' },
        { name: 'Need for Speed: Heat', img: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Cover_Art_of_Need_for_Speed_Heat.png' },
        { name: 'Mario Kart 8 Deluxe', img: 'https://upload.wikimedia.org/wikipedia/en/b/b5/MarioKart8Boxart.jpg' },
        { name: 'Dirt Rally 2.0', img: 'https://upload.wikimedia.org/wikipedia/en/9/90/Dirt_Rally_2.0_artwork.jpg' }
      ]
    }
  ];

const genre = ['Action','RPG', 'FPS', 'Open World', 'Adventure', 'Racing'];

export function Sidebar(){
  return(<div
    className="sidebar"
    style={{
      backgroundColor: "#1a1a1a",
      padding: "20px",
      borderRadius: "10px",
      color: "#f1f1f1",
      position: "sticky",
      top: "0",
      height: "100vh",
      overflowY: "auto",
      boxShadow: "2px 0 5px rgba(0, 0, 0, 0.5)",
    }}
  >
    <h2 style={{ textAlign: "center", margin: "-10px 0 20px 0" }}>Genres</h2>
    <ul
      className="list-group list-group-flush"
      style={{ listStyle: "none", padding: "0", margin: "0" }}
    >
      {genre.map((item, index) => (
        <li
          key={index}
          className="list-group-item"
          style={{
            padding: "10px 15px",
            borderBottom: "1px solid #333",
            textAlign: "center",
          }}
        >
          <a
            href={`#${item}`}
            style={{ textDecoration: "none", color: "#f1f1f1" }}
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  </div>
  );
}

export function Card(){
  return(
    <div style={{ backgroundColor: "#000" }}>
        {games.map((category, index) => (
        <div key={index} id={category.genre} style={{marginBottom: "40px", 
                                                    padding: "20px",
                                                    backgroundColor: "#1e1e1e",
                                                    borderRadius: "10px",
                                                    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
                                                    }} >
          <h3 style={{marginBottom: "20px",
                      color: "#f1f1f1",
                      fontSize: "24px",
                      borderBottom: "2px solid #444",
                      paddingBottom: "5px",
                    }} >
             {category.genre} Games
          </h3>
          <div style={{display: "flex",
                      flexWrap: "wrap",
                      gap: "20px",
                      justifyContent: "flex-start",
                      }} >
            {category.titles.map((title, idx) => (
              <div key={idx} style={{width: "200px",
                                     height: "270px",
                                     textAlign: "center",
                                     backgroundColor: "#2b2b2b",
                                     padding: "15px",
                                     borderRadius: "10px",
                                     boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                                     display: "flex",
                                     flexDirection: "column",
                                     alignItems: "center",
                                    }} >
                <img src={title.img} alt={title.name} style={{width: "150px",
                                                              height: "200px",
                                                              borderRadius: "5px",
                                                              marginBottom: "10px",
                                                            }} />
                <a href={title.link || "#"} style={{color: "#f1f1f1",
                                                    fontSize: "16px",
                                                    textDecoration: "none",
                                                    textAlign: "center",
                                                    margin: "15px 0 0 0",
                                                  }} >
                  {title.name}
                </a>
              </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
export default function Games() {
  return (
    <div className="games" style={{display: "grid", gridTemplateColumns: "15% 1fr", minHeight: "100vh" }}>
      <Sidebar />
      <Card />
    </div>
  );
}