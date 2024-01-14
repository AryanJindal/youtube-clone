import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex flex-row m-2 ">
     
        <img
          alt="user"
          className="w-8 h-8 bg-gray-200 rounded-full"
          src="https://th.bing.com/th/id/R.8e2c571ff125b3531705198a15d3103c?rik=gzhbzBpXBa%2bxMA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-big-image-png-2240.png&ehk=VeWsrun%2fvDy5QDv2Z6Xm8XnIMXyeaz2fhR3AgxlvxAc%3d&risl=&pid=ImgRaw&r=0"
        />
        <div className="flex flex-col">
        <p className={"font-bold p-1 " + (name === "You" ? "text-red-700" : "")}>{name}</p>

      
      <p className="p-1 text-wrap">{message}</p>
        </div>
    </div>
  );
};

export default ChatMessage;
