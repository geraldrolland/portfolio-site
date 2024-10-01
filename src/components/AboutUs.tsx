import { useEffect, useState } from "react"
import nice from "../assets/image/nice.jpg"
import { easeInOut, motion } from "framer-motion"
const AboutUs = () => {
    const [isShowAbout, setIsShowAboutMe] = useState(false)
    useEffect(() => {
        const about = document.querySelector("#about-container")!

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsShowAboutMe(true)
                } else {
                    setIsShowAboutMe(false)
                }
            })
        })

        observer.observe(about)
    }, [])

  return (
    <div id="about-container" className="w-[100%]  flex flex-wrap md:justify-center md:mt-24 gap-y-2  items-start ">
        <div

        className="md:w-[600px] w-[100%]   h-[500px] flex justify-end items-end md:items-center overflow-hidden">
            <motion.img 
            animate={ isShowAbout ? {
            translateX: ["100%", "0"]
            } : {}} 
            transition={{
            duration: 1.5,
            ease: easeInOut
            }}  
            className="rounded-full  lg:min-w-[400px] lg:w-[450px] lg:min-h-[400px] lg:h-[450px]  object-cover min-w-[350px] h-[350px] opacity-80 md:w-[450px] md:h-[450px] " src={nice} alt="" />
        </div>
        <div className="md:w-[600px] w-[100%]   flex justify-start items-center border-l-[1px] border-gray-400 overflow-hidden">
            <motion.div
            animate={ isShowAbout ? {
                translateX: ["-100%", "0"]
            } : {}} 

            transition={{
                duration: 1.5,
                ease: easeInOut
            }}
            className="w-[100%] rounded-md bg-gray-900 h-[100%] px-2">
                <h1 className="md:text-[60px] text-[30px] text-gray-400 font-spaceMono  capitalize tracking-wide">
                    about me
                </h1>
                <p className="font-muli text-gray-300 text-wrap text-[20px]">
                    Hi, my name is <span className="text-[25px]">Onyeka Gerald Ujowundu</span> and i am a <span className="text-[25px] capitalize">software engineer </span> with a passion for crafting innovative and efficient digital solutions. With a solid background in full-stack development, I specialize in building responsive, user-friendly applications that solve real-world problems. <br/><br/>

Over the years, I’ve gained experience working with technologies such as React, Django, and Docker, constantly seeking out new tools and methodologies to improve my skills. I believe that the beauty of coding lies in its ability to transform ideas into reality, and that drives me to take on challenges with enthusiasm.
<br/><br/>
I’m a firm believer in continuous learning, and I thrive in dynamic environments where creativity and collaboration are key. Whether I'm working on a solo project or contributing to a larger team effort, I always strive to bring my best to the table.
<br/><br/>
When I'm not in front of a computer, I enjoy keeping up with emerging tech trends, participating in hackathons, or just unwinding with a good book on AI and machine learning. I'm excited about the future of technology and am always looking for opportunities to make an impact through code.
                </p>
            </motion.div>
        </div>
    </div>
  )
}

export default AboutUs