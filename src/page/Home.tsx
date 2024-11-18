import React from "react";
import Header from "../components/Header";
import { Container } from "@mui/material";
import Introduction from "../components/Introduction";
import Projects from "../components/Projects";
import About from "../components/About";
import Footer from "../components/Footer";
import FadeInSection from "../components/FadeInSection";

const Home: React.FC = () => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <FadeInSection>
          <Header />
        </FadeInSection>
        <FadeInSection>
          <Introduction />
        </FadeInSection>
        <FadeInSection>
          <Projects />
        </FadeInSection>
        <FadeInSection>
          <About />
        </FadeInSection>
        <FadeInSection>
          <Footer />
        </FadeInSection>
      </Container>
    </>
  );
};

export default Home;
