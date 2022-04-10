import React, { useState, useEffect } from "react";
//*f original import
// import { graphql, Link, useStaticQuery } from "gatsby";
import { graphql, Link, StaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Menu from "../Menu";

//* original component
// const Hero = () => {
//   const isBrowser = () => typeof window !== "undefined";

//   const [isDesktop, setDesktop] = useState(
//     isBrowser() && window.innerWidth > 600
//   );

//   const updateMedia = () => {
//     setDesktop(isBrowser() && window.innerWidth > 600);
//   };

//   useEffect(() => {
//     isBrowser() && window.addEventListener("resize", updateMedia);
//     return () =>
//       isBrowser() && window.removeEventListener("resize", updateMedia);
//   });

//   const closeMenu = () => {
//     isBrowser() &&
//       document.querySelector("body").classList.remove("modal-open");
//   };

//   const data = useStaticQuery(
//     graphql`
//       query SiteHeader {
//         site {
//           siteMetadata {
//             author
//             description
//             title
//           }
//         }
//       }
//     `
//   );

//   const { author, description, title } = data.site.siteMetadata;

//   const renderNav = () => {
//     return (
//       <div className='hero__nav'>
//         <Link onClick={closeMenu} className='hero__nav-link' to='#about-me'>
//           About
//         </Link>
//         <Link onClick={closeMenu} className='hero__nav-link' to='#projects'>
//           Projects
//         </Link>
//         <Link onClick={closeMenu} className='hero__nav-link' to='#footer'>
//           Contact
//         </Link>
//       </div>
//     );
//   };

//   return (
//     <header className='hero'>
//       {isDesktop ? renderNav() : <Menu />}
//       <StaticImage
//         className='hero__avatar'
//         src='../../images/avatar/avatar.svg'
//         alt='avatar'
//         placeholder='blurred'
//         layout='constrained'
//         width={300}
//         height={300}
//       />
//       <div className='hero__content'>
//         <h1 className='hero__header'>{title}</h1>
//         <h2 className='hero__author'>{author}</h2>
//         <p className='hero__description'>{description}</p>
//       </div>
//     </header>
//   );
// };

// export default Hero;

const Hero = () => {
  const isBrowser = () => typeof window !== "undefined";

  const [isDesktop, setDesktop] = useState(
    isBrowser() && window.innerWidth > 600
  );

  const updateMedia = () => {
    setDesktop(isBrowser() && window.innerWidth > 600);
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
      <div className='hero__nav'>
        <Link onClick={closeMenu} className='hero__nav-link' to='#about-me'>
          About
        </Link>
        <Link onClick={closeMenu} className='hero__nav-link' to='#projects'>
          Projects
        </Link>
        <Link onClick={closeMenu} className='hero__nav-link' to='#footer'>
          Contact
        </Link>
      </div>
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
          {isDesktop ? renderNav() : <Menu />}
          <StaticImage
            className='hero__avatar'
            src='../../images/avatar/avatar.svg'
            alt='avatar'
            placeholder='blurred'
            layout='constrained'
            width={300}
            height={300}
          />
          <div className='hero__content'>
            <h1 className='hero__header'>{data.site.siteMetadata.title}</h1>
            <h2 className='hero__author'>{data.site.siteMetadata.author}</h2>
            <p className='hero__description'>
              {data.site.siteMetadata.description}
            </p>
          </div>
        </header>
      )}
    />
  );
};

export default Hero;
