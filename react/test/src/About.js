import React from "react";
import qs from "qs";

const About = ({ location }) => {
  //qs -> search갑승ㄹ 확인할 수 있음
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  console.log("query?", query);

  const detail = query.detail === "true";

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 라우터 실습</p>
    </div>
  );
};

export default About;
