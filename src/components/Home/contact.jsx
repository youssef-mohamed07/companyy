import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faClock, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

export default function ContactUS() {
    const { t } = useTranslation();
    
    const contactMethods = [
        {
            icon: faEnvelope,
            contact: "aa90101077aa@gmail.com",
            label: t('contact.email')
        },
        {
            icon: faPhone,
            contact: "968 96611253",
            label: t('contact.phone')
        },
        {
            icon: faMapMarkerAlt,
            contact: "Al Khawd / Al Seeb / Muscat Governorate",
            label: t('contact.address')
        },
        {
            icon: faClock,
            contact: t('contact.businessHoursDetails'),
            label: t('contact.businessHours')
        },
        {
            icon: faGlobe,
            contact: "abdulazizgroups.com",
            label: t('contact.website')
        }
    ];

    return (
        <section id="contact" className="bg-white py-16">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <header className="text-center mb-10">
                    <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">
                        {t('contact.getInTouch')}
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {t('contact.weAreHereToAnswer')}
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                {t('contact.contactInformation')}
                            </h3>
                            <ul className="space-y-4">
                                {contactMethods.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-x-3">
                                        <div className="flex-none text-yellow-600">
                                            <FontAwesomeIcon icon={item.icon} size="lg" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800">{item.label}</p>
                                            <p className="text-gray-600">{item.contact}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                       
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">{t('contact.sendUsAMessage')}</h3>
                        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="full-name">
                                    {t('contact.fullName')}
                                </label>
                                <input
                                    id="full-name"
                                    type="text"
                                    required
                                    className="w-full px-3 py-2 text-gray-500 bg-transparent outline-none border border-gray-300 focus:border-yellow-600 rounded-md"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                                    {t('contact.email')}
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    className="w-full px-3 py-2 text-gray-500 bg-transparent outline-none border border-gray-300 focus:border-yellow-600 rounded-md"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="subject">
                                    {t('contact.subject')}
                                </label>
                                <input
                                    id="subject"
                                    type="text"
                                    required
                                    className="w-full px-3 py-2 text-gray-500 bg-transparent outline-none border border-gray-300 focus:border-yellow-600 rounded-md"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
                                    {t('contact.message')}
                                </label>
                                <textarea 
                                    id="message"
                                    required 
                                    className="w-full h-32 px-3 py-2 resize-none text-gray-500 bg-transparent outline-none border border-gray-300 focus:border-yellow-600 rounded-md"
                                ></textarea>
                            </div>
                            <button
                                className="w-full px-4 py-2 text-white font-medium bg-yellow-600 hover:bg-yellow-700 active:bg-yellow-800 rounded-md transition duration-150 ease-in-out"
                            >
                                {t('contact.sendMessage')}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
