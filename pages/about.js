/* eslint-disable jsx-a11y/accessible-emoji */

/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

/* -------------------------- Internal Dependencies ------------------------- */
import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

/* ---------------------------- Image Dependency ---------------------------- */
import { Github } from '../components/Icons';

const About = () => {
  return (
    <Layout title="About Me">
      <PageSection>
        <PageWrapper
          className="mb-5"
          aria-label="You are now in my educational background section"
        >
          <h1 className="intro__text">About Me.</h1> <br />
          <article>
            <ul className="timeline">
              <li className="mt-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Github Link"
                  href="https://github.com/the-israelItua"
                >
                  Engineering{' '}
                  <small>
                    <Github />
                  </small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Github Link"
                  id="cardHover"
                  href="https://github.com/the-israelItua"
                  className="float-right"
                >
                  View Github
                </a>
                <p>
                  When it comes to business, first impressions matter, and good
                  website design is the key to capitalizing on them. An
                  excellent site is not judged solely on its looks, but on its
                  functionality and usability as well. My experience as a
                  programmer allows me to come up with intelligent solutions to
                  technical challenges, while at the same time designing sleek
                  and visually appealing websites. Aside from having extensive
                  knowledge of recognized technical standards, I am conversant
                  with modern building practices.
                </p>
              </li>

              <li className="mt-2">
                <a aria-label="Open Github Link" href="#!">
                  Work Experience
                </a>

                <div className="mt-5">
                  <h4>Frontedge - Senior Frontend Engineer</h4>
                  <p>March 2024 – Present</p>
                </div>

                <p>
                  - Led the development of a new dashboard for the web
                  application, redesigning the architecture for better
                  performance, scalability and user-experience.
                </p>
                <p>
                  - Collaborated with other engineers, designers and product
                  manager to align technical solutions with the business
                  objectives.
                </p>
                <p>
                  - Implemented secure payment processing integrations, ensuring
                  compliance with financial regulations and minimizing
                  transaction failures for users.
                </p>

                <div className="mt-5">
                  <h4>Nomba Financial Services Limited - Frontend Engineer</h4>
                  <p>April 2021 – Febuary 2024</p>
                </div>

                <p>
                  - Implemented security measures to protect user data and
                  prevent fraud, ensuring compliance with industry regulations
                  and standards
                </p>
                <p>
                  - Developed and maintained frontend architecture to ensure
                  scalability and maintainability of code
                </p>
                <p>
                  - Proactively identified and resolved technical challenges,
                  optimizing application performance and user experience.
                </p>
                <p>
                  - Implemented new features and functionality to improve user
                  experience and increase conversion rates.
                </p>

                <div className="mt-5">
                  <h4>Wawu - Fullstack Software Engineer - Contract</h4>
                  <p>June 2023 – October 2023</p>
                </div>

                <p>
                  - Collaborated with cross-functional teams to design and
                  implement an e-commerce mobile application using TypeScript,
                  Nest.js, and Node.js for the backend and mobile app with React
                  Native
                </p>
                <p>
                  - Led the development of RESTful APIs and integrated them
                  seamlessly with the frontend, ensuring smooth communication
                  between server and client
                </p>
                <p>
                  - Participated in architectural discussions and contributed to
                  the evolution of the software architecture to meet scalability
                  and performance requirements
                </p>

                <div className="mt-5">
                  <h4>Sellit - Fullstack Software Engineer</h4>
                  <p>July 2022 – June 2023</p>
                </div>
                <p>
                  - Spearheaded the development of a responsive and
                  user-friendly e-commerce platform, utilizing TypeScript,
                  React, Node.js, Nest.js, and PostgreSQL
                </p>
                <p>
                  - Collaborated closely with UX/UI designers to implement
                  visually appealing and intuitive features, enhancing the
                  overall customer experience and ensuring alignment with brand
                  aesthetics
                </p>
                <p>
                  - Conducted thorough testing and debugging processes, reducing
                  system errors by 25% and ensuring a seamless and reliable
                  shopping experience for users.
                </p>

                <p>
                  - Maintained and improved existing codebase, ensuring high
                  quality, efficient, and scalable code.
                </p>

                <p>
                  - Conducted code reviews and provided feedback to other team
                  members to ensure code quality and consistency.
                </p>

                <p>
                  - Developed and implemented new features and functionality to
                  meet business requirements.
                </p>

                <div className="mt-5">
                  <h4> Ebidhaa Nigeria Limited - Frontend Engineer</h4>
                  <p>January 2020 – April 2021</p>
                </div>

                <p>
                  - Contributed to the development of a fintech app that enables
                  businesses accept payments and reach more customers.
                </p>
                <p>
                  - Built a new web application for a law journal which brought
                  about a 120% increase in subscriptions over their previous
                  website.
                </p>
                <p>
                  - Contributed to the development of a restaurant delivery app
                  which curently have over 1k+ downloads on playstore in a team
                  of 6 engineers.
                </p>
              </li>
            </ul>
          </article>
        </PageWrapper>
      </PageSection>

      <PageWrapper>
        <FooterLink goto="/projects" className="mt-3 mb-5">
          Lets Continue To Projects
        </FooterLink>
        <br />
      </PageWrapper>
    </Layout>
  );
};

const PageSection = styled.div`
  .intro__text {
    font-size: var(--font-x-lg);
    font-weight: 900;
    margin: 4rem 0rem 1.5rem;
    position: relative;
  }
  h4 {
    font-size: calc(var(--font-md) + 1.5px);
  }
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    margin-top: 0.6rem;
    line-height: 2;
    font-weight: 400;
    color: var(--article-color) !important;
  }

  ul.timeline {
    list-style-type: none;
    position: relative;
    &:before {
      content: ' ';
      background: var(--timeline);
      display: inline-block;
      position: absolute;
      left: 0px;
      width: 1px;
      top: 4px;
      height: 100%;
      z-index: 400;
    }
    li {
      margin: 3rem 0;
      padding-left: 20px;
      &:before {
        content: ' ';
        background: var(--mark);
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        border: 2px solid var(--cw);
        left: -7px;
        width: 15px;
        height: 15px;
        margin-top: 3px;
        z-index: 400;
      }
      a {
        font-size: var(--font-md);
        font-weight: 500;

        color: var(--cw);
        &.float-right {
          text-decoration: underline;
          font-size: calc(var(--font-sm) + 0.9px);
        }
      }
      a svg {
        margin-top: -0.4rem;
        width: 13px;
      }
    }
  }
  @media (max-width: 585px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 989px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 220px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
`;

export default About;
