import { useState, useEffect } from "react";

const Timer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [studyTime, setStudyTime] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
    setStudyTime(time);
    setTime(0);
  };

  const handlePause = () => {
    setIsRunning(false);
    setStudyTime(time);
  };

  const handleRecord = () => {
    setStudyTime(time);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };
  return (
    <>
      <h2>Study Timer</h2>
      <div className="flex flex-col border border-gray-500 w-[400px] h-[200px] bg-slate-600 text-gray-200">
        <div className="flex gap-[50px] items-center justify-center">
          <button
            className="border border-blue-400 px-3 py-2"
            onClick={handleStart}
            disabled={isRunning}
          >
            Start
          </button>
          <button
            className="border border-blue-400 px-3 py-2"
            onClick={handlePause}
            disabled={!isRunning}
          >
            Pause
          </button>
          <button
            className="border border-blue-400 px-3 py-2 disabled:text-gray-400"
            onClick={handleStop}
            disabled={!isRunning}
          >
            Stop
          </button>
          <button
            className="border border-blue-400 px-3 py-2 disabled:text-gray-400"
            onClick={handleRecord}
          >
            Record
          </button>
        </div>
        <p>
          Time:
          <div className="bg-white border-2 border-blue-800 flex justify-center text-blue-800 text-2xl">
            {formatTime(time)}
          </div>
        </p>
        <p>Total Study Time: {formatTime(studyTime)}</p>
      </div>
    </>
  );
};

export default Timer;
