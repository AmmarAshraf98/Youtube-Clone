import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchFromApi } from "../utils/FetchFromApi";
import { Videos } from "./Videos";

export const SearchFeed = () => {
  const [target, setTarget] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    FetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setTarget(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ flex: 2, overflowY: "auto", height: "90vh" }}>
      <Typography variant="h4" mb={1.5} sx={{ color: "white" }}>
        Searching for: <span style={{ color: "#F31503" }}> {searchTerm}</span>
      </Typography>
      <Box>
        <Videos videos={target} />
      </Box>
    </Box>
  );
};
