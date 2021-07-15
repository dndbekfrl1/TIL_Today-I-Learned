import "./App.css";
import React, { useRef, useState, useMemo, useCallback } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function countActiveUsers(users) {
  return users.filter((user) => user.active).length;
}
function App() {
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

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const nextId = useRef(4);
  const { username, email } = inputs;
  //username과 email은 onChage setInputs가 호출될때마다 갱신되는건가?? -> 네 그렇습니다.
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  }, []);

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers((users) => users.concat(user));

    setInputs({
      username: "",
      email: "",
    });

    nextId.current += 1;
    console.log("oncreate usecallback", username);
  }, [username, email]); //users, username, email 셋 다 바뀔때 호출되는건가?-> 그건아닌데 갱신에 문제가 생김. deps[]에서 값을 참조해야 정상적인 작동을 함 [users]일때, id값만 갱신 [users,username]일 때, users, username 만

  const onRemove = useCallback((id) => {
    setUsers((users) => users.filter((user) => user.id !== id));
  }, []);
  const onToggle = useCallback((id) => {
    setUsers((users) =>
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);
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
      <div>활성사용자 수 :{count}</div>
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
