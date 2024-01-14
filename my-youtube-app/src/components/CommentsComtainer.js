import React from "react";
import { allCommentsData } from "../utils/CommentsData";
import { userImage } from "../utils/constants";
const Comment = ({ data }) => {
//   if (data === null) return;

  const { name, text, replies } = data;

  return (
    <div className="flex p-2 rounded-md">
      <img className="max-w-12 max-h-12 rounded-full"alt="user" src={userImage} />
      <div className="mx-2">
        <p className="font-bold ">{name}</p>
        <p>{text}</p>

        <div className="flex flex-col border-l-2">
            {replies && replies.map((e,index) => <Comment key={index} data={e}/>)}
        </div>
      </div>
    </div>
  );
};
const CommentsComtainer = () => {
  return (
    <div className="m-2 p-5">
      <h1 className="text-2xl font-bold">Comments</h1>
      {allCommentsData && allCommentsData.map((e,index) => <Comment key={index} data={e}/>)}
      
      </div>
  );
};

export default CommentsComtainer;
