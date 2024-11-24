import { H2 } from "../styles/typographies";
import styled from "styled-components";

const StyledFooter = styled.article`
  display: flex;
  aling-items: center;
  justify-content: space-around;
  margin-top: 3rem;

   @media (max-width: 530px) {
      flex-direction: column;
  }
`;
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1.2rem;
  @media (max-width: 650px) {
  justify-content: center;
      gap: 0.2rem;
  }
`;
const StyledContact = styled.div`
display: grid;
grid-template-columns: 2fr 2fr;

`;
const Contact = styled.h2`
  text-align: center;
  font-size: 1.3em;
  @media (max-width: 650px) {
  justify-content: center;
  }
`;

const Footer = () => {
  return (
    <>
      <StyledFooter id="contact">
        <StyledDiv>
          <StyledContact>
            <H2>Meu contato: </H2>
            <Contact>(88) 996204635</Contact>
            <H2>Email: </H2>
            <Contact>jmkoygg@gmail.com</Contact>
          </StyledContact>
        </StyledDiv>
        <StyledDiv>
          <a href="https://www.linkedin.com/in/joãosoaresdev/"><img src="./linkedin.svg" alt="Linkedin" width={45} height={45}/></a>
          <a href="https://github.com/Jmkoygg"><img src="./github.svg" alt="github" width={45} height={45} /></a>
          <a href="https://www.instagram.com/joao.soareess/"><img src="./insta.png" alt="insta" width={50} height={50} /></a>
        </StyledDiv>
      </StyledFooter>
    </>
  );
};

export default Footer;
