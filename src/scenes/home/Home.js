import React, { Fragment } from "react";
import Header from "../../components/header/Header";
import Footer from '../../components/footer/Footer'
import styled from "styled-components";
import logoYellow from "../../assets/logo-yellow.png";

const Paragraph = styled.h1`
  font-family: "Advent Pro", sans-serif;
  font-weight: 20;
  font-size: 40px;
  text-align: center;
  color: #ffffff;
  padding: 0;
  margin: 0;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  height: calc(100% - 90px);
`;

const Emphasis = styled.em`
  font-family: "Hachi Maru Pop";
  font-style: normal;
`;

const Subtittle = styled.h1`
  font-family: "Passero One", cursive;
  color: #fbe40f;
  font-size: 30px;
  text-align: center;
  padding: 0;
  margin: 0;
`;

const Home = () => {
  return (
    <Fragment>
      <Header logo={logoYellow} />

      <Wrapper>
      
        <Paragraph>
          Welcome! <br></br> I'm <Emphasis>C</Emphasis>aro{" "}
          <Emphasis>S</Emphasis>uárez
        </Paragraph>
        <Subtittle>Front-End Developer</Subtittle>
      </Wrapper>
      <Footer />
    </Fragment>
  );
};

export default Home;
