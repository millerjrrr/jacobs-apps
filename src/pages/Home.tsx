import AppCard from "../components/AppCard";
import ContactCard from "../components/ContactCard";
import { appInfo, type AppId } from "../data/appInfo";

const Home = () => {
  return (
    <div className="content-container">
      <div className="inner-container">
        <h1>Hi, I'm Jacob</h1>
        <ContactCard />
        <p>and these are my apps. Click an app to learn more.</p>
        <div className="flex flex-1 flex-row">
          {Object.keys(appInfo).map((app, _index) => (
            <AppCard key={app} app={app as AppId} index={_index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
