import AppCard from "../components/AppCard";
import { appInfo } from "../data/appInfo";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <h1 className="landing-title">Hi, I'm Jacob</h1>
      <img
        src={`${process.env.PUBLIC_URL}/images/jacob-profile.jpg`}
        alt="Your Name"
        className="profile-image"
      />
      <p className="landing-description">
        and these are my apps. Click an app to learn more.
      </p>
      <div className="app-grid">
        {appInfo.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
