import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Statistics() {
    const { t } = useTranslation();

    const stats = [
        {
            data: "35K",
            title: t('customers'),
            description: t('happy_customers_desc')
        },
        {
            data: "10K+",
            title: t('downloads'),
            description: t('downloads_desc')
        },
        {
            data: "40+",
            title: t('countries'),
            description: t('countries_desc')
        },
        {
            data: "30M+",
            title: t('total_revenue'),
            description: t('total_revenue_desc')
        },
    ];

    return (
        <>
            <motion.span 
                className="relative flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div 
                    id="statistics"
                    className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-75"
                ></div>
            </motion.span>
            <section className="py-14 bg-white">
                <div className="max-w-screen-xl mx-auto px-4 text-black gap-x-12 items-start justify-between lg:flex md:px-8">
                    <motion.div 
                        className="sm:hidden lg:block lg:max-w-xl"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img 
                            draggable='false' 
                            src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                            className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" 
                            alt={t('happy_customers')}
                        />
                    </motion.div>
                    <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
                        <motion.div 
                            className="max-w-2xl"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h3 className="text-black text-3xl font-semibold sm:text-4xl">
                                {t('happy_customers')}
                            </h3>
                        </motion.div>
                        <motion.div 
                            className="flex-none mt-6 md:mt-0 lg:mt-6"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <ul className="inline-grid gap-y-8 gap-x-14 grid-cols-2">
                                {stats.map((item, idx) => (
                                    <motion.li 
                                        key={idx} 
                                        className="text-center"
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <motion.h4 
                                            className="text-4xl text-yellow-500 font-semibold"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                                        >
                                            {item.data}
                                        </motion.h4>
                                        <motion.p 
                                            className="mt-3 font-medium text-black-400"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
                                        >
                                            {item.title}
                                        </motion.p>
                                        <motion.p 
                                            className="mt-2 text-sm text-gray-500"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 1.0 + idx * 0.1 }}
                                        >
                                            {item.description}
                                        </motion.p>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
