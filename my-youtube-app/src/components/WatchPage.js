import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { Link, useSearchParams } from "react-router-dom";
import CommentsComtainer from "./CommentsComtainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col w-full ">
      <div className="px-5 flex w-full ">
        <div className="w-[90vw] h-[45vh]  aspect-w-16 aspect-h-9 bg-slate-600 md:max-w-[60vw]">
          {videoId && (
            <iframe
              src={"https://www.youtube.com/embed/" + videoId}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-[90vw] h-[45vh] sm:w-[60vw] aspect-w-16 aspect-h-9" // Set the iframe to take up full width and height of the container
            ></iframe>
          )}
        </div>
        <LiveChat/>
      </div>
      <CommentsComtainer />
    </div>
  );
};

export default WatchPage;
