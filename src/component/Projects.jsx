
import {ProjectData} from '../component/ProjectData'
import ProjectDetails from './ProjectDetails'
import {  useState } from 'react'
import {motion} from 'framer-motion'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Projects() {
const [filter, setFilter] = useState('all')
   const filterProjects = ProjectData.filter((item)=>{
    return filter ==='all' || item.category === filter;
   })

  return (
    <div id='projects' className="bg-slate-700 py-20  "  >
        <motion.h1
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1.5, delay:0.7}}
        className="text-pink-300 font-cursive font-bold text-center text-3xl md:text-5xl tracking-wide mb-10">Projects</motion.h1>
      <div className="max-w-7xl mx-auto space-y-5 " >

<motion.div
initial={{opacity:0, y:100}}
whileInView={{opacity:1, y:0}}
transition={{duration:1.5, delay:0.7}}
className="text-center md:py-12  py-6">
    <ul className="flex text-center items-center justify-center md:gap-5 gap-3 mx-2 md:mx-0  transition-all duration-300 ">
        <a><button onClick={()=>setFilter('all')} className="md:text-xl  font-semibold text-gray-700 md:py-2 md:px-4 py-1 px-2 rounded-full bg-pink-300 hover:scale-105 hover:bg-pink-200 " >All</button></a>
        <a><button onClick={()=> setFilter('react')} className="md:text-xl  font-semibold text-gray-700 md:py-2 md:px-4 px-2 py-1 rounded-full bg-pink-300  hover:scale-105 hover:bg-pink-200  " >React</button></a>
        <a><button onClick={()=>setFilter('javascript')} className="md:text-xl font-semibold text-gray-700 md:py-2 md:px-4 py-1 px-2 rounded-full bg-pink-300  hover:scale-105 hover:bg-pink-200  " >JavaScript</button></a>
        <a><button onClick={()=>setFilter('html && css')} className="md:text-xl  font-semibold text-gray-700 md:py-2 md:px-4 py-1 px-2 rounded-full bg-pink-300  hover:scale-105  hover:bg-pink-200  " >Html & Css</button></a>
        

    </ul>
</motion.div>

<motion.div 
initial={{opacity:0, y:100}}
whileInView={{opacity:1, y:0}}
transition={{duration:1.1, delay:0.7}}>
    

<div className='grid md:grid-cols-3 grid-cols-1 gap-5 '>
    { 
     filterProjects.map((item)=>(
            <ProjectDetails key={item.id} {...item}  />
        ))
}
     
    </div>

</motion.div>
</div>
</div>

  )
}
