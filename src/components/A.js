import Button from "./toggle/Button";
import styled from "@emotion/styled";

const ABlock = styled.div`
  position: relative;
  padding: 10px;
  margin: 10px;
  background: #87ceeb;
  width: ${(props) => (props.toggle ? "250px" : "500px")};
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
