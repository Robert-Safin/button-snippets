"use client";

const Button2 = () => {
  return (
    <>
      <div className="m-20 relative group w-20 h-10 overflow-hidden">
        <button className="w-20 h-10 py-1 px-4 bg-purple-950 ">
          <span className="z-10 relative text-white group-hover:text-black">
            click
          </span>
        </button>

        <div
          className="absolute w-10 h-5 bg-gray-200 translate-x-[-40px] translate-y-[-60px]
        transition
        duration-[100ms]
        group-hover:translate-x-[-0px] group-hover:translate-y-[-40px]
        "
        />

        <div
          className="absolute w-10 h-5 bg-gray-200 translate-x-[80px] translate-y-[-60px]
        transition
        duration-[300ms]
        group-hover:translate-x-[40px] group-hover:translate-y-[-40px]
        "
        />

        <div
          className="absolute w-10 h-5 bg-gray-200 translate-x-[-40px] translate-y-[0px]
        transition
        duration-[500ms]
        group-hover:translate-x-[-0px] group-hover:translate-y-[-20px]
        "
        />

        <div
          className="absolute w-10 h-5 bg-gray-200 translate-x-[80px] translate-y-[0px]
        transition
        duration-[700ms]
        group-hover:translate-x-[40px] group-hover:translate-y-[-20px]
        "
        />
      </div>
    </>
  );
};

export default Button2;
