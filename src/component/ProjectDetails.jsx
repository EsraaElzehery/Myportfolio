
export default function ProjectDetails({name, image,Description , github, live} ) {
  

  return (

    <div className=" mx-8 justify-center items-center  hover:scale-105 transition-all  duration-700 
      md:justify-evenly  overflow-hidden my-2  rounded-md
      h-[400px] ">
      
    
      <div className="relative  overflow-hidden shadow-lg shadow-gray-700 " >
    
        <img src={image} alt="" className=" overflow-hidden object-cover w-[100%] h-[200px]  " />
      
        <div className=" absolute inset-0 bg-black opacity-40 flex justify-center
         w-[100%] h-[100%] object-cover  border[white] border-b-1 " ></div>
    </div>
    <div className="mx-auto text-center  relative z-10 bg-slate-800 py-2 rounded-b-md space-y-3 px-3">
        <h1 className="text-white text-xl md:text-2xl  font-semibold pt-4">{name}</h1>
        <p className="text-white text-medium text-center " >{Description }</p>
        
        <div className="flex  items-center justify-evenly  px-2 gap-1 py-2  ">
<a href={github} target="_blank" ><button className="py-2 md:px-6 px-4 font-medium text-medium bg-red-900 rounded-full
 text-white hover:bg-red-800">Github</button></a>

<a href={live} target="_blank" ><button className="py-2 md:px-6  px-4 text-medium  bg-red-900 font-medium 
 rounded-full hover:bg-red-800
 text-white"> Demo</button></a>
        </div>
        
    </div>
    
    </div>


  )
}
