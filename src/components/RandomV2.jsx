import React from "react";
import useGif from "../useGif";

const TagV2 = () => {
  const { gif, fetchGif } = useGif();

  return (
    <div className="container">
      <h1>Random Gif</h1>
      <img width="500" src={gif} alt="Random gif" />
      <button onClick={fetchGif}>Click for new one</button>
    </div>
  );
};

export default TagV2;
