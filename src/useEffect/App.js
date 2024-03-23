import React, { useEffect, useState } from "react";

const App = () => {
  const [resourceType, setResourceType] = useState("");
  const [items, setItems] = useState([]);

  //side effect, in function we dont have lifecycle hooks, but we have effect
  useEffect(() => {
    if (!resourceType) {
      return;
    }

    fetch(`https://jsonplaceholder.typicode.com/${resourceType}/1`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setItems(Array.isArray(json) ? json : [json]);
      });

    return () => {
      console.log(`clean up App ${resourceType}`);
    };
  }, [resourceType]);
  /*   without [], useEffect run everytime the App component is render
       [resourceType], only run when resourceType value changes
       [] is on mount
   */
  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <pre key={item.id}>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
};

export default App;
