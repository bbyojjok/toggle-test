import { useState, useCallback } from "react";

const useToggle = () => {
  const [toggle, setToggle] = useState(false);
  const onToggle = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  return [toggle, onToggle];
};

export default useToggle;
