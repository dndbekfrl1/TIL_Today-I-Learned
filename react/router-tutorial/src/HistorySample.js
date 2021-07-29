import React, { useEffect } from "react";

function HistorySample({ history }) {
  const goBack = () => {
    history.goBack();
  };

  const goHome = () => {
    history.push("/");
  };

  useEffect(() => {
    console.log(history);
    const unblock = history.block("정말 떠나실건가요?");
    return () => {
      unblock();
    };
  }, [history]);
  return (
    <div>
      <button onClick={goBack}>뒤로</button>
      <button onClick={goHome}>홈</button>
    </div>
  );
}

export default HistorySample;
