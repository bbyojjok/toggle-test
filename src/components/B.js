import Button from "./toggle/Button";
import styled from "@emotion/styled";

const BBlock = styled.div`
  box-sizing: border-box;
  position: relative;
  padding: 10px;
  background: #ebbe87;
  transition: height 0.3s;
  height: ${(props) => (props.toggle ? "50px" : "250px")};
`;

const B = ({ toggle, direction, onToggle }) => {
  return (
    <BBlock toggle={toggle}>
      <p>
        BB 내용
        <br /> toggle 상태 :{`${toggle}`}
      </p>
      <Button direction={direction} onToggle={onToggle} />
    </BBlock>
  );
};

export default B;
