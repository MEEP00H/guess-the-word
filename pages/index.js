import Starter from "../components/Starter";
import Image from "next/image";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { team as teamAtom } from "atom";

export default function Home() {
  const [isStart, setIsStart] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  const [_, setTeam] = useRecoilState(teamAtom);
  const onStart = () => {
    setIsStart(true);
  };
  const inputHandle = (e) => {
    const value = e.target.value;
    setTeam(value);
  };
  const okHandle = () => {
    setIsCreate(true);
  };
  const time = new Date();
  time.setSeconds(time.getSeconds() + 5);

  return (
    <div className=" container mx-auto ">
      {!isCreate && (
        <div className=" absolute inset-0 z-50 bg-purple-500 flex flex-col items-center justify-center ">
          <input
            type="text"
            name="name"
            placeholder="Team"
            className="h5 border border-black rounded-md text-black w-[300px] md:w-[400px] font-sans h-[53px]"
            onChange={inputHandle}
          />
          <button
            className=" w-[300px] md:w-[400px] h-[53px] bg-slate-800 text-white mt-7 rounded-md h6 font-bold"
            onClick={() => okHandle()}
          >
            OK, go!
          </button>
        </div>
      )}

      {!isStart && (
        <button className="bg-red-600 h1 font-bold absolute inset-0" onClick={() => onStart()}>
          Start
        </button>
      )}
      {isStart && <Starter expiryTimestamp={time} />}
    </div>
  );
}
