import TimelineItem from "../styles/TimelineItem";
import styled from "styled-components";

const timelineData = [
  {
    year: "Formação",
    description:
      "Cursando Ciências da Computação na Universidade Federal do Ceará (UFC). Cursando Engenharia de Software na DNC",
  },
  {
    year: "Habilidades",
    description:
      "HTML, CSS, JavaScript, Typescript, React, C e Java",
  },
  {
    year: "João Soares",
    description:
      " 19 anos de idade, Desenvolvedor Full Stack Junior, Entusiasta de tecnologia e inovação.",
  },
];

const Timeline = () => {
  return (
    <>
      <Container>
        <Title>Sobre mim</Title>
        <TimelineContainer>
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              year={item.year}
              description={item.description}
            />
          ))}
        </TimelineContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  transition: opacity 0.5s ease-in-out;
  padding: 20px;
  color: #ffffff;
  overflow-x: hidden;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2em;
`;

const TimelineContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  border-top: 2px solid #ffffff;
  position: relative;

  @media (max-width: 530px) {
  flex-direction: column;
  }
`;

export default Timeline;
