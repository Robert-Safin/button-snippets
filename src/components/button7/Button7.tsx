'use client'


const Button7 = () => {
  return (
    <div className="border w-fit m-20 px-4 py-2 group relative bg-indigo-600 ">
      <div className="transition-all duration-500 ease-in-out delay-150 absolute bg-indigo-600 w-[20px] h-1 -top-[5px] -left-[5px] group-hover:w-[70px]"/>
      <div className="transition-all duration-100 ease-in-out delay-150 absolute bg-indigo-600 w-[20px] h-1 -top-[5px] -left-[1px] rotate-90 origin-top-left group-hover:w-[45px]"/>
      <div className="transition-all duration-500 ease-in-out delay-150 absolute bg-indigo-600 w-[20px] h-1 -bottom-[5px] -right-[5px] group-hover:w-[70px]"/>
      <div className="transition-all duration-100 ease-in-out delay-150 absolute bg-indigo-600 w-[20px] h-1 -bottom-[5px] -right-[1px] rotate-90 origin-bottom-right group-hover:w-[45px]"/>


      <span className="text-white">click</span>
    </div>
  )
}

export default Button7
