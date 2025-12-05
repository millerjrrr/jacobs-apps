import { AppInfo } from "../data/appInfo";

const AppIcon = ({ app }: { app: AppInfo }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img
        src={app.image}
        alt={`App Icon:${app.name}`}
        style={{
          width: "90%",
          aspectRatio: 1,
          margin: 15,
          marginBottom: 0,
          borderRadius: "22%", // mimics iOS app curve
          boxShadow: "0 0px 10px rgba(0, 0, 0, 0.5)",
          objectFit: "cover",
          backgroundColor: "white",
          display: "block",
        }}
        className="pop-on-hover"
      />
      <a href={`/#/${app.id}`} style={{ textDecoration: "none" }}>
        <h3 className="app-title">{app.name}</h3>
      </a>
    </div>
  );
};

export default AppIcon;
