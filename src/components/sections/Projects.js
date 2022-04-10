//* original import
// import { graphql, useStaticQuery } from "gatsby"
import { graphql, StaticQuery } from "gatsby";
import React from "react";

import Project from "../Project";

//* original component
// const Projects = () => {
//   const query = useStaticQuery(
//     graphql`
//       query Projects {
//         markdownRemark(fileAbsolutePath: { regex: "/projects.md/" }) {
//           frontmatter {
//             title
//           }
//         }
//         allMarkdownRemark(
//           sort: { fields: frontmatter___project, order: ASC }
//           filter: { frontmatter: { slug: { eq: true } } }
//         ) {
//           nodes {
//             html
//             frontmatter {
//               stack
//               project
//               github_link
//               project_link
//               thumb {
//                 childImageSharp {
//                   gatsbyImageData(
//                     layout: CONSTRAINED
//                     transformOptions: { fit: COVER }
//                     width: 2000
//                   )
//                 }
//               }
//             }
//           }
//         }
//       }
//     `
//   )

//   const data = query
//   const { title } = data.markdownRemark.frontmatter
//   const projects = data.allMarkdownRemark.nodes

//   return (
//     <section id="projects" className="projects">
//       <h2 className="projects__header">{title}</h2>
//       {projects.map((item, index) => (
//         <Project
//           key={index}
//           project={item.frontmatter.project}
//           html={item.html}
//           stack={item.frontmatter.stack}
//           image={item.frontmatter.thumb.childImageSharp.gatsbyImageData}
//           githubLink={item.frontmatter.github_link}
//           projectLink={item.frontmatter.project_link}
//         />
//       ))}
//     </section>
//   )
// }

// export default Projects

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
