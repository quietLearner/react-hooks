import React, { useMemo, useDeferredValue, useEffect } from "react";

const List = ({ input }) => {
  const LIST_SIZE = 20000;

  // dont work on input immediate, until the use stops, then start to work on it
  const defeeredValue = useDeferredValue(input);
  //   const list = useMemo(() => {
  //     const l = [];
  //     for (let i = 0; i < LIST_SIZE; i++) {
  //       l.push(<div key={i}>{input}</div>);
  //     }
  //     return l;
  //   }, [input]);

  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{defeeredValue}</div>);
    }
    return l;
  }, [defeeredValue]);

  /*
    when user type a, it will show twice
    input: a, deferred value: 
    input: a, deferred value: a

    if type afsdfad very qucik
    input: a, deferred value: 
    List.js:30 input: af, deferred value: 
    List.js:30 input: afs, deferred value: 
    List.js:30 input: afsd, deferred value: 
    List.js:30 input: afsdf, deferred value: 
    List.js:30 input: afsdfa, deferred value: 
    List.js:30 input: afsdfad, deferred value: 
    List.js:30 input: afsdfad, deferred value: afsdfad

  */
  useEffect(() => {
    console.log(`input: ${input}, deferred value: ${defeeredValue}`);
  }, [input, defeeredValue]);

  return list;
};

export default List;
