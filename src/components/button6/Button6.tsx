const Button6 = () => {
  return (
    <button className="m-20 group border bg-black py-2 px-4">
      <div
        className="absolute transition w-[3px] h-14 bg-blue-400 translate-x-[49px] translate-y-[-15px]
      group-hover:translate-x-[-18px] duration-300
      "
      />
      <div
        className="absolute transition w-[3px] h-14 bg-yellow-400 translate-x-[-18px] translate-y-[-15px]
      group-hover:translate-x-[49px] duration-300
      "
      />

      <div
        className="absolute transition w-[3px] h-20 bg-blue-400 rotate-90 translate-x-[16px] translate-y-[-50px]
      group-hover:translate-y-[-6px] duration-500
      "
      />
      <div
        className="absolute transition w-[3px] h-20 bg-yellow-400 rotate-90 translate-x-[16px] translate-y-[-6px]
      group-hover:translate-y-[-50px] duration-500
      "
      />

      <span className="text-yellow-400 group-hover:text-blue-400 transition">
        click
      </span>
    </button>
  );
};

export default Button6;
