import React from "react";
import { BrowserRouter as Roter, Routes, Route } from "react-router-dom";

import Home from "./containers/Home";
import Request from "./containers/Request";

function myRoutes() {
  return (
    <Roter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/requests" element={<Request />} />
      </Routes>
    </Roter>
  );
}

export default myRoutes;
