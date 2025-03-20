/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { arrayRandomItem } from 'codewonders-helpers';

/* -------------------------- Internal Dependencies ------------------------- */

import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

const Home = () => {
  const [color] = useState(arrayRandomItem(['#37609c', '#34c759', '#5856d6']));
  const copyText = () => {
    const textField = document.createElement('textarea');
    textField.innerText = 'israelitua20@gmail.com';
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  };

  return (
    <Layout>
      <PageSection color={color}>
        <PageWrapper>
          <article>
            <h1 data-text="I'm Israel Itua" className="intro__text">
              <mark className="mark">I&apos;m Israel Itua</mark>
            </h1>
            <p>
              As a highly skilled Frontend Engineer with over five years of
              experience, I specialize in building scalable, high-performance,
              and user-centric web applications. My expertise includes React,
              JavaScript, TypeScript, HTML, and CSS, along with a strong
              understanding of modern UI/UX principles. I have a proven track
              record of collaborating with cross-functional teams to develop
              responsive, accessible, and maintainable web solutions that align
              with both business goals and user needs. Additionally, my
              experience with performance optimization, state management, and
              front-end architecture enables me to craft seamless and efficient
              user experiences.
            </p>

            <p>
              I am passionate about staying at the forefront of frontend
              development, continuously exploring the latest technologies,
              frameworks, and best practices. Committed to lifelong learning and
              professional growth, I actively seek new challenges that push my
              skills and expertise. My drive to innovate and adapt allows me to
              thrive in dynamic, fast-paced environments, where I can contribute
              to building cutting-edge, high-performance web solutions.
            </p>

            <p>
              I am eager to bring my skills and expertise to a forward-thinking
              organization that values innovation, collaboration, and excellence
              in frontend development. I thrive in environments where
              cutting-edge technology meets creative problem-solving, and I look
              forward to contributing to impactful projects. Let’s connect to
              explore how my experience can help drive your business forward. 🚀
            </p>
            <p>
              Working with my hands to make magic happen on the internet. View
              my{' '}
              <Link href="/projects">
                <a aria-label="Go to Projects Page">
                  <button type="button" tabIndex="-1">
                    Projects
                  </button>
                </a>
              </Link>
              ,{' '}
              <Link href="#!">
                <a
                  aria-label="Go to Resume Page"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1EAuY02r6Og9O7i6hNuCGpwnAmfFUZA2y/view?usp=sharing"
                >
                  <button type="button" tabIndex="-1">
                    Resume
                  </button>
                </a>
              </Link>
              ,{' '}
              <Link href="/contact">
                <a aria-label="Go to Contact Page">
                  <button type="button" tabIndex="-1">
                    Contact Me
                  </button>
                </a>
              </Link>
              , or send me an email at{' '}
              <button
                style={{ cursor: 'crosshair' }}
                title="Copy to clipboard"
                onClick={copyText}
                type="button"
                aria-label="Send an email"
              >
                israelitua20@gmail.com
              </button>
              .
            </p>
          </article>
          <br />
          <FooterLink goto="/about">See More About Me</FooterLink>
          <br />
        </PageWrapper>
      </PageSection>
    </Layout>
  );
};

const PageSection = styled.div`
  min-height: calc(100vh - 39vh);
  display: flex;
  align-items: center;
  justify-content: center;
  .intro__text {
    font-size: calc(var(--font-x-lg) + 9px);
    font-weight: 900;
    margin: 2rem 0rem 1.5rem;
    position: relative;
    letter-spacing: -1.1px;
    &::before,
    &::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    &::before {
      left: 2px;
      text-shadow: -1px 0 blue;
      animation: noise-anim-2 15s infinite linear alternate-reverse;
    }
    &::after {
      left: -2px;
      text-shadow: 3px 0 red;
      animation: noise-anim 2s infinite linear alternate-reverse;
    }
    @keyframes noise-anim {
      0% {
        clip-path: inset(29% 0 25% 0);
      }
      5% {
        clip-path: inset(9% 0 38% 0);
      }
      10% {
        clip-path: inset(96% 0 1% 0);
      }
      15% {
        clip-path: inset(75% 0 23% 0);
      }
      20% {
        clip-path: inset(46% 0 50% 0);
      }
      25% {
        clip-path: inset(3% 0 46% 0);
      }
      30% {
        clip-path: inset(82% 0 2% 0);
      }
      35% {
        clip-path: inset(88% 0 1% 0);
      }
      40% {
        clip-path: inset(91% 0 8% 0);
      }
      45% {
        clip-path: inset(96% 0 2% 0);
      }
      50% {
        clip-path: inset(59% 0 38% 0);
      }
      55% {
        clip-path: inset(41% 0 53% 0);
      }
      60% {
        clip-path: inset(21% 0 47% 0);
      }
      65% {
        clip-path: inset(89% 0 4% 0);
      }
      70% {
        clip-path: inset(1% 0 95% 0);
      }
      75% {
        clip-path: inset(86% 0 4% 0);
      }
      80% {
        clip-path: inset(95% 0 5% 0);
      }
      85% {
        clip-path: inset(54% 0 36% 0);
      }
      90% {
        clip-path: inset(70% 0 27% 0);
      }
      95% {
        clip-path: inset(6% 0 16% 0);
      }
      100% {
        clip-path: inset(95% 0 2% 0);
      }
    }
    @keyframes noise-anim-2 {
      0% {
        clip-path: inset(76% 0 21% 0);
      }
      5% {
        clip-path: inset(54% 0 7% 0);
      }
      10% {
        clip-path: inset(55% 0 29% 0);
      }
      15% {
        clip-path: inset(89% 0 3% 0);
      }
      20% {
        clip-path: inset(33% 0 40% 0);
      }
      25% {
        clip-path: inset(17% 0 56% 0);
      }
      30% {
        clip-path: inset(37% 0 51% 0);
      }
      35% {
        clip-path: inset(38% 0 19% 0);
      }
      40% {
        clip-path: inset(93% 0 4% 0);
      }
      45% {
        clip-path: inset(44% 0 14% 0);
      }
      50% {
        clip-path: inset(53% 0 26% 0);
      }
      55% {
        clip-path: inset(67% 0 11% 0);
      }
      60% {
        clip-path: inset(85% 0 13% 0);
      }
      65% {
        clip-path: inset(27% 0 37% 0);
      }
      70% {
        clip-path: inset(87% 0 4% 0);
      }
      75% {
        clip-path: inset(10% 0 8% 0);
      }
      80% {
        clip-path: inset(51% 0 27% 0);
      }
      85% {
        clip-path: inset(10% 0 60% 0);
      }
      90% {
        clip-path: inset(83% 0 3% 0);
      }
      95% {
        clip-path: inset(23% 0 55% 0);
      }
      100% {
        clip-path: inset(1% 0 81% 0);
      }
    }
  }
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    line-height: 2.3;
    font-weight: 400;
    color: var(--article-color) !important;
  }
  button {
    font-size: var(--font-sm);
    background: var(--button-index);
    border: none;
    border-radius: 5px;
    transition: all 0.4s ease;
    padding: 1px 12px;
    &:hover {
      background: ${(props) => props.color};
      color: #fff;
    }
  }
  @media (max-width: 585px) {
    margin: 3rem 0;
    display: block;
    min-height: 100%;
  }
  @media (max-width: 989px) {
    margin: 3rem 0;
    display: block;
  }
  @media (max-width: 220px) {
    margin: 3rem 0;
    display: block;
    min-height: 100%;
  }
  @media (prefers-reduced-motion: reduce) {
    /* Stop the animation */

    .intro__text {
      animation: none;

      &::before,
      &::after {
        content: none;
      }
    }
  }
`;
export default Home;
