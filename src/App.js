import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { Navbar } from "./component/Navbar";
import { Feed } from "./component/Feed";
import { VideoDetails } from "./component/VideoDetails";
import { ChannelDetails } from "./component/ChannelDetails";
import { SearchFeed } from "./component/SearchFeed";

// import {
//   ChannelDetails,
//   Feed,
//   Navbar,
//   SearchFeed,
//   VideoDetails,
// } from "./component/index";

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/channel/:id" element={<ChannelDetails />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
