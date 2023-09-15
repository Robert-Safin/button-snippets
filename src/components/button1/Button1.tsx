"use client";

const Button1 = () => {
  return (
    <>
      <div className="w-20 m-20 group overflow-hidden relative">
        <div
          className="bg-blue-400 w-20 h-8 -z-10 absolute
        translate-x-[80px] group-hover:translate-x-[0px]
        group-hover:transition-all duration-300 ease-in
        rounded-lg
        "
        />
        <button className="rounded-lg w-20 h-8 border-2 border-blue-400 text-blue-400 group-hover:text-white">
          click
        </button>
      </div>
    </>
  );
};

export default Button1;
