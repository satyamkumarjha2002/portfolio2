import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  Resume,
  ResumeLink,
  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import myImage from "../../assets/my-image.jpg";
import downloadIcon from "../../assets/icons/download-icon.svg";
import resume from "../../assets/resume.pdf";

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
      <SectionTitle dark="true">
          About Me
        </SectionTitle>
      </SectionHeading>
      
      <AboutContent>
          <AboutImage src={myImage} />
        <AboutDetailsContainer>
          <StyledParagraph>
          I am logical and competent Java Backend Developer dedicated to develop functional web applications and optimizing them. 
          </StyledParagraph>
          <StyledParagraph>
          I am passionate about Coding and strongly interested in working to enhance my career in very good organization and also to use my skills to bring out the best of the organization.          </StyledParagraph>
          <StyledParagraph>
            My leisure interests: Apart from this I like travelling and playing sports and going to the gym.
          </StyledParagraph>
          <Resume>
            <ResumeLink
              download="Shivam Arora"
              href="https://drive.google.com/file/d/13ez7Z01mwTQ_p-Vf5XLn83poeMLInOC4/view?usp=sharing"
              target={'_blank'}
              icon={downloadIcon}
            >
              View Resume
            </ResumeLink>
          </Resume>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;
