import './App.css';
import React,{useState} from "react"
import styled from 'styled-components';
import Components from './Components.js'
import titleImg from './Images/TitleImg.png'
const ImgContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    margin:25px 0px;
`
const HomeDiv = styled.div`
    padding: 25px;
`
const TitleDiv = styled.div`
    padding: 30px;
    font-family: fantasy;
    font-size: 36px;
`
const DescDiv = styled.div`
    padding: 0px 50px;
    margin: 50px 0px;
`
const ButtonDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 25px 0px;
    text-align: center;
`
const ImageDiv = styled.div`
        background-image: url(${titleImg});
        background-repeat: no-repeat;
        background-size: cover;
        height: 150px;
        width: 300px;
  `
function Home(props) {
  const {onClick} = props.props
  const {Button, Background} = Components

  return (
    <HomeDiv className="Home">
      <TitleDiv className='Title'>
        Women in STEM Workplace Simulator
      </TitleDiv>
      <ImgContainer>
        <ImageDiv>

        </ImageDiv>
      </ImgContainer>
     
      <DescDiv className='description'>
      An empowering and educational game that seeks to shed light on the gender inequality prevalent in the field of Science, Technology, Engineering, and Mathematics (STEM). In this thought-provoking simulation, players will step into the shoes of remarkable women scientists, engineers, and mathematicians throughout history, facing challenges, overcoming obstacles, and striving to make their mark in the male-dominated world of STEM.
      </DescDiv>
    <ButtonDiv>
        <Button className='Button' onClick={()=>{onClick()}}>Start Game</Button>
    </ButtonDiv>
     
    </HomeDiv>
  );
}

export default Home;