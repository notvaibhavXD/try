import React from "react";

// Inline styles for glow and background video
const logoStyle = {
  width: 600,
  height: 600,
  margin: "96px auto 64px auto",
  display: "block",
  filter:
    "drop-shadow(0 0 10px #fff) drop-shadow(0 0 20px #fff) drop-shadow(0 0 30px #fff)",
  transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
};
const logoHoverStyle = {
  ...logoStyle,
  transform: "scale(1.15)",
};

const bgVideoStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  minWidth: "100vw",
  minHeight: "100vh",
  zIndex: 0,
  objectFit: "cover",
  opacity: 0.3,
  pointerEvents: "none",
};

function App() {
  const [logoHover, setLogoHover] = React.useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "#fff",
        fontFamily: "Inter, Arial, sans-serif",
        position: "relative",
        zIndex: 1,
        overflowX: "hidden",
      }}
    >
      {/* Background Video */}
      <iframe
        title="Astrareil BG"
        src="https://www.youtube.com/embed/DgZ_UV-xAZw?autoplay=1&mute=1&loop=1&playlist=DgZ_UV-xAZw&controls=0&showinfo=0&modestbranding=1&disablekb=1&fs=0"
        style={bgVideoStyle}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen={false}
      ></iframe>

      {/* Logo */}
      <img
        src="https://static.wixstatic.com/media/6ae033_77ab93acc84a4c10ad5425c0513fbefd~mv2.png"
        alt="Astrareil Logo"
        style={logoHover ? logoHoverStyle : logoStyle}
        onMouseEnter={() => setLogoHover(true)}
        onMouseLeave={() => setLogoHover(false)}
      />

      {/* Main Title */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "5rem",
          fontWeight: 900,
          letterSpacing: "0.05em",
          marginBottom: "2rem",
          textShadow:
            "0 2px 16px #000, 0 0 8px #fff, 0 0 32px #fff, 0 0 64px #fff",
          zIndex: 2,
          position: "relative",
        }}
      >
        ASTRAREIL
      </h1>

      {/* Hero Buttons */}
      <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", marginBottom: "4rem" }}>
        <a
          href="https://discord.gg/j6KrB2U8tC"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#2476fb",
            color: "#fff",
            padding: "1rem 2.5rem",
            borderRadius: "0.5rem",
            fontWeight: 600,
            fontSize: "1.25rem",
            textDecoration: "none",
            boxShadow: "0 2px 16px #2476fb88",
            transition: "background 0.2s, transform 0.2s",
          }}
        >
          Join Our Discord
        </a>
        <a
          href="#about"
          style={{
            background: "rgba(255,255,255,0.08)",
            color: "#fff",
            padding: "1rem 2.5rem",
            borderRadius: "0.5rem",
            fontWeight: 600,
            fontSize: "1.25rem",
            textDecoration: "none",
            border: "1px solid #fff2",
            transition: "background 0.2s, transform 0.2s",
          }}
        >
          Learn More
        </a>
      </div>

      {/* About Section */}
      <section id="about" style={{ maxWidth: 900, margin: "0 auto 5rem auto", padding: "2rem", background: "rgba(20,20,20,0.7)", borderRadius: 24, boxShadow: "0 2px 32px #0008", backdropFilter: "blur(8px)" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1rem", textAlign: "center" }}>About Astrareil</h2>
        <p style={{ fontSize: "1.25rem", color: "#ddd", textAlign: "center" }}>
          Astrareil is a professional, supportive gaming clan built on unity, discipline, and excellence. Join a community where skill meets brotherhood and every member is valued.
        </p>
      </section>

      {/* Features Section */}
      <section style={{ maxWidth: 1200, margin: "0 auto 5rem auto", display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
        {[
          {
            title: "Unity & Brotherhood",
            desc: "Strong bonds and teamwork at the core of every victory.",
          },
          {
            title: "Elite Professionalism",
            desc: "A disciplined, respectful environment for all members.",
          },
          {
            title: "Daily Events",
            desc: "Regular events and tournaments to keep you engaged.",
          },
          {
            title: "Reliable Support",
            desc: "24/7 support and guidance from experienced leaders.",
          },
        ].map((f, i) => (
          <div key={i} style={{
            flex: "1 1 250px",
            minWidth: 250,
            background: "rgba(30,30,40,0.7)",
            borderRadius: 18,
            padding: "2rem",
            margin: "1rem",
            boxShadow: "0 2px 16px #0006",
            backdropFilter: "blur(6px)",
            border: "1px solid #fff2",
            color: "#fff",
            textAlign: "center"
          }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>{f.title}</h3>
            <p style={{ fontSize: "1.1rem", color: "#ccc" }}>{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Community & CTA Section */}
      <section style={{ maxWidth: 900, margin: "0 auto 5rem auto", padding: "2rem", background: "rgba(20,20,20,0.7)", borderRadius: 24, boxShadow: "0 2px 32px #0008", backdropFilter: "blur(8px)", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1.5rem" }}>Our Growing Community</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "3rem", marginBottom: "2rem" }}>
          <div>
            <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "#fff" }}>500+</div>
            <div style={{ color: "#aaa" }}>Active Members</div>
          </div>
          <div>
            <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "#fff" }}>24/7</div>
            <div style={{ color: "#aaa" }}>Community Support</div>
          </div>
          <div>
            <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "#fff" }}>10+</div>
            <div style={{ color: "#aaa" }}>Weekly Events</div>
          </div>
        </div>
        <a
          href="https://discord.gg/j6KrB2U8tC"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#2476fb",
            color: "#fff",
            padding: "1rem 2.5rem",
            borderRadius: "0.5rem",
            fontWeight: 600,
            fontSize: "1.25rem",
            textDecoration: "none",
            boxShadow: "0 2px 16px #2476fb88",
            transition: "background 0.2s, transform 0.2s",
            display: "inline-block",
            marginTop: "2rem"
          }}
        >
          Join the Family
        </a>
      </section>

      {/* Final CTA */}
      <section style={{ maxWidth: 900, margin: "0 auto 5rem auto", padding: "2rem", background: "rgba(20,20,20,0.7)", borderRadius: 24, boxShadow: "0 2px 32px #0008", backdropFilter: "blur(8px)", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1.5rem" }}>Ready to Ascend?</h2>
        <p style={{ fontSize: "1.25rem", color: "#ddd", marginBottom: "2rem" }}>
          Experience the difference of being part of a clan that values unity, professionalism, and community above all else.
        </p>
        <a
          href="https://discord.gg/j6KrB2U8tC"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#2476fb",
            color: "#fff",
            padding: "1rem 2.5rem",
            borderRadius: "0.5rem",
            fontWeight: 600,
            fontSize: "1.25rem",
            textDecoration: "none",
            boxShadow: "0 2px 16px #2476fb88",
            transition: "background 0.2s, transform 0.2s",
            display: "inline-block"
          }}
        >
          Join Astrareil Now
        </a>
      </section>
    </div>
  );
}

export default App;
