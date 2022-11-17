import styled from "@emotion/styled";
import { css } from "@emotion/react";

const horizontal = css`
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;
const vertical = css`
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const ToggleButton = styled.button`
  position: absolute;
  ${(props) => (props.direction === "horizontal" ? horizontal : vertical)}
`;

const Button = ({ direction, onToggle }) => {
  return (
    <ToggleButton direction={direction} onClick={onToggle}>
      버튼 {direction}
    </ToggleButton>
  );
};

export default Button;
