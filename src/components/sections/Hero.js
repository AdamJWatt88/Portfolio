import React, { useState, useEffect } from "react";
import { graphql, Link, StaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Menu from "../Menu";

const Hero = () => {
  const isBrowser = () => {
    if (typeof window !== "undefined") {
      return <></>;
    }
  };

  const [isDesktop, setDesktop] = useState(
    isBrowser() && window.innerWidth > 900
  );

  const updateMedia = () => {
    isBrowser() && setDesktop(window.innerWidth > 900);
  };

  useEffect(() => {
    isBrowser() && window.addEventListener("resize", updateMedia);
    return () =>
      isBrowser() && window.removeEventListener("resize", updateMedia);
  });

  const closeMenu = () => {
    isBrowser() &&
      document.querySelector("body").classList.remove("modal-open");
  };

  const renderNav = () => {
    return (
      <ul className='hero__nav'>
        <Link onClick={closeMenu} className='hero__nav-link' to='#about-me'>
          <li>About</li>
        </Link>
        <Link onClick={closeMenu} className='hero__nav-link' to='#projects'>
          <li>Projects</li>
        </Link>
        <Link onClick={closeMenu} className='hero__nav-link' to='#footer'>
          <li>Contact</li>
        </Link>
      </ul>
    );
  };

  return (
    <StaticQuery
      query={graphql`
        query SiteHeader {
          site {
            siteMetadata {
              author
              description
              title
            }
          }
        }
      `}
      render={(data) => (
        <header className='hero'>
          {isBrowser() && isDesktop ? renderNav() : <Menu />}
          <div className='hero__content'>
            <div className='hero__avatar'>
              <StaticImage
                src='../../images/avatar/avatar.png'
                alt='avatar'
                placeholder='blurred'
                layout='constrained'
                width={300}
                height={300}
              />
            </div>
            <div className='hero__body'>
              <h1 className='hero__header'>{data.site.siteMetadata.title}</h1>
              <h2 className='hero__author'>{data.site.siteMetadata.author}</h2>
              <p className='hero__description'>
                {data.site.siteMetadata.description}
              </p>
            </div>
          </div>
        </header>
      )}
    />
  );
};

export default Hero;
