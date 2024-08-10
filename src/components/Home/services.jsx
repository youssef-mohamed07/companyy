import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBolt, faChartLine, faShieldAlt, faCubes,
  faLock, faPuzzlePiece, faRocket
} from '@fortawesome/free-solid-svg-icons';

export default function Services() {
  const features = [
    {
      icon: faBolt,
      title: "Fast Refresh",
      desc: "Experience lightning-fast updates with our cutting-edge refresh technology."
    },
    {
      icon: faChartLine,
      title: "Advanced Analytics",
      desc: "Gain deep insights with our powerful and intuitive analytics tools."
    },
    {
      icon: faShieldAlt,
      title: "Robust Security",
      desc: "Rest easy with our state-of-the-art security measures protecting your data."
    },
    {
      icon: faCubes,
      title: "Modular Architecture",
      desc: "Build and scale your project efficiently with our flexible, modular approach."
    },
    {
      icon: faLock,
      title: "Ironclad Privacy",
      desc: "Your privacy is our top priority, with industry-leading protection measures."
    },
    {
      icon: faPuzzlePiece,
      title: "Seamless Integration",
      desc: "Effortlessly connect and expand your ecosystem with our integration capabilities."
    },
    {
      icon: faRocket,
      title: "Performance Boost",
      desc: "Supercharge your applications with our optimized performance enhancements."
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Empowering Your Digital Journey
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how our cutting-edge services can revolutionize your business and propel you towards success.
          </p>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative p-6 bg-white rounded-xl shadow-xl"
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="inline-block p-5 bg-yellow-400 rounded-full shadow-lg">
                    <FontAwesomeIcon icon={feature.icon} className="h-8 w-8 text-white" />
                  </span>
                </div>
                <div className="mt-8 text-center">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-gray-500">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}