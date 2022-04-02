import { graphql, useStaticQuery } from "gatsby"
import React from "react"

const AboutMe = () => {
  const query = useStaticQuery(graphql`
    query AboutMe {
      markdownRemark(fileAbsolutePath: { regex: "/about-me.md/" }) {
        html
        frontmatter {
          title
        }
      }
    }
  `)

  const data = query
  const { title } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark

  return (
    <section id="about-me" className="about-me">
      <h2 className="about-me__header">{title}</h2>
      <div
        className="about-me__body"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </section>
  )
}

export default AboutMe
