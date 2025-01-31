
import MenuContext from './contexapi'
import { useContext } from 'react'
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import ResponsiveMenubar from './ResponsiveMenubar'
export default function Header() {
const {isOpen, setIsOpen} = useContext(MenuContext)
  return (
    <div className="bg-gray-700 w-full h-[72px] py-4 px-8 mx-auto sticky top-0 shadow-xl shadow-gray-800 z-30" >
        <div className=" flex items-center justify-between  ">
            <div>
            <h1 className="text-pink-300 text-2xl md:text-3xl font-bold font-cursive">Portfolio</h1>
            </div>
            <div className="hidden md:flex items-center" >
                <ul className="flex items-center justify-between gap-5 transition-all duration-300">
                   <a href='#home'><li className="text-white text-lg font-semibold hover:text-pink-300 hover:scale-105 transition-all ">Home</li></a>
                  <a href='#about'> <li className="text-white text-lg font-semibold hover:text-pink-300  hover:scale-105 transition-all">About</li></a> 
                
               <a href="#projects"> <li className="text-white text-lg font-semibold hover:text-pink-300  hover:scale-105 transition-all">Projects</li></a>
                 <a href="#contact"><li className="text-white text-lg font-semibold hover:text-pink-300 hover:scale-105 transition-all ">Contact</li></a>
                </ul>
            </div>
           {
            isOpen? <IoClose onClick={()=>setIsOpen(false)} className='text-white w-8 h-8 md:hidden cursor-pointer hover:text-pink-300' /> : <FaBars
             onClick={()=>setIsOpen(true)} className='text-white w-6 h-6 md:hidden cursor-pointer hover:text-pink-300'/>
           }
        </div>
        <ResponsiveMenubar/>
      
    </div>
  )
}
