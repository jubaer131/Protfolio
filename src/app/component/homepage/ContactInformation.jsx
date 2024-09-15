import React from 'react';
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { TfiEmail } from 'react-icons/tfi';
import { FaLocationDot } from 'react-icons/fa6';
import Link from 'next/link';

const ContactInformation = () => {
    return (
        <div id='Contact' className='max-w-7xl mx-auto md:mt-36 mt-20'>
            <h1 className='text-4xl text-white font-bold text-center md:mb-20 mb-8'>Get In Touch</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <div className='p-10 space-y-6'>
                    <h1 className='text-2xl  text-white  font-semibold'>Contact Information</h1>
                    <h1 className='flex gap-2 items-center text-white'><FaWhatsapp className='text-green-500 text-2xl' /> +8801762587131 </h1>
                    <h1 className='flex gap-2 items-center text-white'><TfiEmail className='text-red-500 text-xl' /> jubayerahmad131@gmail.com </h1>
                    <Link href={"https://www.linkedin.com/in/jubaer-ahmed-54b457293"} className='flex gap-2 items-center text-white'><CiLinkedin className='text-sky-500 text-3xl' /> https://www.linkedin.com/in/jubaer-ahmed-54b457293</Link>
                    <Link href={"https://github.com/jubaer131"} className='flex gap-2 items-center text-white'><FaGithub className=' text-2xl' /> https://github.com/jubaer131 </Link>
                    <h1 className='flex gap-2 items-center text-white'><FaLocationDot className='text-red-500 text-2xl' /> Dhaka, Bangladesh </h1>

                </div>
                <div>
                    <div className="w-full max-w-xl p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
                        <form noValidate="" action="" className=" border-2 p-5 border-white">
                            <div className="space-y-8 my-5">
                                <div className="space-y-1 text-sm">
                                    <input type="text" name="username" id="username" placeholder="Name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border-b-2" />
                                </div>
                                <div className="space-y-5 text-sm">
                                    <input type="password" name="password" id="password" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border-b-2" />

                                    <textarea
                                        placeholder="Message"
                                        className=" w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 h-48 border-b-2"></textarea>
                                </div>
                                <div>
                                    <button className='btn w-full bg-white text-black hover:text-white hover:bg-[#3193ee]'>Send Message</button>
                                </div>
                            </div>

                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInformation;