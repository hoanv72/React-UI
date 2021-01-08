import Tooltip from "./components/Tooltip/Tooltip";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <Tooltip content="test tooltip" direction="bottom">
        <h2>Tooltip</h2>
      </Tooltip>

      <Button
        shape="default"
        type="primary"
        disable="true"
        onClick={() => console.log("onclick props")}
        innerRef="ref props"
        onClick={() => console.log(111111)}
      >
        submit
      </Button>
    </div>
  );
}

export default App;
