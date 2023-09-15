
const Button8 = () => {
  return(
    <button className="transition-all m-20 flex space-x-[2px] hover:space-x-0 group relative hover:border-2 border-black rounded-xl animate-pulse hover:animate-none hover:drop-shadow-2xl hover:flex-row-reverse">
      <div className="transition-all relative w-14 h-10 bg-blue-600 z-10 skew-x-[20deg] -translate-y-[3px] group-hover:skew-x-0 group-hover:translate-y-0 group-hover:rounded-r-lg "/>
      <div className="transition-all relative w-14 h-10 bg-red-600 z-10 skew-x-[20deg] translate-y-[3px] group-hover:skew-x-0 group-hover:translate-y-0 group-hover:rounded-l-lg "/>
      <p className="text-white absolute z-10 w-full top-2 tracking-[1px] group-hover:tracking-[8px] transition-all delay-100">CLICK</p>
    </button>
  )

}

export default Button8
