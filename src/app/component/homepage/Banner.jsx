"use client"
import Link from 'next/link';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect/dist/core';
const Banner = () => {


    useEffect(() => {
        const typewriter = new Typewriter('#typewriter', {
            strings: ['Hi, I am Jubaer Ahmed', 'Frontend Web Developer'],
            autoStart: true,
            loop: true,
        });
    }, []);

    return (


        <section className="container mx-auto  shadow-sm rounded-xl">
            <div className=" flex flex-col-reverse max-sm:gap-10 justify-center items-center  sm:py-12 lg:py-24 lg:flex-row">
                <div className="flex flex-col justify-center items-center rounded-sm lg:w-8/12 space-y-2 lg:space-y-4">
                    <h1 id="typewriter" className='md:text-4xl text-2xl text-[#3193ee] font-bold text-start w-10/12 lg:w-11/12 lg:px-8'>
                        {/* Hi, I am Jubaer Ahmed */}
                    </h1>
                    <h1 className='text-3xl text-white font-semibold text-start w-10/12 lg:w-11/12 lg:px-8'>
                        {/* Frontend Web Developer */}

                    </h1>
                    <h1 className="text-[18px] text-white lg:text-xl font-normal lg:w-11/12 px-8 leading-none sm:text-4xl lg:text-left">
                        🚀 As a passionate and experienced Frontend Web Developer , I thrive on creating beautiful and interactive web applications that delight users. My journey in web development has been driven by a love for design and a commitment to crafting seamless user experiences.
                    </h1>

                    <div className="flex flex-col px-8 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start lg:w-11/12">


                        <Link href="https://drive.google.com/uc?export=download&id=1UnZFN81UqaIiVJZkhFf_-fitTAqjL-6z">

                            <button download="MyResume.pdf" class="mt-5 relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                                <span class="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#3193ee] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                                <span class="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                                <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#3193ee] rounded-md opacity-0 group-hover:opacity-100 "></span>
                                <span class="relative text-black font-semibold transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Resume</span>
                            </button>
                        </Link>


                        <Link href="#projects">

                            <button class="relative mt-5 inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                                <span class="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#3193ee] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                                <span class="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                                <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#3193ee] rounded-md opacity-0 group-hover:opacity-100 "></span>
                                <span class="relative text-black font-semibold transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Projects</span>
                            </button>
                        </Link>

                    </div>
                </div>
                <div className="flex items-center justify-center lg:pr-10 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <Image alt="book" src="https://i.ibb.co/fdbYtZD/Untitled-design-6.png" width={640} height={288} className="h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 bg-cover w-full rounded-full" />
                </div>
            </div>
        </section>


    );
};

export default Banner;