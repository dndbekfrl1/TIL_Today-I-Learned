import React from "react";

const profileDate = {
  velopert: {
    name: "김민준",
    description:
      "Frontend Engineer @ Laftel Inc. 재밌는 것만 골라서 하는 개발자",
  },
  gildong: {
    name: "홍길동",
    description: "전래동화의 주인공",
  },
};

// 파라미터 받아올 때 math의 params값을 참조함
const Profile = ({ match }) => {
  console.log(match);
  const { username } = match.params;
  const profile = profileDate[username];
  if (!profile) {
    return <div>존재하지 않은 유저</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
