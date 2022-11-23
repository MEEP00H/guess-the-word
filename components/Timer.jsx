import { useEffect } from "react";
import { useTimer } from "react-timer-hook";
import { useRecoilState } from "recoil";
import { counting as countingAtom } from "atom";
const Timer = ({ expiryTimestamp }) => {
  const [counting, setCounting] = useRecoilState(countingAtom);
  const { seconds, minutes, hours, days, isRunning, start, pause, resume, restart } = useTimer({
    expiryTimestamp,
  });
  useEffect(() => {
    setCounting([seconds, minutes]);
  }, [seconds, minutes]);

  return (
    <div>
      {minutes}:{seconds}
    </div>
  );
};

export default Timer;
