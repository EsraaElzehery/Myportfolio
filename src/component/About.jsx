import  laptop  from "../assets/laptop.json"
import Lottie from 'lottie-react';
import CSS from '../assets/CSS.png'
import JS from '../assets/JS.png'
import Html from '../assets/Html.png'
import bootstrap2 from  '../assets/bootstrap2.jpg'
import reactt from '../assets/reactt.png'
import TailwindCss from '../assets/TailwindCss.png'
import Github from '../assets/Github.png' 
import Redux from'../assets/Redux.png'
import { motion } from "framer-motion";

export default function About() {
  return (
    <div id="about" className=" bg-gray-100 py-20 place-items-center px-5 md:px-0 " >
    
      <motion.h1
      initial={{opacity:0, y:100}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:1.5, delay:0.7}}
      
      className="text-pink-300 font-bold font-cursive md:text-5xl 
      text-3xl tracking-wide  mb-10 text-center"> About</motion.h1> 
      

    
<div className="items-center flex md:flex-row flex-col mx-auto max-w-7xl ">
<motion.div
initial={{opacity:0, scale:0.7}}
whileInView={{opacity:1, scale:1}}
transition={{duration:1.5, delay:0.7}}

>
  <Lottie animationData={laptop} className="md:w-[600px] md:h-[600px] w-[380px] "/>
</motion.div>
<motion.div
initial={{opacity:0, x:100}}
whileInView={{opacity:1, x:0}}
transition={{duration:1.5, delay:0.7}}

className="space-y-4 ">
<h1 className="text-black text-2xl md:text-4xl">Hi, I'm Esraa Elzehery </h1>
<p className="leading-7 "> I'm a passionate Front-End Developer specializing in building interactive, user-friendly web applications using modern technologies like React.js. I have experience in creating responsive and visually appealing designs that provide an excellent user experience. My goal is to continuously improve my skills, tackle challenging projects, and contribute to meaningful solutions.
In addition to React, I am proficient in HTML, CSS, JavaScript, and have experience working with tools like Redux, Bootstrap, and TailwindCSS. I enjoy turning complex ideas into seamless digital experiences and collaborating with teams to achieve great results.
Currently, I am focusing on enhancing my skills in full-stack development, learning Node.js.
 </p>
   <div>
    <h2 className="md:text-3xl text-xl" >My Skills:</h2>
   </div>
   <div className="flex gap-5 flex-wrap ">
    
   <img src={Html} className="w-[60px] h-[60px]"/>
    <img src={CSS} className="w-[60px] h-[60px]"/>
    <img src={JS} className="w-[60px] h-[60px]"/>
    <img src={reactt} className="w-[60px] h-[60px]"/>
    <img src={Redux} className="w-[60px] h-[60px]"/>
    <img src={bootstrap2} className="w-[70px] h-[70px]"/>
    <img src={TailwindCss} className="w-[60px] h-[60px] "/>
    <img src={Github} className="w-[60px] h-[60px] bg-black"/>

   </div>
</motion.div>

</div>
<div>
 

      </div>
  </div>
  )
}
