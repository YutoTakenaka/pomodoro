import logo from "./logo.svg";
import "twin.macro";
import TimerIndex from "./components/TimerIndex";
import Timer from "./Timer.jsx";
import Settings from "./Settings";

function App() {
  return (
    <div className="App bg-gray-800 h-screen">
      <header className="App-header">
        <div>
          {/* <img
            src={logo}
            className="App-logo h-48 w-48 flex justify-center"
            alt="logo"
          /> */}
          {/* <TimerIndex /> */}
          <Settings />
          <Timer />
        </div>
      </header>
    </div>
  );
}

export default App;
