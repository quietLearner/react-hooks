import React, { useEffect, useState } from "react";

const Data = ({ url }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState();

  //side effect, in function we dont have lifecycle hooks, but we have effect
  useEffect(() => {
    setData();
    setIsError(false);
    setIsLoading(false);

    fetch(url)
      .then((response) => response.json())
      .then(setData)
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));

    return () => {
      console.log(`clean up`);
    };
  }, [url]);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : isError ? (
    <h1>Error</h1>
  ) : (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );
};

export default Data;
