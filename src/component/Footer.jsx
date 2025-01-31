import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
export default function Footer() {
  return (
    <div className="bg-gray-700 text-center place-items-center h[70px] " >
      <div className="text-center  max-w-7xl mx-auto py-10 ">
        <motion.div
        initial={{opacity:0, y:20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1.5, delay:0.7}}
        
        className="flex items-center text-white gap-3 justify-center place-items-center ">
          <div className="text-xl font-semibold font-cursive text-white leading-relaxed ">contact : </div>
   <a href="https://www.linkedin.com/in/esraa-elsaid-elzehery-9b80b0280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"target="_blank" > <FaLinkedin className="w-[22px] h-[22px] hover:text-pink-300 cursor-pointer" /></a>
   <a href="https://www.facebook.com/share/19tFSrZphP/?mibextid=wwXIfr"target="_blank" >  <FaFacebook className="w-[22px] h-[22px] hover:text-pink-300 cursor-pointer " /></a>
   <a href="https://github.com/EsraaElzehery?tab=overview&from=2025-01-01&to=2025-01-24" target="_blank" >  <FaGithub className="w-[22px] h-[22px] hover:text-pink-300 cursor-pointer " /></a>
      </motion.div>
      </div>
    </div>
  )
}
