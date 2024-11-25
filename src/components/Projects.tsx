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
  @media (max-width: 420px) {
  width: 80%;
  }
`;
const CardContainer = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 2fr 2fr;
  justify-items: center;
  gap: 5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const StyledImage = styled.img`
max-width: 100%; // Garante que a imagem não exceda o contêiner
border-radius: 8px; // Usar border-radius no CSS
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
                <a href="https://jmkoygg.github.io/Site-construtora/">
                <StyledImage src=".\project1.png" alt="Project" width={260} height={150} />
                </a>
                <H2>Site construtora</H2>
                <P>
                  Uma Landing page, de uma construtora para coletar dados,
                  utilizando HTML, CSS e JS
                </P>
                <a href="https://jmkoygg.github.io/Site-construtora/">
                  <StyledButton>Saber Mais</StyledButton>
                </a>
              </FadeInSection>
            </StyledCard>

            <StyledCard>
              <FadeInSection>
                <a href="https://jmkoygg.github.io/Blog-responsivo/">
                <StyledImage src=".\project2.png" alt="Project" width={260} height={150} />
                </a>
                <H2>Blog de notícias</H2>
                <P>
                  Blog de notícias utilizando CSS para fazer a responsividade do
                  site em todos os tipos de tela
                </P>
                <a href="https://jmkoygg.github.io/Blog-responsivo/">
                  <StyledButton>Saber Mais</StyledButton>
                </a>
              </FadeInSection>
            </StyledCard>
            <StyledCard>
              <FadeInSection>
                <a href="https://jmkoygg.github.io/Task-list/">
                <StyledImage src=".\project3.png" alt="Project" width={260} height={150} />
                </a>
                <H2>Task list</H2>
                <P>
                  Uma task list totalmente funcional, utilizando HTML, CSS e
                  principalmente JS com manipulação de DOM
                </P>
                <a href="https://jmkoygg.github.io/Task-list/">
                  <StyledButton>Saber Mais</StyledButton>
                </a>
              </FadeInSection>
            </StyledCard>
            <StyledCard>
              <FadeInSection>
                <a href="https://jmkoygg.github.io/Trabalho-UFC-ICC/">
                <StyledImage src=".\project4.png" alt="Project" width={260} height={150} />
                </a>
                <H2>Requisitando API</H2>
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
