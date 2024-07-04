import React from 'react';
import { GiPointing } from "react-icons/gi";
import 'animate.css';
const Education = () => {
    return (
        <div className='container mx-auto mb-5 p-8'>
            <h1 className='text-2xl lg:text-4xl text-center font-bold my-12 text-white animate__animated animate__bounce'>Education & Experience</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-y-8 lg:p-10'>
                <div className="card border-2  border-sky-400 lg:w-10/12 lg:h-56 mx-3 shadow-2xl shadow-sky-600 animate__animated animate__backInLeft">
                    <div className="space-y-2 p-8 ">
                        <h2 className="text-2xl font-semibold text-white  ">Master of Arts (M.A) in Dawah and Islamic Studies .</h2>
                        <h3 className='text-white  font-medium'> Passing Year : Running</h3>
                        <p className='text-white '> Islamic University, Kustia.</p>
                        <p className='text-white '>Bangladesh</p>
                    </div>
                </div>
                <div className="card border-2 border-sky-400 lg:w-10/12 lg:h-56 shadow-2xl shadow-sky-600 mx-3 animate__animated animate__backInLeft">
                    <div className="space-y-2 p-8 ">
                        <h2 className="text-2xl font-semibold text-white  ">React.js Project Developer</h2>
                        <h3 className='text-white flex gap-2 items-center font-medium'><GiPointing /> Dynamic UI Creation :</h3>
                        <p className='text-white '>Crafted captivating user interfaces & web interaction.</p>
                        <h3 className='text-white flex gap-2 items-center font-medium'><GiPointing /> Tailwind CSS Mastery :</h3>
                        <p className='text-white  '>Leveraged Tailwind CSS for refined, modernized web aesthetics.</p>
                    </div>
                </div>

                <div className="card border-2 border-sky-400 lg:w-10/12 lg:h-56 mx-3 shadow-2xl shadow-sky-600 animate__animated animate__backInLeft">
                    <div className="space-y-2 p-8 ">
                        <h2 className="text-2xl font-semibold text-white  ">Bachelor of Arts (B.A) in Dawah and Islamic Studies .</h2>
                        <h3 className='text-white  font-medium'> Passing Year : 2023</h3>
                        <p className='text-white '> Islamic University, Kustia.</p>
                        <p className='text-white '>Bangladesh</p>
                    </div>
                </div>


                <div className="card border-2 border-sky-400 lg:w-10/12 lg:h-56 shadow-2xl shadow-sky-600  mx-3 animate__animated animate__backInLeft">
                    <div className="space-y-2 p-8 ">
                        <h2 className="text-2xl font-semibold text-white  ">Next.js Project Developer</h2>
                        <h3 className='text-white flex gap-2 items-center font-medium'><GiPointing /> Dynamic UI Creation</h3>
                        <p className='text-white '>Developed engaging and responsive user interfaces using Next.js..</p>
                        <h3 className='text-white flex gap-2 items-center font-medium'><GiPointing />Tailwind CSS Mastery :</h3>
                        <p className='text-white  '>Leveraged Tailwind CSS for refined, modernized web aesthetics.</p>
                    </div>
                </div>
                <div className="card shadow-2xl shadow-sky-600 border-2 border-sky-400 lg:w-10/12 lg:h-56   mx-3 animate__animated animate__backInLeft">
                    <div className="space-y-2 p-8 ">
                        <h2 className="text-2xl font-semibold text-white  ">Version Control Skills</h2>
                        <h3 className='text-white flex gap-2 items-center font-medium'><GiPointing /> Git Proficiency :</h3>
                        <p className='text-white '>Expert in Git for collaborative development.</p>
                        <h3 className='text-white flex gap-2 items-center font-medium'><GiPointing />Repository Management:</h3>
                        <p className='text-white  '>Managed version-controlled repositories for code integrity.</p>
                    </div>
                </div>
                <div className="card shadow-2xl shadow-sky-600 border-2 border-sky-400 lg:w-10/12 lg:h-56  mx-3 animate__animated animate__backInLeft">
                    <div className="space-y-2 p-8 ">
                        <h2 className="text-2xl font-semibold text-white  ">Database Integration With MongoDB</h2>
                        <h3 className='text-white flex gap-2 items-center font-medium'><GiPointing /> Efficient Data Storage:</h3>
                        <p className='text-white '>Utilized MongoDB for efficient, scalable data storage.</p>
                        <h3 className='text-white flex gap-2 items-center font-medium'><GiPointing /> Enhanced Backend Functionality:</h3>
                        <p className='text-white  '>Integrated MongoDB, optimized backend for performance.</p>
                    </div>
                </div>



            </div>

        </div>
    );
};

export default Education;