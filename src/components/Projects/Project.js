import React from "react";
import { projects } from "../data/data";
import {
  Section,
  SectionDivider,
  SectionTitle,
  GridContainer,
} from "./ProjectStyle";
const Project = () => {
  return (
    <Section>
      <SectionDivider />
      <SectionTitle>Projects</SectionTitle>
      <GridContainer>
        {projects.map((project) => (
          <h1>{project.title}</h1>
        ))}
      </GridContainer>
    </Section>
  );
};
export default Project;
