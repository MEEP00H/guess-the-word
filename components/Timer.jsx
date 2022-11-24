import { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";
import { useRecoilState } from "recoil";
import { counting as countingAtom } from "atom";
const Timer = ({ expiryTimestamp }) => {
  const [counting, setCounting] = useRecoilState(countingAtom);
  const [sec, setSec] = useState("00");
  const [min, setMin] = useState("00");
  const { seconds, minutes, hours, days, isRunning, start, pause, resume, restart } = useTimer({
    expiryTimestamp,
  });
  useEffect(() => {
    setSec(seconds > 9 ? `${seconds}` : `0${seconds}`);
    setMin(minutes > 9 ? `${minutes}` : `0${minutes}`);
    setCounting([seconds, minutes]);
  }, [seconds, minutes]);

  return (
    <div>
      {min}:{sec}
    </div>
  );
};

export default Timer;
