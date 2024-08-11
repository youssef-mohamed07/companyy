import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function Hero() {
    const { t } = useTranslation();

    useEffect(() => {
        // Add any necessary initialization code here
    }, []);

    return (
        <div className="bg-white overflow-hidden">
            <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
                <div className="text-gray-300 gap-x-12 items-center justify-between md:flex">
                    <div className="flex-1 space-y-5 sm:max-w-lg md:max-w-xl">
                        <h1 className="text-sm text-yellow-500 font-medium">
                            {t('successful_deals')}
                        </h1>
                        <h2 className="text-4xl text-black font-extrabold md:text-5xl">
                            {t('help_startups')}
                        </h2>
                        <p className="text-black">
                            {t('description')}
                        </p>
                        <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            <a 
                                href="#services" 
                                className="block py-2 px-4 text-center font-medium bg-yellow-500 duration-150 hover:bg-yellow-600 active:bg-yellow-700 text-white shadow-lg hover:shadow-xl flex items-center justify-center"
                            >
                                {t('services')}
                            </a>
                            <a 
                                href="#contact" 
                                className="flex items-center justify-center gap-x-2 py-2 px-4 duration-150 hover:text-yellow-500 text-black border border-none md:inline-flex"
                            >
                                {t('contact_us')}
                                <FaArrowRight className="ml-2" />
                            </a>
                        </div>
                    </div>
                    <motion.div 
                        className="flex-1 mt-14 md:mt-0 md:max-w-xl"
                        initial={{ opacity: 0, x: 100 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 0.6 }}
                    >
                        <img
                            src="logo.png"
                            className="w-full"
                            alt={t('description')}
                            draggable="false"
                        />
                    </motion.div>
                </div>
            </section>
           
            {/* Why Choose Us Section */}
            <section className="bg-white py-16">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-center text-3xl font-bold text-black mb-12">{t('why_choose_us')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div className="flex items-start">
                            <FaCheckCircle className="text-yellow-500 text-3xl mr-4 flex-shrink-0" />
                            <div>
                                <h4 className="text-xl font-semibold text-black">{t('expert_team')}</h4>
                                <p className="text-black mt-2">
                                    {t('expert_team_desc')}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <FaCheckCircle className="text-yellow-500 text-3xl mr-4 flex-shrink-0" />
                            <div>
                                <h4 className="text-xl font-semibold text-black">{t('innovative_solutions')}</h4>
                                <p className="text-black mt-2">
                                    {t('innovative_solutions_desc')}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <FaCheckCircle className="text-yellow-500 text-3xl mr-4 flex-shrink-0" />
                            <div>
                                <h4 className="text-xl font-semibold text-black">{t('client_satisfaction')}</h4>
                                <p className="text-black mt-2">
                                    {t('client_satisfaction_desc')}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <FaCheckCircle className="text-yellow-500 text-3xl mr-4 flex-shrink-0" />
                            <div>
                                <h4 className="text-xl font-semibold text-black">{t('global_reach')}</h4>
                                <p className="text-black mt-2">
                                    {t('global_reach_desc')}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <FaCheckCircle className="text-yellow-500 text-3xl mr-4 flex-shrink-0" />
                            <div>
                                <h4 className="text-xl font-semibold text-black">{t('support')}</h4>
                                <p className="text-black mt-2">
                                    {t('support_desc')}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <FaCheckCircle className="text-yellow-500 text-3xl mr-4 flex-shrink-0" />
                            <div>
                                <h4 className="text-xl font-semibold text-black">{t('competitive_pricing')}</h4>
                                <p className="text-black mt-2">
                                    {t('competitive_pricing_desc')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
