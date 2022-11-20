import Button from "./toggle/Button";
import styled from "@emotion/styled";
import useToggle from "../hooks/useToggle";

const CBlock = styled.div`
  box-sizing: border-box;
  position: relative;
  padding: 10px;
  background: #87eb8f;
  transition: width 0.3s;
  width: ${(props) => (props.toggle ? "50%" : "100%")};
`;

const BHook = () => {
  const [toggle, onToggle] = useToggle();

  return (
    <CBlock toggle={toggle}>
      <p>
        A 내용
        <br /> toggle 상태 :{`${toggle}`}
      </p>
      <Button direction="horizontal" onToggle={onToggle} />
    </CBlock>
  );
};

export default BHook;
