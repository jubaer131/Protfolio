import React from 'react';

const Newsletter = () => {
    return (
        <div className='container mx-auto my-10'>

            <section className=" max-sm:p-5">

                <div className="w-full h-[400px] bg-[url('https://i.ibb.co/q71tTMQ/Untitled-design-7.png')] bg-center bg-cover rounded-2xl" >
                    <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-10 mx-auto md:p-10">
                        <h1 className="text-4xl antialiased font-bold leading-none text-center  mt-20 text-white">SUBSCRIBE MY NEWSLETTER</h1>
                        <p className="pt-2 pb-8 text-xl antialiased text-center text-blue-500"></p>
                        <div className="flex flex-row">
                            <input type="text" placeholder="Enter your email here" className="w-3/5 p-3 rounded-l-lg sm:w-2/3 bg-white" />
                            <button className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-[#3193ee] text-white">Subscribe</button>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Newsletter;