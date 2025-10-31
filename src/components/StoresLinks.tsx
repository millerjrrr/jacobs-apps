import { AppInfo } from "../data/appInfo";

const AppStoreSVG = `${process.env.PUBLIC_URL}/images/app-store.svg`; // your app store badge
const PlayStoreSVG = `${process.env.PUBLIC_URL}/images/play-store.svg`; // your play store badge

const StoreLinks = ({ app }: { app: AppInfo }) => {
  return (
    <div className="store_link_container">
      <a
        href={app.ios}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "inline-block" }}
      >
        <img
          src={AppStoreSVG}
          alt="Download on the App Store"
          className="pop-on-hover app_store_link"
        />
      </a>

      <a
        href={app.android}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "inline-block" }}
      >
        <img
          src={PlayStoreSVG}
          alt="Get it on Google Play"
          className="pop-on-hover app_store_link"
        />
      </a>
    </div>
  );
};

export default StoreLinks;
