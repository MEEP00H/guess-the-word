import { useRecoilState } from "recoil";
import { team as teamAtom } from "atom";
import _ from "lodash";
import SheetDB from "sheetdb-js";
import { useEffect, useState } from "react";
export const Summary = ({ point }) => {
  const [team, _] = useRecoilState(teamAtom);
  const [result, setResult] = useState([]);
  const restart = () => {
    location.reload();
  };

  const sorting = (data) => {
    return data.sort((a, b) => b.point - a.point);
  };

  useEffect(() => {
    SheetDB.write("https://sheetdb.io/api/v1/0wpzbzraz8m7s", {
      sheet: "score",
      data: { name: team, point: point },
    }).then(
      function (result) {
        console.log(result);
      },
      function (error) {
        console.log(error);
      }
    );

    SheetDB.read("https://sheetdb.io/api/v1/0wpzbzraz8m7s", {}).then(
      function (result) {
        setResult(sorting([...result, { name: team, point: point }]));
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  return (
    <div className=" absolute inset-0  z-50 bg-red-200 flex flex-col " id="summary">
      <div className=" mt-[10%] text-center  font-bold">
        <p className=" h5 text-black">🎉 {team} 🎉</p>
        <p className="h3"> {point}/40 </p>
      </div>
      <div id="dashboard">
        <div className="overflow-x-auto relative w-[300px] lg:w-[500px] mx-auto">
          <div className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <div className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <div className="flex">
                <div scope="col" className="py-3 px-6 flex-1">
                  Team
                </div>
                <div scope="col" className="py-3 px-6 flex-1">
                  Point
                </div>
              </div>
            </div>
            <div className=" h-[300px] md:h-[400px] overflow-scroll">
              {result.map((r, index) => (
                <div className="bg-white dark:bg-gray-800 flex" key={index}>
                  <div
                    scope="row"
                    className="py-4 px-6 flex-1 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {r.name}
                  </div>
                  <div className="py-4 px-6 flex-1">{r.point}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <button className=" h4 font-bold mt-5 md:mt-10 text-black" onClick={() => restart()}>
        Restart
      </button>
    </div>
  );
};
