import Button from "./toggle/Button";
import styled from "@emotion/styled";
import useToggle from "../hooks/useToggle";

const BBlock = styled.div`
  box-sizing: border-box;
  position: relative;
  padding: 10px;
  background: #ebbe87;
  transition: height 0.3s;
  height: ${(props) => (props.toggle ? "50px" : "250px")};
`;

const BHook = () => {
  const [toggle, onToggle] = useToggle();

  return (
    <BBlock toggle={toggle}>
      <p>
        A 내용
        <br /> toggle 상태 :{`${toggle}`}
      </p>
      <Button direction="vertical" onToggle={onToggle} />
    </BBlock>
  );
};

export default BHook;
