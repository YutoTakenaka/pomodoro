import { useCallback, useRef, useState } from "react";
import "twin.macro";
import PrimaryButton from "./PrimaryButton";

export default function TimerIndex() {
  // ポモドーロタイマーのWorkingの秒数
  const [workingCount, setWorkingCount] = useState(0);

  // ポモドーロタイマーのIntervalの秒数
  const [intervalCount, setIntervalCount] = useState(0);

  // Workingの時間を設定するテキストボックスのステート(分単位)
  const [inputtedWorkingTime, setInputtedWorkingTime] = useState("");

  // Intervalの時間を設定するテキストボックスのステート(分単位)
  const [inputtedIntervalTime, setInputtedIntervalTime] = useState("");

  // Working中かInterval中か示すステート
  const [isWorking, setIsWorking] = useState(false);

  const intervalRef = useRef<any>(null);

  // スタートボタンの処理
  const onClickStart = useCallback(() => {
    if (intervalRef.current !== null) {
      return;
    }
    setIsWorking(true);
    let time = Number(inputtedWorkingTime) * 60;
    setWorkingCount(time);
    intervalRef.current = setInterval(() => {
      setWorkingCount((workingCount) => --workingCount);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [workingCount]);

  // ストップボタンの処理
  const onClickStop = useCallback(() => {
    if (intervalRef.current === null) {
      return;
    }
    setIsWorking(false);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  // const onClickSetTime = useCallback(() => {
  //   // workingMinuteを数値に変換(workingNum)し、秒数に換算する
  //   let workingNum = Number(inputtedWorkingTime);
  //   setWorkingCount(workingNum * 60);

  //   // inputtedIntervalTimeを数値に変換(intervalNum)し、秒数に換算する
  //   let intervalNum = Number(inputtedIntervalTime);
  //   setIntervalCount(intervalNum * 60);
  // }, [inputtedWorkingTime, inputtedIntervalTime]);

  return (
    <div className="text-gray-600">
      <section>
        {isWorking ? (
          <section className="m-4">
            <p>頑張れよ！</p>
            <p className="mt-2">
              作業終了まで残り
              <span className="text-xl mx-2">{workingCount}</span>秒！
            </p>
          </section>
        ) : (
          <section className="m-4">
            <p>しっかり休めよ！</p>
            <p className="mt-2">
              作業開始まで残り
              <span className="text-xl mx-2">{intervalCount}</span>
              秒！
            </p>
          </section>
        )}
      </section>

      <div className="flex justify-center">
        <section>
          <p>作業時間(分)</p>
          <input
            className="border border-gray-400 rounded-lg p-1 m-2 w-32"
            type="number"
            name=""
            id=""
            value={inputtedWorkingTime}
            onChange={(e) => setInputtedWorkingTime(e.target.value)}
          />
        </section>
        <section>
          <p>休憩時間(分)</p>
          <input
            className="border border-gray-400 rounded-lg p-1 m-2 w-32"
            type="number"
            name=""
            id=""
            value={inputtedIntervalTime}
            onChange={(e) => setInputtedIntervalTime(e.target.value)}
          />
        </section>
        <section>
          <p>セット数(セット)</p>
          <input
            className="border border-gray-400 rounded-lg p-1 m-2 w-32"
            type="number"
            name=""
            id=""
          />
        </section>

        {/* <PrimaryButton onClick={onClickSetTime}>Set</PrimaryButton> */}
      </div>
      <div>
        <PrimaryButton onClick={onClickStart}>▶ start</PrimaryButton>
        <PrimaryButton onClick={onClickStop}>■ stop</PrimaryButton>
      </div>
    </div>
  );
}
