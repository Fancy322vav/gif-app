import React, { useState } from "react";
import useGif from "../useGif";

const TagV2 = () => {
  const [tag, setTag] = useState("cats");

  const { gif, fetchGif } = useGif();

  const handleClick = () => {
    fetchGif(tag);
  };

  return (
    <div className="container">
      <h1>Random {tag} Gif</h1>
      <img width="500" src={gif} alt="Random gif" />
      <input value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={handleClick}>Click for new one</button>
    </div>
  );
};

export default TagV2;
