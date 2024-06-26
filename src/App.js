import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Work from "./pages/Work";
import Outils from "./pages/Outils";

const App = () => {
  return (
    <Router>
      <>
        <Routes>
          <Route
            path="/"
            element={
              <Home />
            }
          />
          <Route
            path="/work"
            element={
              <Work />
            }
          />
          <Route
            path="/tools"
            element={
              <Outils />
            }
          />
        </Routes>
      </>
    </Router>
  );
};

export default App;
