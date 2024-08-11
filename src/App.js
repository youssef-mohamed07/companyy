import React from 'react';
import { Helmet } from 'react-helmet';
import Header from "./components/UI/header";
import Footer from "./components/UI/footer";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return(
    <>
      <Router>
        <Helmet>
          <title>Home | Abdul Aziz Groups</title>
          <meta name="description" content="Welcome to Abdul Aziz Groups. We provide exceptional services across various domains. Discover our projects, statistics, and testimonials to learn more about our expertise." />
          <meta name="keywords" content="Abdul Aziz Groups, Services, Projects, Business, Company, Testimonials, Contact" />
          <meta name="theme-color" content="#000000" />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Home | Abdul Aziz Groups" />
          <meta property="og:description" content="Explore the exceptional services offered by Abdul Aziz Groups. Discover our projects, statistics, and testimonials." />
          <meta property="og:image" content="logoo.png" />
          <meta property="og:url" content="https://www.abdulazizgroups.com" />
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Home | Abdul Aziz Groups" />
          <meta name="twitter:description" content="Explore the exceptional services offered by Abdul Aziz Groups. Discover our projects, statistics, and testimonials." />
          <meta name="twitter:image" content="logo.png" />
          
          {/* Favicon and Icons */}
          <link rel="icon" href="logoo.png" />
          <link rel="apple-touch-icon" href="logoo.png" />
          
          {/* Structured Data for SEO */}
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Abdul Aziz Groups",
                "url": "https://www.abdulazizgroups.com",
                "logo": "%PUBLIC_URL%/logo.png",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+1-800-123-4567",
                  "contactType": "Customer Service",
                  "areaServed": "Global",
                  "availableLanguage": "English"
                }
              }
            `}
          </script>
        </Helmet>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;