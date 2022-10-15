import "twin.macro";
import Timer from "./Timer.jsx";
import Settings from "./Settings";
import { useState } from "react";
import SettingsContext from "./components/SettingsContext";

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);
  return (
    <div className="App h-screen bg-[#192f60]">
      <SettingsContext.Provider
        value={{
          workMinutes,
          setWorkMinutes,
          breakMinutes,
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
