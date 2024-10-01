import React, { useEffect, useState } from "react"
import NavBar from "./components/NavBar"
import nice from "../src/assets/image/nice.jpg"
import { IoIosArrowForward } from "react-icons/io";
import { easeInOut, motion } from "framer-motion";
import pic from "../src/assets/image/pic2.jpg"
import html from "../src/assets/image/html.png"
import css from "../src/assets/image/css.png"
import javacript from "../src/assets/image/javascript.png"
import fastapi from "../src/assets/image/fastapi.png"
import tailwindcss from "../src/assets/image/tailwindcss.png"
import django from "../src/assets/image/django.png"
import "../src/styles/home.css"
import typescript from "../src/assets/image/typescript.png"
import mongodb from "../src/assets/image/mongondb.png"
import python from "../src/assets/image/python.png"
import redis from "../src/assets/image/redis.png"
import react from "../src/assets/image/react.png"
import mysql from "../src/assets/image/mysql.png"
import postgresql from "../src/assets/image/postgresql.png"
import rabbitmq from "../src/assets/image/rabbitmq.png"
import docker from "../src/assets/image/docker.png"
import c from '../src/assets/image/c.png'
import firebase from "../src/assets/image/firebase.png"
import linux from "../src/assets/image/linux.png"
import redux from "../src/assets/image/redux.png"
import nginx from "../src/assets/image/nginx.png"
import git from "../src/assets/image/git.png"
import Project from "./components/Project";
import AboutUs from "./components/AboutUs";
import ContactMe from "./components/ContactMe";
import { createPortal } from "react-dom";
type scrollAmount = {
  amount: number,
  setAmount: (amount: number) => void,

}



export const scrollEffect = React.createContext<null | scrollAmount>(null)

function App() {
  const [amount, setAmount] = useState(0)
  const [isAnimate, setIsAnimate] = useState(false)
  const [isDisableIntersection, setIsDisableIntersection] = useState(false)
  const [obj, setObj] = useState< null | IntersectionObserver >(null)

  useEffect(() => {
    document.body.classList.add("bg-gray-950")

    const container: HTMLElement | null = document.getElementById("container")

    const observer = new IntersectionObserver(enteries => {
      enteries.forEach(entry => {
        if(entry.isIntersecting) {
          setIsAnimate(true)
        } 
      })
    }, {
      threshold: 1.0,
     })

    if (container)
      observer.observe(container)
  }, [])

  useEffect(() => {
    
    const targetLists = document.getElementsByClassName("targets")
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry) => {
        if (!isDisableIntersection) {
          console.log("error")
          if (entry.isIntersecting && entry.target.id === "Home" ) {
            setAmount(0)
            console.log("is home")
          }
  
          else if(entry.isIntersecting && entry.target.id === "project" && amount < 185) {
            setAmount(185)
            console.log("is project")
          }
  
          else if(entry.isIntersecting && entry.target.id === "about-me") {
            setAmount(374)
          }

          else if (entry.isIntersecting && entry.target.id === "contact-me") {
            setAmount(561)
          }
        }
      })
    }, {
      threshold: .25,
    })

    const arr = Array.from(targetLists)
    setObj(observer)
    if (isDisableIntersection === false) {
      arr?.forEach(element => {
        observer.observe(element)
      });
    } else {
      observer.disconnect()
    }

  }, [isDisableIntersection])

  useEffect(() => {
    if(amount === 0) {
      obj?.disconnect()
      document.querySelector("#Home")!.scrollIntoView({behavior: "smooth", block: "start"})
    }

    else if(amount === 185) {
      obj?.disconnect()
      document.querySelector("#project")!.scrollIntoView({behavior: "smooth", block: "start"})
    }

    else if (amount === 374) {
      obj?.disconnect()
      document.querySelector("#about-me")!.scrollIntoView({behavior: "smooth", block: "start"})

    }

    else if (amount === 561) {
      obj?.disconnect()
      document.querySelector("#contact-me")!.scrollIntoView({behavior: "smooth", block: "start"})
    }

  }, [amount])

  return (
    <>
    <scrollEffect.Provider value={{amount, setAmount}}>
    <NavBar/>
    <div  id="Home" className="w-[100%]  targets md:h-[1600]  h-[1850px] md:flex justify-center items-center">
      <img className="w-[100%]   object-cover  lg:object-fill h-[100%] opacity-40" src={pic} alt="" />
      <div   className=" md:max-w-[85%] lg:w-[55%] mt-10   w-[100%]  overflow-hidden h-[1750px] md:h-[1600px]  absolute lg:top-[20px] top-[60px]  z-10 ">

        <div id="container" className="w-[100%] flex-wrap overflow-hidden mb-14 flex  md:justify-between md:flex-col lg:flex-row   items-center md:h-[650px]  lg:h-[800px]  h-[700px] md:mb-24 lg:mb-0 mt-8 md:mt-2 lg:mt-0">
        <motion.img
          animate={{
            translateX: ["100%", "0%"],
            opacity: ["40%", "100%"]
          }} 
          transition={{
            duration: 2.5,
            ease: "easeInOut",
          }}

          id="photo"
          className="lg:w-[350px] lg:mt-14 self-start w-[270px] order-1  h-[270px] object-cover lg:h-[350px]  rounded-full" src={nice} alt="" />
          <motion.div
          animate={{
            translateX: ["-100%", "0%"]
          }}

          transition={{
            duration: 2.5,
            ease: "easeInOut"
          }}
           className="md:h-[330px] backdrop-filter backdrop-blur-md rounded-md order-2 lg:order-1  w-[100%] lg:-mt-40   flex flex-col gap-y-2 md:justify-center items-start pl-2  md:w-[100%] ">
            <h1 className="text-gray-300 text-[40px] capitalize font-oswald font-semibold">
              onyeka gerald ujowundu
            </h1>
            <div className="w-[100%]  mt-4 text-gray-400   text-justify md:h-[150px]">
              <div className="lg:w-[95%] md:block flex h-[20%]  md:overflow-hidden">
                <p className="text-gray-400 w-[100%] md:hidden text-wrap font-noto text-[18px]">
                Hi, my name is Onyeka Gerald Ujowundu, and I am a software engineer. I love building user-friendly, interactive, secure, and scalable web applications. I am highly skilled in effective communication and fun to be with. Check out my awesome projects below!
                </p>
              <motion.p
              animate={{
                width: ["0.8%", "105%"]
              }} 

              transition={{
                duration: 5,
                ease:  "linear",
                delay: 1.5,
              }}
              className="w-[0.8%] md:flex text-[18px] overflow-x-hidden font-noto  border-r-[4px] hidden lg:tracking-normal md:tracking-tight text-nowrap py-[2px]  h-[100%]">Hi, my name is Onyeka Gerald Ujowundu, and I am a software engineer. I love </motion.p>
              </div>
              <div style={{visibility: "hidden"}} className="lg:w-[90%]  h-[20%]  overflow-hidden">
              <motion.p
              animate={{
                width: ["0.8%", "105%"],
                visibility: "visible"
              }} 

              transition={{
                duration: 5,
                ease:  "linear",
                delay: 7
                
                
              }}
              className="w-[0.8%] overflow-x-hidden font-noto  border-r-[4px]   text-nowrap hidden text-[18px] md:flex py-[2px] lg:tracking-normal md:tracking-tight h-[100%]"> building user-friendly, interactive, secure, and scalable web applications. </motion.p>
              </div>
              <div style={{visibility: "hidden"}} className="w-[80%]  h-[20%]  overflow-hidden">
              <motion.p
              animate={{
                width: ["0.8%", "105%"],
                visibility: "visible"
              }} 

              transition={{
                duration: 5,
                ease:  "linear",
                delay: 12,
                
                
              }}
              className="w-[0.8%] hidden md:flex font-noto overflow-x-hidden lg:tracking-normal md:tracking-tight  border-r-[4px] text-[18px]  text-nowrap py-[2px]  h-[100%]"> I am highly skilled in effective communication and fun to be with. </motion.p>
              </div>

              <div style={{visibility: "hidden"}} className="w-[50%]  h-[20%]  overflow-hidden">
              <motion.p
              animate={{
                width: ["0.8%", "105%"],
                visibility: "visible",
              }} 

              transition={{
                duration: 3,
                ease:  "linear",
                delay: 17
                
                
              }}
              className="w-[0.8%] md:flex font-noto overflow-x-hidden  lg:tracking-normal md:tracking-tight border-r-[4px]  hidden text-nowrap text-[18px] py-[2px]  h-[100%]"> Check out my awesome projects below! </motion.p>
              </div>
            </div>
            <button
            className="bg-[#06D001] md:mt-0   mx-auto md:mx-0 bg-opacity-40 flex justify-center btn  items-center text-gray-300 capitalize  w-[250px] rounded-md backdrop-filter backdrop-blur-md text-[20px] transition-all duration-300 hover:scale-105 font-mono transform h-[55px] ">
              <h1>checkout my projects</h1>
              <IoIosArrowForward className="" />
            </button>
          </motion.div>


        </div>

        <motion.div
        animate={ isAnimate ? {
          translateY: ["130%", "0"]
        } : {}} 

        transition={{
          duration: 3,
          ease: easeInOut,
        }}
        className="w-[100%]  flex flex-col justify-start  lg:rounded-[10px]  backdrop-filter backdrop-blur-md shadow-md h-[300px] md:mt-0 md:h-[250px] ">
          <h1 className="text-gray-400 ml-[1%] mt-2 text-[20px] font-mono capitalize ">tech stack</h1>
          <div className="md:w-[98%] w-[99%] ml-[1%] items-center flex flex-wrap justify-start">
            <img src={html} alt="" className="w-[45px]  h-[45px]   rounded-md mb-2 mr-2"/>
            <img src={css} alt="" className="w-[45px]  h-[45px]  rounded-md mr-2 mb-2"/>
            <img src={javacript} alt="" className="w-[45px]  h-[45px]  rounded-md mr-2 mb-2"/>
            <img src={django} alt="" className="w-[45px]  h-[45px] mb-2 mr-2  rounded-md"/>
            <img src={tailwindcss} alt="" className="w-[45px]  h-[45px] mb-2 mr-2 rounded-md"/>
            <img src={python} alt="" className="w-[45px]  h-[45px] mr-2 mb-2 rounded-md"/>
            <img src={react} alt="" className="w-[45px]  h-[45px]  rounded-md mb-2 mr-2"/>
            <img src={fastapi} alt="" className="w-[45px]  h-[45px]  rounded-md mr-2 mb-2"/>
            <img src={mongodb} alt="" className="w-[45px]  h-[45px]  rounded-md mb-2 mr-2"/>
            <img src={redis} alt="" className="w-[45px]  h-[45px]  rounded-md mr-2 mb-2"/>
            <img src={typescript} alt="" className="w-[45px]  h-[45px]  rounded-md mb-2 mr-2"/>
            <img src={c} alt="" className="w-[45px]  h-[45px]  rounded-md mr-2 mb-2"/>
            <img src={docker} alt="" className="w-[45px]  h-[45px] mr-2 mb-2 rounded-md"/>
            <img src={postgresql} alt="" className="w-[45px]  h-[45px] mb-2 mr-2 rounded-md"/>
            <img src={mysql} alt="" className="w-[45px]  h-[45px]  rounded-md mr-2 mb-2"/>
            <img src={firebase} alt="" className="w-[45px]  h-[45px]  rounded-md mb-2 mr-2"/>
            <img src={docker} alt="" className="w-[45px]  h-[45px]  rounded-md mb-2 mr-2"/>
            <img src={rabbitmq} alt="" className="w-[45px]  h-[45px]  rounded-md mr-2 mb-2"/>
            <img src={redux} alt="" className="w-[45px]  h-[45px]  rounded-md mb-2 mr-2"/>
            <img src={linux} alt="" className="w-[45px]  h-[45px]  rounded-md mb-2 mr-2"/>
            <img src={nginx} alt="" className="w-[45px]  h-[45px]  rounded-md mb-2 mr-2"/>
            <img src={git} alt="" className="w-[45px]  h-[45px]  rounded-md mr-2 mb-2"/>
          </div>
          </motion.div>

          <motion.div
        animate={isAnimate ?{
          translateY: ["130%", "0"]
        } : {}} 

        transition={{
          duration: 3,
          ease: easeInOut,
        }}
          className="w-[100%] mt-10  flex flex-col justify-start space-y-2 rounded-[10px] backdrop-filter backdrop-blur-md shadow-md md:h-[250px]">
          <h1 className="text-gray-400 ml-[1%] mt-2 text-[20px] font-mono capitalize">skills</h1>
          <div className="w-[98%]  ml-[1%] items-center flex flex-wrap justify-start">
            <div className="w-[260px] h-[45px] border-[1px] rounded-md flex mb-2 mr-2 text-gray-300 font-semibold font-mono justify-center items-center capitalize text-[18px]">Effective communication</div>
            <div className="w-[180px] h-[45px] border-[1px] rounded-md flex text-gray-300 font-semibold font-mono justify-center items-center mr-2 mb-2 capitalize text-[18px]">collaboration</div>
            <div className="w-[170px] h-[45px] mr-2 mb-2 border-[1px] rounded-md flex text-gray-300 font-semibold font-mono justify-center items-center capitalize text-[18px]">innovative</div>
            <div className="w-[180px] h-[45px] border-[1px] rounded-md flex text-gray-300 font-semibold font-mono justify-center items-center capitalize mb-2 mr-2 text-[18px]">analytical</div>
            <div className="w-[165px] h-[45px] border-[1px] rounded-md flex text-gray-300 font-semibold font-mono justify-center mb-2 mr-2 items-center capitalize text-[18px]">creativity</div>
            <div className="w-[180px] h-[45px] border-[1px] rounded-md flex text-gray-300 font-semibold font-mono justify-center items-center mb-2 mr-2 capitalize text-[18px]">adaptability</div>
            <div className="w-[220px] h-[45px] border-[1px] rounded-md flex text-gray-300 font-semibold font-mono justify-center items-center capitalize mb-2 mr-2 text-[18px]">attention to detail</div>
            <div className="w-[200px] h-[45px] border-[1px] rounded-md flex text-gray-300 font-semibold font-mono justify-center items-center capitalize mr-2 mb-2 text-[18px]">Time Management</div>
            <div className="w-[200px] h-[45px] border-[1px] rounded-md flex text-gray-300 font-semibold mb-2 mr-2 font-mono justify-center items-center capitalize text-[18px]">problem-solving</div>
          </div>
          </motion.div>
      </div>
    </div>
    <div id="project" className="w-[100%] targets gap-y-4  lg:ml-[2.5%]  lg:w-[95%]   pt-[80px] mt-24">
      <h1 className="text-gray-400 font-spaceMono text-[30px] md:text-[60px] ml-7 md:ml-0 md:text-center  mb-4  capitalize ">
        my projects
      </h1>
      <div className="flex  justify-center items-center md:justify-center flex-wrap gap-y-4 md:gap-x-2">
      <Project/>
      <Project/>
      <Project/>
      <Project/>
      <Project/>
      <Project/>
      </div>

    </div>
    <div id="about-me" className="lg:w-[90%] targets w-[100%]   mx-auto flex md:mt-40  justify-center items-center">
      <AboutUs/>
    </div>
    <div id="contact-me" className="lg:w-[1000px] mt-[300px]  md:w-[100%] lg:mt-[150px] md:mt-[550px] h-[400px] items-end  md:h-[500px]  mx-auto flex justify-center md:items-end mb-40  targets ">
      <ContactMe/>
    </div>
    </scrollEffect.Provider>
    </>
  )
}

export default App