import { easeInOut, motion } from "framer-motion"
import linkedin from "../assets/image/linkedin.png"
import whatsapp from "../assets/image/whatsapp.png"
import twitter from "../assets/image/twitter.png"
import gmail from "../assets/image/gmail.png"
import { useEffect, useState } from "react"
export const ContactMe = () => {
    const [isAnimateContact, setIsAnimateContact] = useState(false)
    useEffect(() => {
        const container = document.querySelector("#contact-container")!
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsAnimateContact(true)
                }
                else {
                    setIsAnimateContact(false)
                }
            })
        })

        observer.observe(container)
    }, [])
  return (
    <div id="contact-container" className="md:h-[380px] h-[280px] flex justify-center items-center flex-wrap w-[100%]  ">
        <div className="lg:w-[40%] border-r-[1px] w-[45%] md:w-[50%] h-[100%] overflow-hidden  flex pr-2 justify-end items-start">
            <motion.h1
            animate={isAnimateContact ? {
                translateX: ["100%", "0"]
            } : {}} 

            transition={{
                duration: 1.5,
                ease: easeInOut
            }}
            className="font-spaceMono text-[30px] md:text-[60px] text-gray-400 capitalize">
                contact me
            </motion.h1>
        </div>
        <div className="lg:w-[60%] md:w-[50%] w-[55%] overflow-hidden h-[100%] flex justify-start lg:pl-2 items-center">
            <motion.div
            animate={ isAnimateContact ? {
                translateX: ["-100%", "0"]
            } : {}} 

            transition={{
                duration: 1.5,
                ease: easeInOut
            }}
            className="lg:w-[90%] w-[100%] lg:rounded-md h-[80px] flex justify-evenly items-center md:h-[100px] pl-1 gap-x-[2px]">
                <div className="md:w-[80px] transform transition-all duration-300 md:hover:scale-105 h-[50px] w-[50px] rounded-full md:h-[80px] md:rounded-md">
                    <a href="https://wa.me/2349050894145" target="_blank">
                    <img className="object-cover h-[100%] w-[100%] rounded-full md:rounded-md" src={whatsapp} alt="" />
                    </a>

                </div>
                <div className="md:w-[80px] transform transition-all duration-300 md:hover:scale-105 h-[50px] w-[50px] rounded-full md:h-[80px]  md:rounded-md">
                    <a href="https://www.linkedin.com/in/onyeka-ujowundu-72b897246" target="_blank">
                    <img className="w-[100%] h-[100%] rounded-full md:rounded-md object-cover" src={linkedin} alt="" />    
                    </a>

                </div>
                <div className="md:w-[80px] transform transition-all duration-300 md:hover:scale-105 h-[50px] w-[50px] rounded-full md:h-[80px]  md:rounded-md">
                    <a href="https://x.com/RollandGer41254?t=adbbcGF5SbantBb1T4Ijww&s=09" target="_blank">
                    <img className="w-[100%] h-[100%] rounded-full md:rounded-md" src={twitter} alt="" />
                    </a>
                </div>
                <div className="md:w-[80px] transform transition-all duration-300 md:hover:scale-110  h-[50px] w-[50px] rounded-full md:h-[80px]  md:rounded-md">
                    <a href="mailto:geraldrolland123@gmail.com" target="_blank"><img className="w-[100%] h-[100%]  md:rounded-md object-cover" src={gmail} alt="" />
                    </a>

                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default ContactMe
