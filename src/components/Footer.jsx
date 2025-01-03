import "/src/App.css";
const footerLinks = [
  {
    title: "Footer Content",
    content:
      "A site created to increase and improve piracy of games. Enjoy your adventure into the world of pirates!",
  },
  {
    title: "Quick Links",
    links: ["Home", "Categories", "Contact"],
  },
  {
    title: "More Links",
    links: ["Link A", "Link B", "Link C", "Link D"],
  },
];

export default function Footer() {
  return (
    <footer style={{ color: "#f1f1f1", backgroundColor:"black" }}>
      <div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            backgroundColor: "#000",
            borderRadius: "10px",
          }}
        >
          {footerLinks.map((section, index) => (
            <div key={index} style={{ flex: "1 1 30%", padding: "10px" }}>
              <h5 style={{ textTransform: "uppercase" }}>{section.title}</h5>
              {section.content ? (
                <p>{section.content}</p>
              ) : (
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <a
                        href="/"
                        style={{ color: "#f1f1f1", textDecoration: "none" }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          padding: "10px",
          backgroundColor: "#000",
        }}
      >
        © 2026 Copyright
      </div>
    </footer>
  );
}
