const Footer = () => {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: "30px",
        backgroundColor: "#707070",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "0.9rem",
        borderTop: "1px solid #ddd",
        zIndex: 999,
      }}
    >
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <a href="mailto:jacob@link-king.com" className="app-link">
          jacob@link-king.com
        </a>
        <a
          href="https://www.linkedin.com/in/jacobmiller93/"
          target="_blank"
          rel="noopener noreferrer"
          className="app-link"
        >
          LinkedIn
        </a>
        <a
          href="https://www.facebook.com/jacob.rwr.miller"
          target="_blank"
          rel="noopener noreferrer"
          className="app-link"
        >
          Facebook
        </a>
      </div>
    </footer>
  );
};

export default Footer;
