import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons';

export default function Testimonials() {
    const { t } = useTranslation();

    const testimonials = [
        {
            avatar: "1.jpg",
            name: t('testimonials.items.1.name'),
            title: t('testimonials.items.1.title'),
            quote: t('testimonials.items.1.quote'),
            rating: 5
        },
        {
            avatar: "2.jpg",
            name: t('testimonials.items.2.name'),
            title: t('testimonials.items.2.title'),
            quote: t('testimonials.items.2.quote'),
            rating: 5
        },
        {
            avatar: "3.jpg",
            name: t('testimonials.items.3.name'),
            title: t('testimonials.items.3.title'),
            quote: t('testimonials.items.3.quote'),
            rating: 4
        },
        {
            avatar: "4.jpg",
            name: t('testimonials.items.4.name'),
            title: t('testimonials.items.4.title'),
            quote: t('testimonials.items.4.quote'),
            rating: 5
        },
        {
            avatar: "5.jpg",
            name: t('testimonials.items.5.name'),
            title: t('testimonials.items.5.title'),
            quote: t('testimonials.items.5.quote'),
            rating: 5
        },
        {
            avatar: "6.jpg",
            name: t('testimonials.items.6.name'),
            title: t('testimonials.items.6.title'),
            quote: t('testimonials.items.6.quote'),
            rating: 4
        },
    ];

    const renderStars = (rating) => {
        return [...Array(5)].map((_, i) => (
            <FontAwesomeIcon 
                key={i} 
                icon={faStar} 
                className={i < rating ? "text-yellow-400" : "text-gray-300"}
            />
        ));
    };

    return (
        <section className="py-20 bg-gray-100" id="testimonials">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                        {t('testimonials.title')}
                    </h2>
                    <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                        {t('testimonials.description')}
                    </p>
                </div>

                <div className="mt-20">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {testimonials.map((item, idx) => (
                            <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <div className="p-8">
                                    <div className="flex justify-between items-center mb-4">
                                        <FontAwesomeIcon icon={faQuoteLeft} className="text-3xl text-yellow-400" />
                                        <div className="flex">
                                            {renderStars(item.rating)}
                                        </div>
                                    </div>
                                    <blockquote>
                                        <p className="text-gray-800 text-lg font-medium mb-4">
                                            "{item.quote}"
                                        </p>
                                    </blockquote>
                                    <div className="flex items-center mt-8">
                                        <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                                        <div className="ml-4">
                                            <p className="font-semibold text-gray-900">{item.name}</p>
                                            <p className="text-yellow-600 text-sm">{item.title}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
