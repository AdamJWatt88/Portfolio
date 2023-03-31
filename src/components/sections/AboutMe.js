import { graphql, StaticQuery } from "gatsby";
import React from "react";

const AboutMe = () => {
  return (
    <StaticQuery
      query={graphql`
        query AboutMe {
          markdownRemark(fileAbsolutePath: { regex: "/about-me.md/" }) {
            html
            frontmatter {
              title
            }
          }
        }
      `}
      render={(data) => (
        <section id='about-me' className='container'>
          <div className='about-me'>
            <h2 className='about-me__header'>
              {data.markdownRemark.frontmatter.title}
            </h2>
            <div
              className='about-me__body'
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />
          </div>
        </section>
      )}
    />
  );
};

export default AboutMe;
