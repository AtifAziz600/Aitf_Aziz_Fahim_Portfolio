import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import Navbar from './component/Navbar'
import LogoShowcase from './sections/LogoShowcase'
import FeatureCards from './sections/FeatureCards'
import AboutMe from './sections/AboutMe'
import Experience from './sections/Experience'
import Footer from './sections/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <ShowcaseSection/>
    <LogoShowcase/>
    <AboutMe/>
    <FeatureCards/>
    <Experience/>
    <Footer/>
    </>
  )
}

export default App
