import Button from "./toggle/Button";
import styled from "@emotion/styled";

const CBlock = styled.div`
  box-sizing: border-box;
  position: relative;
  padding: 10px;
  background: #87eb8f;
  width: ${(props) => (props.toggle ? "50%" : "100%")};
`;

const C = ({ toggle, direction, onToggle }) => {
  return (
    <CBlock toggle={toggle}>
      <p>
        CCC 내용
        <br /> toggle 상태 :{`${toggle}`}
      </p>

      <Button direction={direction} onToggle={onToggle} />
    </CBlock>
  );
};

export default C;
