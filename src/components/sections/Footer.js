import { graphql, StaticQuery } from "gatsby";
import GitSvg from "../../images/icons/github2.svg";
import FrontEndSvg from "../../images/icons/frontend-mentor.svg";
import EmailSvg from "../../images/icons/mail.svg";
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
          <div className='container'>
            <h2 className='footer__header'>
              {data.markdownRemark.frontmatter.title}
            </h2>
            <div className='footer__content'>
              <div className='footer__email'>
                <EmailSvg />
                <p>{data.markdownRemark.frontmatter.email}</p>
              </div>
              <a
                href={data.markdownRemark.frontmatter.frontend_link}
                className='footer__link footer__link-frontend'>
                <FrontEndSvg />
                <p>{data.markdownRemark.frontmatter.link}</p>
              </a>
              <a
                href={data.markdownRemark.frontmatter.github_link}
                className='footer__link footer__link-github'>
                <GitSvg />
                <p>{data.markdownRemark.frontmatter.link2}</p>
              </a>
            </div>
          </div>
        </footer>
      )}
    />
  );
};

export default Footer;
