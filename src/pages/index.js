import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

import AboutMe from "../components/sections/AboutMe";
import Footer from "../components/sections/Footer";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";

import "../styles/index.scss";

const Home = () => {
  return (
    <Fragment>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>Adam Watt Portfolio</title>
        <meta
          name='description'
          content='Looking to hire a developer? Hire me!'
        />
        <link rel='shortcut icon' type='image/x-icon' href='/favicon.ico' />
      </Helmet>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </Fragment>
  );
};

export default Home;
