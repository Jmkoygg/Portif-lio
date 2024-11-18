import styled from "styled-components";
import Timeline from "./TimeLine";

const StyledAbout = styled.article`
  margin-top: 10rem;
`;
const StyledDiv = styled.div`
width:100%
margin-top: 3rem;
margin-bottom: 3rem;
`;

const About = () => {
  return (
    <>
      <StyledAbout id="about">
        <StyledDiv>
          <Timeline />
        </StyledDiv>
      </StyledAbout>
    </>
  );
};

export default About;
