import React from "react";
import { Box, Stack } from "@mui/material";
import { VideoCard } from "./VideoCard";
import { ChannelCard } from "./ChannelCard";
export const Videos = ({ videos, direction }) => {
  if (!videos?.length) return "Loading...";
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="flex-start"
      gap={2}
      sx={{
        color: "#fff",
        "@media(max-width:820px)": { justifyContent: "center" },
      }}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};
