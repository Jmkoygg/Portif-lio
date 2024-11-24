import { H1, H2, P } from "../styles/typographies";
import styled from "styled-components";
import { StyledButton } from "./Button";
import FadeInSection from "../components/FadeInSection";

const StyledProjects = styled.main`
  transition: opacity 0.5s ease-in-out;
  margin-top: 8rem;
`;
const StyledCard = styled.div`
  width: 50%;
  border-bottom-right-radius: 30px;
  border-top-left-radius: 30px;
  box-shadow: 0px 0px 12px 0px #ffffff;
  padding: 4%;
  text-align: center;
`;
const CardContainer = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 2fr 2fr;
  gap: 50px;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Projects = () => {
  return (
    <>
      <StyledProjects id="projects">
        <H1>Projetos</H1>
        <FadeInSection>
          <CardContainer>
            <StyledCard>
              <FadeInSection>
                <a href="https://jmkoygg.github.io/Desafio1DNC/">
                  <img
                    src="src\assets\project1.svg"
                    alt="Project"
                    border-radius="8px"
                    width={260}
                    height={150}
                  />
                </a>
                <H2>Site construtora</H2>
                <P>
                  Uma Landing page, de uma construtora para coletar dados,
                  utilizando HTML, CSS e JS
                </P>
                <a href="https://jmkoygg.github.io/Desafio1DNC/">
                  <StyledButton>Saber Mais</StyledButton>
                </a>
              </FadeInSection>
            </StyledCard>

            <StyledCard>
              <FadeInSection>
                <a href="https://jmkoygg.github.io/RID182828_Desafio2/">
                  <img
                    src="src\assets\project2.svg"
                    alt="Project"
                    border-radius="8px"
                    width={260}
                    height={150}
                  />
                </a>
                <H2>Blog de notícias</H2>
                <P>
                  Blog de notícias utilizando CSS para fazer a responsividade do
                  site em todos os tipos de tela
                </P>
                <a href="https://jmkoygg.github.io/RID182828_Desafio2/">
                  <StyledButton>Saber Mais</StyledButton>
                </a>
              </FadeInSection>
            </StyledCard>
            <StyledCard>
              <FadeInSection>
                <a href="https://jmkoygg.github.io/RID182828_Desafio03/">
                  <img
                    src="src\assets\project3.svg"
                    alt="Project"
                    border-radius="8px"
                    width={260}
                    height={150}
                  />
                </a>
                <H2>Task list</H2>
                <P>
                  Uma task list totalmente funcional, utilizando HTML, CSS e
                  principalmente JS com manipulação de DOM
                </P>
                <a href="https://jmkoygg.github.io/RID182828_Desafio03/">
                  <StyledButton>Saber Mais</StyledButton>
                </a>
              </FadeInSection>
            </StyledCard>
            <StyledCard>
              <FadeInSection>
                <a href="https://jmkoygg.github.io/Trabalho-UFC-ICC/">
                  <img
                    src="src\assets\project4.svg"
                    alt="Project"
                    border-radius="8px"
                    width={260}
                    height={150}
                  />
                </a>
                <H2>Requsitando API</H2>
                <P>
                  Um site tematizado para a faculdade UFC que consegue consumir
                  uma API de cep e retorna as informações com funções
                  assincronas
                </P>
                <a href="https://jmkoygg.github.io/Trabalho-UFC-ICC/">
                  <StyledButton>Saber Mais</StyledButton>
                </a>
              </FadeInSection>
            </StyledCard>
          </CardContainer>
        </FadeInSection>
      </StyledProjects>
    </>
  );
};

export default Projects;
