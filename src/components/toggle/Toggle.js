import React, { useState } from "react";

const Toggle = ({ children, direction }) => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {/* 
        여기는 children에 toggle 상태를 알기위해 props를 전달
        style을 위해 버튼을 children에서 임포트 해야할듯, 버튼에 필요한 direction, onToggle 프롭스 전달
      */}
      {React.cloneElement(children, {
        toggle,
        direction,
        onToggle,
      })}
    </>
  );
};

export default Toggle;
