import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SiNetlify } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { TfiGithub } from "react-icons/tfi";
import 'animate.css';
const Projects = () => {

    const allprojects = [
        {
            "photo": "https://i.ibb.co/4Ttszth/Screenshot-1755.png",
            "title": "Medtrail medical camp",
            "technology": [
                "React",
                "Tailwind CSS",
                "Firebase",
                "Tanstack",
                "Axios",
                "Express",
                "MongoDB",
                "Stripe",
                "JWT Token"
            ],
            "liveLink": "https://medtrailmedicalcamp31.netlify.app",
            "clientRepo": "https://github.com/jubaer131/medtrail-client-side.git",
            "serverRepo": "https://github.com/jubaer131/medtrail-server-side.git"
        },
        // {
        //     "photo": "https://i.ibb.co/Wg7XhdW/Screenshot-1673.png",
        //     "title": "Dreams-home Real Estate",
        //     "technology": [
        //         "React",
        //         "HTML",
        //         "Tailwind CSS",
        //         "Daisy UI",
        //         "Firebase",
        //         "Node.js",
        //         "Express",
        //         "MongoDB",
        //         "GitHub"

        //     ],
        //     "liveLink": "https://dreams-home-a9.netlify.app",
        //     "clientRepo": "https://github.com/jubaer131/Dreams-home-10.git",
        //     "serverRepo": "https://github.com/jubaer131/Dreams-home-10.git"
        // },
        {
            "photo": "https://i.ibb.co/w6jDzsb/Screenshot-1674.png",
            "title": "Travelmate agency",
            "technology": [
                "React",
                "HTML",
                "Tailwind CSS",
                "Firebase",
                "Daisy UI",
                "Express",
                "Node.js",
                "MongoDB",

            ],
            "liveLink": "https://travel-mate-131.netlify.app",
            "clientRepo": "https://github.com/jubaer131/travelmate-client-side-10.git",
            "serverRepo": "https://github.com/jubaer131/travelmate-server-side-10.git"
        },
        {
            "photo": "https://i.ibb.co/HFg7tZC/Screenshot-1679.png",
            "title": "Hotel Management",
            "technology": [
                "HTML",
                "React",
                "Tailwind CSS",
                "Firebase",
                "Mumba UI",
                "Express",
                "MongoDB",
                "Axios",

            ],
            "liveLink": "https://assignment-11-131.netlify.app",
            "clientRepo": "https://github.com/jubaer131/hotelhive.git",
            "serverRepo": "https://github.com/jubaer131/hotelhive-server-side.git"
        }
    ]



    return (
        <div id='projects' className='max-w-7xl mx-auto '>
            <h1 className='text-center text-4xl  font-bold text-white md:my-24 my-12'>Projects</h1>
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-12 max-sm:p-6  animate__animated animate__pulse'>
                {
                    allprojects.map(item =>
                        <div key={item.title} className="flex flex-col   shadow-2xl shadow-white border border-white max-w-lg p-8 space-y-6 overflow-hidden  ">
                            <div className='lg:h-[400px]'>
                                <Link href={item.liveLink}> <Image alt="photo" src={item.photo} width={480} height={300} className="  mb-4  dark:bg-gray-500" /></Link>
                                <h2 className="mb-1 text-xl text-white font-semibold p-3">{item.title}</h2>
                                <div className="">{
                                    item.technology.map((tech, index) => <h1 key={index} className='btn flex-1 gap-5 hover:bg-[#3193ee] text-white text-[15px]'>{tech}</h1>)
                                }</div>
                            </div>
                            <div className="flex flex-wrap justify-between max-sm:gap-y-4">
                                <div className="space-x-2">
                                    <Link href={item.liveLink}><button className='btn'><SiNetlify className='text-2xl text-green-400' /></button></Link>
                                    <Link href={item.clientRepo}><button className='btn'><FaGithub className='text-2xl text-pink-400' /></button></Link>
                                    <Link href={item.serverRepo}><button className='btn'><TfiGithub className='text-2xl text-sky-400' /></button></Link>

                                </div>
                                <div className="flex space-x-2 text-sm dark:text-gray-600">
                                    <button className='btn bg-white text-black hover:bg-[#3193ee] hover:text-white max-sm:hidden'>
                                        Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }


            </div>
        </div>
    );
};

export default Projects;