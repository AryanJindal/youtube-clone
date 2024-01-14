import React, { useEffect, useState } from "react";
import { Youtube_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
const VideoContainerHomepage = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(Youtube_API);
    const json = await data.json();
    setVideos(json.items);
  };

  if(videos.length === 0){
    return (<div className="flex flex-wrap justify-center">
      <Shimmer/>
    </div>)
  }
  return (
    <div className="flex flex-wrap justify-center items-center aspect-auto">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}> <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};
export default VideoContainerHomepage;
