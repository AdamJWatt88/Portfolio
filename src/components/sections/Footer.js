import { graphql, StaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Footer = () => {
  return (
    <StaticQuery
      query={graphql`
        query Footer {
          markdownRemark(fileAbsolutePath: { regex: "/footer.md/" }) {
            frontmatter {
              title
              email
              link
              link2
              frontend_link
              github_link
            }
          }
        }
      `}
      render={(data) => (
        <footer id='footer' className='footer'>
          <div className='footer__content'>
            <h2>{data.markdownRemark.frontmatter.title}</h2>
            <div className='footer__email'>
              <StaticImage
                src='../../images/icons/mail.svg'
                alt='email'
                layout='fixed'
                width={50}
              />
              <p>{data.markdownRemark.frontmatter.email}</p>
            </div>
            <a
              href={data.markdownRemark.frontmatter.frontend_link}
              className='footer__link footer__link-frontend'>
              <StaticImage
                src='../../images/icons/frontend-mentor.svg'
                alt='Frontend Mentor'
                layout='fixed'
                width={50}
              />
              <p>{data.markdownRemark.frontmatter.link}</p>
            </a>
            <a
              href={data.markdownRemark.frontmatter.github_link}
              className='footer__link footer__link-github'>
              <StaticImage
                src='../../images/icons/github2.svg'
                alt='Github'
                layout='fixed'
                width={50}
              />
              <p>{data.markdownRemark.frontmatter.link2}</p>
            </a>
          </div>
        </footer>
      )}
    />
  );
};

export default Footer;
