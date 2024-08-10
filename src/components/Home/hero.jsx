import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { SiGoogle, SiMicrosoft, SiApple } from 'react-icons/si';

export default function Hero() {
    useEffect(() => {
        // Add any necessary initialization code here
    }, []);

    return (
        <section className="py-28 bg-white overflow-hidden">
            <div className="max-w-screen-xl mx-auto text-gray-300 gap-x-12 items-center justify-between md:flex md:px-8">
                <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 md:max-w-xl">
                    <h1 className="text-sm text-yellow-500 font-medium">
                        Over 200 successful deals
                    </h1>
                    <h2 className="text-4xl text-black font-extrabold md:text-5xl">
                        We help startups to grow and make money
                    </h2>
                    <p className="text-black">
                        Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                    </p>
                    <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                        <a 
                            href="/" 
                            className="block py-2 px-4 text-center font-medium bg-yellow-500 duration-150 hover:bg-yellow-600 active:bg-yellow-700 text-white shadow-lg hover:shadow-xl flex items-center justify-center"
                        >
                            Services
                        </a>
                        <a 
                            href="/" 
                            className="flex items-center justify-center gap-x-2 py-2 px-4 duration-150 hover:text-yellow-500 text-black border border-none md:inline-flex"
                        >
                            Contact us
                            <FaArrowRight className="ml-2" />
                        </a>
                    </div>
                </div>
                <motion.div 
                    className="flex-none mt-14 md:mt-0 md:max-w-xl"
                    initial={{ opacity: 0, x: 100 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.6 }}
                >
                    <img
                        src="logo.png"
                        className="w-full"
                        alt="3D character illustration"
                        draggable="false"
                    />
                </motion.div>
            </div>
           
            {/* Why Choose Us Section */}
            <div className="mt-24 px-4 md:px-8 bg-gray-100 py-16">
                <h3 className="text-center text-3xl font-bold text-black mb-12">Why Choose Us</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div className="flex items-start">
                        <FaCheckCircle className="text-yellow-500 text-3xl mr-4" />
                        <div>
                            <h4 className="text-xl font-semibold text-black">Expert Team</h4>
                            <p className="text-black mt-2">
                                Our team of professionals is highly experienced in various industries, ensuring top-quality services for your business.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <FaCheckCircle className="text-yellow-500 text-3xl mr-4" />
                        <div>
                            <h4 className="text-xl font-semibold text-black">Innovative Solutions</h4>
                            <p className="text-black mt-2">
                                We provide cutting-edge solutions tailored to meet the unique needs of your business, helping you stay ahead of the competition.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <FaCheckCircle className="text-yellow-500 text-3xl mr-4" />
                        <div>
                            <h4 className="text-xl font-semibold text-black">Client Satisfaction</h4>
                            <p className="text-black mt-2">
                                Our primary goal is to ensure client satisfaction, and we go above and beyond to achieve it with every project we undertake.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <FaCheckCircle className="text-yellow-500 text-3xl mr-4" />
                        <div>
                            <h4 className="text-xl font-semibold text-black">Global Reach</h4>
                            <p className="text-black mt-2">
                                We have successfully executed projects for clients across the globe, making us a trusted partner worldwide.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <FaCheckCircle className="text-yellow-500 text-3xl mr-4" />
                        <div>
                            <h4 className="text-xl font-semibold text-black">24/7 Support</h4>
                            <p className="text-black mt-2">
                                Our dedicated support team is available around the clock to assist you with any queries or issues you may encounter.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <FaCheckCircle className="text-yellow-500 text-3xl mr-4" />
                        <div>
                            <h4 className="text-xl font-semibold text-black">Competitive Pricing</h4>
                            <p className="text-black mt-2">
                                We offer high-quality services at competitive prices, ensuring that you get the best value for your investment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
