import React from "react";
import { useBoundStore } from "../../../app/store";

const Post = () => {
  const a = useBoundStore();
  return <div>
    <button onClick={() => a.addBear()}>Add</button>
    {a.bears}
  </div>;
};

export default Post;
