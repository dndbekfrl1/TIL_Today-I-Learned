import React from "react";
import { NavLink, Link, Route } from "react-router-dom";
import Profile from "./Profile";
import WithRouterSample from "./WithRouterSample";
import RouterHookSample from "./RouterHookSample";
const Profiles = () => {
  return (
    <div>
      유저목록
      <p />
      <NavLink
        to="/profiles/velopert"
        activeStyle={{ background: "black", color: "white" }}
      >
        velopert
      </NavLink>
      <p />
      <Link to="/profiles/guildong">guildong</Link>
      <Route path="/profiles/:username" component={Profile} />
      <Route
        path="/profiles"
        exact
        render={() => <div>유저를 선택하세요</div>}
      />
      <WithRouterSample />
      <RouterHookSample />
    </div>
  );
};

export default Profiles;
