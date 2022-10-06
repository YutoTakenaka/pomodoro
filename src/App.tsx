import logo from "./logo.svg";
import "twin.macro";
import TimerIndex from "./components/TimerIndex";
import Timer from "./Timer.jsx";
import Settings from "./Settings";
import { useState } from "react";
import SettingsContext from "./components/SettingsContext";

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(45);
  return (
    <div className="App bg-gray-800 h-screen">
      {/* <img
            src={logo}
            className="App-logo h-48 w-48 flex justify-center"
            alt="logo"
          /> */}
      {/* <TimerIndex /> */}
      <SettingsContext.Provider
        value={{
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
          showSettings,
          setShowSettings,
        }}
      >
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
    </div>
  );
}

export default App;
