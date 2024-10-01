import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { easeInOut, motion } from "framer-motion";
import { scrollEffect } from "../App";
import { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { RxHamburgerMenu } from "react-icons/rx";
const NavBar = () => {
    const {amount, setAmount} = useContext(scrollEffect)
    const [slideAmount, setSlideAmount] = useState(0)
    const [isShowMenu, setIsShowMenu] = useState(false)
    const [animateAmout, setAnimateAmount] = useState(0)

    useEffect(() => {
        if (isShowMenu === true) {
            setSlideAmount(100)
            document.body.style.overflowY = "hidden"
        } else {
            setSlideAmount(8)
            document.body.style.overflowY = "scroll"
        }
    }, [isShowMenu])

    useEffect(() => {
        switch(amount) {
            case 0:
                setAnimateAmount(0);
                break;
            case 185:
                setAnimateAmount(25)
                break
            case 374:
                setAnimateAmount(50)
                break
            case 561:
                setAnimateAmount(75)
                break
        }

        console.log("error")
    }, [amount])
  return (
    <>
    <div className="lg:w-[70%] lg:right-[15%] fixed top-0 right-0 z-20 md:w-[100%] md:flex h-[60px]  mx-auto lg:rounded-b-[15px] hidden justify-evenly items-center bg-[#2F2519] backdrop-filter backdrop-blur-lg bg-opacity-45">
        <div className="w-[70%]  rounded-md flex justify-between items-center relative h-[75%]">
            <motion.div
            animate={{
                translateX: `${amount}%`
            }}

            transition={{
                duration: 0.5,
                ease: easeInOut
            }}
            className="absolute top-0 left-0  w-[15%] bg-gradient-to-r from-transparent via-yellow-600 opacity-55 to-red-900  h-[100%]  rounded-md"></motion.div>
            <button onClick={() => {
                setAmount(0)
                }} className="text-gray-400 font-mono tracking-wide text-[18px] relative z-10 w-[15%]  h-[100%] flex justify-center items-center ">Home</button>
            <button onClick={() => {
                setAmount(185)}} className="text-gray-400 font-mono tracking-wide text-[18px] w-[15%] h-[100%] flex relative justify-center items-center ">Project</button>
            <button onClick={() => setAmount(374)} className="text-gray-400 font-mono tracking-tight text-[18px] w-[16%] h-[100%] relative flex justify-center items-center  ">About me</button>
            <button onClick={() => setAmount(561)} className="text-gray-400 font-mono tracking-wide relative text-[18px] w-[15%] h-[100%] flex justify-center items-center ">Contact</button>
        </div>
        <div className="w-[10%] h-[100%] border-1px flex  justify-between items-center">
        <motion.a
        
        animate={{
            translateY: ["-10px", "0"]
        }}
        
        transition={{
            duration: 0.2,
            ease: easeInOut,
            
        }}

        className="block" target="_blank" href="https://www.linkedin.com/in/onyeka-ujowundu-72b897246"><FaLinkedinIn className="text-[18px] transition-all hover:text-[20px] duration-300 hover:text-gray-400 text-gray-300" />
        </motion.a>
        
        <motion.a
        animate={{
            translateY: ["-10px", "0"]
        }}
        
        transition={{
            duration: 0.2,
            ease: easeInOut,
            delay: 0.2,
        }}
        className="block" target="_blank" href="https://x.com/RollandGer41254?t=adbbcGF5SbantBb1T4Ijww&s=09">
        <FaXTwitter className="text-gray-300 hover:text-[20px] text-[18px]  transition-all duration-300 hover:text-gray-400 " />
        </motion.a>
        <motion.a
        animate={{
            translateY: ["-10px", "0"]
        }}
        
        transition={{
            duration: 0.2,
            ease: easeInOut,
            delay: 0.4,
        }}

        className="block" target="_blank" href="https://github.com/geraldrolland/">
        <FaGithub className="text-[18px] hover:text-[20px] text-gray-300  transition-all duration-300 hover:text-gray-400 " />
        </motion.a>
        </div>
    </div>


    {
        createPortal(
        <motion.div
        animate={{
            height: `${slideAmount}%`,
        }}
         className="fixed md:hidden top-0 right-0 w-[100%] h-[8%] bg-opacity-25 backdrop-filter  backdrop-blur-md overflow-hidden bg-[#2F2519] z-20">
            <div className="w-[100%] relative h-[100%]">
                <div className="w-[100%] flex justify-start absolute top-0 right-0  items-center h-[55px]">
                    <div className="w-[50%] overflow-hidden h-[100%]">
                        <motion.div
                        animate={{
                            translateX: `-${animateAmout}%`
                        }}

                        transition={{
                            duration: 1,
                            ease: easeInOut,
                        }}
                         className="h-[100%] w-[400%]   flex justify-start items-center">

                            <div className="w-[25%]  text-transparent text-[21px] tracking-wide h-[100%] capitalize flex justify-center items-center font-mono bg-gradient-to-r from-transparent via-yellow-600  bg-clip-text  to-red-900  ">
                                home
                            </div>

                            <div className="w-[25%] text-transparent text-[21px] tracking-wide h-[100%] capitalize flex justify-center items-center font-mono bg-gradient-to-r from-transparent via-yellow-600  bg-clip-text  to-red-900  ">
                                project
                            </div>

                            <div className="w-[25%] text-transparent text-[21px]  h-[100%] capitalize flex justify-center items-center font-mono  bg-gradient-to-r from-transparent via-yellow-600  bg-clip-text  to-red-900 tracking-wide">
                                about me
                            </div>

                            <div className="w-[25%]  text-transparent text-[21px] tracking-wide h-[100%] capitalize flex justify-center items-center font-mono bg-gradient-to-r from-transparent via-yellow-600  bg-clip-text  to-red-900  ">
                                contact
                            </div>
                        </motion.div>
                    </div>
                <RxHamburgerMenu onClick={() => setIsShowMenu(!isShowMenu)} className="text-gray-300 absolute right-0 top-3 text-[30px] mr-4" />
                </div>
                <div className="w-[55%] absolute h-[300px]  mt-8 ml-2 top-14 left-0">
                    <button onClick={() => {
                        setIsShowMenu(!isShowMenu)
                        setAmount(0)
                        setAnimateAmount(0)
                    }} className="w-[100%] h-[50px] flex justify-start transition-all active:scale-105 transform items-center rounded-[8px] border-[1px] font-mono pl-2 text-[20px] tracking-wide text-gray-300">
                        Home
                    </button>
                    <button
                    onClick={() => {
                        setIsShowMenu(!isShowMenu)
                        setAmount(185)
                        setAnimateAmount(25)
                    }} 
                    className="w-[100%] h-[50px] transition-all active:scale-105 mt-4 pl-2 flex  justify-start rounded-[8px] items-center border-[1px] font-mono text-[20px] tracking-wide text-gray-300">
                        Project
                    </button>
                    <button
                    onClick={() => {
                    setIsShowMenu(!isShowMenu)
                    setAmount(374)
                    setAnimateAmount(50)
                    }} 
                    className="w-[100%] transition-all active:scale-105 h-[50px] mt-4 flex pl-2 justify-start items-center rounded-[8px] border-[1px] font-mono text-[20px] tracking-wide text-gray-300">
                        About me
                    </button>
                    <button
                    onClick={() => {
                        setIsShowMenu(!isShowMenu)
                        setAmount(561)
                        setAnimateAmount(75)
                    }}
                    className="w-[100%] transition-all active:scale-105 h-[50px] flex rounded-[8px] mt-4 pl-2 justify-start items-center border-[1px] font-mono text-[20px] tracking-wide text-gray-300">
                        Contact
                    </button>
                </div>
                <div className=" ml-2 w-[130px] h-[45px] absolute top-[380px] flex justify-evenly items-center rounded-md border-[1px]">
        <motion.a
        
        animate={{
            translateY: ["-10px", "0"]
        }}
        
        transition={{
            duration: 0.2,
            ease: easeInOut,
            
        }}

        className="block" target="_blank" href="https://www.linkedin.com/in/onyeka-ujowundu-72b897246"><FaLinkedinIn className="text-[18px] hover:text-[20px] transition-all duration-300 hover:text-gray-400 text-gray-300" />
        </motion.a>
        
        <motion.a
        animate={{
            translateY: ["-10px", "0"]
        }}
        
        transition={{
            duration: 0.2,
            ease: easeInOut,
            delay: 0.2,
        }}
        className="block" target="_blank" href="https://x.com/RollandGer41254?t=adbbcGF5SbantBb1T4Ijww&s=09">
        <FaXTwitter className="text-gray-300 text-[18px]  transition-all duration-300 hover:text-gray-400 " />
        </motion.a>
        <motion.a
        animate={{
            translateY: ["-10px", "0"]
        }}
        
        transition={{
            duration: 0.2,
            ease: easeInOut,
            delay: 0.4,
        }}

        className="block" target="_blank" href="https://github.com/geraldrolland/">
        <FaGithub className="text-[18px] text-gray-300  transition-all duration-300 hover:text-gray-400 " />
        </motion.a>
        </div>
        </div>
        </motion.div>, document.getElementById("menu-root")!)
    }
    </>
  )
}

export default NavBar