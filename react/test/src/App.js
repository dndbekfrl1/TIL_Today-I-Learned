import "./App.css";
import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profiles from "./Profiles";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
      </ul>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/profiles" component={Profiles} />
    </div>
  );
};
export default App;

// function countActiveUsers(users) {
//   return users.filter((user) => user.active).length;
// }
// const initialState = {
//   users: [
//     {
//       id: 1,
//       username: "velopert",
//       email: "public.velopert@gmail.com",
//       active: true,
//     },
//     {
//       id: 2,
//       username: "tester",
//       email: "tester@example.com",
//       active: false,
//     },
//     {
//       id: 3,
//       username: "liz",
//       email: "liz@example.com",
//       active: false,
//     },
//   ],
// };
// function reducer(state, action) {
//   console.log("what is action?", action);
//   switch (action.type) {
//     case "CREATE_USER":
//       return {
//         inputs: initialState.inputs,
//         users: state.users.concat(action.user),
//       };
//     case "TOGGLE_USER":
//       return {
//         ...state,
//         users: state.users.map((user) =>
//           user.id === action.id ? { ...user, active: !user.active } : user
//         ),
//       };

//     case "REMOVE_USER":
//       return {
//         ...state,
//         users: state.users.filter((user) => user.id !== action.id),
//       };
//     default:
//       return state;
//   }
// }
// export const UserDispatch = React.createContext(null);

// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const { users } = state;

//   console.log(state);
//   console.log(dispatch);

//   const count = useMemo(() => countActiveUsers(users), [users]);
//   return (
//     <UserDispatch.Provider value={dispatch}>
//       <CreateUser />
//       <UserList users={users} />
//       <div>활성사용자 수 : {count}</div>
//     </UserDispatch.Provider>
//   );
// }
// export default App;
