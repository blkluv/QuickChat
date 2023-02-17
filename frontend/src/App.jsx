import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/index.css";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoute";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import { VideoProvider } from "./context/VideoContext";
import LandingPage from "./pages/LandingPage";

function App() {
  const [height, setHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ height: height }}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<LandingPage />} />
          <Route path="*" element={<LandingPage />} />
          <Route path="/login" element={<PublicRoute children={<Login />} />} />
          <Route
            path="/register"
            element={<PublicRoute children={<Register />} />}
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute
                children={
                  <VideoProvider>
                    <Dashboard />
                  </VideoProvider>
                }
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
