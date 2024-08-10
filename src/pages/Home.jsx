// src/pages/Home.js
import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/Home/hero';
import Statistics from '../components/Home/statistics';
import Projects from '../components/Home/projects';
import Services from '../components/Home/services';
import Testmonials from '../components/Home/testmonials';
import ContactUs from '../components/Home/contact';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home | Abdul Aziz Groups</title>
        <meta name="description" content="Welcome to Abdul Aziz Groups. We offer top-notch services in various domains. Explore our projects, statistics, and testimonials to learn more." />
        <meta name="keywords" content="Abdul Aziz Groups, Services, Projects, Statistics, Testimonials, Contact Us" />
        <meta property="og:title" content="Home | Abdul Aziz Groups" />
        <meta property="og:description" content="Welcome to Abdul Aziz Groups. We offer top-notch services in various domains. Explore our projects, statistics, and testimonials to learn more." />
        <meta property="og:image" content="logo.png" />
        <meta property="og:url" content="https://www.abdulazizgroups.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home | Abdul Aziz Groups" />
        <meta name="twitter:description" content="Welcome to Abdul Aziz Groups. We offer top-notch services in various domains. Explore our projects, statistics, and testimonials to learn more." />
        <meta name="twitter:image" content="https://www.abdulazizgroups.com/your-image.jpg" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Abdul Aziz Groups",
              "url": "https://www.abdulazizgroups.com",
              "logo": "logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-800-123-4567",
                "contactType": "customer service"
              }
            }
          `}
        </script>
      </Helmet>
      <Hero />
      <Statistics />
      <Services />
      <Projects />
      <Testmonials />
      <ContactUs />
    </>
  );
}
