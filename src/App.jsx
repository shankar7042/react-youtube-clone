import { BrowserRouter, Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000", color: "white" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:query" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
