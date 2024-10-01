import home_pic from "../assets/image/home_pic.png"
import { IoEyeOutline } from "react-icons/io5";
import { createPortal } from "react-dom";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
import { easeInOut, motion } from "framer-motion";
const Project = () => {
    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        if (isShow === true) {
            document.body.style.overflowY = "hidden"
        } else {
            document.body.style.overflowY = "scroll"
        }
    }, [isShow])
  return (
    <>
    <div className="lg:w-[600px] md:w-[450px] w-[90%] border-[1px] rounded-md h-[450px] md:h-[500px] flex justify-center items-center">
        <div className="w-[95%] h-[95%] flex justify-center items-center md:gap-y-2 gap-y-1 flex-col">
        <img src={home_pic} alt="" />
        <div className="w-[100%] min-h-[22%] max-h-[35%] md:h-[30%] border-[1px] rounded-md">
            <h1 className="md:text-[30px] font-mono text-gray-300 text-[25px] mt-[1px] md:mt-1 ml-1 capitalize">
                social blog app
            </h1>
            <p className="text-gray-300        md:text-[18px] text-[15px] font-montserrat  w-[100%] text-wrap leading-tight  px-1">
            Built a social blog app that enables users to create and delete posts, provides real-time comments, and includes follow/unfollow features.
            </p>
        </div>
        <button onClick={() => setIsShow(true)} className="w-[65%]  min-h-[50px] transition-all duration-300 lg:hover:scale-105 lg:active:scale-95 active:scale-95 transform rounded-md flex justify-center items-center bg-blue-800 space-x-2">
            <p className="text-gray-300 font-roboto md:text-[20px] text-[18px] capitalize  tracking-tight">view</p>
            <IoEyeOutline className="text-gray-300 text-[18px] md:text-[20px]" />
        </button>
        </div>
    </div>
    {
        createPortal( isShow ?
        <motion.div
        animate={isShow ? {
            scale: [0.6, 1.0]
        } : {}} 

        transition={{
            duration: 0.2,
            ease: easeInOut,
        }}
        className="fixed z-30 top-0 right-0 backdrop-filter w-[100%] h-[100%] backdrop-blur-md overflow-hidden">
            <div className="w-[100%] absolute top-0 right-0 h-[100%]">
            <RxCross2 onClick={() => setIsShow(false)} className="absolute cursor-pointer md:text-[30px] text-red-700 text-[25px] top-4 left-4" />
            </div>
        </motion.div> : null, document.getElementById("project-detail-root")!)
    }
    </>
  )
}

export default Project