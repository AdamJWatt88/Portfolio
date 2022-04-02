import React, { Fragment } from "react"

import AboutMe from "../components/sections/AboutMe"
import Footer from "../components/sections/Footer"
import Hero from "../components/sections/Hero"
import Projects from "../components/sections/Projects"
import Skills from "../components/sections/Skills"

import "../styles/index.scss"

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </Fragment>
  )
}

export default Home
