import React, { useEffect, useRef } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { userImage, youtube_Search_api } from "../utils/constants";
const Head = () => {
  const dispatch = useDispatch();
  const input = useRef();
  // console.log(input.current.value)
  useEffect(()=>{
    const timer  = setTimeout(()=> {getSearchSuggestions()}, 20);

    return()=>{
      clearTimeout(timer);
    }
    console.log(input?.current?.value)
  }, [input?.current])
  const getSearchSuggestions = async()=>{
    const data = await fetch(youtube_Search_api + input.current.value);
    const json = await data.json();
    console.log(json);
  }
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="p-2 m-2 shadow-md grid grid-flow-col">
      <div className="flex flex-row col-span-1">
        <img
          className="h-8 m-2 cursor-pointer"
          onClick={toggleMenuHandler}
          alt="hamburger-menu"
          src="https://www.svgrepo.com/show/390485/burger-list-menu-navigation.svg"
        />
        <img
          className="h-8 m-2 cursor-pointer hidden sm:block"
          alt="youtube"
          src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
        />
      </div>
      <div className="col-span-8">
        <div className="flex flex-row">
          <input
            ref={input}
            type="text"
            className="w-full md:w-10/12 sm:w-8/12 text-center rounded-l-full border-2 border-black py-2 px-4"
            placeholder="Search"
          />
          <button className="border-black  bg-gray-200 border-l-0 rounded-r-full border-2 font-bold py-2 px-4 inline-block w-full md:w-auto sm:w-auto md:mt-0 sm:mt-0 ">
          🔎
          </button>
        </div>
      </div>

      <div className="col-span-8">
        <img
          className="h-8 m-2"
          alt="user"
          src= {userImage}
        ></img>
      </div>
    </div>
  );
};

export default Head;
