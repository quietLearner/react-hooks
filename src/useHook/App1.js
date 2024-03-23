import React, { useState } from "react";
import Data from "./Data";
const URLS = {
  USERS: "https://jsonplaceholder.typicode.com/users",
  POSTS: "https://jsonplaceholder.typicode.com/posts",
  COMMENTS: "https://jsonplaceholder.typicode.com/comments",
};

const App = () => {
  const [url, setUrl] = useState(URLS.POSTS);

  return (
    <>
      <div>
        <input
          id="user"
          type="radio"
          name="choice"
          onClick={() => setUrl(URLS.USERS)}
        />{" "}
        <label htmlFor="user">Users</label>
        <input
          id="post"
          type="radio"
          name="choice"
          onClick={() => setUrl(URLS.POSTS)}
        />
        <label htmlFor="post">Posts</label>
        <input
          id="comment"
          type="radio"
          name="choice"
          onClick={() => setUrl(URLS.COMMENTS)}
        />
        <label htmlFor="comment">Comments</label>
      </div>
      <Data url={url} />
    </>
  );
};

export default App;
