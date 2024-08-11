import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Header from "./components/UI/header";
import Footer from "./components/UI/footer";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './i18n.js';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </I18nextProvider>
  );
}

export default App;