import { useContext } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import { rotation, strokeLinecap } from "CircularProgressbar";
import "react-circular-progressbar/dist/styles.css";
import "twin.macro";
import { readBuilderProgram } from "typescript";
import PauseButton from "./components/buttons/PauseButton";
import PlayButton from "./components/buttons/PlayButton";
import SettingsButton from "./components/buttons/SettingsButton";
import SettingsContext from "./components/SettingsContext";

const red = "#f54e54";
const green = "4aec8c";

function Timer() {
  const settingsInfo = useContext(SettingsContext);

  return (
    <div>
      <div className="h-80 w-full flex justify-center pt-24">
        <CircularProgressbar
          value={60}
          text={`60%`}
          styles={buildStyles({
            textColor: "#fff",
            pathColor: red,
            trailColor: readBuilderProgram(225, 225, 225, 0.2),
          })}
        />
      </div>

      <div className="w-full text-center mt-12 flex justify-center">
        <PlayButton />
        <PauseButton />
      </div>
      <div className="mt-8 flex justify-center w-full">
        <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />
      </div>
    </div>
  );
}

export default Timer;
