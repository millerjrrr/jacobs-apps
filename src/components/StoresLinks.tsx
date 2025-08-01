import React from "react";
import { AppInfo } from "../data/appInfo";

const AppStoreSVG = "images/app-store.svg"; // your app store badge
const PlayStoreSVG = "images/play-store.svg"; // your play store badge

const StoreLinks = ({ app }: { app: AppInfo }) => {
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
    </div>
  );
};

export default StoreLinks;
