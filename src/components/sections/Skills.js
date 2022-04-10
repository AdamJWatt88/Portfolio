import React from "react";
//* original import
// import { graphql, useStaticQuery } from "gatsby"
import { graphql, StaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

//* original component
// const Skills = () => {
//   const query = useStaticQuery(graphql`
//     query Skills {
//       markdownRemark(fileAbsolutePath: { regex: "/skills.md/" }) {
//         frontmatter {
//           title
//           title2
//           skills {
//             skill
//             icon {
//               id
//               childImageSharp {
//                 gatsbyImageData(
//                   placeholder: TRACED_SVG
//                   layout: CONSTRAINED
//                   transformOptions: { fit: COVER }
//                   width: 200
//                 )
//               }
//             }
//           }
//         }
//       }
//     }
//   `)

//   const data = query
//   const { skills, title, title2 } = data.markdownRemark.frontmatter

//   console.log(query)

//   return (
//     <section id="skills" className="skills">
//       <h3 className="skills__heading">
//         {title}
//         <span className="skills__heading-two">{title2}</span>
//       </h3>
//       <div className="skills__grid">
//         {skills.map((item, index) => (
//           <div className="skills__item" key={index}>
//             <GatsbyImage
//               className="skills__item-icon"
//               image={getImage(item.icon.childImageSharp.gatsbyImageData)}
//               alt={item.skill}
//             />
//             <h4 className="skills__item-skill">{item.skill}</h4>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default Skills

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
