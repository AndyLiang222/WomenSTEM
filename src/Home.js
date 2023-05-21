import './App.css';
import {useState} from "react"

function Home(props) {
  const {onClick} = props.props

  return (
    <div className="Home">
      <div className='Title'>
        Women in STEM Workplace Simulator
      </div>
      <div className='description'>
        TempTempTempTempTempTempTempTempTempTempTemp
      </div>
      <div className='Button' onClick={()=>{onClick()}}>Insert Button Here</div>
    </div>
  );
}

export default Home;