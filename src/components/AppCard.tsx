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
      <div className="card">
        <div className="card-content">
          <AppIcon app={app} />
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
