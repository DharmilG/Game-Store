import { Link } from "react-router-dom";
import "../App.css";
export const games = [
  {
    genre: "Action",
    titles: [
      {
        name: "Grand Theft Auto V",
        img: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png",
        developers: "Rockstar Games",
        description:
          "When a young street hustler, a retired bank robber, and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld, the U.S. government, and the entertainment industry, they must pull off a series of dangerous heists to survive in a ruthless city in which they can trust nobody — least of all each other.",
        trailer:
          "https://www.youtube.com/embed/hvoD7ehZPcM?si=XtvzqCMsiS5psnaz",
      },
      {
        name: "Red Dead Redemption 2",
        img: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg",
        developers: "Rockstar Games",
        description:
          "America, 1899. The end of the Wild West era has begun. After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.",
        trailer:
          "https://www.youtube.com/embed/eaW0tYpxyp0?si=SeRoZzkP-xcwfd_A",
      },
      {
        name: "Devil May Cry 5",
        img: "https://upload.wikimedia.org/wikipedia/en/c/cb/Devil_May_Cry_5.jpg",
        developers: "Capcom",
        description:
          "The Devil you know returns in this brand new entry in the over-the-top action series available on the PC. Prepare to get downright demonic with this signature blend of high-octane stylized action and otherworldly & original characters the series is known for. Director Hideaki Itsuno and the core team have returned to create the most insane, technically advanced and utterly unmissable action experience of this generation!",
        trailer:
          "https://www.youtube.com/embed/dG6_CAdiLPM?si=JEKG5hV8GnnwHIzX",
      },
      {
        name: "God of War",
        img: "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg",
        developers: "Sony Interactive Entertainment",
        description:
          "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.",
        trailer:
          "https://www.youtube.com/embed/K0u_kAWLJOA?si=YgBIgr5btXS-mkUf",
      },
      {
        name: "Spider-Man: Miles Morales",
        img: "https://upload.wikimedia.org/wikipedia/en/a/a3/Spider-Man_Miles_Morales.jpeg",
        developers: "Sony Interactive Entertainment",
        description:
          "In the latest adventure in the Marvel’s Spider-Man universe, teenager Miles Morales is adjusting to his new home while following in the footsteps of his mentor, Peter Parker, as a new Spider-Man.But when a fierce power struggle threatens to destroy his new home, the aspiring hero realizes that with great power, there must also come great responsibility. To save all of Marvel’s New York, Miles must take up the mantle of Spider-Man and own it. ",
        trailer:
          "https://www.youtube.com/embed/3wHL2VIaFcs?si=XwkS9CfHYcS3GBka",
      },
    ],
  },
  {
    genre: "RPG",
    titles: [
      {
        name: "The Witcher 3: Wild Hunt",
        img: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg",
        developers: "CD Projekt Red",
        description:
          "You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will. Your current contract? Tracking down Ciri — the Child of Prophecy, a living weapon that can alter the shape of the world.",
        trailer:
          "https://www.youtube.com/embed/XHrskkHf958?si=43L2EWkrCWE1ryYX",
      },
      {
        name: "Elden Ring",
        img: "https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg",
        developers: "FromSoftware",
        description:
          "The Lands Between are part of a vast continent where magnificent open fields and huge dungeons with complex and three-dimensional designs are seamlessly connected. As you explore, the joy of discovering unknown and overwhelming threats awaits you.Mastery of the terrain and knowledge of its secrets can help you overcome enemies and defeat formidable bosses or lead invading players into traps.",
        trailer:
          "https://www.youtube.com/embed/AKXiKBnzpBQ?si=EhJXZeFZb1HGYZSs",
      },
      {
        name: "Final Fantasy XVI",
        img: "https://upload.wikimedia.org/wikipedia/en/0/00/Final_Fantasy_XVI_cover_art.png",
        developers: "Square Enix",
        description:
          "The first fully fledged Action RPG in the mainline Final Fantasy series. An epic dark fantasy world where the fate of the land is decided by the mighty Eikons and the Dominants who wield them. This is the tale of Clive Rosfield, a warrior granted the title “First Shield of Rosaria” and sworn to protect his younger brother Joshua, the dominant of the Phoenix. Before long, Clive will be caught up in a great tragedy and swear revenge on the Dark Eikon Ifrit, a mysterious entity that brings calamity in its wake.",
        trailer:
          "https://www.youtube.com/embed/aPT26Dd3OzE?si=nknhVG6jiMl2ROh7",
      },
      {
        name: "Cyberpunk 2077",
        img: "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg",
        developers: "CD Projekt Red",
        description:
          "Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival. Improved and featuring all-new free additional content, customize your character and playstyle as you take on jobs, build a reputation, and unlock upgrades. The relationships you forge and the choices you make will shape the story and the world around you. Legends are made here. What will yours be?",
        trailer:
          "https://www.youtube.com/embed/xXFTRHvMtlY?si=pFNAFi3eN_mc6j2T",
      },
      {
        name: "Skyrim",
        img: "https://upload.wikimedia.org/wikipedia/en/1/15/The_Elder_Scrolls_V_Skyrim_cover.png",
        developers: "Bethesda Softworks",
        description:
          "Winner of more than 200 Game of the Year Awards, The Elder Scrolls V: Skyrim Special Edition brings the epic fantasy to life in stunning detail. The Special Edition includes the critically acclaimed game and add-ons with all-new features like remastered art and effects, volumetric god rays, dynamic depth of field, screen-space reflections, and more.",
        trailer:
          "https://www.youtube.com/embed/JSRtYpNRoN0?si=JxvP00IGZIYAHX0O",
      },
    ],
  },
  {
    genre: "FPS",
    titles: [
      {
        name: "Call of Duty: Modern Warfare II",
        img: "https://upload.wikimedia.org/wikipedia/en/4/4a/Call_of_Duty_Modern_Warfare_II_Key_Art.jpg",
        developers: "Infinity Ward",
        description:
          "From small-scale, high-stakes infiltration tactics to highly classified missions, players will need to leverage new weapons, vehicles, and cutting-edge equipment to take on their enemies. Gear up and take the fight offshore as you siege enemies underwater, breach a highly fortified enemy base, infil along the canals, and liberate much-needed allies at a black site hidden within the mountains.",
        trailer:
          "https://www.youtube.com/embed/ztjfwecrY8E?si=juHFnCNNoi_z0IT5",
      },
      {
        name: "Battlefield 2042",
        img: "https://upload.wikimedia.org/wikipedia/en/e/ec/Battlefield_2042_cover_art.jpg",
        developers: "Electronic Arts",
        description:
          "Battlefield™ 2042 is a first-person shooter that marks the return to the iconic all-out warfare of the franchise. With the help of a cutting-edge arsenal, you can engage in intense, immersive multiplayer battles.",
        trailer:
          "https://www.youtube.com/embed/ASzOzrB-a9E?si=EcRWrP2BLFUc6_ni",
      },
      {
        name: "Apex Legends",
        img: "https://upload.wikimedia.org/wikipedia/en/d/db/Apex_legends_cover.jpg",
        developers: "Respawn Entertainment",
        description:
          "Conquer with character in Apex Legends, a free-to-play* Hero shooter where legendary characters with powerful abilities team up to battle for fame & fortune on the fringes of the Frontier. Master an ever-growing roster of diverse Legends, deep-tactical squad play, and bold, new innovations that go beyond the Battle Royale experience — all within a rugged world where anything goes. Welcome to the next evolution of Hero Shooter.",
        trailer:
          "https://www.youtube.com/embed/oQtHENM_GZU?si=D_weUI0jHkooAEm8",
      },
      {
        name: "Counter-Strike 2",
        img: "https://upload.wikimedia.org/wikipedia/en/f/f2/CS2_Cover_Art.jpg",
        developers: "Valve",
        description:
          "For over two decades, Counter-Strike has offered an elite competitive experience, one shaped by millions of players from across the globe. And now the next chapter in the CS story is about to begin. This is Counter-Strike 2. A free upgrade to CS:GO, Counter-Strike 2 marks the largest technical leap in Counter-Strike’s history. Built on the Source 2 engine, Counter-Strike 2 is modernized with realistic physically-based rendering, state of the art networking, and upgraded Community Workshop tools.",
        trailer:
          "https://www.youtube.com/embed/c80dVYcL69E?si=xp6DbfVmIvoVD7bJ",
      },
      {
        name: "Call of Duty: Black Ops 6",
        img: "https://upload.wikimedia.org/wikipedia/en/c/c9/Call_of_Duty_Black_Ops_6_Key_Art.png",
        developers: "Infinity Ward",
        description:
          "The Black Ops 6 Campaign provides dynamic moment-to-moment gameplay that includes a variety of play spaces with blockbuster set pieces and action-packed moments, high-stakes heists, and cloak-and-dagger spy activity. Black Ops 6 also marks the return of Round-Based Zombies, the fan-favorite mode where players will take down hordes of the undead in two brand-new maps at launch. Post-launch, players can look forward to even more exciting maps and groundbreaking experiences dropping into both Multiplayer and Zombies.",
        trailer:
          "https://www.youtube.com/embed/oyZY_BiTmd8?si=QLNY7xUMQK-nAxGY",
      },
    ],
  },
  {
    genre: "Open World",
    titles: [
      {
        name: "The Legend of Zelda: Breath of the Wild",
        img: "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
        developers: "Nintendo",
        description:
          "Breath of the Wild takes place at the end of the Zelda timeline in the kingdom of Hyrule.[19] In ancient times, the ancient Sheikah race had developed Hyrule into an advanced civilization, protected by four enormous animalistic machines called the Divine Beasts and an army of autonomous weapons called Guardians.[20] When an ancient evil known as Calamity Ganon appeared and threatened Hyrule, four great warriors were given the title of Champion, and each piloted one of the Divine Beasts to weaken Ganon while the princess with the blood of the goddess and her appointed knight fought and defeated him by sealing him away.",
        trailer:
          "https://www.youtube.com/embed/zw47_q9wbBE?si=xc8cqfssGo9zwiAw",
      },
      {
        name: "Assassin's Creed Valhalla",
        img: "https://upload.wikimedia.org/wikipedia/en/f/ff/Assassin%27s_Creed_Valhalla_cover.jpg",
        developers: "Ubisoft",
        description:
          "Become Eivor, a Viking raider raised to be a fearless warrior, and lead your clan from icy desolation in Norway to a new home amid the lush farmlands of ninth-century England. Find your settlement and conquer this hostile land by any means to earn a place in Valhalla. England in the age of the Vikings is a fractured nation of petty lords and warring kingdoms. Beneath the chaos lies a rich and untamed land waiting for a new conqueror. Will it be you?",
        trailer:
          "https://www.youtube.com/embed/rKjUAWlbTJk?si=JOGTPKYIie9OJsqG",
      },
      {
        name: "Horizon Forbidden West",
        img: "https://upload.wikimedia.org/wikipedia/en/6/69/Horizon_Forbidden_West_cover_art.jpg",
        developers: "Sony Interactive Entertainment",
        description:
          "Join Aloy as she braves a majestic but dangerous new frontier that holds mysterious new threats. This Complete Edition allows you to enjoy the critically acclaimed Horizon Forbidden West on PC in its entirety with bonus content, including the Burning Shores story expansion that picks up after the main game.",
        trailer:
          "https://www.youtube.com/embed/UxDWGW7Z67I?si=fhJXElh0BY-Iut6H",
      },
      {
        name: "No Man's Sky",
        img: "https://upload.wikimedia.org/wikipedia/en/6/67/No_Man%27s_Sky.jpg",
        developers: "Hello Games",
        description:
          "Inspired by the adventure and imagination that we love from classic science-fiction, No Man's Sky presents you with a galaxy to explore, filled with unique planets and lifeforms, and constant danger and action. In No Man's Sky, every star is the light of a distant sun, each orbited by planets filled with life, and you can go to any of them you choose. Fly smoothly from deep space to planetary surfaces, with no loading screens, and no limits. In this infinite procedurally generated universe, you'll discover places and creatures that no other players have seen before - and perhaps never will again.",
        trailer:
          "https://www.youtube.com/embed/nLtmEjqzg7M?si=1HcNfyqtGeGxJh-T",
      },
      {
        name: "Far Cry 6",
        img: "https://upload.wikimedia.org/wikipedia/en/3/35/Far_cry_6_cover.jpg",
        developers: "Ubisoft",
        description:
          "Welcome to Yara, a tropical paradise frozen in time. As the dictator of Yara, Antón Castillo is intent on restoring his nation to its former glory by any means necessary, with his son, Diego, following in his bloody footsteps. Their oppressive rule has ignited a revolution. Play as Dani Rojas, a local Yaran, as you fight alongside a modern-day guerrilla revolution to liberate Yara. Play the full game solo or with a friend in co-op. Explore jungles, beaches, and cities on foot, horseback, or in a wide variety of vehicles including boats and Jet Skis as you fight against Castillo’s regime in the most expansive Far Cry to date.",
        trailer:
          "https://www.youtube.com/embed/DFze21M_O6s?si=m_TxwDNQESVhBD_d",
      },
    ],
  },
  {
    genre: "Adventure",
    titles: [
      {
        name: "Uncharted 4: A Thief's End",
        img: "https://upload.wikimedia.org/wikipedia/en/1/1a/Uncharted_4_box_artwork.jpg",
        developers: "Sony Interactive Entertainment",
        description:
          "Seek your fortune and leave your mark on the map in the UNCHARTED: Legacy of Thieves Collection. Uncover the thrilling cinematic storytelling and the largest blockbuster action set pieces in the UNCHARTED franchise, packed with all the wit, cunning, and over the top moments of the beloved thieves – Nathan Drake and Chloe Frazer.",
        trailer:
          "https://www.youtube.com/embed/hh5HV4iic1Y?si=x6X2m28EyLGeQfq8",
      },
      {
        name: "Life is Strange: True Colors",
        img: "https://upload.wikimedia.org/wikipedia/en/e/e4/Life_Is_Strange_-_True_Colors.png",
        developers: "Square Enix",
        description:
          "Life is Strange is an award-winning and critically acclaimed episodic adventure game that allows the player to rewind time and affect the past, present and future. Follow the story of Max Caulfield, a photography senior who discovers she can rewind time while saving her best friend Chloe Price. The pair soon find themselves investigating the mysterious disappearance of fellow student Rachel Amber, uncovering a dark side to life in Arcadia Bay. Meanwhile, Max must quickly learn that changing the past can sometimes lead to a devastating future.",
        trailer:
          "https://www.youtube.com/embed/PNt1aSkYfWk?si=wC6vUdQQo4sZznLy",
      },
      {
        name: "The Last of Us Part II",
        img: "https://m.media-amazon.com/images/I/41698lMLxLL._SX300_SY300_QL70_FMwebp_.jpg",
        developers: "Sony Interactive Entertainment",
        description:
          "There is much to admire in Naughty Dog’s ultra-dark revenge video game The Last Of Us Part II. And there is much to critique. The devs who poured their blood, sweat and tears into the game deserve praise for its technical achievements. The writers who mangled the story deserve the lumps that follow.",
        trailer:
          "https://www.youtube.com/embed/vhII1qlcZ4E?si=oVXW9y5Sf7mR3bgl",
      },
      {
        name: "Tomb Raider (2013 reboot)",
        img: "https://upload.wikimedia.org/wikipedia/en/f/f1/TombRaider2013.jpg",
        developers: "Square Enix",
        description: "",
        trailer:
          "https://www.youtube.com/embed/M4SG6DfVvLs?si=ZONYzm3KRDE65XbI",
      },
      {
        name: "Journey",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/6/64/Journey_Title_Poster.png/330px-Journey_Title_Poster.png",
        developers: "Square Enix",
        description:
          "Explore the ancient, mysterious world of Journey as you soar above ruins and glide across sands to discover its secrets. Play alone or in the company of a fellow traveler and explore its vast world together. Featuring stunning visuals and a Grammy-nominated musical score, Journey delivers a breathtaking experience like no other.",
        trailer:
          "https://www.youtube.com/embed/mU3nNT4rcFg?si=jWxRj0g7rmo-Enjl",
      },
    ],
  },
  {
    genre: "Racing",
    titles: [
      {
        name: "Forza Horizon 5",
        img: "https://upload.wikimedia.org/wikipedia/en/8/86/Forza_Horizon_5_cover_art.jpg",
        developers: "Microsoft Studios",
        description:
          "Your Ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars. Lead breathtaking expeditions across the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars.",
        trailer:
          "https://www.youtube.com/embed/Rv7xLt5yNsM?si=4f6RmxVsR6ghOm4y",
      },
      {
        name: "Gran Turismo 7",
        img: "https://upload.wikimedia.org/wikipedia/en/1/14/Gran_Turismo_7_cover_art.jpg",
        developers: "Sony Interactive Entertainment",
        description:
          "Whether you’re a competitive or casual racer, collector, tuner, livery designer or photographer – find your line with a staggering collection of game modes including fan-favourites like GT Campaign, Arcade and Driving School. With the reintroduction of the legendary GT Simulation Mode, buy, tune and race your way through a rewarding solo campaign as you unlock new cars and challenges. And if you love going head-to-head with others, hone your skills and compete in the GT Sport Mode.",
        trailer:
          "https://www.youtube.com/embed/1tBUsXIkG1A?si=5YkuSKrnD8BKt8X5",
      },
      {
        name: "Need for Speed: Heat",
        img: "https://upload.wikimedia.org/wikipedia/en/7/7f/Cover_Art_of_Need_for_Speed_Heat.png",
        developers: "Electron Arts",
        description:
          "A thrilling race experience pits you against a city’s rogue police force as you battle your way into street racing’s elite. Hustle by day and risk it all at night in Need for Speed™ Heat, a white-knuckle street racer, where the lines of the law fade as the sun starts to set. By day, Palm City hosts the Speedhunter Showdown, a sanctioned competition where you earn Bank to customize and upgrade your high-performance cars. At night, ramp up the intensity in illicit street races that build your reputation, getting you access to bigger races and better parts. But stay ready – cops are waiting and not all of them play fair.",
        trailer:
          "https://www.youtube.com/embed/p4Q3uh2RaZo?si=Mu6cIuo4qRVykUK9",
      },
      {
        name: "Mario Kart 8 Deluxe",
        img: "https://upload.wikimedia.org/wikipedia/en/b/b5/MarioKart8Boxart.jpg",
        developers: "Nintendo",
        description:
          "Burn rubber across Mushroom Kingdom raceways—underwater, in the sky, upside-down in zero-g, and past the finish—for the win! Get revved up for local multiplayer*, online** in-game tournaments, a revamped battle mode, and more. Stay fresh in the Mario Kart™ 8 Deluxe game by playing as guest characters Inkling Girl and Inkling Boy! You can use their Splatoon inspired karts on their battle mode stage, Urchin Underpass. There are also returning items, like Boo, the item-stealing ghost, and the Feather, used exclusively in battle mode. Veterans rejoice—you can hold two items at once! Prove you’re the world’s best racer and battler in online tournaments, or simply race and battle friends online. ",
        trailer:
          "https://www.youtube.com/embed/tKlRN2YpxRE?si=Eps6pK1nCXN_0cnO",
      },
      {
        name: "Dirt Rally 2.0",
        img: "https://upload.wikimedia.org/wikipedia/en/9/90/Dirt_Rally_2.0_artwork.jpg",
        developers: "Microsoft Studios",
        description:
          "You will need to rely on your instincts with the most immersive and truly focused off-road experience yet, including a new authentic handling model, tyre choice and surface degradation. Power your rally car through real-life off-road environments in New Zealand, Argentina, Spain, Poland, Australia and the USA, with only your co-driver and instincts to guide you. Race on eight official circuits from the FIA World Rallycross championship, complete with licensed Supercars and support series. Develop your team and cars around race strategies, and progress through a varied selection of Events and Championships in both a single player Career Campaign and a competitive online environment.",
        trailer:
          "https://www.youtube.com/embed/RQ7JvIncd4Y?si=R9nvISWFO9NnFG8Z",
      },
    ],
  },
];

const genre = ["Action", "RPG", "FPS", "Open World", "Adventure", "Racing"];

export function Sidebar() {
  return (
    <div
      className="sidebar"
      style={{
        fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
        backgroundColor: "#1a1a1a",
        padding: "20px",
        borderRadius: "10px",
        color: "#f1f1f1",
        position: "sticky",
        top: "0",
        height: "auto",
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

export function Card() {
  return (
    <div
      style={{
        backgroundColor: "#000",
        fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
      }}
    >
      {games.map((category, index) => (
        <div
          key={index}
          id={category.genre}
          style={{
            marginBottom: category.genre === "Racing" ? "0px" : "40px",
            padding: "20px",
            backgroundColor: "#1e1e1e",
            borderRadius: "10px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
              borderBottom: "2px solid #444",
            }}
          >
            <h3
              style={{
                marginBottom: "20px",
                color: "#f1f1f1",
                fontSize: "24px",
                paddingBottom: "5px",
                position: "relative",
                cursor: "pointer",
              }}
              className="genre-heading"
            >
              {category.genre} Games
            </h3>
            <h3
              style={{
                position: "relative",
                cursor: "pointer", 
              }}
              className="see-all-link"
            >
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginRight: "10px",
                }}
              >
                See all&gt;
              </Link>
            </h3>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "23px",
              justifyContent: "flex-start",
            }}
          >
            {category.titles.map((title, idx) => (
              <div
                key={idx}
                style={{
                  width: "200px",
                  height: "270px",
                  textAlign: "center",
                  backgroundColor: "#2b2b2b",
                  padding: "15px",
                  borderRadius: "10px",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={title.img}
                  alt={title.name}
                  style={{
                    width: "150px",
                    height: "200px",
                    borderRadius: "5px",
                    marginBottom: "10px",
                  }}
                />
                <Link
                  className="game-link"
                  to={`/details/${title.name}`}
                  style={{
                    color: "#f1f1f1",
                    fontSize: "16px",
                    textDecoration: "none",
                    textAlign: "center",
                    margin: "15px 0 0 0",
                    fontWeight: "600",
                  }}
                >
                  {title.name}
                </Link>
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
    <div
      className="games"
      style={{
        display: "grid",
        gridTemplateColumns: "15% 1fr",
        minHeight: "100vh",
      }}
    >
      <Sidebar />
      <Card />
    </div>
  );
}
