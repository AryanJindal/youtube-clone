import React, { useEffect, useRef, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { userImage, youtube_Search_api } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
const Head = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState(null);
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const searchCache =  useSelector(store => store.search) 
  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCache[input]){
        setSuggestions(caches[input])
        // console.log("hehe")
      }else{
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);
  const getSearchSuggestions = async () => {
    if(input===null) return;
    const data = await fetch(youtube_Search_api + input);
    const json = await data.json();
    console.log(json);
    setSuggestions(json[1]);
    dispatch(cacheResults({
      [input] : json[1]
    }))
  };
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="p-2 m-2 shadow-md grid grid-flow-col fixed bg-white w-full">
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
        <div className="search flex flex-row">
          <input
            onChange={(e) => setInput(e.target.value)}
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}
            type="text"
            className="w-full md:w-10/12 sm:w-8/12  rounded-l-full border-2 border-black py-2 px-4"
            placeholder="Search"
          />
          <button className="w-auto px-3 border-black  bg-gray-200 border-l-0 rounded-r-full border-2 font-bold py-2  inline-block w-full md:w-auto sm:w-auto md:mt-0 sm:mt-0 ">
            🔎
          </button>
        </div>

        {showSuggestions && (<div className="suggestions fixed bg-white py-2 w-auto rounded-lg min-w-60 max-w-[50vw]" >
          <ul>
          {suggestions && suggestions.map(suggestion => <li key={suggestion} className="py-2 px-5 shadow-sm hover:bg-gray-100 hover:font-bold">🔎 {suggestion}</li>)}
          </ul>
        </div>)}
      </div>

      <div className="col-span-8">
        <img className="h-8 m-2" alt="user" src={userImage}></img>
      </div>
    </div>
  );
};

export default Head;
