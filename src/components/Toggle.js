import { useState } from "react";
import Button from "./Button";

const Toggle = ({ content }) => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div style={{ border: "1px solid #000" }}>
      <div>
        {`${toggle}`}, 여기는 계속 바뀌는 영역
        {content}
      </div>
      <Button type="가로" onToggle={onToggle} />
    </div>
  );
};

export default Toggle;
