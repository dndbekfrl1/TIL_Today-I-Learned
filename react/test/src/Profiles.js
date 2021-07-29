import React from "react";
import { Link, Route } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  return (
    <div>
      <h3>유저 목록:</h3>
      <ul>
        <li>
          <Link to="/profiles/jina">jina</Link>
        </li>
        <li>
          <Link to="/profiles/gildong">gildong</Link>
        </li>
      </ul>
      <Route
        path="/profiles"
        exact
        render={() => <div>유저를 선택하세요</div>}
      />{" "}
      {/*호오 componente대신에 jsx를 렌더링 할 수 잇구나. props도 전달가능~*/}
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;
