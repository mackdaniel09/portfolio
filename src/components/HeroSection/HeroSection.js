import React from "react";
import {
  Section,
  LeftSection,
  SectionTitle,
  SectionText,
  Button,
  RightSection,
} from "./HeroStyle";
const HeroSection = () => {
  return (
    <Section>
      <LeftSection>
        <SectionTitle>
          Welcome to <br />
          My Portfolio
        </SectionTitle>
        <SectionText>
          The purpose of Javascript mastery is to help aspiring and established
          developers to take their development skills to the next level and
          build awesome apps.
        </SectionText>
        <Button to="/about">Learn More</Button>
      </LeftSection>
      <RightSection></RightSection>
    </Section>
  );
};
export default HeroSection;
