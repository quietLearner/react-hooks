import React, { useEffect, useState } from "react";

const List = ({ getItems }) => {
  const [items, setItems] = useState([]);

  /*
  when App render/rerender, getItems is recreated everytime, Referential equality, 
  so useEffect is called everytime, even the number is the same
  */
  useEffect(() => {
    setItems(getItems());
    console.log("update itmes in List");
  }, [getItems]);

  return items.map((i) => {
    return <p key={i}>{i}</p>;
  });
};

export default List;
