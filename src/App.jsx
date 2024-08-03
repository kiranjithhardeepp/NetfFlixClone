import React from "react";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import TvShows from "./pages/Tvshows/TvShows";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Player from "./pages/Player/Player";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TvShows" element={<TvShows />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Player/:id" element={<Player />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
