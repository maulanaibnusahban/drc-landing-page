import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";

function RoutePage() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="/main" element={<App />} /> */}
    </Routes>
  );
}

export default RoutePage;
