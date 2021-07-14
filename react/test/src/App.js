import "./App.css";
import React, { Component, useRef, useState } from "react";
import ReactDOM from "react-dom";
import InputSample from "./InputSample";
import InputSample2 from "./InputSample2";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import UseState from "./UseState";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const nextId = useRef(4);
  const { username, email } = inputs;
  //username과 email은 onChage setInputs가 호출될때마다 갱신되는건가?? -> 네 그렇습니다.
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    console.log("onchange!!", username, email);
  };

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers([...users, user]);

    setInputs({
      username: "",
      email: "",
    });

    nextId.current += 1;
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ]);

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList
        users={users}
        onRemove={onRemove}
        onToggle={onToggle}
      ></UserList>

      <UseState />
    </>
  );
}
export default App;

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

// function tick() {
//   ReactDOM.render(<Clock />, document.getElementById("root"));
// }

// setInterval(tick, 1000);

// class App extends React.Component {
//   render() {
//     return <div>hello</div>;
//   }
// }
