import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { useSearchParams } from "react-router-dom";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chats = useSelector((store) => store.chats.messages);
  const [myMessage, setMyMessage] = useState("");

  useEffect(() => {
    const generateRandomInterval = () =>
      Math.floor(Math.random() * (2000 - 50 + 1)) + 50;

    const i = setInterval(() => {
      // Generate random data
      const names = [
        "Aryan",
        "John",
        "Emma",
        "Mike",
        "Sophia",
        "David",
        "Olivia",
        "Daniel",
      ];
      const randomName = names[Math.floor(Math.random() * names.length)];

      const messages = [
        "Hello",
        "How are you?",
        "Nice to meet you",
        "What's up?",
        "I'm doing well, thanks!",
        "It's a beautiful day",
        "Any exciting plans?",
        "Coding is fun!",
      ];
      const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];

      // Dispatch random message
      dispatch(
        addMessage({
          name: randomName,
          message: randomMessage,
        })
      );
    }, generateRandomInterval());

    // Clear the interval when the component is unmounted
    return () => clearInterval(i);
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (myMessage.trim() !== "") {
      // Dispatch user message
      dispatch(
        addMessage({
          name: "You",
          message: myMessage,
        })
      );

      // Clear input field
      setMyMessage("");
    }
  };

  return (
    <div className=" hidden flex flex-col border p-1 m-1 bg-slate-100 rounded-md w-full sm:block">
      <div className="h-full w-full rounded-lg mx-3 p-2 border border-black max-h-[45vh] overflow-y-scroll flex flex-col-reverse">
        {chats.map((chat, index) => (
          <ChatMessage key={index} name={chat.name} message={chat.message} />
        ))}
      </div>
      <form className="flex" onSubmit={handleSubmit}>
        <input
          className="w-10/12 p-2 ml-3 border border-black rounded-md"
          value={myMessage}
          onChange={(e) => {
            setMyMessage(e.target.value);
          }}
        ></input>
        <button
          type="submit"
          className="mx-1 p-2 bg-red-500 font-bold rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
