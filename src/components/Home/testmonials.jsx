import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons';

export default function Testimonials() {
    const testimonials = [
        {
            avatar: "1.jpg",
            name: "Salem Ben Nasser",
            title: "Omani advisor",
            quote: "This service has revolutionized our business operations. The efficiency and reliability are unmatched.",
            rating: 5
        },
        {
            avatar: "2.jpg",
            name: "Mohammed Al Barwani",
            title: "Omani billionaire businessman",
            quote: "I'm impressed by the intuitive design and powerful features. It's a game-changer for our development process.",
            rating: 5
        },
        {
            avatar: "3.jpg",
            name: "Waqas Al Adawi",
            title: "Omani businessman",
            quote: "The attention to detail and user experience is exceptional. It's a pleasure to work with such a well-crafted product.",
            rating: 4
        },
        {
            avatar: "4.jpg",
            name: "Muneeb Al Kindi",
            title: "CEO of Gate 10 LLC",
            quote: "Our marketing campaigns have seen a significant boost in effectiveness since we started using this platform.",
            rating: 5
        },
        {
            avatar: "5.jpg",
            name: "Othman al Mandhari",
            title: "The Founder and CEO of InnoTech",
            quote: "The scalability and performance of this solution have exceeded our expectations. It's been crucial to our growth.",
            rating: 5
        },
        {
            avatar: "6.jpg",
            name: "Maqbool Hameed Al Saleh",
            title: "Chairman of the board of directors of the OHI Group of Companies",
            quote: "The insights we've gained through this tool have been invaluable. It's transformed our approach to user research.",
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
                        What Our Clients Say
                    </h2>
                    <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                        Discover how our solutions have transformed businesses and delighted users across industries.
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