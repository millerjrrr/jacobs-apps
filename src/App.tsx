import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import { appInfo } from "./data/appInfo";
import AppDetailPage from "./pages/AppDetailPage";
import PrivacyPolicyPage from "./pages/AppPrivacyPolicyPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {appInfo.map((app) => (
            <Route
              key={app.id}
              path={`/${app.id}`}
              element={<AppDetailPage app={app} />}
            />
          ))}
          {appInfo.map((app) => (
            <Route
              key={`${app.id}-privacy`}
              path={`/${app.id}/privacy`}
              element={<PrivacyPolicyPage name={app.name} />}
            />
          ))}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
