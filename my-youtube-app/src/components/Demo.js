import React, { useState } from "react";

const Demo = () => {
  const [inputValue, setInputValue] = useState();
  return (
    <div className="m-4 p-2 w-full h-96 border">
      Demo Page
      <input
        className="border border-black w-80"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      >
      </input>
    </div>
  );
};

export default Demo;
