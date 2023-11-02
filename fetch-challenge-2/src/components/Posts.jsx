import React, { useState } from "react";

const Posts = () => {
  const [showPosts, setShowPosts] = useState(false);
  const [posts, setPosts] = useState([]);
  const togglePosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
    setShowPosts(!showPosts);
  };
  return (
    <>
      <button onClick={togglePosts}>
        {showPosts ? "hide posts" : "show posts"}
      </button>

      <ul>
        {showPosts &&
          posts.map((item) => <li key={item.id}>{JSON.stringify(item)}</li>)}
      </ul>
    </>
  );
};

export default Posts;
