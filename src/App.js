import A from "./components/A";
import B from "./components/B";
import C from "./components/C";
import Toggle from "./components/Toggle";

function App() {
  return (
    <>
      <Toggle content={<A />} />
      <Toggle content={<B />} />
      <Toggle content={<C />} />
    </>
  );
}

export default App;
