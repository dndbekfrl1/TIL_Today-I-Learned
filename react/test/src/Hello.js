import React from "react";

function Hello({ color, name, isSpecial }) {
  console.log(color, name);
  return (
    <div style={{ color: color }}>
      {isSpecial && <b>*</b>}안녕하세요 {name}
    </div>
  );
}

Hello.defaultProps = {
  color: "red",
  name: "이름없음",
};

export default Hello;
