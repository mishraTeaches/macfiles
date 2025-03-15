import "./App.css";
import { ProgressBar } from "./components/Progress-bar";
// import DigitalClock from "./components/Digital-Clock";
// import TrafficLight from "./components/Traffic-signal";
// import { config } from "./light_utils/config";

function App() {
  return (
    // <div className="wrapper">
    //   <TrafficLight config={config} />
    //   <TrafficLight config={config} layout="horizontal" />
    // </div>
    <div>
      {<ProgressBar />}
      {/* <DigitalClock /> */}
    </div>
  );
}

export default App;
