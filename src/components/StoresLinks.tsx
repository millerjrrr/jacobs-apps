import { AppInfo } from "../data/appInfo";

const AppStoreSVG = `${process.env.PUBLIC_URL}/images/app-store.svg`; // your app store badge
const PlayStoreSVG = `${process.env.PUBLIC_URL}/images/play-store.svg`; // your play store badge

const StoreLinks = ({
  app,
  hideAppStore,
  hidePlayStore,
}: {
  app: AppInfo;
  hideAppStore?: boolean;
  hidePlayStore?: boolean;
}) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: "1.5rem",
      }}
    >
      {!hideAppStore && (
        <a
          href={app.ios}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-block" }}
        >
          <img
            src={AppStoreSVG}
            alt="Download on the App Store"
            style={{
              height: "4rem",
              objectFit: "contain",
              borderRadius: "0.6rem",
            }}
            className="pop-on-hover"
          />
        </a>
      )}
      {!hidePlayStore && (
        <a
          href={app.android}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-block" }}
        >
          <img
            src={PlayStoreSVG}
            alt="Get it on Google Play"
            style={{
              height: "4rem",
              objectFit: "contain",
              borderRadius: "0.5rem",
            }}
            className="pop-on-hover"
          />
        </a>
      )}
    </div>
  );
};

export default StoreLinks;
