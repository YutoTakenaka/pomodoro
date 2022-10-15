import { useContext, useEffect, useState, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "twin.macro";
import PauseButton from "./components/buttons/PauseButton";
import PlayButton from "./components/buttons/PlayButton";
import SettingsButton from "./components/buttons/SettingsButton";
import SettingsContext from "./components/SettingsContext";

// 定数で色を指定
const BLUE = "#0066cc";
const SKYBLUE = "#42ffff";

function Timer() {
  const settingsInfo = useContext(SettingsContext);

  // タイマーが止まっているかどうか
  const [isPaused, setIsPaused] = useState(true);
  // タイマーの秒数
  const [secondsLeft, setSecondsLeft] = useState(0);
  // 作業モードか休憩モードか
  const [mode, setMode] = useState("work"); //work : break : null

  // レンダリングを減らしてパフォーマンスを向上
  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  // 秒数を1ずつ減らす処理
  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  useEffect(() => {
    // モード切り替えと切替えに伴う秒数リセット処理
    function switchMode() {
      const nextMode = modeRef.current === "work" ? "break" : "work";
      const nextSeconds =
        nextMode === "work"
          ? settingsInfo.workMinutes * 60
          : settingsInfo.breakMinutes * 60;

      setMode(nextMode);
      modeRef.current = nextMode;

      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    }

    // 画面を新規表示したときの初期値設定
    secondsLeftRef.current = settingsInfo.workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }
      tick();
    }, 1000);
    return () => clearInterval(interval);
  }, [settingsInfo]);

  const totalSeconds =
    mode === "work"
      ? settingsInfo.workMinutes * 60
      : settingsInfo.breakMinutes * 60;

  const percentage = 100 - Math.round((secondsLeft / totalSeconds) * 100);

  const minutes = Math.floor(secondsLeft / 60);

  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = "0" + seconds;

  return (
    <div>
      <p className="text-center text-white pt-24 -mb-12 text-2xl">
        {modeRef.current === "work" ? "Working" : "Breaking"}
      </p>
      <div className="h-80 w-full flex justify-center pt-20">
        <CircularProgressbar
          value={percentage}
          text={minutes + ":" + seconds}
          styles={buildStyles({
            textColor: "#fff",
            strokeLinecap: "butt",
            pathColor: "#fff",
            trailColor: mode === "work" ? BLUE : SKYBLUE,
          })}
        />
      </div>

      <div className="w-full text-center mt-12 flex justify-center">
        {isPaused ? (
          <PlayButton
            onClick={() => {
              setIsPaused(false);
              isPausedRef.current = false;
            }}
          />
        ) : (
          <PauseButton
            onClick={() => {
              setIsPaused(true);
              isPausedRef.current = true;
            }}
          />
        )}
      </div>
      <div className="mt-8 flex justify-center w-full">
        <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />
      </div>
    </div>
  );
}

export default Timer;
