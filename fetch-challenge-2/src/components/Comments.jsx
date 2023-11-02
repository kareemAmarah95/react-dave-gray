import React, { useState } from "react";

const Comments = () => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const toggleComments = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setComments(data));
    setShowComments(!showComments);
  };
  return (
    <>
      <button onClick={toggleComments}>
        {showComments ? "hide comments" : "show comments"}
      </button>

      <ul>
        {showComments &&
          comments.map((item) => <li key={item.id}>{JSON.stringify(item)}</li>)}
      </ul>
    </>
  );
};

export default Comments;
