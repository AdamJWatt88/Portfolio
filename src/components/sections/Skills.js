import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Skills = () => {
  return (
    <StaticQuery
      query={graphql`
        query Skills {
          markdownRemark(fileAbsolutePath: { regex: "/skills.md/" }) {
            frontmatter {
              title
              title2
              skills {
                skill
                icon {
                  id
                  childImageSharp {
                    gatsbyImageData(
                      placeholder: TRACED_SVG
                      layout: CONSTRAINED
                      transformOptions: { fit: COVER }
                      width: 200
                    )
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <section id='skills' className='skills'>
          <h3 className='skills__heading'>
            {data.markdownRemark.frontmatter.title}
            <span className='skills__heading-two'>
              {data.markdownRemark.frontmatter.title2}
            </span>
          </h3>
          <div className='skills__grid'>
            {data.markdownRemark.frontmatter.skills.map((item, index) => (
              <div className='skills__item' key={index}>
                <GatsbyImage
                  className='skills__item-icon'
                  image={getImage(item.icon.childImageSharp.gatsbyImageData)}
                  alt={item.skill}
                />
                <h4 className='skills__item-skill'>{item.skill}</h4>
              </div>
            ))}
          </div>
        </section>
      )}
    />
  );
};

export default Skills;
