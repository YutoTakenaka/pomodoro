import "twin.macro";
import ReactSlider from "react-slider";
import { useContext } from "react";
import SettingsContext from "./components/SettingsContext";
import BackButton from "./components/buttons/BackButton";

function Settings() {
  const settingsInfo = useContext(SettingsContext);
  return (
    <div className="text-gray-200 flex flex-col items-center pt-32">
      <label className="mr-96">Work: {settingsInfo.workMinutes}:00</label>
      <ReactSlider
        className="h-10 w-1/2 border-2 border-blue-600 rounded-full mt-4"
        thumbClassName="h-9 w-9 bg-blue-600 rounded-full cursor:pointer"
        trackClassName={"track"}
        value={settingsInfo.workMinutes}
        onChange={(newValue) => settingsInfo.setWorkMinutes(newValue)}
        min={1}
        max={120}
      />
      <label className="mt-8 mr-96">
        Break: {settingsInfo.breakMinutes}:00
      </label>
      <ReactSlider
        className="h-10 w-1/2 border-2 border-gray-100 rounded-full mt-4"
        thumbClassName="h-9 w-9 bg-gray-100 rounded-full cursor:pointer"
        trackClassName={"track"}
        value={settingsInfo.breakMinutes}
        onChange={(newValue) => settingsInfo.setBreakMinutes(newValue)}
        min={1}
        max={120}
      />
      <div className="mt-8 flex justify-center w-full">
        <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
      </div>
    </div>
  );
}

export default Settings;
