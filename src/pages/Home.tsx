import { useState } from "react";
import AppCard from "../components/AppCard";
import ContactCard from "../components/ContactCard";
import { appInfo, type AppId } from "../data/appInfo";
import HoverPreview from "../components/HoverPreview";

const Home = () => {
  const [appShowing, setAppShowing] = useState("link-king");
  const [visible, setVisible] = useState(false);

  return (
    <div className="content-container">
      <div className="inner-container">
        <h1>Hi, I'm Jacob</h1>
        <ContactCard />
        <p>and these are my apps. Click an app to learn more.</p>
        <div className="flex flex-1 flex-row">
          {Object.keys(appInfo).map((app, _index) => (
            <div
              onMouseEnter={() => {
                setAppShowing(app as AppId);
                setVisible(true);
              }}
              onMouseLeave={() => setVisible(false)}
            >
              <AppCard key={app} app={app as AppId} index={_index} />
            </div>
          ))}
        </div>
        <HoverPreview app={appShowing as AppId} visible={visible} />
      </div>
    </div>
  );
};

export default Home;
