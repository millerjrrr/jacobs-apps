import { Link } from "react-router-dom";
import AppIcon from "./AppIcon";
import { AppInfo } from "../data/appInfo";

const AppCard = ({ app }: { app: AppInfo }) => {
  return (
    <Link
      to={`${app.websiteLink || "/" + app.id}`}
      target="_blank"
      className="app-card-link"
    >
      <div
        className="card"
        style={{ position: "relative", overflow: "visible" }}
      >
        {app.name === "Griddier" && (
          <div
            style={{
              position: "absolute",
              top: 50,
              right: -30,
              width: 200,
              aspectRatio: "1 / 1",
              overflow: "visible",
            }}
          >
            <div
              style={{
                transform: "rotate(45deg)",
                transformOrigin: "center",
                backgroundColor: "white",
                width: 200,
              }}
            >
              <p
                style={{
                  color: "red",
                  fontSize: 25,
                  textAlign: "center",
                  fontWeight: "bold",
                  margin: 0,
                }}
              >
                NEW WEBSITE
              </p>
            </div>
          </div>
        )}
        <div className="card-content">
          <AppIcon app={app} />
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
