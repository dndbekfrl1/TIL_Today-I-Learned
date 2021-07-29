import React from "react";
import { withRouter } from "react-router";
const WithRouterSample = ({ location, match, history }) => {
  return (
    <div>
      <h4>location</h4>
      {/*자신의 부모 컴포넌트 기준의 match 값이 전달됨*/}
      <textarea value={JSON.stringify(location, null, 2)} readOnly />
      <h4>match</h4>
      <textarea value={JSON.stringify(match, null, 2)} readOnly />
      <button onClick={() => history.push("/")}>홈으로</button>
    </div>
  );
};

export default withRouter(WithRouterSample);
