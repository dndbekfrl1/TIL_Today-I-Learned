import React, { useState } from "react";

function UseState() {
  let [state, setState] = useState({
    name: "Luna",
    age: 2,
    legs: 4,
    state: "sleeping",
  });

  const changeName = () => {
    setState({ ...state, name: "Felix" });
  };

  return (
    <>
      <h2>Hello Hooks</h2>
      <button onClick={changeName}>Change Name To "Felix"</button>
      <div>
        <div>Name: {state.name}</div>
        <div>{state.legs} legs</div>
        <div>{state.age} years old</div>
        <div>{state.state}</div>
      </div>
    </>
  );
}

export default UseState;
