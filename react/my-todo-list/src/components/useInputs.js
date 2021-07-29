import { useState, useCallback } from "react";

function useInputs(initalValue) {
  const [input, setInput] = useState(initalValue);
  const onChange2 = useCallback((e) => {
    const { value } = e.target;
    setInput(value);
  }, []);
  const reset = useCallback((e) => {
    setInput("이제 그만");
  });
  return [input, onChange2, reset];
}
export default useInputs;
