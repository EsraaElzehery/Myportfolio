import Lottie from 'lottie-react';
import heart from '../assets/heart.json'
import {motion} from 'framer-motion'
import ph from '../assets/ph.png'

export default function Home() {


  

  return (
    <div id='home' className=' bg-gray-700 py-6'>
      <div className="max-w-7xl mx-auto place-items-center h-[800px] grid md:grid-cols-2 md:pt-0 pt-12 relative">
<div className="text-white space-y-5 px-8 ">
    <motion.h4
    initial={{opacity:0, x:-50}}
    whileInView={{opacity:1, x:0}}
    transition={{duration:1.1 , delay:0.2}}
    className="text-2xl md:text-4xl font-bold  ">Welcom to my portfolio
     <span ><Lottie animationData={heart} className='w-[40px] h-[45px] md:w-[65px] md:h-[60px] md:inline-flex hidden'/>
    </span></motion.h4>
    

    <motion.h1 
    initial={{opacity:0, x:-50}}
    whileInView={{opacity:1, x:0}}
    transition={{duration:1.1 , delay:0.2}}
    
    className="text-xl md:text-3xl font-bold">My Name is Esraa, i'm <span className="text-pink-300 
    text-xl md:text-4xl font-cursive font-bold">Frontend</span> developer</motion.h1>
 <motion.p 
 initial={{opacity:0, x:-50}}
 whileInView={{opacity:1, x:0}}
 transition={{duration:1.1 , delay:0.2}}
 className=" md:text-lg leading-7"> I'm a passionate web developer with expertise in React.js,
  and modern web technologies. I love creating beautiful and functional website that solve real world problems.</motion.p>

<motion.div className='flex md:gap-5 gap-4'
initial={{opacity:0, x:-50}}
whileInView={{opacity:1, x:0}}
transition={{duration:1.1 , delay:0.2}}
>
  <a href='#contact'><button className=' md:text-lg text-gray-700 font-semibold bg-pink-300 py-2 px-4
   rounded-full hover:bg-pink-100'>Contact Me</button></a>
  <a href='https://drive.google.com/file/d/1ksYV0M24Xj2fqiVLAvMCD5ftHscZawiM/view?usp=drivesdk' target='_blank'><button className=' md:text-lg text-gray-700 font-semibold bg-pink-300 py-2 px-4
   rounded-full hover:bg-pink-100'>Download CV</button></a>
</motion.div>

</div>
<motion.div
initial={{opacity:0, scale:0.7}}
 whileInView={{opacity:1, scale:1}}
 transition={{duration:1.2 , delay:0.2}} className='pt-4 md:pt-0  px-3'>
    <img src={ph} alt='' className=' w-[290px] md:w-[460px] px-auto border-pink-200 rounded-full border-[10px]
     bg-white' />
    
  
</motion.div>


      </div>

</div>
  )
}
