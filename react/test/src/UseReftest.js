import React, { useRef, useEffect } from "react";
function UseReftest() {
  const queryRef = useRef();
  // Note: queryRef is still 'undefined' here

  const queryRef2 = useRef();

  useEffect(() => {
    // But here queryRef becomes a
    // valid HTMLInputElement
    queryRef.current.blur();
    queryRef2.current.focus();
  }, [queryRef2]);
  return (
    <>
      <input ref={queryRef} type="text" />
      <input ref={queryRef2} type="text" />
    </>
  );
}
export default UseReftest;
