import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import {motion} from 'framer-motion'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'


export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_2m4k2kz', 'template_otxzira', form.current, 
       '9m6GrTUWJwAsCWprZ',
      )
      .then(
        (result) => {
          Swal.fire('Thank You', result.text);
        },
        (error) => {
          Swal.fire('Sorry, try again', error.text);
        },
      );

    }
  return (
    <div id="contact" className="bg-white py-20 " >
<motion.div 
initial={{opacity:0, y:100}}
whileInView={{opacity:1, y:0}}
transition={{duration:1.5, delay:0.7}}
className="text-pink-300 font-bold font-cursive md:text-5xl text-3xl tracking-wide mb-20 text-center"
 >Contact</motion.div>

      <div className="flex md:flex-row flex-col mx-auto max-w-7xl px-5   ">

        <motion.div
initial={{opacity:0, x:-100}}
whileInView={{opacity:1, x:0}}
transition={{duration:1.1, delay:0.7}}
        
        
        className=" space-y-3 md:space-y-4  md:max-w-[60%] max-w-[100%] ">
        
            <h1 className="font-semibold text-gray-800 text-2xl md:text-3xl ">Contact Me</h1>
            <p className="md:max-w-[70%] text-gray-700 ">I'm currently avaliableto take a new project, so feel free to send me a message about
             anything that you want me 
                to work on. You can contact anytime </p>

         <div className="flex flex-col gap-4">   
<div className="inline-flex gap-3 text-center">
    <MdEmail className="w-[25px] h-[25px] text-pink-400" />
<span className="text-gray-700 font-medium">esraaelsaid2525@gmail.com</span>
</div>

<div className="inline-flex gap-3">
<FaPhoneAlt className="w-[25px] h-[25px] text-pink-400"  />
<span className="text-gray-700 font-medium">01025448825</span>
</div>

<div className="inline-flex gap-3">
<FaLocationDot className="w-[25px] h-[25px] text-pink-400"  />
<span className="text-gray-700 font-medium">Cairo, Mansoura</span>
</div>
</div>
        </motion.div>

        <motion.form ref={form} onSubmit={sendEmail}
        initial={{opacity:0, scale:0.7}}
        whileInView={{opacity:1, scale:1}}
        transition={{duration:1.1, delay:0.7}}
        
        className="space-y-3 md:space-y-4  md:w-[80%] w-[100%] pt-10 md:pt-0 ">
            <div>
    <label htmlFor="name" className="text-lg mb-1 font-semibold block text-gray-700">Name:</label>
    <input type="text" id="name" name="name" placeholder="Enter your name" className="w-full py-2 px-4 border
     border-gray-700 rounded-md focus:ring-1 focus:outline-none focus:ring-pink-400" required/>
    </div>
            <div>
    <label htmlFor="email" className="text-lg mb-1 font-semibold block text-gray-700">Email:</label>
    <input type="text" id="email" name="email" placeholder="Enter your email" className="w-full py-2 px-4 border
     border-gray-700 rounded-md focus:ring-1 focus:outline-none focus:ring-pink-400" required/>
    </div>
            <div>
    <label htmlFor="message" className="text-lg mb-1 font-semibold block text-gray-700">Message:</label>
    <textarea rows='5' id="message" name="message" type="text" placeholder="Enter your message" className="w-full py-2 px-4 border
     border-gray-700 rounded-md focus:ring-1 focus:outline-none focus:ring-pink-400" required>
    </textarea>
    </div>
    <div className="text-center py-2 ">
        <button type="submit" className="text-gray-800 bg-pink-300 py-2 px-4 rounded-full text-lg w-full font-semibold
        hover:bg-pink-200">Send</button>
    </div>
          
</motion.form>

      </div>
    </div>
  )
}
