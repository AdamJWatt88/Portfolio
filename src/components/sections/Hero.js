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
      <ul className='hero__nav container'>
        <li className='hero__nav-link'>
          <Link onClick={closeMenu} to='#about-me'>
            About
          </Link>
        </li>
        <li className='hero__nav-link'>
          <Link onClick={closeMenu} to='#projects'>
            Projects
          </Link>
        </li>
        <li className='hero__nav-link'>
          <Link onClick={closeMenu} to='#footer'>
            Contact
          </Link>
        </li>
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
          <div className='hero__grid'>
            {isBrowser() && isDesktop ? renderNav() : <Menu />}
            <div className='hero__content container'>
              <div className='hero__avatar'>
                <StaticImage
                  src='../../images/avatar/avatar.png'
                  alt='avatar'
                  placeholder='blurred'
                  layout='constrained'
                  width={200}
                  height={200}
                />
              </div>
              <div className='hero__body'>
                <p className='hero__header'>{data.site.siteMetadata.title}</p>
                <h1 className='hero__author'>
                  {data.site.siteMetadata.author}
                </h1>
                <p className='hero__description'>
                  {data.site.siteMetadata.description}
                </p>
              </div>
            </div>
          </div>
        </header>
      )}
    />
  );
};

export default Hero;
