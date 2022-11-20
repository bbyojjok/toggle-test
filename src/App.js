import Toggle from "./components/toggle/Toggle";
import A from "./components/A";
import B from "./components/B";
import C from "./components/C";

import AHook from "./components/AHook";
import BHook from "./components/BHook";
import CHook from "./components/CHook";

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

      <hr />
      <hr />
      <hr />
      <hr />

      {/* hook을 이용한 A형 */}
      <AHook />

      {/* hook을 이용한 B형 */}
      <BHook />

      {/* hook을 이용한 C형 */}
      <CHook />
    </>
  );
}

export default App;
