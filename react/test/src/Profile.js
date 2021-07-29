import React from "react";

const profileData = {
  velopert: {
    name: "ddd",
    description: "후아암",
  },
  jina: {
    name: "진아",
    description: "메롱",
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = profileData[username];

  if (!profile) {
    return <div>존재하지 않는 유저입니다.</div>;
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
