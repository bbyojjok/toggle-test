import Toggle from "./components/toggle/Toggle";
import A from "./components/A";
import B from "./components/B";
import C from "./components/C";

function App() {
  return (
    <>
      {/* A 유형의 가로형 토글 박스 */}
      <Toggle direction="horizontal">
        <A />
      </Toggle>

      {/* B 유형의 세로형 토글 박스 */}
      <Toggle direction="vertical">
        <B />
      </Toggle>

      {/* C 유형의 가로형 토글 박스 */}
      <Toggle direction="horizontal">
        <C />
      </Toggle>
    </>
  );
}

export default App;
