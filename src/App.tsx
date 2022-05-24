import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import PageNotFound from "./shared/PageNotFound";
import Settings from "./shared/Settings";
import SideNav from "./shared/SideNav";

//lazy loading components
// const Dashboard = React.lazy(() => import("./components/dashboard/Dashboard"));
// const Navbarh = React.lazy(() => import("./shared/Navbar"));
// const Settingsh = React.lazy(() => import("./shared/Settings"));
// const SideNavh = React.lazy(() => import("./shared/SideNav"));
// const PageNotFoundh = React.lazy(() => import("./shared/PageNotFound"));

function App() {
  return (
    <Suspense fallback={<div></div>}>
      <Router>
        <div className="loader"></div>
        <div id="app">
          <div className="main-wrapper main-wrapper-1">
            <div className="navbar-bg"></div>
            <Navbar />
            <SideNav />
            <div className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
              <Settings />
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
