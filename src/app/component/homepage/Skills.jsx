import React from 'react';
import Image from 'next/image';
import 'animate.css';
const Skills = () => {

    const technologis = [
        {
            "name": "HTML",
            "photo": "https://i.ibb.co/K6NzK59/html-5.png"
        },
        {
            "name": "CSS",
            "photo": "https://i.ibb.co/zFGgN2x/free-css3-4387639-3640300.webp"
        },
        {
            "name": "JavaScript",
            "photo": "https://i.ibb.co/zQFg3N1/code-programming-javascript-software-develop-command-language-512.webp"
        },
        {
            "name": "React.js",
            "photo": "https://i.ibb.co/rQsMq96/282599.webp"
        },
        {
            "name": "Next.js",
            "photo": "https://i.ibb.co/8Pty5pD/idu-LCh-Sb1a.jpg"
        },
        {
            "name": "Tailwind CSS",
            "photo": "https://i.ibb.co/GFmWPhr/images-4.png"
        },
        {
            "name": "Firebase",
            "photo": "https://i.ibb.co/C6yxN76/images-7.png"
        },
        {
            "name": "Daisy UI",
            "photo": "https://i.ibb.co/C9V0Bgh/favicon-192.png"
        },
        {
            "name": "Mumba UI",
            "photo": "https://i.ibb.co/7bKvDDm/images-11.png"
        },
        {
            "name": "Stripe",
            "photo": "https://i.ibb.co/B2QFShq/images-10.png"
        },
        {
            "name": "Node.js",
            "photo": "https://i.ibb.co/rw0q4Q6/images-12.png"
        },
        {
            "name": "Express.js",
            "photo": "https://i.ibb.co/9gBcx7n/express-js.png"
        },
        {
            "name": "MongoDB",
            "photo": "https://i.ibb.co/ThdSBks/png-transparent-mongodb-nosql-database-computer-icons-others-leaf-grass-fruit-thumbnail.png"
        },
        {
            "name": "GitHub",
            "photo": "https://i.ibb.co/J3MThrH/images-8.png"
        },
        {
            "name": "Netlify",
            "photo": "https://i.ibb.co/z7xjHgy/images-9.png"
        }
    ]






    return (
        <div id='Skills' className='max-w-7xl mx-auto md:my-20 mt-16 p-5  animate__animated animate__pulse'>
            <h1 className='text-4xl lg:text-4xl text-white text-center font-bold md:mb-24 mb-16'>Skills & Expertise</h1>
            <div className='grid grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-8'>
                {
                    technologis.map(item => <button key={item.photo} className='flex items-center justify-center gap-2 lg:gap-5 text-white hover:bg-[#3193ee]  hover:text-white btn btn-ghost border-2 border-white'><Image alt="book" src={item.photo} width={30} height={30} className='rounded-full'></Image>  {item.name}</button>)
                }
            </div>
        </div>
    );
};

export default Skills;