import React, { useEffect, useState } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { SideBar } from "./SideBar";
import { Videos } from "./Videos";
import { FetchFromApi } from "../utils/FetchFromApi";
export const Feed = () => {
  const [selectedCategory, setSelectCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    FetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectCategory={setSelectCategory}
        />
        <Typography
          variant="body2"
          className="copyright"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          copy right 2023 Ammar
        </Typography>
      </Box>

      <Box p={2} sx={{ flex: 2, overflowY: "auto", height: "90vh" }}>
        <Typography
          variant="h4"
          mb={2}
          sx={{ color: "white", fontWeight: "bold" }}
        >
          {selectedCategory}
          <span style={{ color: "#F31503" }}> Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};
