const Button4 = () => {
  return (
    <div className="m-20 border-2 border-black bg-slate-500 w-fit group relative overflow-hidden">
      <div
        className="absolute flex justify-center items-center w-20 h-10 -translate-y-12 bg-red-400
      group-hover:translate-y-0 group-hover:bg-red-500 transition-all duration-500 ease-in-out
      "
      >
        <span className="text-white">hi mum</span>
      </div>

      <button className="w-20 h-10">
        <span className="text-white">hi</span>
      </button>
    </div>
  );
};

export default Button4;
