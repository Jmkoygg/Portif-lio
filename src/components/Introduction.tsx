import { StyledButton } from "./Button";
import { H1, P } from "../styles/typographies";
import styled from "styled-components";

const StyledIntroduction = styled.article`
  margin-top: 10rem;
  transition: opacity 0.5s ease-in-out;
`;
const StyledDesc = styled.div`
  padding: 0.2rem 0 0 3rem;
`;

const Introduction = () => {
  return (
    <>
      <StyledIntroduction>
        <H1>Bem vindo!!</H1>
        <StyledDesc>
          <P>
            Olá! Sou um desenvolvedor full stack com experiência na criação de
            soluções
            <br /> web completas, unindo tanto o back-end quanto o front-end
            para entregar projetos <br /> funcionais e otimizados. Aqui, você
            encontrará exemplos de projetos que demonstram minha habilidade
            <br />
            em transformar ideias em sistemas robustos e interfaces intuitivas.
          </P>
          <StyledDesc>
            <a href="#projects">
              <StyledButton>Saber Mais</StyledButton>
            </a>
          </StyledDesc>
        </StyledDesc>
      </StyledIntroduction>
    </>
  );
};

export default Introduction;
