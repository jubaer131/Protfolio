import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className='max-w-6xl mx-auto mt-16 lg:mt-28 p-6'>
            <div className=''>
                <h1 className='text-4xl lg:text-6xl font-bold '> <span className='text-white'>Hello, I'm</span> <span className='text-teal-500'>Jubaer Ahmed</span></h1>
                <h2 className='text-2xl text-white my-6'>Frontend Web Developer</h2>
                <p className='text-white'>Welcome to the world of front-end development, a realm where creativity meets technical prowess. As a front-end developer, I don't just build websites; I craft interactive experiences that bridge the gap between users and information. It's a role that demands a blend of artistic vision and meticulous coding, a constant dance between aesthetics and functionality.</p>

                <p className='text-white'>My journey begins with the user interface, the visual tapestry of a website. Here, I leverage the power of HTML, the cornerstone of web development.  Think of HTML as the skeleton, providing structure and organization to the content. Each element, from paragraphs to images, is meticulously coded, ensuring a clear and logical layout. <br /><br />

                    But a website doesn't come alive with just structure. This is where CSS, the magician's cloak, takes center stage.  With CSS, I wield a palette of colors, fonts, and layouts, painting the website with visual appeal.  I meticulously craft the look and feel, considering everything from button styles to hover effects, ensuring a cohesive and visually stunning experience.</p>
                <p className='text-white'>Being a front-end developer is more than just a job; it's a passion. It's the satisfaction of seeing a website come to life, pixel by pixel, line by line. It's the challenge of pushing the boundaries of what's possible within the browser. But most importantly, it's the joy of creating user experiences that are intuitive, beautiful, and engaging.</p>
            </div>
            <div className='space-x-4 mt-6'>

                <Link href="/#projects">

                    <button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-800 dark:text-gray-800">Projects</button>
                </Link>
                <Link href="https://drive.google.com/uc?export=download&id=1IQqTye4xHi0YlN7aMC0B04NHgWzXfSY3">

                    <button type="button" className="px-8 py-3 font-semibold rounded bg-teal-500 text-black" download="MyResume.pdf"> Resume</button>
                </Link>
            </div>
            <div>
                <Link href='/'> <button type="button" className="px-8 py-3 font-semibold rounded bg-teal-500 text-black mt-5">Move Home</button></Link>
            </div>
        </div>
    );
};

export default page;