import { Link } from "react-router-dom";
import { AppInfo } from "../data/appInfo";
import AppIcon from "../components/AppIcon";
import StoreLinks from "../components/StoresLinks";

const AppDetailPage = ({ app }: { app: AppInfo }) => {
  return (
    <div className="app-detail-container">
      <div className="app_icon_container">
        <AppIcon app={app} />
      </div>
      <StoreLinks app={app} />
      <div style={{ flexDirection: "row", display: "flex", gap: 15 }}>
        <Link to={`/${app.id}/privacy`} className="app-link">
          Privacy Policy
        </Link>
        {app.route && (
          <Link to={`${app.route.url}`} className="app-link">
            {app.route.name}
          </Link>
        )}
        {app.link && (
          <a
            href={app.link.url}
            className="app-link"
            target={app.link.nw ? "_blank" : undefined}
            rel="noreferrer"
          >
            {app.link.name}
          </a>
        )}
        {app.link2 && (
          <a
            href={app.link2.url}
            className="app-link"
            target={app.link2.nw ? "blank" : undefined}
          >
            {app.link2.name}
          </a>
        )}
      </div>
      <div className="description-container">
        <h3 className="description-title">Description</h3>
        <p className="app-detail-description">{app.description}</p>
      </div>
      <div className="description-container">
        <h3 className="description-title">Technologies</h3>
        <p className="app-detail-description">{app.technologies}</p>
      </div>
    </div>
  );
};

export default AppDetailPage;
