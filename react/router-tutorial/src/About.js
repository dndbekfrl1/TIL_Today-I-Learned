import React from "react";
import qs from "qs";

const About = ({ location }) => {
  console.log("location", location);
  /**
    hash: ""
    pathname: "/about"
    search: "?detail=true"
    state: undefined
   */
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const detail = query.detail === "true";
  return (
    <div>
      <h1>소개</h1>
      <p>라우터 기초 실습</p>
      {detail && <p>추가적인 정보....</p>}
    </div>
  );
};
export default About;
