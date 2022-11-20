import Button from "./toggle/Button";
import styled from "@emotion/styled";
import useToggle from "../hooks/useToggle";

const ABlock = styled.div`
  box-sizing: border-box;
  position: relative;
  padding: 10px;
  background: #87ceeb;
  transition: width 0.3s;
  width: ${(props) => (props.toggle ? "50%" : "100%")};
`;

const AHook = () => {
  const [toggle, onToggle] = useToggle();

  return (
    <ABlock toggle={toggle}>
      <p>
        A 내용
        <br /> toggle 상태 :{`${toggle}`}
      </p>
      <Button direction="horizontal" onToggle={onToggle} />
    </ABlock>
  );
};

export default AHook;
