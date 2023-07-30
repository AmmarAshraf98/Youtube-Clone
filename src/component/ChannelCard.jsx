import React from "react";
import { demoProfilePicture } from "../utils/constant";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
export const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <Box
      sx={{
        borderRadius: "20px",
        boxShadow: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        // width: { xs: "356px", md: "320px" },
        width: "320px",
        height: "326px",
        margin: "auto",
        marginTop,
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          xs={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "white",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.thumbnails?.channelTitle}
            sx={{
              width: "180px",
              height: "180px",
              border: "1px solid #e3e3e3",
              borderRadius: "50%",
              mb: 2,
            }}
          />
          <Typography variant="h6" color="white">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ color: "gray", fontSize: "14px", ml: "5px" }} />
          </Typography>

          {channelDetail?.statistics?.subscriberCount && (
            <Typography color="white">
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};
