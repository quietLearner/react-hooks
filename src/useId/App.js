import React from "react";
import EmailForm from "./EmailForm";

const App = () => {
  return (
    <>
      <EmailForm />
      <article style={{ marginBlock: "1rem" }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
        ullam natus culpa aperiam, ut, repellat iusto, quis facilis esse velit
        similique voluptatem soluta dolores? Temporibus ea vitae libero
        doloribus quo?
      </article>
      <EmailForm />
    </>
  );
};

export default App;
