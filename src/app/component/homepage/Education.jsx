import React from 'react';
import { GiPointing } from "react-icons/gi";
import 'animate.css';
import Image from 'next/image';
const Education = () => {
    return (
        <div className='max-w-7xl mx-auto mb-5 p-8'>
            <h1 className='text-2xl lg:text-4xl text-center font-bold my-12 text-white animate__animated animate__bounce'>Education & Experience</h1>
            <div className='lg:flex justify-between items-center gap-10 max-sm:space-y-8   lg:p-10'>
                <div className='lg:w-1/2 space-y-8 '>
                    <div className=" border-2 rounded-3xl  border-sky-400  lg:h-64  shadow-2xl shadow-sky-600 animate__animated animate__backInLeft">
                        <div className="space-y-2 p-8 ">
                            <h2 className="text-2xl font-semibold text-white  ">Master of Arts ( M.A) in dawah and islamic studies</h2>
                            <h3 className='text-white  font-medium'> Passing Year : Running</h3>
                            <p className='text-white '> Islamic University, Kustia.</p>
                            <p className='text-white '>Bangladesh</p>
                        </div>
                    </div>


                    <div className=" border-2 rounded-3xl  border-sky-400  lg:h-64  shadow-2xl shadow-sky-600 animate__animated animate__backInLeft">
                        <div className="space-y-2 p-8 ">
                            <h2 className="text-2xl font-semibold text-white  ">Bachelor of Arts (B.A) in Dawah and Islamic Studies .</h2>
                            <h3 className='text-white  font-medium'> Passing Year : 2023</h3>
                            <p className='text-white '> Islamic University, Kustia.</p>
                            <p className='text-white '>Bangladesh</p>
                        </div>
                    </div>
                </div>
                <div className='space-y-16 max-sm:hidden'>
                    <Image className='rounded-3xl animate__animated animate__rotateIn ' alt="logo" src="https://i.ibb.co.com/4fPtzyD/Animation-1726307964508-1.gif" height={80} width={80}></Image>
                    <Image className='rounded-3xl animate__animated animate__rotateIn' alt="logo" src="https://i.ibb.co.com/4fPtzyD/Animation-1726307964508-1.gif" height={80} width={80}></Image>
                    <Image className='rounded-3xl animate__animated animate__rotateIn' alt="logo" src="https://i.ibb.co.com/4fPtzyD/Animation-1726307964508-1.gif" height={80} width={80}></Image>
                </div>
                <div className='lg:w-1/2 space-y-8 '>
                    <div className="border-2 rounded-3xl  border-sky-400  lg:h-64 shadow-2xl shadow-sky-600  animate__animated animate__backInLeft">
                        <div className="space-y-2 p-8">
                            <h2 className="text-2xl font-semibold text-white  ">React.js  &  Next.js Project Developer</h2>
                            <h3 className='text-white flex gap-2 items-center  font-medium'><GiPointing /> Dynamic UI Creation :</h3>
                            <p className='text-white '>Crafted captivating user interfaces & web interaction.</p>
                            <h3 className='text-white flex gap-2 items-center  '><GiPointing /> Tailwind CSS Mastery :</h3>
                            <p className='text-white   '>Leveraged Tailwind CSS for refined, modernized web aesthetics.</p>
                        </div>
                    </div>



                    <div className=" shadow-2xl rounded-3xl  shadow-sky-600 border-2 border-sky-400  lg:h-64   animate__animated animate__backInLeft">
                        <div className="space-y-2 p-8">
                            <h2 className="text-2xl font-semibold text-white  ">Database Integration With MongoDB</h2>
                            <h3 className='text-white flex gap-2 items-center  font-medium'><GiPointing /> Efficient Data Storage:</h3>
                            <p className='text-white '>Utilized MongoDB for efficient, scalable data storage.</p>
                            <h3 className='text-white flex gap-2 items-center  '><GiPointing /> Enhanced Backend Functionality:</h3>
                            <p className='text-white  '>Integrated MongoDB, optimized backend for performance.</p>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    );
};

export default Education;