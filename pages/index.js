import Starter from "../components/Starter";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isStart, setIsStart] = useState(false);

  const onStart = () => {
    setIsStart(true);
  };

  const time = new Date();
  time.setSeconds(time.getSeconds() + 5);

  return (
    <div className=" container mx-auto ">
      {!isStart && (
        <button className="bg-red-600 h1 font-bold absolute inset-0" onClick={() => onStart()}>
          Start
        </button>
      )}
      {isStart && <Starter expiryTimestamp={time} />}
    </div>
  );
}
