import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchFromApi } from "../utils/FetchFromApi";
import { Box } from "@mui/material";
import { ChannelCard } from "./ChannelCard";
import { Videos } from "./Videos";

export const ChannelDetails = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [video, setvideo] = useState([]);

  const { id } = useParams();
  console.log(channelDetail);
  useEffect(() => {
    //fetch channel details depending on id
    FetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    //fetching videos that related to this channel
    FetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        setvideo(data?.items);
      }
    );
  }, [id]);

  return (
    <Box minHeight="95vh" justifyContent={{md:'center'}}>
      <Box>
        <div
          style={{
            background:
              " linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(162,5,196,1) 0%, rgba(203,9,123,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box p={2}>
        <Videos videos={video} />
      </Box>
    </Box>
  );
};
