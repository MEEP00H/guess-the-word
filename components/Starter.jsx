import { useState } from "react";
import { useTimer } from "react-timer-hook";
import { words } from "./words";
import _ from "lodash";
import WordList from "../components/WordList";
import Timer from "../components/Timer";
import { Summary } from "../components/Summary";
import { useRecoilState } from "recoil";
import { counting as countingAtom } from "atom";

const Starter = ({ expiryTimestamp }) => {
  const { seconds } = useTimer({
    expiryTimestamp,
  });
  const [counting, setCounting] = useRecoilState(countingAtom);
  const [index, setIndex] = useState(0);
  const [point, setPont] = useState(0);
  const [sample, setSample] = useState(_.sampleSize(words, 5));

  const correct = () => {
    _.pull(sample, sample[index]);
    setIndex(index + 1);
    setPont(point + 1);
    if (index >= sample.length - 1) setIndex(0);
  };

  const incorrect = () => {
    setIndex(index + 1);
    if (index >= sample.length - 1) setIndex(0);
  };

  const time = new Date();
  time.setSeconds(time.getSeconds() + 900);

  return (
    <div>
      {((counting[0] == 0 && counting[1] == 0) || sample.length == 0) && <Summary point={point} />}
      {seconds >= 1 && (
        <div className=" bg-red-600 absolute inset-0 h1 font-bold z-40 flex items-center justify-center">{seconds}</div>
      )}
      {seconds === 0 && (
        <div className=" absolute top-5 left-[50%] translate-x-[-50%] h7">
          <Timer expiryTimestamp={time} />
        </div>
      )}
      <p className=" absolute top-5 left-[90%] translate-x-[-50%] z-30 h7">{point}/40</p>
      <div className=" font-bold flex flex-col h-screen items-center justify-center">
        <WordList word={sample[index]} />
        <div className="flex h3 w-full h-[30%] flex-1">
          <button onClick={() => incorrect()} className="flex-1 bg-red-600" />
          <button onClick={() => correct()} className="flex-1 bg-green-500" />
        </div>
      </div>
    </div>
  );
};

export default Starter;
