import Button from "./toggle/Button";
import styled from "@emotion/styled";

const ABlock = styled.div`
  box-sizing: border-box;
  position: relative;
  padding: 10px;
  background: #87ceeb;
  width: ${(props) => (props.toggle ? "50%" : "100%")};
`;

const A = ({ toggle, direction, onToggle }) => {
  return (
    <ABlock toggle={toggle}>
      <p>
        A 내용
        <br /> toggle 상태 :{`${toggle}`}
      </p>
      <Button direction={direction} onToggle={onToggle} />
    </ABlock>
  );
};

export default A;
