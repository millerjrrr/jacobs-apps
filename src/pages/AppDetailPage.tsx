import { Link } from "react-router-dom";
import { AppInfo } from "../data/appInfo";
import AppIcon from "../components/AppIcon";
import StoreLinks from "../components/StoresLinks";
import WebsiteLink from "../components/WebsiteLink";

const AppDetailPage = ({ app }: { app: AppInfo }) => {
  return (
    <div className="app-detail-container">
      <div style={{ width: "50%" }}>
        <AppIcon app={app} />
      </div>
      {app.site ? <WebsiteLink url={app.site} /> : <StoreLinks app={app} />}
      {!app.site && (
        <Link to={`/${app.id}/privacy`} className="app-link">
          Privacy Policy
        </Link>
      )}
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
