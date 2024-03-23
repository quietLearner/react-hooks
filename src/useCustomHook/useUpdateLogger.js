import { useEffect } from "react";

const useUpdateLogger = (value) => {
  useEffect(() => {
    console.log(`${value} - updated at ${new Date()}`);
  }, [value]);

  return;
};

export default useUpdateLogger;
