import React from 'react';
import { GiPointing } from "react-icons/gi";
import 'animate.css';
import Image from 'next/image';
import { MdLocationOn } from "react-icons/md";
const Education = () => {
    return (
        <div className='max-w-7xl mx-auto mb-5 '>
            <h1 className='md:text-4xl text-4xl text-center font-bold my-12 text-white animate__animated animate__bounce'>Education & Experience</h1>
            <div className='lg:flex justify-between items-center gap-10 max-sm:space-y-8 max-sm:p-6  lg:p-10'>
                <div className='lg:w-1/2 space-y-8 '>
                    <div className=" border-2 rounded-3xl hover:bg-[#3193ee]   border-sky-400  lg:h-64  shadow-2xl shadow-sky-600 animate__animated animate__backInLeft">
                        <div className="space-y-2 p-8 ">
                            <h2 className="text-2xl font-semibold text-white  ">Master of Arts ( M.A) in Dawah and Islamic Studies</h2>
                            <h3 className='text-white  font-medium flex gap-2 items-center '><GiPointing className='text-green-500' /> Passing Year : Running</h3>
                            <p className='text-white flex gap-2 items-center '><GiPointing className='text-green-500' /> Islamic University, Kustia. </p>
                            <p className='text-white flex items-center gap-1 justify-start '><MdLocationOn className='text-green-500 text-xl' />Bangladesh</p>
                        </div>
                    </div>


                    <div className=" border-2 rounded-3xl hover:bg-[#3193ee]  border-sky-400  lg:h-64  shadow-2xl shadow-sky-600 animate__animated animate__backInLeft">
                        <div className="space-y-2 p-8 ">
                            <h2 className="text-2xl font-semibold text-white  ">Bachelor of Arts (B.A) in Dawah and Islamic Studies .</h2>
                            <h3 className='text-white  font-medium flex gap-2 items-center'><GiPointing className='text-green-500' /> Passing Year : 2023</h3>
                            <p className='text-white flex gap-2 items-center'><GiPointing className='text-green-500' /> Islamic University, Kustia.</p>
                            <p className='text-white flex items-center justify-start gap-1 '><MdLocationOn className='text-green-500 text-xl' />Bangladesh</p>
                        </div>
                    </div>
                </div>
                <div className='space-y-16 max-sm:hidden'>
                    <Image className='rounded-3xl animate__animated animate__rotateIn ' alt="logo" src="https://i.ibb.co.com/4fPtzyD/Animation-1726307964508-1.gif" height={80} width={80}></Image>
                    <Image className='rounded-3xl animate__animated animate__rotateIn' alt="logo" src="https://i.ibb.co.com/4fPtzyD/Animation-1726307964508-1.gif" height={80} width={80}></Image>
                    <Image className='rounded-3xl animate__animated animate__rotateIn' alt="logo" src="https://i.ibb.co.com/4fPtzyD/Animation-1726307964508-1.gif" height={80} width={80}></Image>
                </div>
                <div className='lg:w-1/2 space-y-8 '>
                    <div className="border-2 rounded-3xl hover:bg-[#3193ee]  border-sky-400  lg:h-64 shadow-2xl shadow-sky-600  animate__animated animate__backInLeft">
                        <div className="space-y-2 p-8">
                            <h2 className="text-2xl font-semibold text-white  ">React.js  &  Next.js Project Developer</h2>
                            <h3 className='text-white flex gap-2 items-start lg:pt-3 font-medium'><GiPointing className='text-green-500 max-sm:text-2xl' /> Dynamic UI Creation : <br />Crafted captivating user interfaces & web interaction.</h3>

                            <h3 className='text-white flex gap-2 items-start  '><GiPointing className='text-green-500 max-sm:text-2xl' /> Tailwind CSS Mastery : <br />Leveraged Tailwind CSS for refined, modernized web aesthetics.</h3>

                        </div>
                    </div>



                    <div className="hover:bg-[#3193ee]   shadow-2xl rounded-3xl  shadow-sky-600 border-2 border-sky-400  lg:h-64   animate__animated animate__backInLeft">
                        <div className="space-y-2 p-8 ">
                            <h2 className="text-2xl font-semibold text-white  ">Database Integration With MongoDB</h2>
                            <h3 className='text-white flex gap-2 items-start  lg:pt-3 font-medium'><GiPointing className='text-green-500 max-sm:text-2xl' /> Efficient Data Storage : <br />Utilized MongoDB for efficient, scalable data storage.</h3>

                            <h3 className='text-white flex gap-2 items-start  '><GiPointing className='text-green-500 max-sm:text-2xl' /> Enhanced Backend Functionality : <br />Integrated MongoDB, optimized backend for performance. </h3>

                        </div>
                    </div>
                </div>



            </div>

        </div>
    );
};

export default Education;