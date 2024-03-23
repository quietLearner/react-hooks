import React, { use } from "react";

const Data = ({ url }) => {
  const data = use(fetch(url).then((response) => response.json()));

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>{" "}
    </>
  );
};

export default Data;
