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
