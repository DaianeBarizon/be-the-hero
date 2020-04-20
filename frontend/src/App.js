import React, { useState } from "react";
import Header from "./Header";

function App() {
  let counter = useState(0);

  function increment() {
    counter += 1;
    console.log(counter);
  }

  return (
    <>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </>
  );
}

export default App;
