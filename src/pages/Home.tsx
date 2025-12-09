import AppCard from "../components/AppCard";
import { appInfo, type AppId } from "../data/appInfo";

const Home = () => {
  return (
    <div className="content-container">
      <div className="inner-container">
        <h1 className="landing-title">Hi, I'm Jacob</h1>
        <img
          src={"/images/jacob-profile.jpg"}
          alt="Jacob's profile picture"
          className="profile-image fade-circle"
        />
        <p>and these are my apps. Click an app to learn more.</p>
        <div className="flex flex-1 flex-col md:flex-row">
          {Object.keys(appInfo).map((app) => (
            <AppCard key={app} app={app as AppId} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
