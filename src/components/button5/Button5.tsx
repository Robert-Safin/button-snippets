const Button5 = () => {
  return (
    <div className="m-20 bg-black w-40 h-40 group flex justify-center items-center">
      <div className="border border-white w-fit bg-orange-500 rounded-lg">
        <button className="px-4 py-2 relative overflow-hidden">
          <div
            className="absolute h-4 w-40 bg-white rotate-45 origin-top-right
                      transition duration-500
                      group-hover:-translate-x-36 group-hover:translate-y-36
                      "
          />
          <span className="text-white">click</span>
        </button>
      </div>
    </div>
  );
};

export default Button5;
