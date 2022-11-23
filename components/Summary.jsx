export const Summary = ({ point }) => {
  const restart = () => {
    location.reload();
  };
  return (
    <div className=" absolute inset-0  z-50 bg-red-200 flex flex-col " id="summary">
      <div className=" mt-[10%] text-center h4 font-bold">
        <p>🎉 {point}/40 🎉</p>
      </div>
      <button className=" h4 font-bold mt-10 text-black" onClick={() => restart()}>
        Restart
      </button>
    </div>
  );
};
