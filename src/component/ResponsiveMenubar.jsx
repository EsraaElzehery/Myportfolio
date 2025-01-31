import { useContext } from "react"
import MenuContext from "./contexapi"


export default function ResponsiveMenubar() {
    const {isOpen, setIsOpen} = useContext(MenuContext)
      return (
    <div className={`${isOpen ? 'left-0' : '-left-[100%]'} fixed bg-gray-700  top-0 bottom-15 x-30 h-[100%] w-[75%] 
    flex-col justify-between  pt-10 px-8 pb-6  rounded-r-xl shadow-xl shadow-gray-800 transition-all duration-300 md:hidden z-20 `}>
      <nav className="mt-10" >
                <ul className= 'flex flex-col gap-8 text-lg items-center font-medium '>
                   <a href='#home'><li onClick={()=> setIsOpen(false)} className="text-white
                    text-lg font-semibold hover:text-pink-300 hover:scale-105 transition-all ">Home</li></a>
                  <a href='#about'> <li onClick={()=> setIsOpen(false)} className="text-white text-lg font-semibold
                   hover:text-pink-300
                   hover:scale-105 transition-all">About</li></a> 
               <a href="#projects"> <li onClick={()=> setIsOpen(false)}  className="text-white text-lg font-semibold hover:text-pink-300 hover:scale-105 transition-all">Projects</li></a>
                 <a href="#contact"><li onClick={()=> setIsOpen(false)}  className="text-white text-lg font-semibold hover:text-pink-300  hover:scale-105 transition-all">Contact</li></a>
                </ul>
            </nav>
    </div>
  )
}
