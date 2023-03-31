import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import React, { useState, useEffect } from "react";

const Project = ({ project, html, stack, image, githubLink, projectLink }) => {
  const isBrowser = () => typeof window !== "undefined";

  const [isDesktop, setDesktop] = useState(
    isBrowser() && window.innerWidth < 900
  );

  const updateMedia = () => {
    setDesktop(isBrowser() && window.innerWidth < 900);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, [isDesktop]);

  const renderBodyLinks = () => {
    return (
      <a href={projectLink} className='project__body'>
        <div className='project__body'>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </a>
    );
  };

  const renderBody = () => {
    return (
      <div className='project__body'>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    );
  };

  return (
    <div className='project'>
      <h3 className='project__header'>{project}</h3>

      {isDesktop ? renderBodyLinks() : renderBody()}

      <div className='project__stack'>
        {stack.map((item, index) => (
          <div key={index} className='project__stack-item'>
            #{item}
          </div>
        ))}
      </div>
      <div className='project__links'>
        <a href={githubLink} className='project__link'>
          <StaticImage
            src='../images/icons/github.png'
            alt='Github'
            layout='fixed'
            width={25}
          />
        </a>
        <a href={projectLink} className='project__link'>
          <StaticImage
            src='../images/icons/project-link.png'
            alt='Project Link'
            layout='fixed'
            width={25}
          />
        </a>
      </div>

      <a href={projectLink} className='project__image-link'>
        <GatsbyImage
          className='project__image'
          image={getImage(image)}
          alt={project}
          objectFit='fill'
        />
      </a>
    </div>
  );
};

export default Project;
