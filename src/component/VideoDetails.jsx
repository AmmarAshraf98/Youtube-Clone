import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FetchFromApi } from "../utils/FetchFromApi";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { CheckCircle } from "@mui/icons-material";
import { Videos } from "./Videos";

export const VideoDetails = () => {
  const [videoDetails, setVideoDetails] = useState(null);
  const [relatedVideos, setrelatedVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    FetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetails(data.items[0])
    );
    FetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setrelatedVideos(data.items)
    );
  }, [id]);

  if (!videoDetails?.snippet) return "Loading...";
  const {
    snippet: { title, channelTitle, channelId },
    statistics: { likeCount, viewCount },
  } = videoDetails;

  return (
    <Box minHeight="95vh">
      <Stack sx={{ flexDirection: { md: "row", sx: "column" } }} color="white">
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "81px" }}>
            <ReactPlayer
              url={`https://youtube.com/watch?v=${id}`}
              controls={true}
              className="react-player"
            />
            <Typography variant="h5" color="#fff" p={2}>
              {title}
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent="space-between"
              alignItems={{ xs: "flex-start", sm: "center" }}
              px={2}
              py={1}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant="h6"
                  color="white"
                  alignItems="center"
                  fontWeight="bold"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", marginLeft: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap={2} alignItems="center">
                <Typography
                  variant="body1"
                  color="gray"
                  sx={{ opacity: "0.7" }}
                >
                  {parseInt(viewCount).toLocaleString()} Views
                </Typography>
                <Typography
                  variant="body1"
                  color="gray"
                  sx={{ opacity: "0.7" }}
                >
                  {parseInt(likeCount).toLocaleString()} Likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          justifyContent="center"
          alignItems="center"
          px={2}
          py={{ md: 1, xs: 5 }}
        >
          <Videos videos={relatedVideos} direction={{ md: "column" }} />
        </Box>
      </Stack>
    </Box>
  );
};
