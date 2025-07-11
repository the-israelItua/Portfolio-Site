/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import React, { useContext } from 'react';
import styled from 'styled-components';

/* -------------------------- Internal Dependencies ------------------------- */

import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';
import MansoryLayout from '../components/Mansory';
import MansoryItem from '../components/Mansory/mansory-item';
import { ProjectsContext } from '../components/Utils/context';

const Projects = () => {
  const projectsData = useContext(ProjectsContext);
  return (
    <Layout title="Project">
      <PageSection>
        <PageWrapper>
          <h1 className="intro__text">Projects.</h1> <br />
          <MansoryLayout>
            {projectsData.map((item, index) => (
              <MansoryItem key={item.name} index={index} item={item} />
            ))}
          </MansoryLayout>
        </PageWrapper>
      </PageSection>

      <PageWrapper>
        <FooterLink goto="/contact" className="mt-3 mb-5">
          Contact Me
        </FooterLink>
        <br />
      </PageWrapper>
    </Layout>
  );
};
export const PageSection = styled.div`
  .intro__text {
    font-size: var(--font-x-lg);
    font-weight: 900;
    margin: 4rem 0rem 1.5rem;
    position: relative;
  }
  button {
    font-size: calc(var(--font-sm) + 1.5px);
    background: var(--mark);
    border: none;
    border-radius: 5px;
    padding: 0px 9px;
  }
`;

export default Projects;
