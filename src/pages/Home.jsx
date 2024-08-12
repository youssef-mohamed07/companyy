import React from 'react'
import Hero from '../components/Home/hero'
import Statistics from '../components/Home/statistics'
import Projects from '../components/Home/projects'
import Services from '../components/Home/services'
import Testmonials from '../components/Home/testmonials'
import ContactUs from '../components/Home/contact'
import ChooseUs from '../components/Home/ChooseUs'
export default function Home() {
  return (
    <>
      <Hero />
      <ChooseUs />
      <Statistics />
      <Services />
      <Projects />
      <Testmonials />
      <ContactUs />
    </>
  )
}
