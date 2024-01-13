import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector(store=> store.app.isMenuOpen)
  return (
    isMenuOpen && <div className="mx-4 border-r-2">
    <h1 class="headings border-t-2 text-2xl font-bold  pt-3 pr-2">You</h1>

    <ul class="list-style-none py-4">
      <li className="pr-2 my-2">History</li>
      <li className="pr-2 my-2">Watch Later</li>
      <li className="pr-2 my-2">Liked videos</li>
    </ul>

    <h1 class="headings border-t-2 text-2xl font-bold  pt-3 pr-2 ">Explore</h1>

    <ul class="list-style-none py-4">
      <li className="pr-2 my-2">Trending 📈</li>
      <li className="pr-2 my-2">Shopping 🛍️</li>
      <li className="pr-2 my-2">Music 🎵</li>
      <li className="pr-2 my-2">Films 🎬</li>
      <li className="pr-2 my-2">Live 📡</li>
      <li className="pr-2 my-2">Gaming 🎮</li>
      <li className="pr-2 my-2">News 📰</li>
      <li className="pr-2 my-2">Sport ⚽</li>
      <li className="pr-2 my-2">Learning 📚</li>
      <li className="pr-2 my-2">Fashion &amp; Beauty 💄</li>
      <li className="pr-2 my-2">Podcasts 🎙️</li>
    </ul>

    <h1 class="headings border-t-2 text-2xl font-bold  pt-3 pr-2">More from YouTube</h1>

    <ul class="list-style-none py-4">
      <li className="pr-2 my-2">YouTube Premium 🌟</li>
      <li className="pr-2 my-2">YouTube Music 🎶</li>
      <li className="pr-2 my-2">YouTube Kids 👶</li>
    </ul>
    <hr></hr>
    <ul class="list-style-none py-4">
      <li className="pr-2 my-2">Settings ⚙️</li>
      <li className="pr-2 my-2">Report history 📊</li>
      <li className="pr-2 my-2">Help ❓</li>
      <li className="pr-2 my-2">Send feedback 📧</li>
    </ul>
  </div>
  );
};

export default Sidebar;
