const Button = ({ type, onToggle }) => {
  return <button onClick={onToggle}>버튼: {type}</button>;
};

export default Button;
