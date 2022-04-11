import { graphql, StaticQuery } from "gatsby";
import React from "react";

import Project from "../Project";

const Projects = () => {
  return (
    <StaticQuery
      query={graphql`
        query Projects {
          markdownRemark(fileAbsolutePath: { regex: "/projects.md/" }) {
            frontmatter {
              title
            }
          }
          allMarkdownRemark(
            sort: { fields: frontmatter___project, order: ASC }
            filter: { frontmatter: { slug: { eq: true } } }
          ) {
            nodes {
              html
              frontmatter {
                stack
                project
                github_link
                project_link
                thumb {
                  childImageSharp {
                    gatsbyImageData(
                      layout: CONSTRAINED
                      transformOptions: { fit: COVER }
                      width: 2000
                    )
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <section id='projects' className='projects'>
          <h2 className='projects__header'>
            {data.markdownRemark.frontmatter.title}
          </h2>
          {data.allMarkdownRemark.nodes.map((item, index) => (
            <Project
              key={index}
              project={item.frontmatter.project}
              html={item.html}
              stack={item.frontmatter.stack}
              image={item.frontmatter.thumb.childImageSharp.gatsbyImageData}
              githubLink={item.frontmatter.github_link}
              projectLink={item.frontmatter.project_link}
            />
          ))}
        </section>
      )}
    />
  );
};

export default Projects;
