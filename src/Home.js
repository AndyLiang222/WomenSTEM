import './App.css';
import React,{useState} from "react"
import styled from 'styled-components';
import Components from './Components.js'
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
    margin: 75px 0px;
`
const ButtonDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    text-align: center;
`
function Home(props) {
  const {onClick} = props.props
  const {Button, Background} = Components

  return (
    <HomeDiv className="Home">
      <TitleDiv className='Title'>
        Women in STEM Workplace Simulator
      </TitleDiv>
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