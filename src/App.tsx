import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import { appInfo } from "./data/appInfo";
import AppDetailPage from "./pages/AppDetailPage";
import PrivacyPolicyPage from "./pages/AppPrivacyPolicyPage";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import React from "react";
import GriddierRangeManager from "griddier-range-manager/RangeManager";
import {
  persistor,
  store,
} from "./griddier-range-manager/range-builder/store/index";

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <div>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route
                  path="/griddier-range-manager"
                  element={<GriddierRangeManager />}
                />
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
            </div>
          </Router>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
